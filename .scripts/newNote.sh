#!/bin/bash

echo ""

read -rp "$(echo -e "${PURPLE}Name: [string]${NC}") " name
while [ -z "$name" ]; do
    read -rp "$(echo -e "${PURPLE}Name: [string]${NC}") " name
done

file=$name
if [[ ! $(echo "$name" | grep ".md") ]]; then
    file=$name.md
fi

if [[ -z $(find "$file" 2>/dev/null) ]]; then
    cd $MATHWIKI_DIR
    hugo new content "$file" 1> /dev/null
    ./.scripts/publish.sh
fi
