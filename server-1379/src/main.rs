use actix_web::{App, HttpServer};
use actix_session::CookieSession;

use std::{env, sync::Once, net::SocketAddr};
use crate::{configs::logger};
use log;

static ONCE_INIT: Once = Once::new();

#[macro_use]
extern crate diesel;

mod datas;
mod frames;
mod handlers;
mod schema;
mod configs;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    ONCE_INIT.call_once(|| {
        log::info!("init server done!");
        logger::init_log();
        #[cfg(target_os="windows")]
        dotenv::dotenv().ok();
    });
    let server_host = env::var("WEB_SERVER_HOST").expect("Couldn't parse server host");
    let server_port = env::var("WEB_SERVER_PORT").expect("Couldn't parse server port");
    let server_addr = format!("{}:{}",server_host,server_port).parse::<SocketAddr>().unwrap();
    let workers = env::var("WEB_SERVER_WORKERS").expect("Couldn't parse server workers").parse::<usize>().unwrap();
    log::info!("listening on IPv4 address \"{}\", port {}", server_host, server_port);
    log::info!("max thread -> {} workers", workers);

    HttpServer::new(|| {
        App::new().wrap(configs::router::server_cors())
        .wrap(CookieSession::signed(&[0; 32]).secure(false).http_only(true).expires_in(3600 * 12))
        .service(handlers::files::assets)
    }).workers(workers).bind(server_addr)?.run().await
}