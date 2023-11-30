// @generated automatically by Diesel CLI.

diesel::table! {
    books (book_id) {
        book_id -> Int4,
        title -> Varchar,
        author -> Varchar,
        publisher -> Varchar,
    }
}

diesel::table! {
    type_users (type_user_id) {
        type_user_id -> Int4,
        name -> Varchar,
    }
}

diesel::table! {
    users (user_id) {
        user_id -> Int4,
        name -> Varchar,
        type_user_id -> Int4,
    }
}

diesel::allow_tables_to_appear_in_same_query!(
    books,
    type_users,
    users,
);
