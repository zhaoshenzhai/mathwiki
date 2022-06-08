#!/bin/bash

CYAN='\033[0;36m'
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m'

cd ~/MathWiki/

while [ ! -z "$1" ]; do
    case "$1" in
        --update|-u)
            cd ./Notes

            numNotes=$(ls | wc -l)
            numDoubleLinks=$(sed 's/]],\ /]]\n/g' * | grep -Po "\[\[.*\]\]" | wc -l)
            numMathLinks=$(sed 's/),\ /)\n/g' * | grep -Po "\[.*\]\(.*\)" | wc -l)
            numLinks=$(($numDoubleLinks + $numMathLinks))

            ratio=$(bc -l <<< 'scale=3; '"$numLinks"'/'"$numNotes"'')

            cd ..
            cd ./Images

            numImages=$(($(find -type d | wc -l) - 1))

            cd ..
        ;;
        --print|-p)
            echo -e "${CYAN}$numNotes notes, $numLinks links, $numImages images${NC}"
            echo -e "${CYAN}    Ratio: $ratio${NC}"
        ;;
        --ghost|-g)
            cd ./Notes

            allDoubleLinks=$(sed 's/]],\ /]]\n/g' * | grep -Po "\[\[.*\]\]" | sed 's/\[\[//g' | sed 's/\]\]//g' | sed 's/$/.md/g' | sort | uniq)
            while IFS= read -r link; do
                if [ ! -f "$link" ]; then
                    echo -e "${RED}    $link${NC}"
                fi
            done <<< "$allDoubleLinks"

            allMathLinks=$(grep -Poh '\[((?!\]\(|\]\]).)*\]\(([^\$^\[^\]]+%20)+[^\$^\[^\]]*(\.md)*\)' * | sort | uniq)
            while IFS= read -r link; do
                link=${link#*](}
                link=${link::-1}
                link=$(echo "$link" | sed 's/%20/\ /g')
                if [ ! -f "$link" ]; then
                    echo -e "${RED}    $link${NC}"
                fi
            done <<< "$allMathLinks"

            cd ..
        ;;
        --readme|-r)
            sed -i 's/[0-9][0-9]*\snotes/'"$numNotes"' notes/g' README.md
            sed -i 's/[0-9][0-9]*\slinks/'"$numLinks"' links/g' README.md
            sed -i 's/[0-9][0-9]*\simages/'"$numImages"' images/g' README.md
        ;;
    esac
shift
done
