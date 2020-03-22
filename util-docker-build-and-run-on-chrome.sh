#!/bin/bash

set -x

docker build -t local/selenium-node-chrome-test -f Dockerfile.chrome . \
    && docker run --rm local/selenium-node-chrome-test -- --tags @search --format json
