#!/bin/bash

CYAN='\033[0;36m'
GREEN='\033[0;32m'
NC='\033[0m'

cd ~/MathWiki/Notes

allLinks=$(grep -Po '\[(\w+\s)+\$\\[a-zA-Z^0-9]+\$[a-zA-Z(); ]*\]\(([a-zA-Z0-9();]+%20)+[a-zA-Z0-9();]*(\.md)*\)' * | sed 's/^.*://g' | uniq)

allCurrent=$(echo "$allLinks" | sed 's/\[\([^]]*\)\].*/\1/g')
allNewObsidian=$(echo "$allLinks" | sed 's/\[\([^]]*\)\](\(.*$\)/\2/g' | sed 's/.$//g')
allNew=$(echo "$allNewObsidian" | sed 's/\(.*\).md/\1/' | sed 's/%20/\ /g' | sed 's/\ R\ /\ \$\\R\$\ /g')

while IFS="," read -r current; do
    new=${allNew%%$'\n'*}
    newObsidian=${allNewObsidian%%$'\n'*}

    if [ ! "$new" == "$current" ]; then
        echo "Current: $current"
        echo -e "New    : $new\n"

        read -u 1 -n 1 -p "$(echo -e ${CYAN}"Proceed? [Y/n] "${NC})" proceed
        if [ -z "$proceed" ] || [ "$proceed" == "Y" ]; then
            currentFormatted=$(sed 's/\\R/\\\\R/g' <<< "$current" | sed 's/\ /\\s/g' | sed 's/\[/\\\[/g' | sed 's/\]/\\\]/g' | sed 's/(/\\(/g' | sed 's/)/\\)/g' | sed 's/\$/\\\$/g')
            allFiles=$(grep -l "$newObsidian" *)
            numFiles=$(echo "$allFiles" | wc -l)
            new=$(echo "$new" | sed 's/\\/\\\\/g')

            while IFS= read -r file; do
                sed -Ei 's/'"$currentFormatted"'/'"$new"'/g' "$file"
            done <<< "$allFiles"
            echo -e "${GREEN}$numFiles" file\(s\) updated:"${NC}"
            while IFS= read -r file; do
                echo "    $file"
            done <<< "$allFiles"

        fi

        printf "\n"
    fi

    allNew=${allNew#*$'\n'}
    allNewObsidian=${allNewObsidian#*$'\n'}
done <<< "$allCurrent"
