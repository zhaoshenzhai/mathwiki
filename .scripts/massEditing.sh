#!/bin/bash

YELLOW='\033[0;33m'
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

cd ~/Dropbox/MathWiki/Notes

Format()
{
    local r=$(echo "$1" | sed 's/\\/\\\\/g')                                # Escape \
    local r=$(echo "$r" | sed 's/\$/\\\$/g')                                # Escape $
    echo "$r"
}

printf "\n"

#### Tag
read -n 1 -ep "$(echo -e "${PURPLE}Tag: [A/d/p/t/a]${NC} ")" tag
if [[ "$tag" == q ]]; then
    exit
fi

while [ ! -z "$tag" ] && [ ! "$tag" == "A" ] && [ ! "$tag" == "d" ] && [ ! "$tag" == "p" ] && [ ! "$tag" == "t" ] && [ ! "$tag" == "a" ]; do
    read -n 1 -ep "$(echo -e "${PURPLE}Tag: [A/d/p/t/a]${NC} ")" tag
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
#### Tag

#### Identifier
printf "\n"
read -ep "$(echo -e "${PURPLE}Select line containing [string]: "${NC})" identifier
while [ -z "$identifier" ];do
    read -ep "$(echo -e "${PURPLE}Select line containing [string]: "${NC})" identifier
done
#### Identifier

#### Get all files with tag and identifier
allFileWithLines="$(grep -no "$identifier" * | sed 's/:'"$identifier"'//g')"
allLines=$(echo "$allFileWithLines" | sed 's/^.*://g')
allFiles=$(echo "$allFileWithLines" | sed 's/:.*$//g')
#### Get all files with tag and identifier

#### Options
read -n 1 -ep "$(echo -e "    ${PURPLE}Change to before/after? [N/b/a]: "${NC})" lineChange
printf "\n"
read -n 1 -ep "$(echo -e "${PURPLE}Operation on line (append text/insert line after/delete) [a/i/d]: "${NC})" operation
while [ ! "$operation" == "a" ] && [ ! "$operation" == "i" ] && [ ! "$operation" == "d" ]; do
    read -n 1 -ep "$(echo -e "${PURPLE}Operation on line (append text/insert line after/delete) [a/i/d]: "${NC})" operation
done
#### Options

#### Text to append
if [[ "$operation" == "a" ]]; then
    read -ep "$(echo -e "    ${PURPLE}Enter text [string]: "${NC})" text
    while [ -z "$text" ];do
        read -ep "$(echo -e "    ${PURPLE}Enter text [string]: "${NC})" text
    done
    text="\n$(Format "$text")"
fi
#### Text to append

#### Main loop
numberOfFiles=$(echo "$allFiles" | wc -l)
counter=0
while IFS= read -r file; do
    if [[ ! -z "$file" ]]; then
        if [[ -z "$tag" ]] || ([[ ! -z "$tag" ]] && [[ ! -z $(grep "$tag" "$file") ]]); then
            #### Correct lines
            line=${allLines%%$'\n'*}
            if [[ "$lineChange" == "b" ]]; then
                line=$(($line - 1))
            elif [[ "$lineChange" == "a" ]]; then
                line=$(($line + 1))
            fi
            #### Correct lines

            #### Operations
            if [[ "$operation" == "a" ]]; then
                sed -i 's/$/'"$text"'/g' "$file"
            elif [[ "$operation" == "i" ]]; then
                sed -i ''"$line"'s.$.'"\n"'.' "$file"
            elif [[ "$operation" == "d" ]]; then
                sed -i ''"$line"'d' "$file"
            fi
            #### Operations

            #### Fix modify time
            counter=$(("$counter" + 1))
            time=`grep "Date Created" "$file" | sed 's/Date\ Created\:\ //g'`

            year=`echo "$time" | sed 's/..\/..\///g' | sed 's/\ ..\:..\:..//g'`
            month=`echo "$time" | sed 's/^..\///g' | sed 's/\/.*//g'`
            day=`echo "$time" | sed 's/\/.*//g'`
            hms=`echo "$time" | sed 's/^.*\ //g' | sed 's/\://' | sed 's/\:/./'`

            newTime=`echo "$year$month$day$hms"`
            touch -m -t "$newTime" "$file"

            percentage=$(bc -l <<< 'scale=2; '"$counter"'/'"$numberOfFiles"''*100 | sed 's/\.00$//g')
            echo -en "    ${YELLOW}$percentage%${NC}\r"
            #### Fix modify time
        else
            counter=$(("$counter" + 1))
        fi
    fi
    allLines=${allLines#*$'\n'}
done <<< "$allFiles"
#### Main loop

echo -e "    ${PURPLE}DONE${NC}"
