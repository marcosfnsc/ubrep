use diesel::prelude::{Queryable, Selectable};
use rocket::serde::Serialize;

#[derive(Queryable, Selectable, Serialize)]
#[diesel(check_for_backend(diesel::pg::Pg))]
#[diesel(table_name = crate::schema::books)]
#[serde(crate = "rocket::serde")]
pub struct Book {
    pub book_id: i32,
    pub title: String,
    pub author: String,
    pub publisher: String,
}

#[derive(Queryable, Selectable, Serialize)]
#[diesel(check_for_backend(diesel::pg::Pg))]
#[diesel(table_name = crate::schema::users)]
#[serde(crate = "rocket::serde")]
pub struct User {
    pub user_id: i32,
    pub name: String,
    pub type_user_id: i32,
}

#[derive(Queryable, Selectable, Serialize)]
#[diesel(check_for_backend(diesel::pg::Pg))]
#[diesel(table_name = crate::schema::type_users)]
#[serde(crate = "rocket::serde")]
pub struct TypeUsers {
    pub type_user_id: i32,
    pub name: String,
}
