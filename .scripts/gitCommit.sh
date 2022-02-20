#!/bin/bash

CYAN='\033[0;36m'
NC='\033[0m'

cd ~/MathWiki
git status

printf "\n"
read -p "$(echo -e ${CYAN}"Commit? [Y/n] "${NC})" choice
if [ -z "$choice" ] || [ "$choice" == "Y" ]; then
    git add .
    read -p "$(echo -e ${CYAN}"Message: "${NC})" msg
    git commit -m "$msg"

    printf "\n"
    git status
    printf "\n"

    read -p "$(echo -e ${CYAN}"Remove files? [Y/n]"${NC})" choice
    if [ -z $choice ]|| [ "$choice" == "Y" ]; then
        echo remove
    fi
else
    exit
fi
