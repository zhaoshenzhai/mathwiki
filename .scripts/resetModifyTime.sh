#!/bin/bash

cd $MATHWIKI_DIR/Notes

echo ""

read -n 1 -ep "$(echo -e "${RED}This will reset the modification time of all notes to their creation time. Proceed? [N/y]${NC}") " proceed
if [[ ! "$proceed" == y ]]; then
    exit
fi

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

    modTime=$(echo "$year$month$day$hour$minute.$second")

    touch -m -t "$modTime" "$file"

    if [[ ! -z "$updateInterval" ]]; then
        counter=$((++counter))
        if [[ $(("$counter"%"$updateInterval")) = 0 ]]; then
            percentage=$(bc -l <<< 'scale=2; '"$counter"'/'"$numberOfFiles"''*100 | sed 's/\.00$//g')
            echo -ne "${YELLOW}Resetting... $percentage%${NC}\r"
        fi
    fi
done <<< "$allFiles"
echo -ne "\033[0K\r"
echo -e "    ${PURPLE}DONE${NC}"
