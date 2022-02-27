#!/bin/bash

cd ~/MathWiki/Notes

#aliased=$(grep -Po --color '\[(\w+\s)+\$\\[a-zA-Z^0-9]+\$[a-zA-Z(); ]*\]' *.md | sed 's/^.*://g')
#obsidian=$(grep -Po --color '\(([a-zA-Z0-9();]+%20)+[a-zA-Z0-9();]*(\.md)*\)' *.md | sed 's/^.*://g')

files=$(grep -l "%%auto_aliasing%%" *)

while IFS= read -r line; do
    echo "... $line ..."
    currentAliased=$(grep -Po --color '\[(\w+\s)+\$\\[a-zA-Z^0-9]+\$[a-zA-Z(); ]*\]' "$line" | sed 's/^.*://g')
    echo "Current: $currentAliased"

    obsidian=$(grep -Po '\(([a-zA-Z0-9();]+%20)+[a-zA-Z0-9();]*(\.md)*\)' "$line")

    newAliased=$(sed 's/%20/\ /g' <<< "$obsidian")
    newAliased=$(sed 's/(/[/1' <<< "$newAliased")
    newAliased=$(sed 's/)$/]/g' <<< "$newAliased")
    newAliased=$(sed 's/.md//g' <<< "$newAliased")

    newAliased=$(sed 's/\ R\ /\ \$\\R\$\ /g' <<< "$newAliased")

    echo "New    : $newAliased"

    if [ ! "$newAliased" == "$currentAliased" ]; then
        echo Different
        sed "s/$currentAliased/$newAliased/g" "$line"
    fi

    printf "\n"
done <<< "$files"
