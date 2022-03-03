#!/bin/bash

CYAN='\033[0;36m'
RED='\033[0;31m'
NC='\033[0m'

cd ~/MathWiki

git status
printf "\n"

read -n 1 -p "$(echo -e ${CYAN}"Show diff? [Y/n] "${NC})" choice
if [ -z "$choice" ] || [ "$choice" == "Y" ]; then
    printf "\n"
    git diff
fi

printf "\n"

read -n 1 -p "$(echo -e ${CYAN}"Commit? [Y/n] "${NC})" choice
if [ -z "$choice" ] || [ "$choice" == "Y" ]; then
    git add .

    printf "\n"
    git status
    printf "\n"

    read -ep "$(echo -e ${CYAN}"Remove files? [N/(string)] "${NC})" choice
    while [[ ! -z $choice ]]; do
        git restore --staged "$choice"

        printf "\n"
        git status
        printf "\n"

        read -ep "$(echo -e ${CYAN}"Remove files? [N/(string)] "${NC})" choice
    done

    printf "\n"
    read -ep "$(echo -e ${CYAN}"Message: "${NC})" msg
    printf "\n"

    git commit -m "$msg"
    printf "\n"
    git push
else
    echo -e ${RED}Abort${NC}
    exit
fi
