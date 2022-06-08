#!/bin/bash

CYAN='\033[0;36m'
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m'

cd ~/MathWiki/Notes

printf "\n"

allDoubleLinks=$(sed 's/]],\ /]]\n/g' * | grep -Po "\[\[.*\]\]" | sed 's/\[\[//g' | sed 's/\]\]//g' | sed 's/$/.md/g' | sort | uniq)
while IFS= read -r link; do
    if [ ! -f "$link" ]; then
        link=$(echo "$link" | sed 's/.md//g')
        echo -e "${YELLOW}    $link${NC}"
        appearsIn=$(grep --color -il "$link" *)
        while IFS= read -r file; do
            file=$(echo "$file" | sed 's/.md//g')
            echo "        $file"
        done <<< "$appearsIn"
    fi
done <<< "$allDoubleLinks"

allMathLinks=$(grep -Poh '\[((?!\]\(|\]\]).)*\]\(([^\$^\[^\]]+%20)+[^\$^\[^\]]*(\.md)*\)' * | sort | uniq)
while IFS= read -r link; do
    link=${link#*](}
    link=${link::-1}
    linkFind=$(echo "$link" | sed 's/%20/\ /g')
    if [ ! -f "$linkFind" ]; then
        linkFind=$(echo "$linkFind" | sed 's/.md//g')
        echo -e "${YELLOW}    $linkFind${NC}"
        linkFormatted=$(echo "$link" | sed 's/\(.*\).md/\1/')
        appearsIn=$(grep --color -il "$linkFormatted" *)
        while IFS= read -r file; do
            file=$(echo "$file" | sed 's/.md//g')
            echo "        $file"
        done <<< "$appearsIn"
    fi
done <<< "$allMathLinks"
