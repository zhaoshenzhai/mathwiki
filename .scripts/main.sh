#!/bin/bash

YELLOW='\033[0;33m'
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

cd ~/MathWiki/Notes

repeat="Y"
while [[ "$repeat" == "Y" ]]; do
    source ~/MathWiki/.scripts/stats.sh -u
    source ~/MathWiki/.scripts/stats.sh -p
    printf "\n"

    echo -e "${CYAN}Actions:${NC}"
    echo -e "    ${CYAN}(1): GitHub${NC}"
    echo -e "    ${CYAN}(2): Search${NC}"
    echo -e "    ${CYAN}(3): Math links${NC}"
    echo -e "    ${CYAN}(4): Ghost links${NC}"
    echo -e "    ${CYAN}(5): Mass editing${NC}"
    printf "\n"

    read -n 1 -ep "$(echo -e ${CYAN}"Select: [1|(1-5)]${NC} ")" action
    if [[ -z "$action" ]]; then
        action="1"
    fi
    if [[ "$action" == "q" ]]; then
        exit
    fi
    re='^[0-9]+$'
    while ! [[ $action =~ $re ]] ; do
        read -n 1 -ep "$(echo -e ${CYAN}"Select: [1|(1-5)]${NC} ")" action
        if [[ -z "$action" ]]; then
            action="1"
        fi
        if [[ "$action" == "q" ]]; then
            exit
        fi
    done
    while [ "$action" -lt "1" ] || [ "$action" -gt "5" ]; do
        read -n 1 -ep "$(echo -e ${CYAN}"Select: [1|(1-5)]${NC} ")" action
    done

    case $action in
        "1")
            ~/.config/scripts/gitCommit.sh -m
        ;;
        "2")
            ~/MathWiki/.scripts/search.sh
        ;;
        "3")
            ~/MathWiki/.scripts/mathLinks.sh -u
            ~/MathWiki/.scripts/mathLinks.sh -n
        ;;
        "4")
            ~/MathWiki/.scripts/ghost.sh
        ;;
        "5")
            ~/MathWiki/.scripts/massEditing.sh
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
