# 用于测试练习的docker-compose web项目框架

***

#### `搭建并运行项目`
```bash
# 先把测试项目拉下来
git clone https://hub.fastgit.org/EternalNight996/pub-1379-monitor.git /root/1379-monitor
# 前往运行目录
cd /root/1379-monitor
# 给脚本赋予执行权限
chmod +x *.sh
# 构建镜像, 确保有足够权限运行 可root 或 sudo
./docker-build-1379.sh
# 运行项目
./docker-run-1379.sh
```
#### 打开浏览器访问项目 默认是80端口， http://localhost 或 http://127.0.0.1 如果你是云服务器，则开放80端口即可访问。

***
#### `web项目框架`
> 1379-moniotr 主体
>> docker-compose.yml -> 主要镜像管理
>>> redis -> 主缓存数据库
>>> redis-s1 -> 持久性缓存数据库
>>> postgres -> 数据存储
>>> web-server -> 主要的web项目， 由rust搭建的服务器。
>>> openresty -> 一个融合nginx和lua的平台，相当于nginx+lua。

>> docker-build-1379.sh -> 根据docker-compose.yml搭建环境并制作镜像
>> docker-remove-1379.sh -> 移除所有相关的容器和镜像,并清理docker缓存
>> docker-run-1379.sh -> 后台运行项目

>> dist -> 存储静态web网页，这是我提前打包好的。如果你想前后端分离，则替换web-server即可

>> conf -> 存放镜像制作的所有配置和脚本
>>> lualib/access_list.lua -> lua脚本用于控制访问的黑名单和白名单,适配redis-s1数据库
>>> init_pg_1379.sql -> 初始化postgresql数据库
>>> conf.d -> 静态白名单与黑名单,lua则是控制动态白名单和黑名单
>>> redis -> 配置里9527则是访问密码

##### `作者提示: 这是开源的公共项目，非正式项目。 是有我主体项目抽离出来的一个测试练习框架。 只提供一个框架，如果你想换自己项目上去，只需要根据脚本替换web-server即可。`