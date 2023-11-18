#!/usr/bin/env bash

set -o errexit

cd ~/backend
CONTAINER_FIRST_STARTUP="$HOME/.CONTAINER_FIRST_STARTUP"
if [ ! -f $CONTAINER_FIRST_STARTUP ]; then
  touch $CONTAINER_FIRST_STARTUP

  cargo build
fi

 cargo run
