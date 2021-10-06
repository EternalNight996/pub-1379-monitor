use std::{env, path::{Path, PathBuf}};

use log::{self, LevelFilter};
use log4rs;
use lazy_static::lazy_static;

lazy_static! {
    static ref LOG_PATH:PathBuf = Path::new(&env::var("WEB_CONFIG_PATH").unwrap()).join("log4rs.yaml");
}

#[cfg(debug_assertions)]
pub fn init_log() {
    #[cfg(not(target_os="windows"))]
    let path = LOG_PATH.clone();
    #[cfg(target_os="windows")]
    let path = Path::new(".").join("log4rs.yaml");

    match log4rs::init_file(path.clone(), Default::default()) {
        Ok(_) => log::info!("log -> {:?} debug ok!", path),
        Err(error) => {
            log::error!("log4rs: {}", error)
        }
    }
    // log::set_max_level(LevelFilter::Info);
    log::set_max_level(LevelFilter::Debug);
}
#[cfg(not(debug_assertions))]
pub fn init_log() {
    #[cfg(not(target_os="windows"))]
    let path = LOG_PATH.clone();
    #[cfg(target_os="windows")]
    let path = Path::new(".").join("log4rs.yaml");
    
    match log4rs::init_file(path.clone(), Default::default()) {
        Ok(_) => log::info!("log -> {:?} ok!",path),
        Err(error) => {
            log::error!("log4rs: {}", error)
        }
    }
    // log::set_max_level(LevelFilter::Warn);
    log::set_max_level(LevelFilter::Info);
}
