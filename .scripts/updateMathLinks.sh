#!/bin/bash

CYAN='\033[0;36m'
NC='\033[0m'

cd ~/MathWiki/Notes

files=$(grep -l "%%auto_aliasing%%" *)

while IFS= read -r line; do
    current=$(grep -Po '\[(\w+\s)+\$\\[a-zA-Z^0-9]+\$[a-zA-Z(); ]*\]' "$line" | sed 's/^.*://g' | sed 's/\\/\\\\/g')
    currentFormatted=$(sed 's/\\R/\\\\R/g' <<< "$current" | sed 's/\ /\\s/g' | sed 's/\[/\\\[/g' | sed 's/\]/\\\]/g' | sed 's/(/\\(/g' | sed 's/)/\\)/g' | sed 's/\$/\\\$/g')

    new=$(grep -Po '\(([a-zA-Z0-9();]+%20)+[a-zA-Z0-9();]*(\.md)*\)' "$line" | sed 's/%20/\ /g' | sed 's/(/[/1' | sed 's/)$/]/g' | sed 's/.md//g')

    new=$(sed 's/\ R\ /\ \$\\\\R\$\ /g' <<< "$new")

    if [ ! "$new" == "$current" ]; then
        echo "... $line ..."
        echo "Current            : $current"
        echo "New                : $new"
        echo "Current (Formatted): $currentFormatted"

        read -u 1 -n 1 -p "$(echo -e ${CYAN}"Proceed? [Y/n] "${NC})" proceed
        if [ -z "$proceed" ] || [ "$proceed" == "Y" ]; then
            echo "Proceed"
            sed -Ei 's/'"$currentFormatted"'/'"$new"'/g' "$line"
        fi

        printf "\n"
    fi
done <<< "$files"
