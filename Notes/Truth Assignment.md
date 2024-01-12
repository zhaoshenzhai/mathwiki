<div class="topSpace"></div>

Date Created: 11/01/2024 17:00:04
References: #Ref/Kra19
Tags: #Type/Definition #Topic/Logic/Proof_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Propositional Proof System]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\sigma$ be a propositional signature. A <b>truth assignment</b> of $\sigma$ is a map $\tau:\sigma\to\l\{0,1\r\}$ that assigns to each $x\in\sigma$ its <b>interpretation</b> $x^\tau\coloneqq\tau\l(x\r)$.

```

<b>Remark.</b> A truth assignment $\tau$ is what gives <i>semantics</i> to the <i>syntactic</i> definition of $\sigma$, which can be extended to all $\sigma$-formulas inductively by $\tau\l(\top\r)\coloneqq1$, $\tau\l(\bot\r)\coloneqq0$, and for any $\sigma$-formulas $\phi,\psi\in\Form\l(\sigma\r)$, setting $\tau\l(\phi\land\psi\r)\coloneqq\min\l\{\tau\l(\phi\r),\tau\l(\psi\r)\r\}$, $\tau\l(\phi\lor\psi\r)\coloneqq\max\l\{\tau\l(\phi\r),\tau\l(\psi\r)\r\}$, and $\tau\l(\lnot\phi\r)\coloneqq1-\tau\l(\phi\r)$. This allows us to interpret any $\sigma$-formula $\phi$ as <i>$\tau$-true</i> if $\tau\l(\phi\r)=1$ and <i>$\tau$-false</i> if $\tau\l(\phi\r)=0$. Finally, the <i>truth table</i> of a $\sigma$-formula $\phi(\vec{x})$ is the boolean function $\bar{\phi}:\l\{0,1\r\}^{|\vec{x}|}\to\l\{0,1\r\}$ that maps $\vec{b}$ to the interpretation defined by extending $\tau\l(x_i\r)\coloneqq b_i$ for all $1\leq i\leq n$.
* If $\phi\in\Form\l(\sigma\r)$ is $\tau$-true for any truth assignment $\tau$, then $\phi$ is said to be a <i>tautology</i>, and if $\phi$ is $\tau$-true for some truth assignment $\tau$, then $\phi$ is <i>satisfiable</i> and write $\tau\models\phi$. We let $\Taut\l(\sigma\r)$ and $\Sat\l(\sigma\r)$ denote the set of all tautologies/satisfiable formulas, and let $\UnSat\l(\sigma\r)\coloneqq\lnot\Sat\l(\sigma\r)$ denote the <i>unsatisfiable</i> $\sigma$-formulas.

A <i>$\sigma$-theory</i> $T$ is a set of $\sigma$-formulas, and we write $\tau\models T$ if $\tau\models\phi$ for every $\phi\in T$. We say that $T$ <i>logically implies</i> $\phi$, written $T\models\phi$, if $\tau\models\phi$ for every $\tau\models T$.<span style="float:right;">$\blacklozenge$</span>
