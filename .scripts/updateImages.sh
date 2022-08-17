#!/bin/bash

YELLOW='\033[0;33m'
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

cd $MATHWIKI_DIR/Images

echo ""
prompt="Update images containing [(string)/ALL]: "

read -p "$(echo -e ${PURPLE}$prompt${NC})" filter
while [ -z "$filter" ]; do
    read -p "$(echo -e ${PURPLE}$prompt${NC})" filter
done

if [[ "$filter" != "ALL" ]]; then
    readarray -t dirs < <(find . -type f -name *.tex -exec grep -lr "$filter" {} \; | cut -c 3- | sed 's/\/image.tex//g' | sort -n)
else
    readarray -t dirs < <(find . -type f -name *.tex | cut -c 3- | sed 's/\/image.tex//g' | sort -n)
fi

total=${#dirs[@]}
counter=1

for d in "${dirs[@]}"; do
    cd $d
    pdflatex -shell-escape image.tex > /dev/null 2>&1 && pdfcrop image.pdf image.pdf > /dev/null 2>&1 && pdf2svg image.pdf image.svg

    echo -e "    $d ($counter/$total)${NC}"
    counter=$((++counter))
    cd ..
done

if [[ -f *.log ]]; then
    rm *.log
fi
