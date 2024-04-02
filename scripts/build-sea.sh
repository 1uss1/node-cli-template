#!/bin/bash

set -euo pipefail

# variables

BUILD_PLATFORM=node
APP_FILE=./src/index.ts

SEA_JS_FILE=./sea/index.js
SEA_BLOB_FILE=./sea/index.blob
SEA_CONFIG_FILE=sea-config.json

SENTINEL_FUSE=NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2
MACHO_SEGMENT_NAME=NODE_SEA
EXECUTABLE_FILE=./bin/cli-tool

# select node version
[[ -s "$HOME/.nvm/nvm.sh" ]] && source "$HOME/.nvm/nvm.sh"
nvm use

# run esbuild to generate javascript bundle
./node_modules/.bin/esbuild $APP_FILE --bundle --platform=$BUILD_PLATFORM --outfile=$SEA_JS_FILE

# generate blob for sea (single executable application)
node --experimental-sea-config $SEA_CONFIG_FILE

# copy node executable
mkdir -p ./bin
cp $(command -v node) $EXECUTABLE_FILE

# remove signature from executable
codesign --remove-signature $EXECUTABLE_FILE

# inject blob into executable
npx postject $EXECUTABLE_FILE NODE_SEA_BLOB $SEA_BLOB_FILE \
    --sentinel-fuse $SENTINEL_FUSE \
    --macho-segment-name $MACHO_SEGMENT_NAME

# sign executable
codesign --sign - $EXECUTABLE_FILE