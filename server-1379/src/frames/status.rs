pub enum Status {
    Success,
    InvalidUser,
    InvalidCommand,
    InvalidJson,
    InvalidIP,
    InvalidPort,
    InvalidSession,
}

impl ToString for Status {
    fn to_string(&self) -> String {
        match self {
            &Status::Success => {
                return "00000".to_owned()
            }
            &Status::InvalidUser => {
                return "00001".to_owned()
            }
            &Status::InvalidCommand => {
                return "00002".to_owned()
            }
            &Status::InvalidJson => {
                return "00003".to_owned()
            }
            &Status::InvalidIP => {
                return "00004".to_owned()
            }
            &Status::InvalidPort => {
                return "00005".to_owned()
            }
            &Status::InvalidSession => {
                return "00006".to_owned()
            }
        }
    }
}