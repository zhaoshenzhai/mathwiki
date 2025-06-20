#!/bin/bash

export GREP_COLORS='fn=33'
cd $MATHWIKI_DIR
echo ""

#### Query
read -rp "$(echo -e "${PURPLE}Query: [string]${NC}") " query
while [ -z "$query" ]; do
    read -rp "$(echo -e "${PURPLE}Query: [string]${NC}") " query
done
#### Query

####Case sensitive
read -n 1 -ep "$(echo -e "    ${PURPLE}Case sensitive? [N/y]${NC}") " sensitive
if [[ "$sensitive" == "q" ]]; then
    exit
fi
while [[ ! -z "$sensitive" ]] && [[ ! "$sensitive" == y ]]; do
    read -n 1 -ep "$(echo -e "    ${PURPLE}Case sensitive? [N/y]${NC}") " sensitive
    if [[ "$sensitive" == "q" ]]; then
        exit
    fi
done
####Case sensitive

####Notes, images, or both
read -n 1 -ep "$(echo -e "    ${PURPLE}Search in: [N(otes)/i(mages)/b(oth)]${NC}") " searchIn
if [[ "$searchIn" == "q" ]]; then
    exit
fi
while [[ ! -z "$searchIn" ]] && [[ ! "$searchIn" == i ]] && [[ ! "$searchIn" == b ]]; do
    read -n 1 -ep "$(echo -e "    ${PURPLE}Search in: [N(otes)/i(mages)/b(oth)]${NC}") " searchIn
    if [[ "$searchIn" == "q" ]]; then
        exit
    fi
done
case "$searchIn" in
    "i")
        searchIn="Images/*/*.tex"
    ;;
    "b")
        searchIn="Notes/*.md Images/*/*.tex"
    ;;
    *)
        searchIn="Notes/*.md"
    ;;
esac
####Notes, images, or both

echo ""

#### Search
if [[ "$sensitive" == "y" ]]; then
    matchingLinesWithFiles=$(grep --color=always -n ''"$query"'' $searchIn)
    matches=$(grep -h ''"$query"'' $searchIn)
    onlyMatching=$(grep -ho ''"$query"'' $searchIn)
else
    matchingLinesWithFiles=$(grep --color=always -ni ''"$query"'' $searchIn)
    matches=$(grep -hi ''"$query"'' $searchIn)
    onlyMatching=$(grep -hio ''"$query"'' $searchIn)
fi
#### Search

echo "$matchingLinesWithFiles"

echo ""

#### Iterate remove matches
remove="y"
while [[ "$remove" == "y" ]]; do
    #### Prompt for remove
    read -n 1 -ep "$(echo -e "    ${PURPLE}Remove matches? [N/y]${NC}") " remove
    if [[ "$remove" == "q" ]]; then
        exit
    fi
    while [[ ! -z "$remove" ]] && [[ ! "$remove" == y ]]; do
        read -n 1 -ep "$(echo -e "    ${PURPLE}Remove matches? [N/y]${NC}") " remove
        if [[ "$remove" == "q" ]]; then
            exit
        fi
    done
    #### Prompt for remove

    if [[ "$remove" == "y" ]]; then
        #### Remove string
        read -rp "$(echo -e "        ${PURPLE}Remove: [string]${NC}") " toRemove
        while [ -z "$toRemove" ]; do
            read -rp "$(echo -e "        ${PURPLE}Remove: [string]${NC}") " toRemove
        done
        #### Remove string

        ####Case sensitive
        read -n 1 -ep "$(echo -e "            ${PURPLE}Case sensitive? [N/y]${NC}") " sensitive
        if [[ "$sensitive" == "q" ]]; then
            exit
        fi
        while [[ ! -z "$sensitive" ]] && [[ ! "$sensitive" == y ]]; do
            read -n 1 -ep "$(echo -e "            ${PURPLE}Case sensitive? [N/y]${NC}") " sensitive
        done
        ####Case sensitive

        #### New matches
        line=1
        newMatches=$(echo "$matches")
        numberOfMatches=$(echo "$matches" | wc -l)
        updateInterval=$(bc -l <<< 'scale=1; ('"$numberOfMatches"'/'100')+'0.5'' | sed 's/\..*//g')
        counter=1
        while IFS= read -r match; do
            if [[ "$sensitive" == "y" ]]; then
                checkRemove=$(grep "$toRemove" <<< "$match")
            else
                checkRemove=$(grep -i "$toRemove" <<< "$match")
            fi

            if [[ ! -z "$checkRemove" ]]; then
                matchingLinesWithFiles=$(echo "$matchingLinesWithFiles" | sed ''"$line"'d')
                newMatches=$(echo "$newMatches" | sed ''"$line"'d')
                onlyMatching=$(echo "$onlyMatching" | sed ''"$line"'d')
            else
                line=$((++line))
            fi

            if [[ ! -z "$updateInterval" ]]; then
                counter=$((++counter))
                if [[ $(("$counter"%"$updateInterval")) = 0 ]]; then
                    percentage=$(bc -l <<< 'scale=2; '"$counter"'/'"$numberOfMatches"''*100 | sed 's/\.00$//g')
                    echo -ne "                ${YELLOW}$percentage%${NC}\r"
                fi
            fi
        done <<< "$matches"
        echo -ne "\033[0K\r"
        matches=$(echo "$newMatches")
        echo ""
        echo "$matchingLinesWithFiles"
        echo ""
        #### New matches
    fi
done
#### Iterate remove matches

echo ""

#### Replace?
read -n 1 -ep "$(echo -e "    ${PURPLE}Replace? [Y/n]${NC}") " replace
if [[ ! -z "$replace" ]]; then
    exit
fi
#### Replace?

#### Replace
read -rp "$(echo -e "        ${PURPLE}Replace with: [string]${NC}") " replaceString
if [[ -z "$replaceString" ]]; then
    replaceString=""
fi

numberOfMatches=$(echo "$matchingLinesWithFiles" | wc -l)
updateInterval=$(bc -l <<< 'scale=1; ('"$numberOfMatches"'/'100')+'0.5'' | sed 's/\..*//g')
lineOnlyMatching=1

while IFS= read -r matchingLineWithFile; do
    fileLine=$(echo "$matchingLineWithFile" | cut -f1,2 -d':')
    file=$(echo "$fileLine" | sed 's/\:.*//g' | sed -r "s/\x1B\[([0-9]{1,3}(;[0-9]{1,2})?)?[mGK]//g")
    line=$(echo "$fileLine" | sed 's/^.*\://g' | sed -r "s/\x1B\[([0-9]{1,3}(;[0-9]{1,2})?)?[mGK]//g")
    match=$(echo "$onlyMatching" | awk 'NR=='"$lineOnlyMatching"'' | sed 's/\\/\\\\/g' | sed -r "s/\x1B\[([0-9]{1,3}(;[0-9]{1,2})?)?[mGK]//g")

    sed -i ''"$line"'s~'"$match"'~'"$replaceString"'~g' "$file"

    lineOnlyMatching=$((++lineOnlyMatching))

    if [[ ! -z "$updateInterval" ]]; then
        if [[ $(("$lineOnlyMatching"%"$updateInterval")) = 0 ]]; then
            percentage=$(bc -l <<< 'scale=2; '"$lineOnlyMatching"'/'"$numberOfMatches"''*100 | sed 's/\.00$//g')
            echo -ne "    ${YELLOW}$percentage%${NC}\r"
        fi
    fi
done <<< "$matchingLinesWithFiles"
#### Replace

echo -e "    ${PURPLE}DONE${NC}"
