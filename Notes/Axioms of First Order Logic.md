---
mathLink: Axioms for $\FOL\l(\sigma\r)$
---

<div class="topSpace"></div>

Date Created: 15/12/2023 19:15:04
Tags: #Type/Definition #Topic/Proof_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Proofs and Syntactic Truth]]
Generalizations: <i>Not Applicable</i>

Properties: [[Basic provable facts and the Deduction Theorem]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Axioms of $\FOL\l(\sigma\r)$).

Fix a signature $\sigma$. The collection $\Axioms\l(\sigma\r)$ of all $\sigma$-formulas, ranging over each $\sigma$-formula $\phi,\psi,\theta$, each $\sigma$-term $t$, each variable $u,v,x,y,z$, each function symbol $f\in\mc{F}$, each relation symbol $R\in\mc{R}$, and each vector of variables $\vec{x},\vec{y}$ of appropriate arity, form the <b>axioms</b> of $\FOL\l(\sigma\r)$:
* $\phi\rightarrow\l(\psi\rightarrow\phi\r)$ $\color{gray}{\textrm{\it{(if-true-then-implied)}}}$ and $\l(\phi\rightarrow\psi\r)\rightarrow\l[\l(\phi\rightarrow\l(\psi\rightarrow\theta\r)\r)\rightarrow\l(\phi\rightarrow\theta\r)\r]$ $\color{gray}{\textrm{\it{(implication-is-transitive)}}}$.
* $\l(\lnot\phi\rightarrow\psi\r)\rightarrow\l[\l(\lnot\phi\rightarrow\lnot\psi\r)\rightarrow\phi\r]$ $\color{gray}{\textrm{\it{(proof-by-contradiction)}}}$.
* $\fa v\phi\rightarrow\phi\l(t/v\r)$ whenever $t$ is free in $v$ $\color{gray}{\textrm{\it{(instantiation)}}}$ and $\phi\rightarrow\fa u\phi\l(u/v\r)$ whenever $u$ is free in $v$ $\color{gray}{\textrm{\it{(generalization)}}}$.
* $x=x$ $\color{gray}{\textrm{\it{(equality-is-reflexive)}}}$, $\l(x=y\r)\rightarrow\l(y=x\r)$ $\color{gray}{\textrm{\it{(equality-is-symmetric)}}}$, and $\l(x=y\r)\rightarrow\l[\l(y=z\r)\rightarrow\l(x=z\r)\r]$ $\color{gray}{\textrm{\it{(equality-is-transitive)}}}$.
* $(\vec{x}=\vec{y})\rightarrow\l(f(\vec{x})=f(\vec{y})\r)$ $\color{gray}{\textrm{\it{(functions-preserve-equality)}}}$ and $(\vec{x}=\vec{y})\rightarrow\l(R(\vec{x})\rightarrow R(\vec{y})\r)$ $\color{gray}{\textrm{\it{(relations-preserve-equality)}}}$.

```
