#!/bin/sh
SSH_USER=$SSH_USER
SSH_HOST=138.197.155.168
SSH_SRC=$TRAVIS_BUILD_DIR/public/
SSH_DST=/home/projects/george-webapp/public

if [ "$TRAVIS_PULL_REQUEST" = "false" -a "$TRAVIS_BRANCH" = "master" ]; then
  rsync -azP $SSH_SRC $SSH_USER@$SSH_HOST:$SSH_DST
fi
