#!/bin/bash

cd ~/MathWiki/

CYAN='\033[0;36m'
RED='\033[0;31m'
RED='\033[0;31m'
YELLOW='\033[0;33m'
NC='\033[0m'

while [ ! -z "$1" ]; do
    case "$1" in
        --total|-t)
            cd ./Notes

            numNotes=$(ls | wc -l)
            numDoubleLinks=$(sed 's/]],\ /]]\n/g' * | grep -Po "\[\[.*\]\]" | wc -l)
            numMathLinks=$(sed 's/),\ /)\n/g' * | grep -Po "\[.*\]\(.*\)" | wc -l)
            numLinks=$(($numDoubleLinks + $numMathLinks))

            cd ..
            cd ./Images

            numImages=$(($(find -type d | wc -l) - 1))

            cd ..

            echo -e "${CYAN}$numNotes notes, $numLinks links, $numImages images${NC}"
        ;;
        --ghost|-g)
            cd ./Notes

            allLinks=$(sed 's/]],\ /]]\n/g' * | grep -Po "\[\[.*\]\]" | sed 's/\[\[//g' | sed 's/\]\]//g' | sed 's/$/.md/g')
            while IFS= read -r link; do
                if [ ! -f "$link" ]; then
                    echo -e "${RED}    $link${NC}"
                fi
            done <<< "$allLinks"

            cd ..
        ;;
        --update|-u)
            sed -i 's/[0-9][0-9]*\snotes/'"$numNotes"' notes/g' README.md
            sed -i 's/[0-9][0-9]*\slinks/'"$numLinks"' links/g' README.md
            sed -i 's/[0-9][0-9]*\simages/'"$numImages"' images/g' README.md
        ;;
        --links|-l)
            cd ./Notes

            axiomConstructions=0
            axiomEquivalences=0

            definitionTypes=0
            definitionExamples=0
            definitionConstructions=0
            definitionGeneralizations=0
            definitionProperties=0
            definitionSufficiencies=0
            definitionEquivalences=0
            definitionJustifications=0

            propositionProvedBy=0
            propositionGeneralizations=0
            propositionExamples=0
            propositionCounterexamples=0

            theoremProvedBy=0
            theoremGeneralizations=0
            theoremExamples=0
            theoremCounterexamples=0

            echo -e "${YELLOW}Definition:${NC}"
            allDefinitions=$(grep -l "#Definition" *)
            while IFS= read -r definition; do
                if [[ -z $(grep "Types: _Not Applicable_" "$definition") ]]; then
                    definitionTypes=$(($definitionTypes + $(grep "Types:" "$definition" | tr ' ' '\n' | grep -c "\]\]\,\|)\,") + 1))
                fi
            done <<< "$allDefinitions"
            echo -e "${YELLOW}   Types: $definitionTypes${NC}"
            while IFS= read -r definition; do
                if [[ -z $(grep "Examples: _Not Applicable_" "$definition") ]]; then
                    definitionExamples=$(($definitionExamples + $(grep "Examples:" "$definition" | tr ' ' '\n' | grep -c "\]\]\,\|)\,") + 1))
                fi
            done <<< "$allDefinitions"
            echo -e "${YELLOW}   Examples: $definitionExamples${NC}"
            while IFS= read -r definition; do
                if [[ -z $(grep "Constructions: _Not Applicable_" "$definition") ]]; then
                    definitionConstructions=$(($definitionConstructions + $(grep "Constructions:" "$definition" | tr ' ' '\n' | grep -c "\]\]\,\|)\,") + 1))
                fi
            done <<< "$allDefinitions"
            echo -e "${YELLOW}   Constructions: $definitionConstructions${NC}"
            while IFS= read -r definition; do
                if [[ -z $(grep "Generalizations: _Not Applicable_" "$definition") ]]; then
                    definitionGeneralizations=$(($definitionGeneralizations + $(grep "Generalizations:" "$definition" | tr ' ' '\n' | grep -c "\]\]\,\|)\,") + 1))
                fi
            done <<< "$allDefinitions"
            echo -e "${YELLOW}   Generalizations: $definitionGeneralizations${NC}"
            while IFS= read -r definition; do
                if [[ -z $(grep "Properties: _Not Applicable_" "$definition") ]]; then
                    definitionProperties=$(($definitionProperties + $(grep "Properties:" "$definition" | tr ' ' '\n' | grep -c "\]\]\,\|)\,") + 1))
                fi
            done <<< "$allDefinitions"
            echo -e "${YELLOW}   Properties: $definitionProperties${NC}"
            while IFS= read -r definition; do
                if [[ -z $(grep "Sufficiencies: _Not Applicable_" "$definition") ]]; then
                    definitionSufficiencies=$(($definitionSufficiencies + $(grep "Sufficiencies:" "$definition" | tr ' ' '\n' | grep -c "\]\]\,\|)\,") + 1))
                fi
            done <<< "$allDefinitions"
            echo -e "${YELLOW}   Sufficiencies: $definitionSufficiencies${NC}"
            while IFS= read -r definition; do
                if [[ -z $(grep "Equivalences: _Not Applicable_" "$definition") ]]; then
                    definitionEquivalences=$(($definitionEquivalences + $(grep "Equivalences:" "$definition" | tr ' ' '\n' | grep -c "\]\]\,\|)\,") + 1))
                fi
            done <<< "$allDefinitions"
            echo -e "${YELLOW}   Equivalences: $definitionEquivalences${NC}"
            while IFS= read -r definition; do
                if [[ -z $(grep "Justifications: _Not Applicable_" "$definition") ]]; then
                    definitionJustifications=$(($definitionJustifications + $(grep "Justifications:" "$definition" | tr ' ' '\n' | grep -c "\]\]\,\|)\,") + 1))
                fi
            done <<< "$allDefinitions"
            echo -e "${YELLOW}   Justifications: $definitionJustifications${NC}"

            echo -e "${YELLOW}Proposition:${NC}"
            allPropositions=$(grep -l "#Proposition" *)
            while IFS= read -r proposition; do
                if [[ -z $(grep "Proved by: _Not Applicable_" "$proposition") ]]; then
                    propositionProvedBy=$(($propositionProvedBy + $(grep "Proved by:" "$proposition" | tr ' ' '\n' | grep -c "\]\]\,\|)\,") + 1))
                fi
            done <<< "$allPropositions"
            echo -e "${YELLOW}   Proved by: $propositionProvedBy${NC}"
            while IFS= read -r proposition; do
                if [[ -z $(grep "Generalizations: _Not Applicable_" "$proposition") ]]; then
                    propositionGeneralizations=$(($propositionGeneralizations + $(grep "Generalizations:" "$proposition" | tr ' ' '\n' | grep -c "\]\]\,\|)\,") + 1))
                fi
            done <<< "$allPropositions"
            echo -e "${YELLOW}   Generalizations: $propositionGeneralizations${NC}"
            while IFS= read -r proposition; do
                if [[ -z $(grep "Examples: _Not Applicable_" "$proposition") ]]; then
                    propositionExamples=$(($propositionExamples + $(grep "Examples:" "$proposition" | tr ' ' '\n' | grep -c "\]\]\,\|)\,") + 1))
                fi
            done <<< "$allPropositions"
            echo -e "${YELLOW}   Examples: $propositionExamples${NC}"
            while IFS= read -r proposition; do
                if [[ -z $(grep "Counterexamples: _Not Applicable_" "$proposition") ]]; then
                    propositionCounterexamples=$(($propositionCounterexamples + $(grep "Counterexamples:" "$proposition" | tr ' ' '\n' | grep -c "\]\]\,\|)\,") + 1))
                fi
            done <<< "$allPropositions"
            echo -e "${YELLOW}   Counterexamples: $propositionCounterexamples${NC}"

            echo -e "${YELLOW}Theorem:${NC}"
            allTheorems=$(grep -l "#Theorem" *)
            while IFS= read -r theorem; do
                if [[ -z $(grep "Proved by: _Not Applicable_" "$theorem") ]]; then
                    theoremProvedBy=$(($theoremProvedBy + $(grep "Proved by:" "$theorem" | tr ' ' '\n' | grep -c "\]\]\,\|)\,") + 1))
                fi
            done <<< "$allTheorems"
            echo -e "${YELLOW}   Proved by: $theoremProvedBy${NC}"
            while IFS= read -r theorem; do
                if [[ -z $(grep "Generalizations: _Not Applicable_" "$theorem") ]]; then
                    theoremGeneralizations=$(($theoremGeneralizations + $(grep "Generalizations:" "$theorem" | tr ' ' '\n' | grep -c "\]\]\,\|)\,") + 1))
                fi
            done <<< "$allTheorems"
            echo -e "${YELLOW}   Generalizations: $theoremGeneralizations${NC}"
            while IFS= read -r theorem; do
                if [[ -z $(grep "Examples: _Not Applicable_" "$theorem") ]]; then
                    theoremExamples=$(($theoremExamples + $(grep "Examples:" "$theorem" | tr ' ' '\n' | grep -c "\]\]\,\|)\,") + 1))
                fi
            done <<< "$allTheorems"
            echo -e "${YELLOW}   Examples: $theoremExamples${NC}"
            while IFS= read -r theorem; do
                if [[ -z $(grep "Counterexamples: _Not Applicable_" "$theorem") ]]; then
                    theoremCounterexamples=$(($theoremCounterexamples + $(grep "Counterexamples:" "$theorem" | tr ' ' '\n' | grep -c "\]\]\,\|)\,") + 1))
                fi
            done <<< "$allTheorems"
            echo -e "${YELLOW}   Counterexamples: $theoremCounterexamples${NC}"

            echo -e "${YELLOW}Axiom:${NC}"
            allAxioms=$(grep -l "#Axiom" *)
            while IFS= read -r axiom; do
                if [[ -z $(grep "Constructions: _Not Applicable_" "$axiom") ]]; then
                    axiomConstructions=$(($axiomConstructions + $(grep "Constructions:" "$axiom" | tr ' ' '\n' | grep -c "\]\]\,\|)\,") + 1))
                fi
            done <<< "$allAxioms"
            echo -e "${YELLOW}   Equivalences: $axiomEquivalences${NC}"
            while IFS= read -r axiom; do
                if [[ -z $(grep "Equivalences: _Not Applicable_" "$axiom") ]]; then
                    axiomEquivalences=$(($axiomEquivalences + $(grep "Equivalences:" "$axiom" | tr ' ' '\n' | grep -c "\]\]\,\|)\,") + 1))
                fi
            done <<< "$allAxioms"
            echo -e "${YELLOW}   Constructions: $axiomConstructions${NC}"
        ;;
    esac
shift
done
