#!/bin/bash

CYAN='\033[0;36m'
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m'

cd ~/MathWiki/Notes

allDoubleLinks=$(sed 's/]],\ /]]\n/g' * | grep -Po "\[\[.*\]\]" | sed 's/\[\[//g' | sed 's/\]\]//g' | sed 's/$/.md/g' | sort | uniq)
while IFS= read -r link; do
    if [ ! -f "$link" ]; then
        echo -e "${RED}    $link${NC}"
    fi
done <<< "$allDoubleLinks"

allMathLinks=$(grep -Poh '\[((?!\]\(|\]\]).)*\]\(([^\$^\[^\]]+%20)+[^\$^\[^\]]*(\.md)*\)' * | sort | uniq)
while IFS= read -r link; do
    link=${link#*](}
    link=${link::-1}
    link=$(echo "$link" | sed 's/%20/\ /g')
    if [ ! -f "$link" ]; then
        echo -e "${RED}    $link${NC}"
    fi
done <<< "$allMathLinks"
