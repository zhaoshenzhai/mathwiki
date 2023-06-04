#!/bin/bash

cd $MATHWIKI_DIR/Images

echo ""
prompt="Update images containing [(string)/ALL]: "

read -rp "$(echo -e ${PURPLE}$prompt${NC})" filter
while [ -z "$filter" ]; do
    read -rp "$(echo -e ${PURPLE}$prompt${NC})" filter
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
