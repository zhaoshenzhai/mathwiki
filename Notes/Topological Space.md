<div class="topSpace"></div>

Date Created: 23/01/2022 19:05:00
Tags: #Type/Definition #Topic/Topology

Types: [[Compact Space]], [[Sequentially Compact Space]], [[Limit-point Compact Space]], [[Connected Space]]
Examples: [[Order Space (Topology)]], [[Trivial Topology]], [[Discrete Topology]], [[Cofinite Topology]], [[Cocountable Topology]]
Constructions: [[Continuous Function]], [[Closure et al]], [[Product Space (Topology)]], [[Topological Subspace]], [[Sequential Limits]], [[Functional Limits]], [[Covering Space]], [[Lattice of Topologies]]
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
