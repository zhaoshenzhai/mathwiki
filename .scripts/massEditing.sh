#!/bin/bash

YELLOW='\033[0;33m'
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

cd ~/Dropbox/MathWiki

Format()
{
    echo $(echo "$1"      |
        sed 's/\\/\\\\/g' |  # Escape \
        sed 's/\$/\\\$/g' )  # Escape $
}

echo ""

# Notes, images, or both
read -n 1 -ep "$(echo -e "${PURPLE}Edit in: [N(otes)/i(mages)/b(oth)]${NC}") " editIn
if [[ "$editIn" == "q" ]]; then
    exit
fi
while [[ ! -z "$editIn" ]] && [[ ! "$editIn" == i ]] && [[ ! "$editIn" == b ]]; do
    read -n 1 -ep "$(echo -e "${PURPLE}Edit in: [N(otes)/i(mages)/b(oth)]${NC}") " editIn
    if [[ "$editIn" == "q" ]]; then
        exit
    fi
done
case "$editIn" in
    "i")
        editIn="Images/*/*.tex"
    ;;
    "b")
        editIn="Notes/*.md Images/*/*.tex"
    ;;
    *)
        editIn="Notes/*.md"
    ;;
esac

# Tag
if [[ "$editIn" == "Notes/*.md" ]]; then
    read -n 1 -ep "$(echo -e "${PURPLE}Filter in tags: [A/d/p/t/a]${NC} ")" tag
    if [[ "$tag" == q ]]; then
        exit
    fi

    while [ ! -z "$tag" ] && [ ! "$tag" == "A" ] && [ ! "$tag" == "d" ] && [ ! "$tag" == "p" ] && [ ! "$tag" == "t" ] && [ ! "$tag" == "a" ]; do
        read -n 1 -ep "$(echo -e "${PURPLE}Filter in tags: [A/d/p/t/a]${NC} ")" tag
        if [[ "$tag" == q ]]; then
            exit
        fi
    done

    case $tag in
        "d")
            tag="#Definition"
        ;;
        "p")
            tag="#Proposition"
        ;;
        "t")
            tag="#Theorem"
        ;;
        "a")
            tag="#Axiom"
        ;;
    esac
fi

# Identifier
echo ""
read -ep "$(echo -e "${PURPLE}Select line containing [string]: "${NC})" identifier
while [ -z "$identifier" ];do
    read -ep "$(echo -e "${PURPLE}Select line containing [string]: "${NC})" identifier
done
identifier=$(Format "$identifier")

# Change to before/after
read -n 1 -ep "$(echo -e "    ${PURPLE}Change to before/after? [N/b/a]: "${NC})" lineChange
if [[ "$lineChange" == q ]]; then
    exit
fi
while [ ! -z "$lineChange" ] && [ ! "$lineChange" == "N" ] && [ ! "$lineChange" == "b" ] && [ ! "$lineChange" == "a" ]; do
    read -n 1 -ep "$(echo -e "    ${PURPLE}Change to before/after? [N/b/a]: "${NC})" lineChange
    if [[ "$lineChange" == q ]]; then
        exit
    fi
done
case "$lineChange" in
    "b")
        lineChange=-1
    ;;
    "a")
        lineChange=1
    ;;
    *)
        lineChange=0
    ;;
esac

# Get all files with identifier and their lines
allFileWithLines=$(grep -no "$identifier" $editIn | sed 's/:'"$identifier"'//g')
allFiles=$(echo "$allFileWithLines" | sed 's/:.*$//g')

allLines=$(echo "$allFileWithLines" | sed 's/^.*://g')
allLinesInsert="$allLines"
allLinesDelete="$allLines"

allCounts=$(grep -c "$identifier" $editIn | sed 's/^.*://g' | sed '/^0$/d')
numberOfCounts=$(echo "$allCounts" | wc -l)
updateInterval=$(bc -l <<< 'scale=1; ('"$numberOfCounts"'/'100')+'0.5'' | sed 's/\..*//g')
counter=1
lineNumber=1
while IFS= read -r count; do
    for (( i=1; i<=$count; i++ )); do
        line=$(echo "$allLines" | sed "${lineNumber}q;d")
        allLinesInsert=$(echo "$allLinesInsert" | sed ''"$lineNumber"'s/^.*$/'"$(($line + $lineChange + $i - 1))"'/')
        allLinesDelete=$(echo "$allLinesDelete" | sed ''"$lineNumber"'s/^.*$/'"$(($line + $lineChange - $i + 1))"'/')
        lineNumber=$((++lineNumber))
    done
    if [[ ! -z "$updateInterval" ]]; then
        counter=$((++counter))
        if [[ $(("$counter"%"$updateInterval")) = 0 ]]; then
            percentage=$(bc -l <<< 'scale=2; '"$counter"'/'"$numberOfCounts"''*100 | sed 's/\.00$//g')
            echo -ne "    ${YELLOW}Generating lines... $percentage% ("$counter"/"$numberOfCounts")${NC}\r"
        fi
    fi
done <<< "$allCounts"
echo -ne "\033[0K\r"

echo ""

# Operation
read -n 1 -ep "$(echo -e "${PURPLE}Operation on line (append text/insert line after/delete) [a/i/d]: "${NC})" operation
if [[ "$operation" == q ]]; then
    exit
fi
while [ ! "$operation" == "a" ] && [ ! "$operation" == "i" ] && [ ! "$operation" == "d" ]; do
    read -n 1 -ep "$(echo -e "${PURPLE}Operation on line (append text/insert line after/delete) [a/i/d]: "${NC})" operation
    if [[ "$operation" == q ]]; then
        exit
    fi
done

if [[ "$operation" == "i" ]]; then
    allLines="$allLinesInsert"
elif [[ "$operation" == "d" ]]; then
    allLines="$allLinesDelete"
fi

# Text to append
if [[ "$operation" == "a" ]]; then
    read -ep "$(echo -e "    ${PURPLE}Enter text [string]: "${NC})" text
    while [ -z "$text" ];do
        read -ep "$(echo -e "    ${PURPLE}Enter text [string]: "${NC})" text
    done
    text=$(Format "$text")
fi

# Main loop
numberOfFiles=$(echo "$allFiles" | wc -l)
updateInterval=$(bc -l <<< 'scale=1; ('"$numberOfFiles"'/'100')+'0.5'' | sed 's/\..*//g')
counter=1
while IFS= read -r file; do
    if [[ ! -z "$file" ]]; then
        if [[ -z "$tag" ]] || ([[ ! -z "$tag" ]] && [[ ! -z $(grep "$tag" "$file") ]]); then
            # Correct lines
            line=${allLines%%$'\n'*}
            if [[ "$lineChange" == "b" ]]; then
                line=$(($line - 1))
            elif [[ "$lineChange" == "a" ]]; then
                line=$(($line + 1))
            fi

            # Get modification time
            modTime=$(date -r "$file" +"%y%m%d%H%M.%S")

            # Operations
            if [[ "$operation" == "a" ]]; then
                sed -i ''"$line"'s/$/'"$text"'/' "$file"
            elif [[ "$operation" == "i" ]]; then
                sed -i ''"$line"'s.$.'"\n"'.' "$file"
            elif [[ "$operation" == "d" ]]; then
                sed -i ''"$line"'d' "$file"
            fi

            # Fix modify time
            if [[ ! $(echo "$file" | sed 's/\/.*//g') == "Images" ]]; then
                touch -m -t "$modTime" "$file"
            fi
        fi
        # Progress counter
        if [[ ! -z "$updateInterval" ]]; then
            counter=$((++counter))
            if [[ $(("$counter"%"$updateInterval")) = 0 ]]; then
                percentage=$(bc -l <<< 'scale=2; '"$counter"'/'"$numberOfFiles"''*100 | sed 's/\.00$//g')
                echo -ne "    ${YELLOW}Editing... $percentage% ("$counter"/"$numberOfFiles")${NC}\r"
            fi
        fi
    fi
    allLines=${allLines#*$'\n'}
done <<< "$allFiles"
echo -ne "\033[0K\r"
echo -e "    ${PURPLE}DONE${NC}"
