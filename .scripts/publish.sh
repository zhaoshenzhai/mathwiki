#!/bin/bash

YELLOW='\033[0;33m'
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

cd $MATHWIKI_DIR/Notes
SITE_PATH="$MATHWIKI_DIR/.site"

MD_TO_HTML() {
    # Get info
    file=$1
    date=$(grep "^Date Created: " "$file" | sed 's/^Date Created: //g')
    day="${date:0:2}"
    month="${date:3:2}"
    year="${date:6:4}"

    mkdir -p "$SITE_PATH/_posts/"
    mkdir -p "$SITE_PATH/images"
    cp -f "$file" "$SITE_PATH/_posts/$year-$month-$day-$file"
    cd $SITE_PATH/_posts/
    destFile="$year-$month-$day-$file"

    # Admonition
    $(sed -i '/^title: / s/$/<\/div>/' "$destFile")
    $(sed -z 's/``` ad-Proposition\ntitle:/<div class="admonition">\n<div class="admonition-header"><i class="fa-solid fa-calculator"><\/i>/g' -i "$destFile")
    $(sed -z 's/``` ad-Theorem\ntitle:/<div class="admonition">\n<div class="admonition-header"><i class="fa-solid fa-wand-magic-sparkles"><\/i>/g' -i "$destFile")
    $(sed -z 's/``` ad-Definition\ntitle:/<div class="admonition">\n<div class="admonition-header"><i class="fa-solid fa-book"><\/i>/g' -i "$destFile")
    $(sed -z 's/``` ad-Axiom\ntitle:/<div class="admonition">\n<div class="admonition-header"><i class="fa-solid fa-lock"><\/i>/g' -i "$destFile")
    $(sed -i '/admonition-header/ s/$/\n<div class="admonition-container">/g' "$destFile")

    # Header
    firstLine=$(head -n 1 "$destFile")
    if [[ ! $firstLine == "---" ]]; then
        $(sed -i 's/^<div class="topSpace"><\/div>/---\n---/g' "$destFile")
    fi

    fileName=$(echo "$file" | sed 's/\.md$//g')
    $(sed -i '1s_$_\nlayout: post_' "$destFile")
    $(sed -i '1s_$_\ndate: '"$date"'_' "$destFile")
    $(sed -i '1s_$_\npermalink: '"$fileName"'.html_' "$destFile")
    $(sed -i '1s_$_\ntitle: '"$fileName"'_' "$destFile")
    $(sed -i '/^Date Created: /d' "$destFile")
    $(sed -i '/^Tags: /,+1d' "$destFile")

    # Links
    $(sed -i '/^Types: / s/$/<br>/' "$destFile")
    $(sed -i '/^Examples: / s/$/<br>/' "$destFile")
    $(sed -i '/^Constructions: / s/$/<br>/' "$destFile")
    $(sed -i '/^Generalizations: / s/$/<br>/' "$destFile")
    $(sed -i '/^Properties: / s/$/<br>/' "$destFile")
    $(sed -i '/^Sufficiencies: / s/$/<br>/' "$destFile")
    $(sed -i '/^Equivalences: / s/$/<br>/' "$destFile")
    $(sed -i '/^Justifications: / s/$/<br>/' "$destFile")
    $(sed -i '/^Proved by: / s/$/<br>/' "$destFile")
    $(sed -i '/^References: / s/$/<br>/' "$destFile")
    $(sed -i '/^Specializations: / s/$/<br>/' "$destFile")

    links=$(sed 's/]],\ /]]\n/g' "$destFile" | grep -o "\[\[.*\]\]" | grep -v "\[\[Images/.*\]\]")
    while IFS= read -r link; do
        name=$(echo $link | sed 's/^\[\[//g' | sed 's/]]$//g')
        link=$(echo $link | sed 's/^\[\[/\\\[\\\[/g' | sed 's/\]\]/\\\]\\\]/g')
        newLink=$(echo $name | sed 's/^/\[/g' | sed 's/$/]('"$name"'\.html)/g')
        if [[ ! -z "$link" ]]; then
            $(sed -i 's/'"$link"'/'"$newLink"'/g' "$destFile")
        fi
    done <<< "$links"

    # Main Content
    startLine=$(( $(grep -on '```' "$destFile" | sed 's/:.*//g') + 5))
    $(sed -i 's/```/<\/div>\n<\/div>\n\n<div>/g' "$destFile")
    $(sed -i -e $'$a\\\n\\<\/div\>' "$destFile")

    # Breaks
    $(sed -z 's/\n\n---\n\n/\n<hr class="hr-rule">\n/g' -i "$destFile")

    # Images
    images=$(grep '!\[\[Images/' "$destFile" | sed 's/!\[\[Images\///g' | sed 's/]].*//g')

    while IFS= read -r image; do
        if [[ ! -z "$image" ]]; then
            imageName=$(echo "$image" | sed 's/|.*//g')
            imageSize=$(echo "$image" | sed 's/^.*|//g')
            newImageName=$(echo "$imageName" | sed 's/\//_/g')
            newImageSize=$(echo "$imageSize * 1.375" | bc)
            $(cp -f "$MATHWIKI_DIR/Images/$imageName" "$SITE_PATH/images/$newImageName")
            $(sed -i 's+!\[\[Images/'"$imageName"'|[0-9]*]]+<center><img src="images/'"$newImageName"'" style="width: '"$newImageSize"'px;"/></center>+g' "$destFile")
        fi
    done <<< "$images"

    # Lists and line breaks
    {
        # Unordered lists
        unorderedRanges=
        counter=1
        emptyLines=
        while read line; do
            if [[ $(echo "$line" | grep '^\* ') ]]; then
                if [[ $(echo -e "$unorderedRanges" | tail -n1 | grep ',$') ]]; then
                    unorderedRanges="$unorderedRanges$((counter - 1))\n$counter,"
                else
                    unorderedRanges="$unorderedRanges$counter,"
                fi
            fi
            
            if [[ -z "$line" ]]; then
                if [[ $counter -ge $startLine ]]; then
                    emptyLines="$emptyLines$counter\n"
                fi
                if [[ $(echo -e "$unorderedRanges" | tail -n1 | grep ',$') ]]; then
                    unorderedRanges="$unorderedRanges$((counter - 1))\n"
                fi
            fi
            counter=$((counter + 1))
        done <"$destFile"

        if [[ "${unorderedRanges: -1}" == ',' ]]; then
            lastLine=$(wc -l "$destFile" | sed 's/ .*//g')
            unorderedRanges="$unorderedRanges$((lastLine - 1))\n"
        fi

        previous=-1
        current=$(echo -e $unorderedRanges | head -n 1)
        next=$(echo -e "$unorderedRanges" | head -n 2 | tail -n1)
        nextIndex=3

        if [[ $next == $current ]]; then
            next=
        fi

        while [[ ! -z $current ]]; do
            previousEnd=$(echo $previous | sed 's/^.*,//g')
            currentStart=$(echo $current | sed 's/,.*$//g')
            currentEnd=$(echo $current | sed 's/^.*,//g')
            nextStart=$(echo $next | sed 's/,.*$//g')

            if [[ $previousEnd == $((currentStart - 1)) ]]; then
                $(sed -i ''"$currentStart"'s/^\* /<li>/' "$destFile")
            else
                $(sed -i ''"$currentStart"'s/^\* /<ul><li>/' "$destFile")
            fi

            if [[ $nextStart == $((currentEnd + 1)) ]]; then
                $(sed -i ''"$currentEnd"'s/$/<\/li>/' "$destFile")
            else
                $(sed -i ''"$currentEnd"'s/$/<\/li><\/ul>/' "$destFile")
            fi

            previous=$current
            current=$next
            next=$(echo -e "$unorderedRanges" | head -n $nextIndex | tail -n1)
            nextIndex=$((nextIndex + 1))
        done

        # Ordered lists
        orderedRanges=
        counter=1
        while read line; do
            if [[ $(echo "$line" | grep '^[0-9]*\. ') ]]; then
                if [[ $(echo -e "$orderedRanges" | tail -n1 | grep ',$') ]]; then
                    orderedRanges="$orderedRanges$((counter - 1))\n$counter,"
                else
                    orderedRanges="$orderedRanges$counter,"
                fi
            fi
            
            if [[ $(echo "$line" | grep -n '^$') ]]; then
                if [[ $(echo -e "$orderedRanges" | tail -n1 | grep ',$') ]]; then
                    orderedRanges="$orderedRanges$((counter - 1))\n"
                fi
            fi
            counter=$((counter + 1))
        done <"$destFile"

        if [[ "${orderedRanges: -1}" == ',' ]]; then
            lastLine=$(wc -l "$destFile" | sed 's/ .*//g')
            orderedRanges="$orderedRanges$((lastLine - 1))\n"
        fi

        previous=-1
        current=$(echo -e $orderedRanges | head -n 1)
        next=$(echo -e "$orderedRanges" | head -n 2 | tail -n1)
        nextIndex=3

        if [[ $next == $current ]]; then
            next=
        fi

        while [[ ! -z $current ]]; do
            previousEnd=$(echo $previous | sed 's/^.*,//g')
            currentStart=$(echo $current | sed 's/,.*$//g')
            currentEnd=$(echo $current | sed 's/^.*,//g')
            nextStart=$(echo $next | sed 's/,.*$//g')

            if [[ $previousEnd == $((currentStart - 1)) ]]; then
                $(sed -i ''"$currentStart"'s/^[0-9]*\. /<li>/' "$destFile")
            else
                $(sed -i ''"$currentStart"'s/^[0-9]*\. /<ol><li>/' "$destFile")
            fi

            if [[ $nextStart == $((currentEnd + 1)) ]]; then
                $(sed -i ''"$currentEnd"'s/$/<\/li>/' "$destFile")
            else
                $(sed -i ''"$currentEnd"'s/$/<\/li><\/ol>/' "$destFile")
            fi

            previous=$current
            current=$next
            next=$(echo -e "$orderedRanges" | head -n $nextIndex | tail -n1)
            nextIndex=$((nextIndex + 1))
        done

        # Line break
        line=$(echo -e "$emptyLines" | head -n 1)
        lineIndex=2
        while [[ ! -z $line ]]; do
            previousLineNumber=$((line - 1))
            previousLine=$(sed "${previousLineNumber}q;d" "$destFile")
            if [[ ! $(echo "$previousLine" | grep -e '<li>' -e '</li>') ]]; then
                $(sed -i ''"$line"'s/$/<br><br>/' "$destFile")
            fi

            line=$(echo -e "$emptyLines" | head -n $lineIndex | tail -n1)
            lineIndex=$((lineIndex + 1))
        done
    }&
}

echo ""
read -n 1 -ep "$(echo -e "${RED}This will take time. Proceed? [N/y]${NC}") " proceed
if [[ ! "$proceed" == y ]]; then
    exit
fi

allNotes=$(ls)
numberOfCounts=$(echo "$allNotes" | wc -l)
progressCounter=1
while IFS= read -r note; do
    cd $MATHWIKI_DIR/Notes
    MD_TO_HTML "$note"
    progressCounter=$((progressCounter + 1))
    percentage=$(bc -l <<< 'scale=2; '"$progressCounter"'/'"$numberOfCounts"''*100 | sed 's/\.00$//g')
    echo -ne "    ${YELLOW}Publishing... $percentage% ("$progressCounter"/"$numberOfCounts")${NC}\r"
done <<< "$allNotes"
echo -ne "\033[0K\r"
echo -e "    ${PURPLE}DONE${NC}"
