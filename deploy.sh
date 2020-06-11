#!/bin/sh
SSH_USER=$SSH_USER
SSH_HOST=199.188.200.108
SSH_PORT=21098
SSH_SRC=$TRAVIS_BUILD_DIR/public/
SSH_DST=./public_html

if [ "$TRAVIS_PULL_REQUEST" = "false" -a "$TRAVIS_BRANCH" = "master" ]; then
  rsync -azP -e "ssh -p ${SSH_PORT}" $SSH_SRC $SSH_USER@$SSH_HOST:$SSH_DST
fi
