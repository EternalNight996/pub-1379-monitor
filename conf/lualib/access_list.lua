local redis_req = require("resty.redis")
local upstream = require "ngx.upstream"

-- 黑名单缓存60秒
local cache_idle = 60
local deny_ips = ngx.shared.deny_ips
local allow_ips = ngx.shared.allow_ips

-- 主机池
local function get_pool(name)
	local us = upstream.get_primary_peers(name)
	local ips = {}
	for _, u in ipairs(us) do
		table.insert(ips, u.name)
	end
	local ramdom = math.random(1, #ips);
	return ips[ramdom]
end

-- 分割
local function split(szFullString, szSeparator)
	local nFindStartIndex = 1
	local nSplitIndex = 1
	local nSplitArray = {}
	while true do
	   local nFindLastIndex = string.find(szFullString, szSeparator, nFindStartIndex)
	   if not nFindLastIndex then
		nSplitArray[nSplitIndex] = string.sub(szFullString, nFindStartIndex, string.len(szFullString))
		break
	   end
	   nSplitArray[nSplitIndex] = string.sub(szFullString, nFindStartIndex, nFindLastIndex - 1)
	   nFindStartIndex = nFindLastIndex + string.len(szSeparator)
	   nSplitIndex = nSplitIndex + 1
	end
	return nSplitArray
end

-- 关闭redis连接
local function close_redis(red)
	if not red then
		return
	end
	-- 释放连接(连接池实现)
	local pool_max_idle_time = 10000 -- 毫秒
	local pool_size = 100  -- 连接池大小
	local ok, err = red:set_keepalive(pool_max_idle_time, pool_size)
	
	if not ok then
		ngx.log(ngx.ERR, "Couldn't set redis keepalive : ", err)
	end
end

-- 获取redis连接
local function get_connect()
	local R_ADDR=get_pool("redis_pool.com")
	R_ADDR = split(R_ADDR, ':')
	local red = redis_req:new()
	red:set_timeout(1000)
	local ok, err = red:connect(R_ADDR[1], tonumber(R_ADDR[2]))
	if not ok then
		ngx.log(ngx.ERR, "Couldn't connect to redis : ", err)
		close_redis(red)
		return
	end
	local res, err = red:auth(ngx.var.r_pwd)
    if not res then
        ngx.log(ngx.ERR, "Couldn't authenticate: ", err)
		close_redis(red)
        return
    end
	return red
end

-- 从redis获取ip黑名单和白名单列表
local function get_access_list()
	local red = get_connect()
	if not red then
        ngx.log(ngx.ERR, "Couldn't connect")
		close_redis(red)
        return
    end
	local deny, err = red:smembers("deny.ips")
	if not deny then
		ngx.log(ngx.ERR, "Couldn't get deny redis connect : ", err)
		close_redis(red)
		return
	end
	local allow, err = red:smembers("allow.ips")
	if not allow then
		ngx.log(ngx.ERR, "Couldn't get allow redis connect : ", err)
		close_redis(red)
		return
	end
	-- 得到的数据为空处理
	if deny == ngx.null then
		deny = nil
	end
	if allow == ngx.null then
		allow = nil
	end
	close_redis(red)
	local list =  {}
	list[0] = deny
	list[1] = allow
	return list
end

-- 刷新黑名单
local function reflush_access_list()
	local current_time = ngx.now()
	local last_update_time = allow_ips:get("last_update_time")
	if last_update_time == nil or last_update_time < (current_time - cache_idle) then
		local new_list = get_access_list();
		if not new_list[0] or not new_list[1] then
			return
		end
		deny_ips:flush_all()
		local red = get_connect()
		print("reflush_access connect")
		for _, deny_ip in ipairs(new_list[0]) do
			local expire = red:hget("deny.ttl",deny_ip)
			if not expire then
				expire = 0
			end
			expire = tonumber(expire)
			print("deny.ttl expire ", expire)
			deny_ips:set(deny_ip, true)
			deny_ips:set(deny_ip.."expire", expire)
		end
		for _, allow_ip in ipairs(new_list[1]) do
			local expire = red:hget("allow.ttl", allow_ip)
			if not expire then
				expire = 0
			end
			expire = tonumber(expire)
			print("allow.ttl expire ", expire)
			allow_ips:set(allow_ip, true)
			allow_ips:set(allow_ip.."expire", expire)
		end
		allow_ips:set("last_update_time", current_time);
	end
end

-- 获取ip
local function getIp()
    local myIP = ngx.req.get_headers()["X-Real-IP"]
    if myIP == nil then
        myIP = ngx.req.get_headers()["x_forwarded_for"]
    end
    if myIP == nil then
        myIP = ngx.var.remote_addr
    end
    return myIP;
end

reflush_access_list()
local ip = getIp()

-- 白名单排查
if allow_ips:get(ip) then
	local expire = allow_ips:get(ip.."expire")
	print("allow expire: ",expire, " ttl: ", expire - ngx.now())
	if expire - ngx.now() > 0 then
		ngx.log(ngx.INFO, "allow ip refused access : ", ip)
		return
	end
	allow_ips:delete(ip)
end

--  黑名单排查
if deny_ips:get(ip) then
	local expire = deny_ips:get(ip.."expire")
	print("deny expire: ",expire, " ttl: ", expire - ngx.now())
	if expire - ngx.now() > 0 then
		ngx.log(ngx.INFO, "deny ip refused access : ", ip)
		return ngx.exit(ngx.HTTP_deny)
	end
	deny_ips:delete(ip)
end
