#!/bin/bash

YELLOW='\033[0;33m'
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

cd ~/Dropbox/MathWiki/Notes

allFiles=$(ls)
numberOfFiles=$(echo "$allFiles" | wc -l)
updateInterval=$(bc -l <<< 'scale=1; ('"$numberOfFiles"'/'100')+'0.5'' | sed 's/\..*//g')
counter=0

while IFS= read -r file; do
    time=$(grep "Date Created" "$file" | sed 's/Date\ Created\:\ //g')

    year=$(echo "$time" | sed 's/..\/..\///g' | sed 's/\ ..\:..\:..//g')
    month=$(echo "$time" | sed 's/^..\///g' | sed 's/\/.*//g')
    day=$(echo "$time" | sed 's/\/.*//g')
    hour=$(echo "$time" | sed 's/^.*\ //g' | sed 's/\:.*//g')
    minute=$(echo "$time" | sed 's/^.*\ //g' | sed 's/^..\://g' | sed 's/\:.*//g')
    second=$(echo "$time" | sed 's/^.*\ //g' | sed 's/^..\:..\://g' | sed 's/\:.*//g')

    newTime=$(echo "$year$month$day$hour$minute.$second")

    touch -m -t "$newTime" "$file"   

    if [[ ! -z "$updateInterval" ]]; then
        counter=$((++counter))
        if [[ $(("$counter"%"$updateInterval")) = 0 ]]; then
            percentage=$(bc -l <<< 'scale=2; '"$counter"'/'"$numberOfFiles"''*100 | sed 's/\.00$//g')
            echo -ne "${YELLOW}Updating... $percentage%${NC}\r"
        fi
    fi
done <<< "$allFiles"
