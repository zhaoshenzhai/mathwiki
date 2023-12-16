---
mathLink: Axioms for $\FOL\l(\sigma\r)$
---

<div class="topSpace"></div>

Date Created: 15/12/2023 19:15:04
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Proofs and Syntactic Truth]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Axioms of $\FOL\l(\sigma\r)$).

Fix a signature $\sigma$. The collection $\Axioms\l(\sigma\r)$ of all $\sigma$-formulas, ranging over each $\sigma$-formula $\phi,\psi,\theta$, each $\sigma$-term $t$, each variable $v,x,y,z$, each function symbol $f\in\mc{F}$, each relation symbol $R\in\mc{R}$, and each vector of variables $\vec{x},\vec{y}$ of appropriate arity, form the <b>axioms</b> of $\FOL\l(\sigma\r)$:
* (Conclusion $\Rightarrow$ Implication). $\phi\rightarrow\l(\psi\rightarrow\phi\r)$.
* (Implication is transitive). $\l(\phi\rightarrow\psi\r)\rightarrow\l[\l(\phi\rightarrow\l(\psi\rightarrow\theta\r)\r)\rightarrow\l(\phi\rightarrow\theta\r)\r]$.
* (Proof-by-contradiction). $\l(\lnot\phi\rightarrow\psi\r)\rightarrow\l[\l(\lnot\phi\rightarrow\lnot\psi\r)\rightarrow\phi\r]$.
* (Instantiation and Generalization). $\l(\fa v\phi\r)\rightarrow\phi\l(t/v\r)$ whenever $t$ is free in $v$, and $\phi\rightarrow\l(\fa v\phi\r)$.
* (Equality). $x=x$, $\l(x=y\r)\rightarrow\l(y=x\r)$, and $\l(x=y\r)\rightarrow\l[\l(y=z\r)\rightarrow\l(x=z\r)\r]$.
* (Functions and Relations). $(\vec{x}=\vec{y})\rightarrow\l(f(\vec{x})=f(\vec{y})\r)$ and $(\vec{x}=\vec{y})\rightarrow\l(R(\vec{x})=R(\vec{y})\r)$.

```
