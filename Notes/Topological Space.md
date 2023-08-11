<div class="topSpace"></div>

Date Created: 23/01/2022 19:05:00
Tags: #Type/Definition #Topic/Topology

Types: [[Compact Space]], [[Sequentially Compact Space]], [[Limit-point Compact Space]], [[Connected Space]]
Examples: [[Order Space (Topology)]], [[Trivial Topology]], [[Discrete Topology]], [[Cofinite Topology]], [[Cocountable Topology]]
Constructions: [[Continuous Function]], [[Boundary Point and Boundary]], [[Product Space (Topology)]], [[Topological Subspace]], [[Sequential Limits]], [[Functional Limits]], [[Covering Space]], [[Lattice of Topologies]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Basis (Topology)]], [[Subbasis (Topology)]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $X$ be a set. A <b>topology on $X$</b> is a family $\mc{T}\subseteq\pow\l(X\r)$ containing $\em$ and $X$ and is closed under (arbitrary) unions and finite intersections.
* The set $X$, equipped with a topology $\mc{T}$ on $X$, is called a <b>topological space</b>.
* Elements $U\in\mc{T}$ are called <b>open sets</b>, whose complements are called <b>closed sets</b>.

```

<b>Remark.</b> Equivalently, we may consider a family $\mc{F}\subseteq\pow\l(X\r)$ containing $\em$ and $X$, whose elements are called <b>closed sets</b>, but is now closed under (arbitrary) intersections and finite unions instead. Every topology induces a family of closed sets and vice-versa.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A sufficient criterion for a subset $U\subseteq X$ to be open is if every $x\in U$ admits an open set $U_x\ni x$ such that $U_x\subseteq U$. In this case, we see that $U=\bigcup_{x\in X}U_x$ with each $U_x$ open, so $U$ is indeed open.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Fix a subset $A\subseteq X$. The <i>closure</i> of $A$ is the intersection $\bar{A}$ of all closed sets containing $A$, and similarly the <i>interior</i> of $A$ is the union $A^\circ$ of all open sets contained in $A$. The operations are ‘dual’ in the sense that $\l(A^\circ\r)^c=\bar{A^c}$ and $(\bar{A})^c=\l(A^c\r)^\circ$. We note that $x\in\bar{A}$ iff every neighborhood of $x$ intersects $A$.
* We prove the contrapositive. Indeed, if $x\not\in\bar{A}$, then there is a closed set $F\supseteq A$ such that $x\not\in F$. Then $x\in U\coloneqq F^c$, which is open, and $U\cap A\subseteq U\cap F=\em$. Conversely, if $U$ is a neighborhood of $x$ disjoint from $A$, then $x\not\in F\coloneqq U^\comp$, which is closed and contains $A$. Thus $x\not\in\bar{A}$.

The <i>boundary</i> of $A$ is the difference $\del A\coloneqq\bar{A}\comp A^\circ$. Since $\l(A^\circ\r)^c=\bar{A^c}$, we see that $x\in\del A$ iff every neighborhood of $x$ intersects both $A$ and $A^c$. Note that $\bar{A}=A\cup\del A$.
