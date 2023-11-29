// @generated automatically by Diesel CLI.

diesel::table! {
    books (book_id) {
        book_id -> Int4,
        title -> Varchar,
        author -> Varchar,
        publisher -> Varchar,
    }
}
