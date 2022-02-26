<br />
<br />

Date Created: 23/01/2022 19:12:21
Context: [$\textrm{FOL}$](obsidian://open?file=First%20Order%20Logic)$\,\,\rightsquigarrow\,\,$[$\textrm{ZF}$](obsidian://open?file=Zermelo-Fraenkel%20Set%20Theory)
Tags: #Proposition #Closed 

Proved by: [[Cardinality of power set]], [[Union of empty set is empty]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a set. Then the trivial topology_ $\mc{T}_\textrm{trivial}=\l\{\em,X\r\}$ _is a topology on $X$._

```

_Proof_. We verify the axioms for a topology on $X$:
* ($\axi{Top1}$): This follows by definition.
* ($\axi{Top2}$): Observe that $\l|\pow\l(\l\{\em,X\r\}\r)\r|=2^{\l|\l\{\em,X\r\}\r|}=2^2=4$; we check the axiom for each subset:
    * For $\em$, we have $\bigcup\em=\em\in\mc{T}_\textrm{trivial}$.
    * For $\l\{\em\r\}$, we have $\bigcup\l\{\em\r\}=\em\in\mc{T}_\textrm{trivial}$ since no set $y$ satisfies $y\in\em$.
    * For $\l\{X\r\}$, we have $\bigcup\l\{X\r\}=X\in\mc{T}_\textrm{trivial}$ since $x\in\bigcup\l\{X\r\}\Leftrightarrow x\in X$.
    * For $\l\{\em,X\r\}$, we have $\bigcup\l\{\em,X\r\}=X\in\mc{T}_\textrm{trivial}$; this follows from the previous results.
* ($\axi{Top3}$): Observe that there are three non-empty subsets of $\l\{\em,X\r\}$; we check the axiom for each subset:
    * For $\l\{\em\r\}$, we have $\bigcap\l\{\em\r\}=\em\in\mc{T}_\textrm{trivial}$ since no set $y$ satisfies $y\in\em$.
    * For $\l\{X\r\}$, we have $\bigcap\l\{X\r\}=X\in\mc{T}_\textrm{trivial}$ since $x\in\bigcap\l\{X\r\}\Leftrightarrow x\in X$.
    * For $\l\{\em,X\r\}$, we have $\bigcap\l\{\em,X\r\}=\em\in\mc{T}_\textrm{trivial}$ since no set $y$ satisfies $y\in\em$<span style="float:right;">$\blacksquare$</span> 
