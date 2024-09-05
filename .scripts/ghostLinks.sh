#!/bin/bash

cd $MATHWIKI_DIR/Notes
echo ""

allLinks=$(sed 's/\s>}}/ >}}\n/g' * | grep -Po "{{<\slink.*\s>}}" | sed 's/\\/\\\\/g' |
    sed 's/display=".[^"]*" //g' | sed 's/type=".[^"]*" //g' | sed 's/mod=".[^"]*" //g' |
    sort | uniq)

while IFS= read -r link; do
    file=$(echo "$link" | grep -Po '(?<=file=").*?(?=")')
    id=$(echo "$link" | grep -Po '(?<=id=").*?(?=")')

    if [[ ! -f "$file" ]]; then
        echo -e "    ${PURPLE}$file${NC}"
        appearsIn=$(grep --color -il "$(echo "$file" | sed 's/^/{{< link file="/g' | sed 's/$/"/g')" *)
        while IFS= read -r fileWithLink; do
            echo "        $fileWithLink"
        done <<< "$appearsIn"
    elif [[ -n "$id" ]]; then
        if [[ ! -n $(grep -o "id=\"$id\"" "$file") ]]; then
            echo -e "    ${PURPLE}$file${NC} (${BLUE}$id${NC})"
            appearsIn=$(grep --color -il "$(echo "$file" | sed 's/^/{{< link file="/g' | sed 's/$/"/g').*id=\"$id\"" *)
            while IFS= read -r fileWithLink; do
                echo "        $fileWithLink"
            done <<< "$appearsIn"
        fi
    fi
done <<< "$allLinks"

$MATHWIKI_DIR/.scripts/updateImages.sh -g
