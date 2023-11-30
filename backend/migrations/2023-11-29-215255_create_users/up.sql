CREATE TABLE type_users (
  type_user_id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
);

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  type_user_id INTEGER NOT NULL,
  CONSTRAINT fk_type_user_id
    FOREIGN KEY(type_user_id)
    REFERENCES users(user_id)
)
