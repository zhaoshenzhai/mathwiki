#!/bin/bash

CYAN='\033[0;36m'
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m'

cd ~/MathWiki/Notes

# Get stats
source ~/MathWiki/.scripts/stats.sh -t
printf "\n"

# Main prompts
echo -e "${CYAN}Actions:${NC}"
echo -e "${CYAN}    (1): GitHub${NC}"
echo -e "${CYAN}    (2): Mass editing${NC}"
echo -e "${CYAN}    (3): Update math links${NC}"
echo -e "${CYAN}    (4): New math links${NC}"
echo -e "${CYAN}    (5): Show ghost links${NC}"
echo -e "${CYAN}    (6): Show link details${NC}"
printf "\n"

read -n 1 -ep "$(echo -e ${CYAN}"Select: [1-6] "${NC})" action
while [ "$action" -lt "1" ] || [ "$action" -gt "6" ]; do
    read -n 1 -ep "$(echo -e ${CYAN}"Select: [1-6] "${NC})" action
done


case $action in
    "1")
        ~/.config/scripts/gitCommit.sh -m
    ;;
    "2")
        ~/MathWiki/.scripts/massEditing.sh
    ;;
    "3")
        ~/MathWiki/.scripts/mathLinks.sh -u
    ;;
    "4")
        ~/MathWiki/.scripts/mathLinks.sh -n
    ;;
    "5")
        ~/MathWiki/.scripts/stats.sh -g
    ;;
    "6")
        ~/MathWiki/.scripts/stats.sh -l
    ;;
esac
