#!/bin/bash

CYAN='\033[0;36m'
RED='\033[0;31m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m'

cd ~/MathWiki/Notes

numNotes=$(ls | wc -l)
numDoubleLinks=$(sed 's/]],\ /]]\n/g' * | grep -Po "\[\[.*\]\]" | wc -l)
numMathLinks=$(sed 's/]],\ /]]\n/g' * | grep -Po "\[.*\]\(.*\)" | wc -l)
numLinks=$(($numDoubleLinks + $numMathLinks))

cd ..
cd ./Images

numImages=$(($(find -type d | wc -l) - 1))

echo -e "${CYAN}$numNotes notes, $numLinks links, $numImages images${NC}"

cd ..

printf "\n"
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
    sed -i 's/[0-9][0-9]*\snotes/'"$numNotes"' notes/g' README.md
    sed -i 's/[0-9][0-9]*\slinks/'"$numLinks"' links/g' README.md
    sed -i 's/[0-9][0-9]*\simages/'"$numImages"' images/g' README.md

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
