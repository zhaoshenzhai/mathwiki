#!/bin/bash

CYAN='\033[0;36m'
GREEN='\033[0;32m'
NC='\033[0m'

cd ~/MathWiki/Notes

allFiles=$(grep -l '%%auto_aliasing%%' *)

# For every note linking to any file in allFiles, convert said link to a math link:
while IFS="," read -r link; do
    link=${link%.md}
    link="[[$link]]"
    link=$(sed 's/\\/\\\\/g' <<< "$link")        # Excape \
    link=$(sed 's/\ /\\s/g' <<< "$link")         # Escape <Space>
    link=$(sed 's/\[/\\\[/g' <<< "$link")        # Escape [
    link=$(sed 's/\]/\\\]/g' <<< "$link")        # Escape ]
    link=$(sed 's/(/\\(/g' <<< "$link")          # Escape (
    link=$(sed 's/)/\\)/g' <<< "$link")          # Escape )
    link=$(sed 's/{/\\{/g' <<< "$link")          # Escape {
    link=$(sed 's/}/\\}/g' <<< "$link")          # Escape }
    link=$(sed 's/\$/\\\$/g' <<< "$link")        # Escape $
    link=$(sed 's/\^/\\\^/g' <<< "$link")        # Escape ^
    link=$(sed 's/|/\\|/g' <<< "$link")          # Escape |
    link=$(sed 's/+/\\+/g' <<< "$link")          # Escape +
    link=$(sed 's/\./\\./g' <<< "$link")         # Escape +

    allNonMathLink=$(grep -Po "$link" *)
    echo -e "${CYAN}$link:${NC}"

    left=$(sed 's/\\\[\\\[/\\\[/g' <<< "$link")
    left=$(sed 's/\\\]\\\]/\\\]/g' <<< "$left")

    left=$(sed 's/\\sR\\s/\\s\$\\R\$\\s/g' <<< "$left")                       # Real numbers
    left=$(sed 's/\\simplies\\s/\\s\$\\Rightarrow\$\\s/g' <<< "$left")        # Implies
    left=$(sed 's/\\siff\\s/\\s\$\\Leftrightarrow\$\\s/g' <<< "$left")        # Equivalent to

    right=$(sed 's/\\\[\\\[/\\\(/g' <<< "$link")
    right=$(sed 's/\\\]\\\]/\\\)/g' <<< "$right")
    right=$(sed 's/\\s/%20/g' <<< "$right")

    new=${left}${right}
    echo -e "${GREEN}$new${NC}"
    while IFS= read -r file; do
        echo "$file"
        #sed -Ei 's/'"$link"'/'"$new"'/g' "$file"
    done <<< "$allNonMathLink"
    printf "\n"
done <<< "$allFiles"

allLinks=$(grep -Poh '\[([^\$^\[^\]]+\s)+\$[^\$]+\$[^\$^\[^\]]*\]\(([^\$^\[^\]]+%20)+[^\$^\[^\]]*(\.md)*\)' * | uniq)
allCurrent=$(echo "$allLinks" | sed 's/\[\([^]]*\)\].*/\1/g')
allNewObsidian=$(echo "$allLinks" | sed 's/\[\([^]]*\)\](\(.*$\)/\2/g' | sed 's/.$//g')
allNew=$(echo "$allNewObsidian" | sed 's/\(.*\).md/\1/' | sed 's/%20/\ /g')

allNew=$(sed 's/\ R\ /\ \$\\R\$\ /g' <<< "$allNew")                       # Real numbers
allNew=$(sed 's/\ implies\ /\ \$\\Rightarrow\$\ /g' <<< "$allNew")        # Implies
allNew=$(sed 's/\ iff\ /\ \$\\Leftrightarrow\$\ /g' <<< "$allNew")        # Equivalent to

#echo -e "${CYAN}All files tagged with %%auto_aliasing%%:${NC}\n$allFiles\n"
#echo -e "${CYAN}All math links into ^:${NC}\n$allLinks\n"
#echo -e "${CYAN}All current:${NC}\n$allCurrent\n"
#echo -e "${CYAN}All new:${NC}\n$allNew\n"

while IFS="," read -r current; do
    new=${allNew%%$'\n'*}

    if [ ! "$new" == "$current" ]; then
        echo "Current: $current"
        echo "New    : $new"

        read -u 1 -n 1 -p "$(echo -e '\n'${CYAN}"Proceed? [Y/n] "${NC})" proceed
        if [ -z "$proceed" ] || [ "$proceed" == "Y" ]; then
            currentFormatted=$(sed 's/\\/\\\\/g' <<< "$current")                 # Excape \
            currentFormatted=$(sed 's/\ /\\s/g' <<< "$currentFormatted")         # Escape <Space>
            currentFormatted=$(sed 's/\[/\\\[/g' <<< "$currentFormatted")        # Escape [
            currentFormatted=$(sed 's/\]/\\\]/g' <<< "$currentFormatted")        # Escape ]
            currentFormatted=$(sed 's/(/\\(/g' <<< "$currentFormatted")          # Escape (
            currentFormatted=$(sed 's/)/\\)/g' <<< "$currentFormatted")          # Escape )
            currentFormatted=$(sed 's/{/\\{/g' <<< "$currentFormatted")          # Escape {
            currentFormatted=$(sed 's/}/\\}/g' <<< "$currentFormatted")          # Escape }
            currentFormatted=$(sed 's/\$/\\\$/g' <<< "$currentFormatted")        # Escape $
            currentFormatted=$(sed 's/\^/\\\^/g' <<< "$currentFormatted")        # Escape ^
            currentFormatted=$(sed 's/|/\\|/g' <<< "$currentFormatted")          # Escape |
            currentFormatted=$(sed 's/+/\\+/g' <<< "$currentFormatted")          # Escape +
            currentFormatted=$(sed 's/\./\\./g' <<< "$currentFormatted")         # Escape +

            newObsidian=${allNewObsidian%%$'\n'*}
            allCurrentFiles=$(grep -l "$newObsidian" *)
            numCurrentFiles=$(echo "$allCurrentFiles" | wc -l)
            new=$(sed 's/\\/\\\\/g' <<< "$new")

            while IFS= read -r file; do
                sed -Ei 's/'"$currentFormatted"'/'"$new"'/g' "$file"
            done <<< "$allCurrentFiles"
            echo -e "${GREEN}$numCurrentFiles" file\(s\) updated:"${NC}"
            while IFS= read -r file; do
                echo "    $file"
            done <<< "$allCurrentFiles"

        fi

        printf "\n"
    fi

    allNew=${allNew#*$'\n'}
    allNewObsidian=${allNewObsidian#*$'\n'}
done <<< "$allCurrent"
