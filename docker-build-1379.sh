#!/bin/bash
export WEB_CONFIG_PATH=./web-app
export REDIS_TEMP=./redis
export POSTGRES_TEMP=./postgres
export OPENRESTY_TEMP=./openresty

mkdir -p $WEB_CONFIG_PATH
if [ ! -d "$WEB_CONFIG_PATH" ]; then
    rm -rf $WEB_CONFIG_PATH
fi
if [ ! -d "$REDIS_TEMP" ]; then
    rm -rf $REDIS_TEMP
fi
if [ ! -d "$POSTGRES_TEMP" ]; then
    rm -rf $POSTGRES_TEMP
fi
if [ ! -d "$OPENRESTY_TEMP" ]; then
    rm -rf $OPENRESTY_TEMP
fi

/bin/echo -e "y" | sudo docker system prune
docker-compose build

mkdir -p $REDIS_TEMP/s1 $POSTGRES_TEMP $OPENRESTY_TEMP/lualib

cp ./conf/redis/redis.conf $REDIS_TEMP/redis.conf
cp ./conf/redis/sysctl.conf $REDIS_TEMP/sysctl.conf
cp ./conf/redis/save.redis.conf $REDIS_TEMP/s1/redis.conf
cp ./conf/redis/sysctl.conf $REDIS_TEMP/s1/sysctl.conf
cp ./conf/openresty.conf $OPENRESTY_TEMP/nginx.conf
cp ./server-1379/log4rs.yaml $WEB_CONFIG_PATH/log4rs.yaml
cp ./conf/init_pg_1379.sql $POSTGRES_TEMP/init.sql
cp -rf ./conf/lualib $OPENRESTY_TEMP/
cp -rf ./dist $WEB_CONFIG_PATH/
cp -rf ./conf/conf.d $OPENRESTY_TEMP/
