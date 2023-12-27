---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 27/12/2023 16:35:40
Tags: #Type/Definition #Topic/Topology/Later

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Boundary]], [[Accumulation Point]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $A\subseteq X$ be a subset of a topological space $X$.
* The <b>closure</b> of $A$ in $X$, denoted by $\bar{A}$ or $\tcl A$, is the intersection of all closed sets containing $A$.
* The <b>intersection</b> of $A$ in $X$, denoted by $A^\circ$ or $\tint A$, is the union of all open sets contained in $A$.

```

<b>Remark.</b> Take $x\in X$. Clearly $x\in\bar{A}$ iff every open neighborhood of $x$ intersects $a$, and also $x\in A^\circ$ iff there is an open neighborhood of $x$ disjoint from $A^c$. Note that $A$ is closed iff $A=\bar{A}$, and $A$ is open iff $A=A^\circ$. They are also ‘dual’, in the sense that $\l(A^\circ\r)^c=\bar{A^c}$ and $(\bar{A})^c=\l(A^c\r)^\circ$.<span style="float:right;">$\blacklozenge$</span>
