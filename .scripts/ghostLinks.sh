#!/bin/bash

cd $MATHWIKI_DIR/Notes

echo ""

allDoubleLinks=$(sed 's/]],\ /]]\n/g' * | grep -Po "\[\[.*\]\]" | sed 's/\[\[//g' | sed 's/\]\]//g' | sed 's/|.*$//g' | sort | uniq)
while IFS= read -r link; do
    if [[ ! -f "$link.md" ]] && [[ ! "$link" == Images\/* ]]; then
        check=1

        doubleLink=$(echo "$link" | sed 's/^/\[\[/g' | sed 's/$/\]\]/g')
        fileLink=$(echo "$link" | sed 's/#^.*//g')
        if [[ ! "$link" == "$fileLink" ]]; then
            id=$(echo "$doubleLink" | sed 's/\]\]//g' | sed 's/\[\[.*#^//g')
            if [[ -f "$fileLink.md" ]] && [[ $(grep "\^$id$" "$fileLink.md") ]]; then
                check=0
            fi
        fi

        if [[ $check == 1 ]]; then
            echo -e "    ${PURPLE}$doubleLink${NC}"
            appearsIn=$(grep --color -il "$(echo "$doubleLink" | sed 's/\[\[/\\[\\[/g' | sed 's/\]\]/\\]\\]/g')" *)
            while IFS= read -r file; do
                file=$(echo "$file" | sed 's/.md//g')
                echo "        $file"
            done <<< "$appearsIn"
        fi
    fi
done <<< "$allDoubleLinks"

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
