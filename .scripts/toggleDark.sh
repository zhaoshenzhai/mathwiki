#!/bin/bash

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
