#!/usr/bin/env bash

set -o errexit

cd ~/backend
CONTAINER_FIRST_STARTUP="$HOME/.CONTAINER_FIRST_STARTUP"
if [ ! -f $CONTAINER_FIRST_STARTUP ]; then
  touch $CONTAINER_FIRST_STARTUP

  if [ ! -f .env ]; then
    cat .env.example > .env
  fi

  cargo install diesel_cli --no-default-features --features postgres
  source .env
  diesel migration run --database-url $DATABASE_URL
  cargo build
fi

cargo run
