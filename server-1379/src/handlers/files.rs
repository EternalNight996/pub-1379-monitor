use actix_files::NamedFile;
use actix_web::{HttpRequest, Result, get};
use std::path::{Path, PathBuf};

#[get("/{filename:.*}")]
pub async fn assets(req: HttpRequest) -> Result<NamedFile> {
    let mut path: PathBuf = req.match_info().query("filename").parse().unwrap();
    if path == Path::new("") {
        path = Path::new("index.html").to_path_buf()
    }
    let home_path = std::env::var("PUB_ASSETS").expect("Couldn't parse PUB_ASSETS");
    let assets_path = Path::new(&home_path).join(path);
    Ok(NamedFile::open(assets_path)?)
}
