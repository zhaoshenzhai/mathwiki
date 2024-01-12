<div class="topSpace"></div>

Date Created: 11/01/2024 15:41:22
References: #Ref/Rui19 #Ref/Kra19
Tags: #Type/Definition #Topic/Logic/Proof_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Hilbert Calculus]], [[Truth Assignment]], [[Propositional Proof System]]
Generalizations: [[First Order Language]]

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Language of Propositional Logic).

A <b>propositional language</b> $\PL\l(\sigma\r)$ is an infinite set $\sigma$ of <b>atomic variables</b>, called a <b>propositional signature</b>, together with the symbols $\top,\bot,\lnot,\land,\lor,\raise{2pt},,(,)$.

```

<b>Remark.</b> Finite strings of symbols in $\PL\l(\sigma\r)$ are called <i>$\sigma$-strings</i>. We define the set $\Form\l(\sigma\r)$ of <i>$\sigma$-formulas</i> as the smallest set containing $\sigma$ and $\l\{\top,\bot\r\}$ such that if $\phi,\psi\in\Form\l(\sigma\r)$, then so are $\phi\land\psi$, $\phi\lor\psi$, and $\lnot\phi$. For an atom $x\in\sigma$ and $b\in\l\{0,1\r\}$, we say that $x^b$ is a <i>literal</i>, and we call a disjunction of literals a <i>clause</i>.
* <span style="color:pink">Encodings of formulas and proofs?</span><span style="float:right;">$\blacklozenge$</span>
