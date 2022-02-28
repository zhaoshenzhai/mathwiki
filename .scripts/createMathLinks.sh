#!/bin/bash

CYAN='\033[0;36m'
GREEN='\033[0;32m'
NC='\033[0m'

cd ~/MathWiki/Notes

allLinks=$(grep -l '%%auto_aliasing%%' * | sed 's/.md//g')

while IFS="," read -r link; do
    allFiles=$(grep -l "\[\[$link\]\]" *)

    current=$(sed -E 's/\[/\\\[/g' <<< "[[$link]]")
    current=$(sed -E 's/\]/\\\]/g' <<< "$current")
    current=$(sed -E 's/\ /\\s/g' <<< "$current")
    current=$(sed -E 's/\(/\\(/g' <<< "$current")
    current=$(sed -E 's/\)/\\)/g' <<< "$current")

    echo -e "${CYAN}$current${NC}"

    left="[temp]"
    
    left=$(sed 's/\ R\ /\ \$\\R\$\ /g' <<< "$left")                       # Real numbers
    left=$(sed 's/\ implies\ /\ \$\\Rightarrow\$\ /g' <<< "$left")        # Implies
    left=$(sed 's/\ iff\ /\ \$\\Leftrightarrow\$\ /g' <<< "$left")        # Equivalent to

    left=$(sed 's/\\/\\\\\\/g' <<< "$left")        # Escape \
    left=$(sed 's/\$/\\\$/g' <<< "$left")          # Escape $

    right="($link.md)"
    right=$(sed 's/\ /%20/g' <<< "$right")

    alias=$left$right
    echo -e "${GREEN}$alias${NC}"
    while IFS= read -r file; do
        echo "    $file"
        sed -Ei 's/'"$current"'/'"$alias"'/g' "$file"
    done <<< "$allFiles"
done <<< "$allLinks"
