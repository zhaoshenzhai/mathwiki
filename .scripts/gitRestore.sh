#!/bin/bash

YELLOW='\033[0;33m'
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

cd ~/Dropbox/MathWiki

echo ""

# Notes, images, or both
read -n 1 -ep "$(echo -e "${PURPLE}Restore: [N(otes)/i(mages)/b(oth)]${NC}") " restoreIn
if [[ "$restoreIn" == "q" ]]; then
    exit
fi
while [[ ! -z "$restoreIn" ]] && [[ ! "$restoreIn" == i ]] && [[ ! "$restoreIn" == b ]]; do
    read -n 1 -ep "$(echo -e "${PURPLE}Restore: [N(otes)/i(mages)/b(oth)]${NC}") " restoreIn
    if [[ "$restoreIn" == "q" ]]; then
        exit
    fi
done

# Restore notes
if [[ -z "$restoreIn" ]] || [[ "$restoreIn" == "b" ]]; then
    cd Notes
    allFiles=$(ls)
    numberOfFiles=$(echo "$allFiles" | wc -l)
    updateInterval=$(bc -l <<< 'scale=1; ('"$numberOfFiles"'/'100')+'0.5'' | sed 's/\..*//g')
    counter=1
    while IFS= read -r file; do
        if [[ ! -z $(git diff "$file") ]]; then
            modTime=$(date -r "$file" +"%y%m%d%H%M.%S")
            git restore "$file"
            touch -m -t "$modTime" "$file"
        fi

        if [[ ! -z "$updateInterval" ]]; then
            counter=$((++counter))
            if [[ $(("$counter"%"$updateInterval")) = 0 ]]; then
                percentage=$(bc -l <<< 'scale=2; '"$counter"'/'"$numberOfFiles"''*100 | sed 's/\.00$//g')
                echo -ne "    ${YELLOW}Restoring... $percentage% ("$counter"/"$numberOfFiles")${NC}\r"
            fi
        fi
    done <<< "$allFiles"
    echo -ne "\033[0K\r"
    cd ..
fi

# Restore images
if [[ "$restoreIn" == "i" ]] || [[ "$restoreIn" == "b" ]]; then
    git restore Images/*
fi

echo -e "    ${PURPLE}DONE${NC}"
