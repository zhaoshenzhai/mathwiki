#!/bin/bash

cd ~/MathWiki/Images

prompt="Update images containing [(string)/ALL]: "

read -p "$prompt" filter
while [ -z "$filter" ]; do
    read -p "$prompt" filter
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
