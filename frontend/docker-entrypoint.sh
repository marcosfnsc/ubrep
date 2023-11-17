#!/usr/bin/env bash

set -o errexit

cd ~/frontend
CONTAINER_FIRST_STARTUP="$HOME/.CONTAINER_FIRST_STARTUP"
if [ ! -f $CONTAINER_FIRST_STARTUP ]; then
  touch $CONTAINER_FIRST_STARTUP

  ## install libs npm
  npm install
fi

npm run dev -- --port 3000 --host
