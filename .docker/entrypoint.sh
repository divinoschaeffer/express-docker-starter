#!/bin/sh

INIT_FILE="/app/node_modules/.initialized"

if [ ! -f "$INIT_FILE" ]; then
    echo "First execution : dependencies installation..."
    npm install
    touch "$INIT_FILE"
else
    echo "Dependencies already installed, normal launch..."
fi

exec "$@"
