#!/bin/bash

CYAN='\033[0;36m'
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
BGGREEN='\033[1;42m'
NC='\033[0m'

cd ~/MathWiki/Notes

readarray -d '' allFiles < <(grep --null -l "%%auto_aliasing%%" *)
allFiles=$(sed 's/^$//g' <<< "$allFiles")

for i in "${!allFiles[@]}"; do
    file=$(echo "${allFiles[$i]}" | sed 's/.md//g')
    echo -e "$i: ${CYAN}$file${NC}"

    alias=$(sed 's/\ R\ /\ \$\\R\$\ /g' <<< "$file")                        # Real numbers
    alias=$(sed 's/\ implies\ /\ \$\\Rightarrow\$\ /g' <<< "$alias")        # Implies
    alias=$(sed 's/\ iff\ /\ \$\\Leftrightarrow\$\ /g' <<< "$alias")        # Equivalent to

    echo "    Alias: $alias"

    printf "\n"

    obsidian=$(echo "$file" | sed 's/\ /%20/g')
    echo -e "    Math links:"
    readarray allMathLinks < <(grep --null -o "$obsidian" *)
    for m in "${!allMathLinks[@]}"; do
        echo "        $m: ${allMathLinks[$m]}    $obsidian"
    done

    printf "\n"

    #double=$(echo "\\[\\[$file\\]\\]")
    #echo -e "    Double links:"
    #readarray -t allDoubleLinks < <(grep --null -o "$double" *) 
    #for d in "${!allDoubleLinks[@]}"; do
    #    echo "        $d: ${allDoubleLinks[$d]}"
    #done

    #printf "\n"
done

allMathLinks=$(grep -Poh '\[[^\[^\]]*\]\(([^\$^\[^\]]+%20)+[^\$^\[^\]]*(\.md)*\)' * | sort | uniq)
allMathCurrent=$(echo "$allMathLinks" | sed 's/\[\([^]]*\)\].*/\1/g')

allMathNewObsidian=$(echo "$allMathLinks" | sed 's/\[\([^]]*\)\](\(.*$\)/\2/g' | sed 's/.$//g')
allMathNew=$(echo "$allMathNewObsidian" | sed 's/\(.*\).md/\1/' | sed 's/%20/\ /g')

allMathNew=$(sed 's/\ R\ /\ \$\\R\$\ /g' <<< "$allMathNew")                       # Real numbers
allMathNew=$(sed 's/\ implies\ /\ \$\\Rightarrow\$\ /g' <<< "$allMathNew")        # Implies
allMathNew=$(sed 's/\ iff\ /\ \$\\Leftrightarrow\$\ /g' <<< "$allMathNew")        # Equivalent to

allDoubleCurrent=$(sed 's/^/\[\[/g' <<< "$allFiles")
allDoubleCurrent=$(sed 's/$/\]\]/g' <<< "$allDoubleCurrent")
allDoubleCurrent=$(sed 's/.md//g' <<< "$allDoubleCurrent")

allDoubleNew=$(sed -E 's/\[\[/\[/g' <<< "$allDoubleCurrent")
allDoubleNew=$(sed -E 's/\]\]/\]/g' <<< "$allDoubleNew")
allDoubleNew=$(sed -E 's/$/\($1\)/g' <<< "$allDoubleNew")

#allCurrent=$allMathCurrent$'\n'$allDoubleCurrent

#while [ ! -z "$1" ]; do
#    case "$1" in
#        --state|-s)
#            echo -e "\n${CYAN}-----STATE-----${NC}\n"
#            echo -e "${CYAN}All files tagged with %%auto_aliasing%%:${NC}"
#            while IFS= read -r file; do
#                echo -e "    $file"
#            done <<< "$allFiles"
#            printf "\n"
#            echo -e "${CYAN}All math links to be aliased:${NC}"
#            while IFS= read -r link; do
#                echo -e "    $link"
#            done <<< "$allMathLinks"
#            printf "\n"
#            echo -e "${CYAN}All double links to be aliased:${NC}"
#            while IFS= read -r link; do
#                echo -e "    $link"
#            done <<< "$allDoubleCurrent"
#            printf "\n"
#            echo -e "${CYAN}All obsidian:${NC}"
#            while IFS= read -r link; do
#                echo -e "    $link"
#            done <<< "$allMathNewObsidian"
#            printf "\n"
#            echo -e "${CYAN}All current:${NC}"
#            while IFS= read -r link; do
#                echo -e "    $link"
#            done <<< "$allCurrent"
#            printf "\n"
#            echo -e "${CYAN}Changes:${NC}"
#            allMathNewTemp=$allMathNew
#            while IFS= read -r current; do
#                new=${allMathNewTemp%%$'\n'*}
#                if [ "$current" == "$new" ]; then
#                    echo "    (Unchanged) $current"
#                else
#                    echo -e "    ${RED}$current${NC} -> ${GREEN}$new${NC}"
#                fi
#                allMathNewTemp=${allMathNewTemp#*$'\n'}
#            done <<< "$allMathCurrent"
#            printf "\n"
#            allDoubleNewTemp=$allDoubleNew
#            while IFS= read -r current; do
#                new=${allDoubleNewTemp%%$'\n'*}
#                if [ "$current" == "$new" ]; then
#                    echo "    (Unchanged) $current"
#                else
#                    echo -e "    ${RED}$current${NC} -> ${GREEN}$new${NC}"
#                fi
#                allDoubleNewTemp=${allDoubleNewTemp#*$'\n'}
#            done <<< "$allDoubleCurrent"
#            printf "\n"
#            echo -e "${CYAN}-----STATE-----${NC}\n"
#            ;;
#    esac
#shift
#done
#
#while IFS="," read -r current; do
#    new=${allMathNew%%$'\n'*}
#
#    if [ ! "$new" == "$current" ]; then
#        echo -e "${CYAN}Changes:${NC}"
#        echo -e "    ${RED}$current${NC} -> ${GREEN}$new${NC}"
#
#        read -u 1 -n 1 -p "$(echo -e '\n'${CYAN}"Proceed? [Y/n] "${NC})" proceed
#        if [ -z "$proceed" ] || [ "$proceed" == "Y" ]; then
#            currentFormatted=$(sed 's/\\/\\\\/g' <<< "$current")                 # Escape \
#            currentFormatted=$(sed 's/\ /\\s/g' <<< "$currentFormatted")         # Escape <Space>
#            currentFormatted=$(sed 's/\[/\\\[/g' <<< "$currentFormatted")        # Escape [
#            currentFormatted=$(sed 's/\]/\\\]/g' <<< "$currentFormatted")        # Escape ]
#            currentFormatted=$(sed 's/(/\\(/g' <<< "$currentFormatted")          # Escape (
#            currentFormatted=$(sed 's/)/\\)/g' <<< "$currentFormatted")          # Escape )
#            currentFormatted=$(sed 's/{/\\{/g' <<< "$currentFormatted")          # Escape {
#            currentFormatted=$(sed 's/}/\\}/g' <<< "$currentFormatted")          # Escape }
#            currentFormatted=$(sed 's/\$/\\\$/g' <<< "$currentFormatted")        # Escape $
#            currentFormatted=$(sed 's/\^/\\\^/g' <<< "$currentFormatted")        # Escape ^
#            currentFormatted=$(sed 's/|/\\|/g' <<< "$currentFormatted")          # Escape |
#            currentFormatted=$(sed 's/+/\\+/g' <<< "$currentFormatted")          # Escape +
#            currentFormatted=$(sed 's/\./\\./g' <<< "$currentFormatted")         # Escape +
#
#
#            newObsidian=${allMathNewObsidian%%$'\n'*}
#            allMathCurrentFiles=$(grep -l "$newObsidian" *)
#            numCurrentFiles=$(echo "$allMathCurrentFiles" | wc -l)
#
#            echo -e "${RED}Current formatted: $currentFormatted${NC}"
#            echo -e "${RED}New Obsidian: $newObsidian${NC}"
#            echo -e "${RED}All current files: $allMathCurrentFiles${NC}"
#            echo -e "${RED}Num current files: $numCurrentFiles${NC}"
#            echo -e "${RED}New: $new${NC}"
#
#            while IFS= read -r file; do
#                #sed -Ei 's/'"$currentFormatted"'/'"$new"'/g' "$file"
#                echo ""
#            done <<< "$allMathCurrentFiles"
#            echo -e "${GREEN}$numCurrentFiles" file\(s\) updated:"${NC}"
#            while IFS= read -r file; do
#                echo "    $file"
#            done <<< "$allMathCurrentFiles"
#
#        fi
#
#        printf "\n"
#    fi
#
#    allMathNew=${allMathNew#*$'\n'}
#    allMathNewObsidian=${allMathNewObsidian#*$'\n'}
#done <<< "$allMathCurrent"
