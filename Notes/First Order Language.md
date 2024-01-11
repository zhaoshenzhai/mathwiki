<div class="topSpace"></div>

Date Created: 14/12/2023 22:53:59
References: #Ref/Anu23 #Ref/Anu23_318
Tags: #Type/Definition #Topic/Logic/Model_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Structure]], [[Axioms of First Order Logic]], [[Theory]], [[Proofs and Syntactic Truth]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A <b>signature</b> $\sigma\coloneqq\tpl{\mc{F},\mc{R},\mf{a}}$ consists of two disjoint sets $\mc{F}$ and $\mc{R}$ of <b>function</b> and <b>relation</b> symbols, together with an <b>arity</b> function $\mf{a}:\mc{F}\cup\mc{R}\to\N$.
* For each $n\in\N^+$, let $\mc{F}_n\subseteq\mc{F}$ and $\mc{R}_n\subseteq\mc{R}$ be the subset of functions/relations of arity $n$. The function symbols $\mc{C}\coloneqq\mc{F}_0$ of arity $0$ are called <b>constants</b>.

The <b>alphabet</b> of $\FOL\l(\sigma\r)$ in the signature $\sigma$ consists of the symbols in $\sigma$ together with the symbols $=,\lnot,\land,\lor,\rightarrow,\ex,\fa,\raise{2pt},,(,)$ and a set $\Var$ of <b>variable symbols</b>.

```

<b>Remark.</b> Finite strings of symbols in $\FOL\l(\sigma\r)$ are called <i>$\sigma$-words</i>. We define the set $\Term\l(\sigma\r)$ of <i>$\sigma$-terms</i> as the smallest set of $\sigma$-words containing $\mc{C}$ and $\Var$ such that $f\l(t_1,\dots,t_n\r)\in\Term\l(\sigma\r)$ for each $t_1,\dots,t_n\in\Term\l(\sigma\r)$ and $f\in\mc{F}_n$, and the set of <i>$\sigma$-formulas</i> $\Form\l(\sigma\r)$ as the smallest set of $\sigma$-words such that if $s,t\in\Term\l(\sigma\r)$, then $\l(s=t\r)$ is a $\sigma$-formula; if $t_1,\dots,t_n\in\Term\l(\sigma\r)$ and $R\in\mc{R}_n$, then $R\l(t_1,\dots,t_n\r)$ is a $\sigma$-formula; and if $\phi,\psi\in\Form\l(\sigma\r)$ and $v\in\Var$, then $\lnot\phi$, $\phi\land\psi$, $\phi\lor\psi$, $\phi\rightarrow\psi$, $\ex v\phi$, and $\fa v\phi$ are also $\sigma$-formulas. If a $\sigma$-formula $\phi$ does not contain any free variables, then $\phi\in\Sent\l(\sigma\r)$ is said to be a <i>$\sigma$-sentence</i>.
* For a $\sigma$-term $t$, we write $t(\vec{v})$ for $t$ to indicate that $\vec{v}$ includes all the variable symbols appearing in $t$. Similarly, we write $\phi(\vec{v})$ for a $\sigma$-formula $\phi$ if $\vec{v}$ includes all the free variables of $\phi$ and does not include any quantified variable in $\phi$, where a variable $v$ is <i>quantified</i> in $\phi$ if it contains a substring of the form $\ex v\psi$ or $\fa v\psi$, and is <i>free</i> if $v$ occurs in $\phi$ but is not quantified.
* For a $\sigma$-formula $\phi(v)$ and a $\sigma$-term $t(\vec{v})$ where no variable in $\vec{v}$ is quantified in $\phi$, the <i>substitution</i> of $t$ into $v$ in $\phi$ is the $\sigma$-formula $\phi\l(t/v\r)$ obtained by replacing each occurrence of $v$ by $t$.<span style="float:right;">$\blacklozenge$</span>
