#!/bin/bash

echo ""

read -rp "$(echo -e "${PURPLE}Name: [string]${NC}") " name
while [ -z "$name" ]; do
    read -rp "$(echo -e "${PURPLE}Name: [string]${NC}") " name
done

if [[ ! $(echo "$name" | grep ".md") ]]; then
    name=$name.md
fi

if [[ -z $(find "$name" 2>/dev/null) ]]; then
    cd $MATHWIKI_DIR
    hugo new content "$name" 1> /dev/null
    cd "Notes"
    nvim "$name"
else
    cd $MATHWIKI_DIR/Notes
    nvim "$name"
fi
