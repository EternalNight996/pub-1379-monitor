use serde::{Deserialize, Serialize};

/// This type is an expected response from a websocket connection.
#[derive(Serialize, Deserialize, Debug, Default, Clone)]
pub struct Commands {
    pub opcmd: String, 
    pub status: String,
    pub datas: String,
}