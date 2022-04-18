#!/bin/bash

cd ~/MathWiki/Notes

Format()
{
    local r=$(echo "$1" | sed 's/\\/\\\\/g')                                # Escape \
    local r=$(echo "$r" | sed 's/\$/\\\$/g')                                # Escape $
    echo "$r"
}

read -ep "$(echo -e ${CYAN}"Insert text [string]: "${NC})" text
read -ep "$(echo -e ${CYAN}"...after line containing [string]: "${NC})" identifier

text="\n$(Format "$text")"
#identifier="\n$(Format "$identifier")"

allFileWithLines="$(grep -no "$identifier" * | sed 's/:'"$identifier"'//g')"
allFiles=$(echo "$allFileWithLines" | sed 's/:.*$//g')

while IFS= read -r file; do
    fileWithLine=${allFileWithLines%%$'\n'*}
    line=$(echo "$fileWithLine" | sed 's/.*://g')
    sed -i ''"$line"'s.$.'"$text"'.' "$file"
    allFileWithLines=${allFileWithLines#*$'\n'}
done <<< "$allFiles"
