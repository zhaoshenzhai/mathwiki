#!/bin/bash

CYAN='\033[0;36m'
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m'

cd ~/MathWiki/Notes

Format()
{
    local r=$(echo "$1" | sed 's/\\/\\\\/g')                                # Escape \
    local r=$(echo "$r" | sed 's/\$/\\\$/g')                                # Escape $
    echo "$r"
}

read -n 1 -ep "$(echo -e ${CYAN}"Tag [d/p/t/a]: "${NC})" tag
while [ ! "$tag" == "d" ] && [ ! "$tag" == "p" ] && [ ! "$tag" == "t" ] && [ ! "$tag" == "a" ]; do
    read -n 1 -ep "$(echo -e ${CYAN}"Tag [d/p/t/a]: "${NC})" tag
done
case $tag in
    "d")
        tag="#Definition"
    ;;
    "p")
        tag="#Proposition"
    ;;
    "t")
        tag="#Theorem"
    ;;
    "a")
        tag="#Axiom"
    ;;
esac

read -ep "$(echo -e ${CYAN}"Select line containing [string]: "${NC})" identifier
while [ -z "$identifier" ];do
    read -ep "$(echo -e ${CYAN}"Select line containing [string]: "${NC})" identifier
done
allFileWithLines="$(grep -no "$identifier" * | sed 's/:'"$identifier"'//g')"
allLines=$(echo "$allFileWithLines" | sed 's/^.*://g')
allFiles=$(echo "$allFileWithLines" | sed 's/:.*$//g')

read -n 1 -ep "$(echo -e ${CYAN}"   Change to before/after? [N/b/a]: "${NC})" lineChange

read -n 1 -ep "$(echo -e ${CYAN}"Operation on line (append text/insert line after/delete) [a/i/d]: "${NC})" operation
while [ -z "$operation" ];do
    read -n 1 -ep "$(echo -e ${CYAN}"Operation on line (append text/insert line after/delete) [a/i/d]: "${NC})" operation
done
if [[ "$operation" == "a" ]]; then
    read -ep "$(echo -e ${CYAN}"    Enter text [string]: "${NC})" text
    while [ -z "$text" ];do
        read -ep "$(echo -e ${CYAN}"    Enter text [string]: "${NC})" text
    done
    text="\n$(Format "$text")"
fi

while IFS= read -r file; do
    if [[ ! -z $(grep "$tag" "$file") ]]; then
        line=${allLines%%$'\n'*}
        if [[ "$lineChange" == "b" ]]; then
            line=$(($line - 1))
        elif [[ "$lineChange" == "a" ]]; then
            line=$(($line + 1))
        fi

        if [[ "$operation" == "a" ]]; then
            sed -i 's/$/'"$text"'/g' "$file"
        elif [[ "$operation" == "i" ]]; then
            sed -i ''"$line"'s.$.'"\n"'.' "$file"
        elif [[ "$operation" == "d" ]]; then
            sed -i ''"$line"'d' "$file"
        fi

    fi
    allLines=${allLines#*$'\n'}
done <<< "$allFiles"
