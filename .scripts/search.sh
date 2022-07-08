#!/bin/bash

YELLOW='\033[0;33m'
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

export GREP_COLORS='fn=33'

cd ~/Dropbox/MathWiki/Notes

Format()
{
    local r=$(echo "$1" | sed 's/\\/\\\\/g')                                # Escape \
    local r=$(echo "$r" | sed 's/\$/\\\$/g')                                # Escape $
    echo "$r"
}

printf "\n"

#### Query
read -ep "$(echo -e "${PURPLE}Query: [string]${NC}") " query
while [ -z "$query" ]; do
    read -ep "$(echo -e "${PURPLE}Query: [string]${NC}") " query
done
query=$(Format "$query")
#### Query

####Case sensitive
read -n 1 -ep "$(echo -e "    ${PURPLE}Case sensitive? [N/y]${NC}") " sensitive
if [[ "$sensitive" == "q" ]]; then
    exit
fi
while [[ ! -z "$sensitive" ]] && [[ ! "$sensitive" == y ]]; do
    read -n 1 -ep "$(echo -e "    ${PURPLE}Case sensitive? [N/y]${NC}") " sensitive
done
####Case sensitive

printf "\n"

#### Search
if [[ "$sensitive" == "y" ]]; then
    matchingLinesWithFiles=$(grep --color=always -n ''"$query"'' *)
    matches=$(grep -h ''"$query"'' *)
    onlyMatching=$(grep -ho ''"$query"'' *)
else
    matchingLinesWithFiles=$(grep --color=always -ni ''"$query"'' *)
    #files=$(grep -rin ''"$query"'' * | cut -d: -f1-2)
    matches=$(grep -hi ''"$query"'' *)
    onlyMatching=$(grep -hio ''"$query"'' *)
fi
#### Search

echo "$matchingLinesWithFiles"

printf "\n"

#### Replace?
read -n 1 -ep "$(echo -e ${PURPLE}Replace? [Y/n]${NC}) " replace
if [[ ! -z "$replace" ]]; then
    exit
fi
#### Replace?

#### Iterate remove matches
while [[ -z "$remove" ]]; do
    #### Prompt for remove
    read -n 1 -ep "$(echo -e "    ${PURPLE}Remove matches? [Y/n]${NC}") " remove
    if [[ "$remove" == "q" ]]; then
        exit
    fi
    while [[ ! -z "$remove" ]] && [[ ! "$remove" == n ]]; do
        read -n 1 -ep "$(echo -e "    ${PURPLE}Remove matches? [Y/n]${NC}") " remove
    done
    #### Prompt for remove

    if [[ -z "$remove" ]]; then
        #### Remove string
        read -ep "$(echo -e "        ${PURPLE}Remove: [string]${NC}") " toRemove
        while [ -z "$toRemove" ]; do
            read -ep "$(echo -e "        ${PURPLE}Remove: [string]${NC}") " toRemove
        done
        toRemove=$(Format "$toRemove")
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
                line=$(("$line" + 1))
            fi
        done <<< "$matches"
        matches=$(echo "$newMatches")
        printf "\n"
        echo "$matchingLinesWithFiles"
        printf "\n"
        #### New matches
    fi
done
#### Iterate remove matches

printf "\n"

#### Replace
read -ep "$(echo -e ${PURPLE}Replace with: [string]${NC}) " replaceString
while [ -z "$replaceString" ]; do
    read -ep "$(echo -e "${PURPLE}Replace with: [string]${NC}") " replaceString
done
replaceString=$(Format "$replaceString")

numberOfMatches=`echo "$matchingLinesWithFiles" | wc -l`
updateInterval=$(bc -l <<< 'scale=1; ('"$numberOfMatches"'/'100')+'0.5'' | sed 's/\..*//g')
lineOnlyMatching=1

while IFS= read -r matchingLineWithFile; do
    fileLine=$(echo "$matchingLineWithFile" | cut -f1,2 -d':')
    file=$(echo "$fileLine" | sed 's/\:.*//g' | sed -r "s/\x1B\[([0-9]{1,3}(;[0-9]{1,2})?)?[mGK]//g")
    line=$(echo "$fileLine" | sed 's/^.*\://g' | sed -r "s/\x1B\[([0-9]{1,3}(;[0-9]{1,2})?)?[mGK]//g")
    match=$(echo "$onlyMatching" | awk 'NR=='"$lineOnlyMatching"'' | sed -r "s/\x1B\[([0-9]{1,3}(;[0-9]{1,2})?)?[mGK]//g")

    file=$(Format "$file")
    match=$(Format "$match")

    sed -i ''"$line"'s~'"$match"'~'"$replaceString"'~g' "$file"
    lineOnlyMatching=$(("$lineOnlyMatching" + 1))

    #### Fix modify time
    time=`grep "Date Created" "$file" | sed 's/Date\ Created\:\ //g'`

    year=`echo "$time" | sed 's/..\/..\///g' | sed 's/\ ..\:..\:..//g'`
    month=`echo "$time" | sed 's/^..\///g' | sed 's/\/.*//g'`
    day=`echo "$time" | sed 's/\/.*//g'`
    hms=`echo "$time" | sed 's/^.*\ //g' | sed 's/\://' | sed 's/\:/./'`

    newTime=`echo "$year$month$day$hms"`
    touch -m -t "$newTime" "$file"
    #### Fix modify time

    if [[ ! -z "$updateInterval" ]]; then
        if [[ $(("$lineOnlyMatching"%"$updateInterval")) = 0 ]]; then
            percentage=$(bc -l <<< 'scale=2; '"$lineOnlyMatching"'/'"$numberOfMatches"''*100 | sed 's/\.00$//g')
            echo -ne "    ${YELLOW}$percentage%${NC}\r"
        fi
    fi
done <<< "$matchingLinesWithFiles"
#### Replace

echo -e "    ${PURPLE}DONE${NC}"
