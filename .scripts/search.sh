#!/bin/bash

CYAN='\033[0;36m'
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m'

Format()
{
    local r=$(echo "$1" | sed 's/\\/\\\\/g')                                # Escape \
    local r=$(echo "$r" | sed 's/\$/\\\$/g')                                # Escape $
    echo "$r"
}

cd ~/MathWiki/Notes

printf "\n"

queryPrompt="Query [string]:"
read -ep "$(echo -e ${CYAN}$queryPrompt${NC})" query
while [ -z "$query" ]; do
    read -p "$(echo -e ${CYAN}$queryPrompt${NC})" query
done

query=$(Format "$query")

sensitivePrompt="Case sensitive? [N/y]:"
read -ep "$(echo -e ${CYAN}$sensitivePrompt${NC})" sensitive
while [ -z "$sensitive" ]; do
    sensitive="n"
done

printf "\n"

if [[ "$sensitive" == "n" ]] || [[ "$sensitive" == "N" ]]; then
    grep --color -i ''"$query"'' *
fi

if [[ "$sensitive" == "y" ]] || [[ "$sensitive" == "Y" ]]; then
    grep --color "$query" *
fi
