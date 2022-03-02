#!/bin/bash

CYAN='\033[0;36m'
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m'

Math()
{
    local r=$(echo "$1" | sed -E 's/\bR\b/\$\\R\$/g')                       # Real numbers
    local r=$(echo "$r" | sed -E 's/\bN\b/\$\\N\$/g')                       # Natural numbers
    local r=$(echo "$r" | sed -E 's/\bR2\b/\$\\R\^2\$/g')                   # Real numbers squared
    local r=$(echo "$r" | sed -E 's/\bN2\b/\$\\N\^2\$/g')                   # Natural numbers squared
    local r=$(echo "$r" | sed -E 's/\bimplies\b/\$\\Rightarrow\$/g')        # Implies
    local r=$(echo "$r" | sed -E 's/\biff\b/\$\\Leftrightarrow\$/g')        # Equivalence
    local r=$(echo "$r" | sed -E 's/\bON\b/\$\\textrm\{ON\}\$/g')           # Class of ordinals
    local r=$(echo "$r" | sed -E 's/\bK\b/\$K\$/g')                         # K topology
    echo "$r"
}

Format()
{
    local r=$(echo "$1" | sed 's/\\/\\\\/g')                                # Escape \
    local r=$(echo "$r" | sed 's/\ /\\s/g')                                 # Escape <Space>
    local r=$(echo "$r" | sed 's/\[/\\\[/g')                                # Escape [
    local r=$(echo "$r" | sed 's/\]/\\\]/g')                                # Escape ]
    local r=$(echo "$r" | sed 's/(/\\(/g')                                  # Escape (
    local r=$(echo "$r" | sed 's/)/\\)/g')                                  # Escape )
    local r=$(echo "$r" | sed 's/{/\\{/g')                                  # Escape {
    local r=$(echo "$r" | sed 's/}/\\}/g')                                  # Escape }
    local r=$(echo "$r" | sed 's/\$/\\\$/g')                                # Escape $
    local r=$(echo "$r" | sed 's/\^/\\\^/g')                                # Escape ^
    local r=$(echo "$r" | sed 's/|/\\|/g')                                  # Escape |
    local r=$(echo "$r" | sed 's/+/\\+/g')                                  # Escape +
    local r=$(echo "$r" | sed 's/\./\\./g')                                 # Escape .
    echo "$r"
}

cd ~/MathWiki/Notes

allFiles=$(grep -l 'auto_aliasing' *)

allMathLinks=$(grep -Poh '\[[^\[^\]]*\]\(([^\$^\[^\]]+%20)+[^\$^\[^\]]*(\.md)*\)' * | sort | uniq)
allMathCurrent=$(echo "$allMathLinks" | sed 's/\[\([^]]*\)\].*/\1/g')
allMathNewObsidian=$(echo "$allMathLinks" | sed 's/\[\([^]]*\)\](\(.*$\)/\2/g' | sed 's/.$//g')
allMathNew=$(echo "$allMathNewObsidian" | sed 's/\(.*\).md/\1/' | sed 's/%20/\ /g')
allMathNew=$(Math "$allMathNew")

allDoubleCurrent=$(sed 's/^/\[\[/g' <<< "$allFiles")
allDoubleCurrent=$(sed 's/$/\]\]/g' <<< "$allDoubleCurrent")
allDoubleCurrent=$(sed 's/.md//g' <<< "$allDoubleCurrent")
allDoubleLeft=$(Math "$allDoubleCurrent" | sed 's/\[\[/\[/g' | sed 's/\]\]/\]/g')

while [ ! -z "$1" ]; do
    case "$1" in
        --state|-s)
            echo -e "\n${CYAN}-----STATE-----${NC}\n"

            echo -e "${CYAN}All files tagged with %%auto_aliasing%%:${NC}"
            while IFS= read -r file; do
                echo -e "    $file"
            done <<< "$allFiles"
            printf "\n"

            echo -e "${CYAN}All math links:${NC}"
            while IFS= read -r link; do
                echo -e "    $link"
            done <<< "$allMathLinks"
            printf "\n"

            echo -e "${CYAN}All double links:${NC}"
            while IFS= read -r link; do
                echo -e "    $link"
            done <<< "$allDoubleCurrent"
            printf "\n"

            echo -e "${CYAN}-----STATE-----${NC}\n"
           ;;
    esac
    case "$1" in
        --changes|-c)
            echo -e "\n${CYAN}-----CHANGES-----${NC}\n"

            allMathNewTemp=$allMathNew
            while IFS= read -r current; do
                new=${allMathNewTemp%%$'\n'*}
                if [ "$current" == "$new" ]; then
                    echo "    (Unchanged) $current"
                else
                    current=$(echo "$current" | sed -E 's/\\/\\\\/g')
                    new=$(echo "$new" | sed -E 's/\\/\\\\/g')
                    echo -e "    ${RED}$current${NC} -> ${GREEN}$new${NC}"
                fi
                allMathNewTemp=${allMathNewTemp#*$'\n'}
            done <<< "$allMathCurrent"
            printf "\n"

            echo -e "${CYAN}-----CHANGES-----${NC}\n"
           ;;
    esac
shift
done

if [ ! "$allMathCurrent" == "$allMathNew" ]; then
    while IFS= read -r current; do
        new=${allMathNew%%$'\n'*}
        if [ ! "$current" == "$new" ]; then
            currentTemp=$(echo "$current" | sed -E 's/\\/\\\\/g')
            new=$(echo "$new" | sed -E 's/\\/\\\\/g')
            echo -e "${RED}$currentTemp${NC} -> ${GREEN}$new${NC}"
            read -u 1 -n 1 -p "$(echo -e '\n'${CYAN}"    Proceed? [Y/n] "${NC})" proceed
            if [ -z "$proceed" ] || [ "$proceed" == "Y" ]; then
                currentFormatted=$(Format "$current")
                newObsidian=${allMathNewObsidian%%$'\n'*}
                allMathCurrentFiles=$(grep -l "$newObsidian" *)

                while IFS= read -r file; do
                    sed -Ei 's/'"$currentFormatted"'/'"$new"'/g' "$file"
                    echo "        $file"
                done <<< "$allMathCurrentFiles"
                printf "\n"
            fi
        fi
        allMathNew=${allMathNew#*$'\n'}
        allMathNewObsidian=${allMathNewObsidian#*$'\n'}
    done <<< "$allMathCurrent"
    printf "\n"
fi

while IFS= read -r current; do
    currentFormatted=$(Format "$current")

    left=${allDoubleLeft%%$'\n'*}
    right=${allDoubleCurrent%%$'\n'*}
    right=$(echo "$right" | sed 's/\[\[/\(/g' | sed 's/\]\]/.md\)/g' | sed 's/\ /%20/g')

    new=$left$right
    new=$(echo "$new" | sed 's/\\/\\\\/g')
    if [[ ! -z $(grep -P "$currentFormatted" *) ]]; then
        echo -e "${RED}$current${NC} -> ${GREEN}$new${NC}"
        read -u 1 -n 1 -p "$(echo -e '\n'${CYAN}"    Proceed? [Y/n] "${NC})" proceed
        if [ -z "$proceed" ] || [ "$proceed" == "Y" ]; then
            allDoubleCurrentFiles=$(grep -Pl "$currentFormatted" *)

            while IFS= read -r file; do
                sed -Ei 's/'"$currentFormatted"'/'"$new"'/g' "$file"
                echo "        $file"
            done <<< "$allDoubleCurrentFiles"
            printf "\n"
        fi

    fi
    allDoubleCurrent=${allDoubleCurrent#*$'\n'}
    allDoubleLeft=${allDoubleLeft#*$'\n'}
done <<< "$allDoubleCurrent"
