#!/bin/bash

CYAN='\033[0;36m'
RED='\033[0;31m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m'

cd ~/MathWiki/Notes

numNotes=$(ls | wc -l)
numDoubleLinks=$(sed 's/]],\ /]]\n/g' * | grep -Po "\[\[.*\]\]" | wc -l)
numMathLinks=$(sed 's/),\ /)\n/g' * | grep -Po "\[.*\]\(.*\)" | wc -l)
numLinks=$(($numDoubleLinks + $numMathLinks))

cd ..
cd ./Images

numImages=$(($(find -type d | wc -l) - 1))

echo -e "${CYAN}$numNotes notes, $numLinks links, $numImages images${NC}"

cd ..

while [ ! -z "$1" ]; do
    case "$1" in
        --update|-u)
            sed -i 's/[0-9][0-9]*\snotes/'"$numNotes"' notes/g' README.md
            sed -i 's/[0-9][0-9]*\slinks/'"$numLinks"' links/g' README.md
            sed -i 's/[0-9][0-9]*\simages/'"$numImages"' images/g' README.md
    esac
shift
done
