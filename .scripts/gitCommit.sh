#!/bin/bash

CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m'

cd ~/MathWiki
gitOutput=`git status`
echo $gitOutput

read -p "$(echo -e ${CYAN}"Commit? [Y/n] "${NC})" choice
if [ -z "$choice" ] || [ "$choice" == "Y" ]; then
    git add .

    printf "\n"
    git status
    printf "\n"

    read -p "$(echo -e ${CYAN}"Remove files? [N/(string)]"${NC})" choice
    if [ ! -z $choice ]; then
        echo remove
    fi

    read -p "$(echo -e ${CYAN}"Message: "${NC})" msg
else
    echo -e ${RED}Abort${NC}
    exit
fi
