#!/bin/bash

YELLOW='\033[0;33m'
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

cd ~/MathWiki/Notes

Format()
{
    local r=$(echo "$1" | sed 's/\\/\\\\/g')                                # Escape \
    local r=$(echo "$r" | sed 's/\$/\\\$/g')                                # Escape $
    echo "$r"
}

printf "\n"

queryPrompt="Query [string]: "
read -ep "$(echo -e ${PURPLE}$queryPrompt${NC})" query
while [ -z "$query" ]; do
    read -p "$(echo -e ${PURPLE}$queryPrompt${NC})" query
done

query=$(Format "$query")

sensitivePrompt="Case sensitive? [N/y]: "
read -ep "$(echo -e ${PURPLE}$sensitivePrompt${NC})" sensitive
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
