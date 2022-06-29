#!/bin/bash

CYAN='\033[0;36m'
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m'

cd ~/MathWiki/Notes

allFiles=`ls`
numberOfFiles=`echo "$allFiles" | wc -l`
counter=0

while IFS= read -r file; do
    time=`grep "Date Created" "$file" | sed 's/Date\ Created\:\ //g'`

    year=`echo "$time" | sed 's/..\/..\///g' | sed 's/\ ..\:..\:..//g'`
    month=`echo "$time" | sed 's/^..\///g' | sed 's/\/.*//g'`
    day=`echo "$time" | sed 's/\/.*//g'`
    hour=`echo "$time" | sed 's/^.*\ //g' | sed 's/\:.*//g'`
    minute=`echo "$time" | sed 's/^.*\ //g' | sed 's/^..\://g' | sed 's/\:.*//g'`
    second=`echo "$time" | sed 's/^.*\ //g' | sed 's/^..\:..\://g' | sed 's/\:.*//g'`

    newTime=`echo "$year$month$day$hour$minute.$second"`
    #touch -m -t "$newTime" "$file"

    counter=$((counter + 1))
    percentage=$(bc -l <<< 'scale=3; '"$counter"'/'"$numberOfFiles"''*100 | sed 's/00$//g')
    echo -ne "${YELLOW}Updating... $percentage%${NC}\r"
done <<< "$allFiles"
echo -ne "\n"

