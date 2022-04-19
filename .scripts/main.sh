#!/bin/bash

CYAN='\033[0;36m'
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m'

cd ~/MathWiki/Notes

repeat="Y"
while [[ "$repeat" == "Y" ]]; do
    source ~/MathWiki/.scripts/stats.sh -u
    source ~/MathWiki/.scripts/stats.sh -p
    printf "\n"

    echo -e "${CYAN}Actions:${NC}"
    echo -e "${CYAN}    (1): GitHub${NC}"
    echo -e "${CYAN}    (2): Mass editing${NC}"
    echo -e "${CYAN}    (3): Update math links${NC}"
    echo -e "${CYAN}    (4): New math links${NC}"
    echo -e "${CYAN}    (5): Show ghost links${NC}"
    echo -e "${CYAN}    (6): Show link details${NC}"
    printf "\n"

    read -n 1 -ep "$(echo -e ${CYAN}"Select: [1|(1-6)] "${NC})" action
    if [[ -z "$action" ]]; then
        action="1"
    fi
    if [[ "$action" == "q" ]]; then
        exit
    fi
    re='^[0-9]+$'
    while ! [[ $action =~ $re ]] ; do
        read -n 1 -ep "$(echo -e ${CYAN}"Select: [1|(1-6)] "${NC})" action
    done
    while [ "$action" -lt "1" ] || [ "$action" -gt "6" ]; do
        read -n 1 -ep "$(echo -e ${CYAN}"Select: [1|(1-6)] "${NC})" action
    done

    case $action in
        "1")
            ~/.config/scripts/gitCommit.sh -m
        ;;
        "2")
            printf "\n"
            ~/MathWiki/.scripts/massEditing.sh
        ;;
        "3")
            ~/MathWiki/.scripts/mathLinks.sh -u
        ;;
        "4")
            ~/MathWiki/.scripts/mathLinks.sh -n
        ;;
        "5")
            printf "\n"
            ~/MathWiki/.scripts/stats.sh -g
        ;;
        "6")
            printf "\n"
            ~/MathWiki/.scripts/stats.sh -l
        ;;
    esac

    printf "\n"
    echo -e "${GREEN}DONE${NC}"
    printf "\n"

    read -n 1 -ep "$(echo -e ${CYAN}"Press [Y] to return, exiting otherwise... "${NC})" repeat
    if [[ -z "$repeat" ]]; then
        repeat="Y"
    fi
    if [[ "$repeat" == "Y" ]]; then
        clear
    else
        exit
    fi
done
