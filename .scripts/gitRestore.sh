#!/bin/bash

YELLOW='\033[0;33m'
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

cd $MATHWIKI_DIR

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

echo ""

read -n 1 -ep "$(echo -e "${RED}Are you sure? [N/y]${NC}") " proceed
if [[ ! "$proceed" == y ]]; then
    exit
fi

# Restore notes
if [[ -z "$restoreIn" ]] || [[ "$restoreIn" == "b" ]]; then
    git restore Notes/*
fi

# Restore images
if [[ "$restoreIn" == "i" ]] || [[ "$restoreIn" == "b" ]]; then
    git restore Images/*
fi

echo -e "    ${PURPLE}DONE${NC}"
