#!/bin/bash

repeat="Y"
while [[ "$repeat" == "Y" ]]; do
    source $MATHWIKI_DIR/.scripts/stats.sh -u
    source $MATHWIKI_DIR/.scripts/stats.sh -p
    echo ""

    echo -e "${CYAN}Actions:${NC}"
    echo -e "    ${CYAN}(1): Git${NC}"
    echo -e "    ${CYAN}(2): New${NC}"
    echo -e "    ${CYAN}(3): Search${NC}"
    echo -e "    ${CYAN}(4): Restore${NC}"
    echo -e "    ${CYAN}(5): Ghost links${NC}"
    echo -e "    ${CYAN}(6): Update images${NC}"
    echo -e "    ${CYAN}(7): Publish notes${NC}"
    echo ""

    read -n 1 -ep "$(echo -e ${CYAN}"Select: [1|(1-8)]${NC} ")" action
    num='^[0-9]+$'
    if ( [[ $action =~ $num ]] && [ "$action" -ge "1" ] && [ "$action" -le "7" ] ) || [[ -z "$action" ]]; then
        if [[ -z "$action" ]]; then
            action="1"
        fi
    elif [[ "$action" == "q" ]]; then
        exit
    else
        clear
        $MATHWIKI_DIR/.scripts/main.sh
        exit
    fi

    cd $MATHWIKI_DIR/Notes

    case $action in
        1) $DOTFILES_DIR/scripts/gitCommit.sh -r "MathWiki" ;;
        2) $MATHWIKI_DIR/.scripts/newNote.sh ;;
        3) $MATHWIKI_DIR/.scripts/search.sh ;;
        4) $MATHWIKI_DIR/.scripts/restore.sh ;;
        5) $MATHWIKI_DIR/.scripts/ghost.sh ;;
        6) $MATHWIKI_DIR/.scripts/updateImages.sh -a -g ;;
        7) $MATHWIKI_DIR/.scripts/publish.sh ;;
    esac

    echo ""
    echo -e "${GREEN}DONE${NC}"
    echo ""

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
