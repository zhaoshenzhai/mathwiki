#!/bin/bash

YELLOW='\033[0;33m'
PURPLE='\033[0;35m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
BLUE='\033[0;34m'
RED='\033[0;31m'
NC='\033[0m'

cd $MATHWIKI_DIR/Notes

if [[ ! -z $(grep 'ad-Definition_Dark' *) ]]; then
    sed -i 's/ad-Definition_Dark/ad-Definition/g' *
    sed -i 's/ad-Proposition_Dark/ad-Proposition/g' *
    sed -i 's/ad-Theorem_Dark/ad-Theorem/g' *
    sed -i 's/ad-Axiom_Dark/ad-Axiom/g' *
else
    sed -i 's/ad-Definition/ad-Definition_Dark/g' *
    sed -i 's/ad-Proposition/ad-Proposition_Dark/g' *
    sed -i 's/ad-Theorem/ad-Theorem_Dark/g' *
    sed -i 's/ad-Axiom/ad-Axiom_Dark/g' *
fi
