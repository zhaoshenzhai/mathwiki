#!/bin/bash

cd $MATHWIKI_DIR/Notes

echo ""

allLinks=$(sed 's/\s>}}/ >}}\n/g' * | grep -Po "{{<\slink.*\s>}}" | sed 's/{{<\slink\sfile="//g' | sed 's/".*$//g' | sort | uniq)

while IFS= read -r link; do
    if [[ ! -f "$link.md" ]] && [[ ! -f "$link" ]]; then
        echo -e "    ${PURPLE}$link${NC}"
        appearsIn=$(grep --color -il "$(echo "$link" | sed 's/^/{{< link file="/g' | sed 's/$/"/g')" *)
        while IFS= read -r file; do
            echo "        $file"
        done <<< "$appearsIn"
    fi
done <<< "$allLinks"

$MATHWIKI_DIR/.scripts/updateImages.sh -g
