#!/bin/bash

YELLOW='\033[0;33m'
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

cd ~/MathWiki/Images

prompt="Update images containing [(string)/ALL]: "

read -p "$(echo -e ${CYAN}$prompt${NC})" filter
while [ -z "$filter" ]; do
    read -p "$(echo -e ${CYAN}$prompt${NC})" filter
done

if [[ "$filter" != "ALL" ]]; then
    readarray -t dirs < <(find . -type f -name *.tex -exec grep -lr "$filter" {} \; | cut -c 3- | sed 's/\/image.tex//g' | sort -n)
else
    readarray -t dirs < <(find . -type f -name *.tex | cut -c 3- | sed 's/\/image.tex//g' | sort -n)
fi

total=${#dirs[@]}

let i=1
for d in "${dirs[@]}"; do
    cd $d
    pdflatex -shell-escape image.tex > /dev/null 2>&1 && pdfcrop image.pdf image.pdf > /dev/null 2>&1 && pdf2svg image.pdf image.svg
    echo "$d ($i/$total)"
    ((i=i+1))
    cd ..
done

rm *.log
