#!/usr/bin/env bash

docker run -d \
    --restart=always \
    --name=ceair-frontend \
    -p 8087:80 \
    hysunhe/botfront:ceair
