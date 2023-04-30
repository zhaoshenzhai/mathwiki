#!/bin/bash

YELLOW='\033[0;33m'
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

cd $MATHWIKI_DIR/Notes

echo ""

allDoubleLinks=$(sed 's/]],\ /]]\n/g' * | grep -Po "\[\[.*\]\]" | sed 's/\[\[//g' | sed 's/\]\]//g' | sed 's/$/.md/g' | sort | uniq)
while IFS= read -r link; do
    if [[ ! -f "$link" ]]; then
        link=$(echo "$link" | sed 's/.md//g')
        echo -e "    ${PURPLE}$link${NC}"
        doubleLink=$(echo "$link" | sed 's/^/\\[\\[/g' | sed 's/$/\\]\\]/g')
        appearsIn=$(grep --color -il "$doubleLink" *)
        while IFS= read -r file; do
            file=$(echo "$file" | sed 's/.md//g')
            echo "        $file"
        done <<< "$appearsIn"
    fi
done <<< "$allDoubleLinks"

allLinkedImages=$(grep -P "MathWiki\/Images" * | sed 's/^.*Images\///g' | sed 's/\/image\.svg.*//g' | sort | uniq)
allActualImages=$(ls "$MATHWIKI_DIR/Images/" | sort | uniq)
ghostImages=$(echo -e "${allLinkedImages[@]} ${allActualImages[@]}" | tr ' ' '\n' | sort | uniq -u)

if [[ ! -z $ghostImages ]]; then
    echo -e "\n    ${RED}Unused Images${NC}"
    while IFS= read -r image; do
        echo -e "        $image"
    done <<< "$ghostImages"
    read -n 1 -ep "$(echo -e "\n    ${RED}Delete? [N/y]${NC}") " proceed
    if [[ ! "$proceed" == y ]]; then
        exit
    fi
    cd "$MATHWIKI_DIR/Images"
    while IFS= read -r image; do
        rm -r $image
    done <<< "$ghostImages"
    echo -e "    ${PURPLE}DONE${NC}"
fi
