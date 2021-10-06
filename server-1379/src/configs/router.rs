use actix_cors::Cors;
// 指定可跨域的对象
pub(crate) fn server_cors() -> Cors {
    Cors::default()
        .allow_any_origin()
        .allow_any_method()
        .allow_any_header()
        // .allowed_origin("http://localhost:8020")
        //.send_wildcard()
        // .allowed_methods(vec!["GET", "POST", "DELETE", "OPTIONS", "PUT"])
        // .allowed_headers(vec!["Access-Control-Allow-Headers", "Cache-Control",
        //     "Authorization", "X-Requested-With", "If-Modified-Since", "Keep-Alive",
        //     "Content-Type", "Origin", "Client-id", "X-Mx-ReqToken", "DNT",
        //     "User-Agent", "Accept", "Referer",
        //     "Nonce", "signature", "Timestamp","AppKey",
        //     "X-Super-Properties", "Access-Control-Allow-Origin"])
        .max_age(3600 * 12)
}
