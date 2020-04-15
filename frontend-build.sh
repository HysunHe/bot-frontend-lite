#!/usr/bin/env bash

npm run build 

TAG=`date '+%Y-%m-%d-%H-%M-%S'`

docker build . -t hysunhe/botfront:${TAG}
docker tag hysunhe/botfront:${TAG}   hysunhe/botfront:ceair
