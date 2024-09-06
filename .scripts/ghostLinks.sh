#!/bin/bash

cd $MATHWIKI_DIR/Notes
echo ""

InSection() {
    appearsIn=$(grep --color -il "$(echo "$1" | sed 's/^/{{< link file="/g' | sed 's/$/"/g').*secID=\"$2\"" *)
    while IFS= read -r fileWithLink; do
        echo "        $fileWithLink"
    done <<< "$appearsIn"
}

allLinks=$(sed 's/\s>}}/ >}}\n/g' * | grep -Po "{{<\slink.*\s>}}" | sed 's/\\/\\\\/g' |
    sed 's/display=".[^"]*" //g' | sed 's/type=".[^"]*" //g' | sed 's/mod=".[^"]*" //g' |
    sort | uniq)

while IFS= read -r link; do
    file=$(echo "$link" | grep -Po '(?<=file=").*?(?=")')
    secID=$(echo "$link" | grep -Po '(?<=secID=").*?(?=")')
    secDisplay=$(echo "$link" | grep -Po '(?<=secDisplay=").*?(?=")')

    if [[ ! -f "$file" ]]; then
        echo -e "    ${PURPLE}$file${NC}"
        appearsIn=$(grep --color -il "$(echo "$file" | sed 's/^/{{< link file="/g' | sed 's/$/"/g')" *)
        while IFS= read -r fileWithLink; do
            echo "        $fileWithLink"
        done <<< "$appearsIn"
    elif [[ -n "$secID" ]]; then
        if [[ ! -n $(grep -o "id=\"$secID\"" "$file") ]]; then
            echo -e "    ${PURPLE}$file${NC} (${RED}$secID${NC})"
            InSection "$file" "$secID"
        elif [[ ! -n $secDisplay ]]; then
            echo -e "    ${PURPLE}$file${NC} (${YELLOW}$secID${NC})"
            InSection "$file" "$secID"
        fi
    fi
done <<< "$allLinks"

$MATHWIKI_DIR/.scripts/updateImages.sh -g
