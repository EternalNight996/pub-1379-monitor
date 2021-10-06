FROM rust:latest
LABEL author="1379-Pudge"
LABEL maintainer="EternalNightYeah2@yeah.net"
LABEL version="1.0"
LABEL description="这是一个rust容器镜像"

ENV TZ=Asia/Shanghai
ENV WEB_CONFIG_BIN_PATH /home/bin
ENV PATH ${WEB_CONFIG_BIN_PATH}:${PATH}
ENV WEB_CONFIG_PATH /home/web-app

RUN echo "export PATH=$PATH" >> /etc/profile
RUN echo "export TZ=$TZ" >> /etc/profile
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN mkdir -p ${WEB_CONFIG_BIN_PATH} ${WEB_CONFIG_PATH}

ADD ./conf/debain.sources.list /etc/apt/sources.list
ADD ./conf/cargo.linux.config $HOME/.cargo/config
RUN apt-get update && apt-get install gcc openssl libssl-dev cmake clang-3.9 llvm libpq-dev -y
ADD ./server-1379 /usr/local/server-1379
RUN cd /usr/local/server-1379 && cargo clean && cargo build --release && mv target/release/server-1379 /home/bin/server-1379 && cargo clean
RUN apt-get clean && apt-get autoclean && apt-get autoremove -y
WORKDIR ${WEB_CONFIG_PATH}
VOLUME [ "${WEB_CONFIG_PATH}" ]
EXPOSE 80
CMD ["server-1379"]