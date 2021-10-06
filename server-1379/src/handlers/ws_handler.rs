use actix_web::{Error,HttpRequest, HttpResponse, Result, get, web};
use actix_web_actors::ws;
use actix::{Actor, StreamHandler};
use actix_session::Session;
use crate::{frames::{frame::{self, Commands}, id, status}};
use std::net::SocketAddr;
use log::debug;

/// Define HTTP actor
struct WsHandler {
}

impl Actor for WsHandler {
    type Context = ws::WebsocketContext<Self>;
}

/// Handler for ws::Message message
impl StreamHandler<Result<ws::Message, ws::ProtocolError>> for WsHandler {
    fn handle(
        &mut self,
        msg: Result<ws::Message, ws::ProtocolError>,
        ctx: &mut Self::Context,
    ) {
        match msg {
            Ok(ws::Message::Ping(_msg)) => {
            }
            Ok(ws::Message::Text(msg)) => {
                debug!("websock req: {:?}", msg);
                if let Err(e) = serde_json::from_str::<Commands>(&msg) {
                    debug!("{:?}", e)
                }
                if let Ok(cmds) = serde_json::from_str::<Commands>(&msg) {
                    debug!("cmds: {:?}", cmds);
                    match &cmds.opcmd as &str {
                        "ping" => {
                            let mut rets = frame::Commands::default();
                            rets.opcmd = cmds.opcmd;
                            rets.status = status::Status::Success.to_string();
                            if let Err(addr) = cmds.datas.parse::<SocketAddr>() {
                                rets.status = status::Status::InvalidIP.to_string();
                                rets.datas = format!("{}", addr.to_string())
                            }
                        }
                        "open" => {

                        }
                        "close" => {

                        }
                        _ => {}
                    }
                }
            }
            Ok(ws::Message::Binary(_bin)) => {
            }
            _ => (),
        }
    }
}


/// Define HTTP actor
struct WsHandlerErr {
}

impl Actor for WsHandlerErr {
    type Context = ws::WebsocketContext<Self>;
}

/// Handler for ws::Message message
impl StreamHandler<Result<ws::Message, ws::ProtocolError>> for WsHandlerErr {
    fn handle(
        &mut self,
        msg: Result<ws::Message, ws::ProtocolError>,
        _ctx: &mut Self::Context,
    ) {
        match msg {
            Ok(ws::Message::Ping(_msg)) => {
            }
            Ok(ws::Message::Text(_msg)) => {
                debug!("invalid msg: {:?}", _msg);
            }
            Ok(ws::Message::Binary(_bin)) => {
            }
            _ => (),
        }
    }
}

#[get("/ws/chat")]
pub async fn devices(session: Session, req: HttpRequest, stream: web::Payload) -> Result<HttpResponse, Error> {  
    if let Ok(ukey) = session.get::<String>(id::SESSION_USER_KEY) {
        if ukey.is_some() {
            let resp = ws::start(WsHandler {}, &req, stream);
            return resp
        }
    }
    let resp = ws::start(WsHandlerErr {}, &req, stream);
    resp
}