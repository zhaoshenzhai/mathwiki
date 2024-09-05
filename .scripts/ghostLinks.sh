#!/bin/bash

cd $MATHWIKI_DIR/Notes
echo ""

allLinks=$(sed 's/\s>}}/ >}}\n/g' * | grep -Po "{{<\slink.*\s>}}" | sed 's/\\/\\\\/g' |
    sed 's/display=".[^"]*" //g' | sed 's/type=".[^"]*" //g' | sed 's/mod=".[^"]*" //g' |
    sort | uniq)

while IFS= read -r link; do
    file=$(echo "$link" | grep -Po '(?<=file=").*?(?=")')
    anchor=$(echo "$link" | grep -Po '(?<=anchor=").*?(?=")')

    if [[ ! -f "$file" ]]; then
        echo -e "    ${PURPLE}$file${NC}"
        appearsIn=$(grep --color -il "$(echo "$file" | sed 's/^/{{< link file="/g' | sed 's/$/"/g')" *)
        while IFS= read -r fileWithLink; do
            echo "        $fileWithLink"
        done <<< "$appearsIn"
    elif [[ -n "$anchor" ]]; then
        if [[ ! -n $(grep -o "id=\"$anchor\"" "$file") ]]; then
            echo -e "    ${PURPLE}$file | $anchor${NC}"
            appearsIn=$(grep --color -il "$(echo "$file" | sed 's/^/{{< link file="/g' | sed 's/$/"/g').*anchor=\"$anchor\"" *)
            while IFS= read -r fileWithLink; do
                echo "        $fileWithLink"
            done <<< "$appearsIn"
        fi
    fi
done <<< "$allLinks"

$MATHWIKI_DIR/.scripts/updateImages.sh -g
