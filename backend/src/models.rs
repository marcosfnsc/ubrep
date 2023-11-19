use diesel::prelude::{Queryable, Selectable};
use rocket::serde::Serialize;

#[derive(Queryable, Selectable, Serialize)]
#[diesel(check_for_backend(diesel::pg::Pg))]
#[diesel(table_name = crate::schema::books)]
#[serde(crate = "rocket::serde")]
pub struct Book {
    pub id: i32,
    pub title: String,
    pub author: String,
    pub publisher: String,
}
