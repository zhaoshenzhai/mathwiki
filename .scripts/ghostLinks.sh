#!/bin/bash

cd $MATHWIKI_DIR/Notes

echo ""

allLinks=$(sed 's/\s>}}/ >}}\n/g' * | grep -Po "{{<\slink.*\s>}}" | sed 's/{{<\slink\sfile="//g' | sed 's/".*$//g' | sort | uniq)

while IFS= read -r link; do
    if [[ ! -f "$link.md" ]]; then
        echo -e "    ${PURPLE}$link${NC}"
        appearsIn=$(grep --color -il "$(echo "$link" | sed 's/^/{{< link file="/g' | sed 's/$/"/g')" *)
        while IFS= read -r file; do
            echo "        $file"
        done <<< "$appearsIn"
    fi
done <<< "$allLinks"

allLinkedImages=$(grep -P "Images/" * | sed 's/^.*Images\///g' | sed 's/\/image\.svg.*//g' | sort | uniq)
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
