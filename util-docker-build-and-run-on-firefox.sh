#!/bin/bash

set -x

docker build -t local/selenium-node-firefox-test -f Dockerfile.firefox . \
    && docker run --rm local/selenium-node-firefox-test -- --tags @search --format json
