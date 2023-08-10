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

<b>Remark.</b> Equivalently, we may consider a family $\mc{F}\subseteq\pow\l(X\r)$ containing $\em$ and $X$, but is now closed under (arbitrary) intersections and finite unions instead, whose elements are called <b>closed sets</b>. Every topology induces a family of closed sets and vice-versa.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A sufficient criterion for a subset $U\subseteq X$ to be open is if every $x\in U$ admits an open set $U_x\ni x$ such that $U_x\subseteq U$. We say that $U$ is <b>covered</b> by $\l\{U_x\r\}$.<span style="float:right;">$\blacklozenge$</span>
