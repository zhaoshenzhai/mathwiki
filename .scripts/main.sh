#!/bin/bash

YELLOW='\033[0;33m'
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

repeat="Y"
while [[ "$repeat" == "Y" ]]; do
    source ~/Dropbox/MathWiki/.scripts/stats.sh -u
    source ~/Dropbox/MathWiki/.scripts/stats.sh -p
    printf "\n"

    echo -e "${CYAN}Actions:${NC}"
    echo -e "    ${CYAN}(1): Git${NC}"
    echo -e "    ${CYAN}(2): Search${NC}"
    echo -e "    ${CYAN}(3): Restore${NC}"
    echo -e "    ${CYAN}(4): Math links${NC}"
    echo -e "    ${CYAN}(5): Ghost links${NC}"
    echo -e "    ${CYAN}(6): Mass editing${NC}"
    echo -e "    ${CYAN}(7): Update images${NC}"
    echo -e "    ${CYAN}(8): Reset modify time${NC}"
    printf "\n"

    read -n 1 -ep "$(echo -e ${CYAN}"Select: [1|(1-8)]${NC} ")" action
    if [[ -z "$action" ]]; then
        action="1"
    fi
    if [[ "$action" == "q" ]]; then
        exit
    fi
    re='^[0-9]+$'
    while ( ! [[ $action =~ $re ]] ) || ( [ "$action" -lt "1" ] || [ "$action" -gt "8" ] ); do
        read -n 1 -ep "$(echo -e ${CYAN}"Select: [1|(1-8)]${NC} ")" action
        if [[ -z "$action" ]]; then
            action="1"
        fi
        if [[ "$action" == "q" ]]; then
            exit
        fi
    done

    case $action in
        "1")
            ~/.config/scripts/gitCommit.sh -m
        ;;
        "2")
            ~/Dropbox/MathWiki/.scripts/searchReplace.sh
        ;;
        "3")
            ~/Dropbox/MathWiki/.scripts/gitRestore.sh
        ;;
        "4")
            ~/Dropbox/MathWiki/.scripts/mathLinks.sh -u
            ~/Dropbox/MathWiki/.scripts/mathLinks.sh -n
        ;;
        "5")
            ~/Dropbox/MathWiki/.scripts/ghostLinks.sh
        ;;
        "6")
            ~/Dropbox/MathWiki/.scripts/massEditing.sh
        ;;
        "7")
            ~/Dropbox/MathWiki/.scripts/updateImages.sh
        ;;
        "8")
            ~/Dropbox/MathWiki/.scripts/resetModifyTime.sh
        ;;
    esac

    printf "\n"
    echo -e "${GREEN}DONE${NC}"
    printf "\n"

    read -n 1 -ep "$(echo -e ${CYAN}"Press [Y] to return, exiting otherwise...${NC} ")" repeat
    if [[ -z "$repeat" ]]; then
        repeat="Y"
    fi
    if [[ "$repeat" == "Y" ]]; then
        clear
    else
        exit
    fi
done
