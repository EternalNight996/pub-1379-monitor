use diesel::PgConnection;
use diesel::r2d2::{ConnectionManager, Pool};
use lazy_static::lazy_static;
use std::env;

lazy_static! {
    pub static ref PG_POOL: Pool<ConnectionManager<PgConnection>> = init_pg();
}

fn init_pg() -> Pool<ConnectionManager<PgConnection>> {
    let database_url = env::var("PG_DATABASE_URL").expect("Couldn't parse PG_DATABASE_URL");
    let manager = ConnectionManager::<PgConnection>::new(&database_url);
    return r2d2::Pool::builder()
            .max_size(5).build(manager).expect("Couldn't create pg pool");
}
