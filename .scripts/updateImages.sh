#!/bin/bash

counter=0

UPDATE() {
    note=$(echo "$1" | sed 's/\\/\\\\/g' | sed 's/&/\\&/g')
    codeBoundary=$(echo "$note" | sed -n '/{{< tikz/,/{{< \/tikz/p')
    names=$(echo "$codeBoundary" | grep -o -P '(?<=tikz name=").*(?=" width)')

    codes=$(echo "$note" | sed -n '/{{< tikz/,/{{< \/tikz/{//b;p}')
    codes=$(echo "$codes" | sed 's/\\\\begin{equation\*}/@\\\\begin{equation\*}/g')
    codes=$(echo "$codes" | sed 's/^ *//g' | tr -d '\n')

    mkdir -p $MATHWIKI_DIR/.temp
    cd $MATHWIKI_DIR/.temp

    total=$(echo "$names" | wc -l)
    while IFS='@' read -ra arr; do
        for i in "${arr[@]}"; do
            if [[ ! -z "$i" ]]; then
                echo -ne "Updating... ($counter/$total)\r"
                cp ../imageTemplate.tex image.tex

                sed -i 's/\\begin{document}/\\begin{document}\n'"$i"'/g' image.tex
                pdflatex -shell-escape image.tex > /dev/null 2>&1 && pdfcrop image.pdf image.pdf > /dev/null 2>&1 && pdf2svg image.pdf image.svg

                name=$(echo "$names" | head -n 1)
                cp image.svg ../Site/static/img/$name.svg

                names=$(echo "$names" | sed 1d)
                counter=$((++counter))
                echo -ne "Updating... ($counter/$total)\r"
            fi
        done
    done <<< "$codes"

    cd ..
    rm -r .temp
}

while [ ! -z "$1" ]; do
    case "$1" in
        --note|-n)
            UPDATE "$(cat $2)"
        ;;
        --all|-a)
            cd $MATHWIKI_DIR/Notes
            echo ""
            UPDATE "$(cat *)"
        ;;
        --ghost|-g)
            cd $MATHWIKI_DIR
            echo ""

            allLinkedImages=$(cat Notes/* | grep -o -P '(?<=tikz name=").*(?=" width)' | sed 's/$/.svg/g')
            allActualImages=$(ls "$MATHWIKI_DIR/Site/static/img" | sort | uniq)
            ghostImages=$(echo -e "${allLinkedImages[@]} ${allActualImages[@]}" | tr ' ' '\n' | sort | uniq -u)

            if [[ ! -z $ghostImages ]]; then
                echo -e "\n    ${RED}Unused Images${NC}"
                while IFS= read -r image; do
                    echo -e "        $image"
                done <<< "$ghostImages"
                read -n 1 -ep "$(echo -e "\n    ${RED}Delete? [N/y]${NC}") " proceed
                if [[ ! "$proceed" == y ]]; then
                    exit
                fi
                cd "$MATHWIKI_DIR/Site/static/img"
                while IFS= read -r image; do
                    rm -r $image
                done <<< "$ghostImages"
                echo -e "    ${PURPLE}DONE${NC}"
            fi
        ;;
    esac
shift
done
