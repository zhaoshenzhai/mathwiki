#!/bin/bash

cd $MATHWIKI_DIR

while [ ! -z "$1" ]; do
    case "$1" in
        --update|-u)
            cd ./Images

            numImages=$(($(find -type d | wc -l) - 1))

            cd ..
            cd ./Notes

            numNotes=$(ls | wc -l)
            numLinks=$(sed 's/{{<\slink.*\s>}}/LINK\n/g' * | grep -Po "LINK" | wc -l)

            ratio=$(echo "scale=3; $numLinks/$numNotes" | bc)

            cd ..
        ;;
        --print|-p)
            echo -e "${CYAN}$numNotes notes, $numLinks links, $numImages images${NC}"
            echo -e "    ${CYAN}Ratio: $ratio${NC}"
        ;;
        --readme|-r)
            sed -i 's/[0-9][0-9]*\snotes/'"$numNotes"' notes/g' README.md
            sed -i 's/[0-9][0-9]*\slinks/'"$numLinks"' links/g' README.md
            sed -i 's/[0-9][0-9]*\simages/'"$numImages"' images/g' README.md

            sed -i 's/ratio:\s[0-9]\.[0-9]*/ratio: '"$ratio"'/g' README.md
        ;;
    esac
shift
done
