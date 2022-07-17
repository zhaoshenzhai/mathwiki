#!/bin/bash

YELLOW='\033[0;33m'
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

cd ~/Dropbox/MathWiki/Notes

Math()
{
    echo $(echo "$1" |
        sed -E 's/\bn-\b/\$n\$-/g'                                      | # n (prefix)
        sed -E 's/\bR\b/\$\\R\$/g'                                      | # Real numbers
        sed -E 's/\bN\b/\$\\N\$/g'                                      | # Natural numbers
        sed -E 's/\bR2\b/\$\\R\^2\$/g'                                  | # Real numbers squared
        sed -E 's/\bN2\b/\$\\N\^2\$/g'                                  | # Natural numbers squared
        sed -E 's/\bequals\b/\$=\$/g'                                   | # Equals
        sed -E 's/\bimplies\b/\$\\Rightarrow\$/g'                       | # Implies
        sed -E 's/\biff\b/\$\\Leftrightarrow\$/g'                       | # Equivalence
        sed -E 's/\bON\b/\$\\textrm\{ON\}\$/g'                          | # Class of ordinals
        sed -E 's/\bK\b/\$K\$/g'                                        | # K topology
        sed -E 's/\ slash\ /\$\\slash\$/g'                              | # Slash
        sed -E 's/\bCategory\sof\sSets\b/\$\\catset\$/gI'               | # Category of Sets
        sed -E 's/\bCategory\sof\sRelations\b/\$\\catrel\$/gI'          | # Category of Relations
        sed -E 's/\bCategory\sof\sVector\sSpaces\b/\$\\catvect[K]\$/gI' | # Category of Vector Spaces over K
        sed -E 's/\brepr\sunder\sbasis\b/\$\\Leftrightarrow\^\\textrm\{repr\.\}_\\textrm\{bases\}\$/gI')
                                                                          # represented by/represents under a choice of basis
}

Format()
{
    echo $(echo "$1" |
        sed 's/\\/\\\\/g'                                               | # Escape \
        sed 's/\ /\\s/g'                                                | # Escape <
        sed 's/\[/\\\[/g'                                               | # Escape [
        sed 's/\]/\\\]/g'                                               | # Escape ]
        sed 's/(/\\(/g'                                                 | # Escape (
        sed 's/)/\\)/g'                                                 | # Escape )
        sed 's/{/\\{/g'                                                 | # Escape {
        sed 's/}/\\}/g'                                                 | # Escape }
        sed 's/\$/\\\$/g'                                               | # Escape $
        sed 's/\^/\\\^/g'                                               | # Escape ^
        sed 's/|/\\|/g'                                                 | # Escape |
        sed 's/+/\\+/g'                                                 | # Escape +
        sed 's/\./\\./g'                                                ) # Escape .
}

Update()
{
    # Name inputs
    current="$1"
    new="$2"
    obsidian="$3"

    # Escape backslashes
    currentTemp=$(echo "$current" | sed -E 's/\\/\\\\/g')
    new=$(echo "$new" | sed -E 's/\\/\\\\/g')

    # Display diff and ask for confirmation
    echo -e "${RED}$currentTemp${NC} -> ${GREEN}$new${NC}"
    read -u 1 -n 1 -p "$(echo -e '\n'"    ${PURPLE}Proceed? [Y/n]${NC} ")" proceed
    if [ -z "$proceed" ] || [ "$proceed" == "Y" ]; then
        # Format current for regex stuff
        currentFormatted=$(Format "$current")

        # Loop through all backlinks
        backLinks=$(grep -l "$obsidian" *)
        echo -e "${PURPLE}        Updated:${NC}"
        while IFS= read -r backLink; do
            # Replace if link in backlink contains the different current(Formated)
            if [[ ! -z $(grep "$currentFormatted" "$backLink") ]]; then
                sed -Ei 's/'"$currentFormatted"'/'"$new"'/g' "$backLink"
                echo "            $backLink"
            fi
        done <<< "$backLinks"
    fi
    printf "\n"
}

while [ ! -z "$1" ]; do
    case "$1" in
        --update|-u)
            printf "\n"
            echo -e "${PURPLE}Updating math links...${NC}"

            # Greps all math links; they are of the form [...](...)
            allMathLinks=$(grep -Poh '\[((?!\]\(|\]\]).)*\]\(([^\$^\[^\]]+%20)+[^\$^\[^\]]*(\.md)*\)' * | sort | uniq)

            # Progress counter; not essential
            numberOfLinks=`echo "$allMathLinks" | wc -l`
            updateInterval=$(bc -l <<< 'scale=1; ('"$numberOfLinks"'/'100')+'0.5'' | sed 's/\..*//g')
            counter=0

            # Loops through all math links
            while IFS= read -r link; do
                # Get obsidian link, i.e. the one with %20; they are the ones in (...)
                obsidian=${link#*](}
                obsidian=${obsidian::-1}
                obsidianLength=$(echo ${#obsidian})

                # Get current link, i.e. the displayed MathJax; they are the ones in [...]
                current=${link::-$obsidianLength}
                current=${current:1}
                current=${current::-3}

                # Extract file name from obsidian
                file=$(echo "$obsidian" | sed 's/%20/\ /g')

                # Extract new from file in either cases
                if [[ -z $(grep "custom_alias: " "$file") ]]; then
                    new=$(Math "$(echo "$file" | sed 's/\(.*\).md/\1/')")
                else
                    new=$(grep "custom_alias: " "$file" | sed 's/^.*:\ //g')
                fi

                # Update if different
                if [ ! "$current" == "$new" ]; then
                    Update "$current" "$new" "$obsidian"
                fi

                # Progress counter; not essential
                if [[ ! -z "$updateInterval" ]]; then
                    counter=$(("$counter" + 1))
                    if [[ $(("$counter"%"$updateInterval")) = 0 ]]; then
                        percentage=$(bc -l <<< 'scale=2; '"$counter"'/'"$numberOfLinks"''*100 | sed 's/\.00$//g')
                        echo -ne "    ${YELLOW}$percentage%${NC}\r"
                    fi
                fi
            done <<< "$allMathLinks"
            echo -e "    ${PURPLE}DONE${NC}"
            printf "\n"
        ;;
        --new|-n)
            echo -e "${PURPLE}Generating math links...${NC}"
            allFiles=$(grep -l 'alias: auto_aliasing\|custom_alias:' *)
            allDoubleCurrent=$(sed 's/^/\[\[/g' <<< "$allFiles")
            allDoubleCurrent=$(sed 's/$/\]\]/g' <<< "$allDoubleCurrent")
            allDoubleCurrent=$(sed 's/.md//g' <<< "$allDoubleCurrent")

            numberOfDouble=`echo "$allDoubleCurrent" | wc -l`
            updateInterval=$(bc -l <<< 'scale=1; ('"$numberOfDouble"'/'100')+'0.5'' | sed 's/\..*//g')
            counter=0

            while IFS= read -r current; do
                currentFormatted=$(Format "$current")
                if [[ ! -z $(grep -P "$currentFormatted" *) ]]; then
                    currentTemp=$(echo "$current" | sed 's/\[\[//g' | sed 's/\]\]//g' | sed 's/$/.md/g')
                    currentFile=$(grep "custom_alias: " "$currentTemp")
                    if [[ ! -z $currentFile ]]; then
                        alias=$(echo "$currentFile" | sed 's/^.*:\ //g')
                        left=$(echo "["$alias"]" | sed 's/.md//g')
                    else
                        left="["$(Math "$currentTemp" | sed 's/.md//g')"]"
                    fi

                    right=${allDoubleCurrent%%$'\n'*}
                    right=$(echo "$right" | sed 's/\[\[/\(/g' | sed 's/\]\]/.md\)/g' | sed 's/\ /%20/g')

                    new=$left$right
                    new=$(echo "$new" | sed 's/\\/\\\\/g')
                    echo -e "${RED}$current${NC} -> ${GREEN}$new${NC}"
                    read -u 1 -n 1 -p "$(echo -e '\n'"    ${PURPLE}Proceed? [Y/n]${NC} ")" proceed
                    if [ -z "$proceed" ] || [ "$proceed" == "Y" ]; then
                        allDoubleCurrentFiles=$(grep -Pl "$currentFormatted" *)

                        while IFS= read -r file; do
                            #sed -Ei 's/'"$currentFormatted"'/'"$new"'/g' "$file"
                            echo "        $file"
                        done <<< "$allDoubleCurrentFiles"
                    fi
                    printf "\n"
                fi
                allDoubleCurrent=${allDoubleCurrent#*$'\n'}

                if [[ ! -z "$updateInterval" ]]; then
                    counter=$(("$counter" + 1))
                    if [[ $(("$counter"%"$updateInterval")) = 0 ]]; then
                        percentage=$(bc -l <<< 'scale=2; '"$counter"'/'"$numberOfDouble"''*100 | sed 's/\.00$//g')
                        echo -ne "    ${YELLOW}$percentage%${NC}\r"
                    fi
                fi
            done <<< "$allDoubleCurrent"
            echo -e "    ${PURPLE}DONE${NC}"
        ;;
    esac
shift
done
