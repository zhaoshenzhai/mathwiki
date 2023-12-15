---
mathLink-blocks:
    theory: Theory
    interpretation: Interpretation
---

<div class="topSpace"></div>

Date Created: 14/12/2023 22:53:59
Tags: #Type/Definition #Topic/Model_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Structure]], [[Model]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A <b>signature</b> $\sigma\coloneqq\tpl{\mc{F},\mc{R},\mf{a}}$ consists of two disjoint sets $\mc{F}$ and $\mc{R}$ of <b>function</b> and <b>relation</b> symbols, together with an <b>arity</b> function $\mf{a}:\mc{F}\cup\mc{R}\to\N$.
* For each $n\in\N^+$, let $\mc{F}_n\subseteq\mc{F}$ and $\mc{R}_n\subseteq\mc{R}$ be the subset of functions/relations of arity $n$. The function symbols $\mc{C}\coloneqq\mc{F}_0$ of arity $0$ are called <b>constants</b>.

The <b>alphabet</b> of $\FOL\l(\sigma\r)$ in the signature $\sigma$ consists of the symbols in $\sigma$ together with the symbols $=,\lnot,\land,\lor,\rightarrow,\ex,\fa,\raise{2pt},,(,)$ and variable symbols $v_0,v_1,v_2,\dots$

```

<b>Remark.</b> Finite strings of symbols in $\FOL\l(\sigma\r)$ are called <i>$\sigma$-words</i>. The set of <i>$\sigma$-terms</i> is the smallest set $\Term\l(\sigma\r)$ of $\sigma$-words such that $c\in\Term\l(\sigma\r)$ for each $c\in\mc{C}$, $v_i\in\Term\l(\sigma\r)$ for each variable symbol $v_i$, and $f\l(t_1,\dots,t_n\r)\in\Term\l(\sigma\r)$ for each $t_1,\dots,t_n\in\Term\l(\sigma\r)$ and $f\in\mc{F}_n$.
* For a $\sigma$-term $t$, we call the $\sigma$-word $t[\vec{v}]\coloneqq t\l(v_{i_0},\dots,v_{i_{n-1}}\r)$ an <i>extended $\sigma$-term</i>, and write $t[\vec{v}]\in\ExtTerm\l(\sigma\r)$, if $\vec{v}$ includes all the variable symbols appearing in $t$.

We also define the set $\Form\l(\sigma\r)$ of <i>$\sigma$-formulas</i> as the smallest set of $\sigma$-words such that if $s,t\in\Term\l(\sigma\r)$, then $\l(s=t\r)$ is a $\sigma$-formula; if $t_1,\dots,t_n\in\Term\l(\sigma\r)$ and $R\in\mc{R}_n$, then $R\l(t_1,\dots,t_n\r)$ is a $\sigma$-formula; and if $\phi,\psi\in\Form\l(\sigma\r)$ and $v$ is a variable symbol, then $\lnot\phi$, $\phi\land\psi$, $\phi\lor\psi$, $\phi\rightarrow\psi$, $\ex v\phi$, and $\fa v\phi$ are also $\sigma$-formulas.
* For a $\sigma$-formula $\phi$, we say that a variable $v$ is <i>quantified</i> in $\phi$ if $\phi$ contains a substring of the form $\ex v\psi$ or $\fa v\psi$. Otherwise, if $v$ occurs in $\phi$ but is not quantified, then it is said to be <i>free</i>. For a vector of variables $\vec{v}$, call the $\sigma$-word $\phi[\vec{v}]\coloneqq\phi\l(v_{i_0},\dots,v_{i_{n-1}}\r)$ an <i>extended $\sigma$-formula</i>, and write $\phi\in\ExtForm\l(\sigma\r)$, if $\vec{v}$ includes all the free variables of $\phi$ and does not include any variables quantified in $\phi$.

If a $\sigma$-formula $\phi$ does not contain any free variables, then $\phi\in\Sent\l(\sigma\r)$ is said to be a <i>$\sigma$-sentence</i>. Any subcollection of $\Sent\l(\sigma\r)$ is called a <i>$\sigma$-theory</i>.<span style="float:right;">$\blacklozenge$</span> ^theory
