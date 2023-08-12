<div class="topSpace"></div>

Date Created: 23/01/2022 19:05:00
Tags: #Type/Definition #Topic/Topology

Types: [[Compact Space]], [[Sequentially Compact Space]], [[Limit-point Compact Space]], [[Connected Space]]
Examples: [[Order Space (Topology)]], [[Trivial Topology]], [[Discrete Topology]], [[Cofinite Topology]], [[Cocountable Topology]]
Constructions: [[Continuous Function]], [[Closure et al]], [[Product Space (Topology)]], [[Topological Subspace]], [[Sequential Limits]], [[Functional Limits]], [[Covering Space]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Basis and Subbasis]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $X$ be a set. A <b>topology on $X$</b> is a family $\mc{T}\subseteq\pow\l(X\r)$ containing $\em$ and $X$ and is closed under (arbitrary) unions and finite intersections.
* The set $X$, equipped with a topology $\mc{T}$ on $X$, is called a <b>topological space</b>.
* Elements $U\in\mc{T}$ are called <b>open sets</b>, whose complements are called <b>closed sets</b>.

```

<b>Remark.</b> A sufficient criterion for a subset $U\subseteq X$ to be open is if every $x\in U$ admits an open set $U_x\ni x$ such that $U_x\subseteq U$. In this case, we see that $U=\bigcup_{x\in X}U_x$ with each $U_x$ open, so $U$ is indeed open.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Equivalently, we may consider a family $\mc{F}\subseteq\pow\l(X\r)$ containing $\em$ and $X$, whose elements are called <b>closed sets</b>, but is now closed under (arbitrary) intersections and finite unions instead. Every topology induces a family of closed sets and vice-versa.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> The collection of all topologies on $X$ forms a lattice under $\subseteq$. If $\mc{T}_1\subseteq\mc{T}_2$ are topologies on $X$, then $\mc{T}_2$ is <i>finer</i> than $\mc{T}_1$ and $\mc{T}_1$ is <i>coarser</i> than $\mc{T}_2$.
* If $\mc{B}_1$ and $\mc{B}_2$ are respective bases for the topologies $\mc{T}_1$ and $\mc{T}_2$, then $\mc{T}_2$ is finer than $\mc{T}_1$ iff for each $x\in X$ and each $B_1\in\mc{B}_1$ containing $x$, there is a basis element $B_2\in\mc{B}_2$ such that $x\in B_2\subseteq B_1$.<span style="float:right;">$\blacklozenge$</span>
