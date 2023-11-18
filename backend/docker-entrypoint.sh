#!/usr/bin/env bash

set -o errexit

cd ~/backend
CONTAINER_FIRST_STARTUP="$HOME/.CONTAINER_FIRST_STARTUP"
if [ ! -f $CONTAINER_FIRST_STARTUP ]; then
  touch $CONTAINER_FIRST_STARTUP

  cat .env.example > .env
  source .env

  cargo install diesel_cli --no-default-features --features postgres
  cargo build
fi

 cargo run
