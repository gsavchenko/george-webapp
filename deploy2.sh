#!/bin/sh
FTP_USER=$1
FTP_PASS=$2
FTP_HOST=$3
FTP_DIR=$4

#the next few lines creates a temp file and locks it down so only one instance of this script runs at a time, then mirrors the remote directory (one-way) to the local computer.
trap "rm -f /tmp/synctorrent.lock" SIGINT SIGTERM
if [ -e /tmp/synctorrent.lock ]
then
  echo "Synctorrent is running already."
  exit 1
else
  touch /tmp/synctorrent.lock
  lftp -u $FTP_USER,$FTP_PASS $FTP_HOST << EOF
  set ftp:ssl-allow no
  set mirror:use-pget-n 5
  mirror -c -P5 --log=synctorrents.log $FTP_DIR .
  quit
EOF
  rm -f /tmp/synctorrent.lock
  trap - SIGINT SIGTERM
  exit 0
fi