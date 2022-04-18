#!/bin/bash

source ~/MathWiki/.scripts/stats.sh -t

printf "\n"
git status
printf "\n"

read -n 1 -p "$(echo -e ${CYAN}"Show diff? [Y/n] "${NC})" choice
if [ -z "$choice" ] || [ "$choice" == "Y" ]; then
    printf "\n"
    git diff
fi

printf "\n"

read -n 1 -p "$(echo -e ${CYAN}"Commit? [Y/n] "${NC})" choice
if [ -z "$choice" ] || [ "$choice" == "Y" ]; then
    source ~/MathWiki/.scripts/stats.sh -u

    templatesInsertLine=$(grep -n "#### Templates" ~/.config/nvim/UltiSnips/vimwiki.snippets | sed 's/:.*$//g')
    sed -i 's|\[templatesInsert\]:.*$|\[templatesInsert\]: https://github.com/zhaoshenzhai/dotfiles/blob/master/nvim/UltiSnips/vimwiki.snippets#L'"$templatesInsertLine"'|g' README.md
    tikzInsertLine=$(grep -n "pdflatex -shell-escape image.tex" ~/.config/nvim/config/MathWiki.vim | sed 's/:.*$//g')
    pdfLaTeXExecuteLine=$(grep -n "newTikZ.sh" ~/.config/nvim/config/MathWiki.vim | sed 's/:.*$//g')
    sed -i 's|\[pdfLaTeXExecute\]:.*$|\[pdfLaTeXExecute\]: https://github.com/zhaoshenzhai/dotfiles/blob/master/nvim/config/MathWiki.vim#L'"$pdfLaTeXExecuteLine"'|g' README.md

    git add .

    printf "\n"
    git status
    printf "\n"

    read -ep "$(echo -e ${CYAN}"Remove files? [N/(string)] "${NC})" choice
    while [[ ! -z $choice ]]; do
        git restore --staged "$choice"

        printf "\n"
        git status
        printf "\n"

        read -ep "$(echo -e ${CYAN}"Remove files? [N/(string)] "${NC})" choice
    done

    printf "\n"
    read -ep "$(echo -e ${CYAN}"Message: "${NC})" msg
    printf "\n"

    git commit -m "$msg"
    printf "\n"
    git push
else
    exit
fi
