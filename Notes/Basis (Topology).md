<div class="topSpace"></div>

Date Created: 23/01/2022 21:25:09
Tags: #Type/Definition #Topic/Topology

Types: <i>Not Applicable</i>
Examples: [[Order Topology]], [[Metric Topology]], [[Product Space (Topology)]], [[Trivial topology (basis)]], [[Discrete topology (basis)]], [[Standard topology on R (basis; rational endpoints)]], [[Product topology (basis; component from bases)]], [[Subspace topology (basis)]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Criteria for subbasis to generate existing basis]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $X$ be a set. A <b>basis for a topology on $X$</b> is a collection $\mc{B}\subseteq\pow\l(X\r)$ that covers $X$ and covers $B_1\cap B_2$ for every $B_1,B_2\in\mc{B}$.
* A basis $\mc{B}$ generates a topology $\mc{T}_\mc{B}\coloneqq\l\{U\in\pow\l(X\r)\st\fa x\in U,\ex B\in\mc{B}:x\in B\subseteq U\r\}$.

```

<b>Remark.</b> That $\em,X\in\mc{T}_\mc{B}$ and is closed under unions is easy to see. If $U_1,U_2\in\mc{T}_\mc{B}$, then for any $x\in U_1\cap U_2$ there exist bases $B_1,B_2\in\mc{B}$ so that $x\in B_1\subseteq U_1$ and $x\in B_2\subseteq U_2$. Since $B_1\cap B_2$ is covered by $\mc{B}$, there is a basis element $B\in\mc{B}$ so that $x\in B\subseteq U_1\cap U_2$, showing that $U_1\cap U_2\in\mc{T}_\mc{B}$ too.
* It is also easy to see that $\mc{T}_\mc{B}$ contains exactly the subsets of $X$ formed by taking unions of elements in $\mc{B}$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Let $\mc{T}$ be a topology on $X$. A sufficient criterion for a collection $\mc{B}\subseteq\mc{T}$ to be a basis for $\mc{T}$ is that every open set $U\in\mc{T}$ is covered by $\mc{B}$. Indeed, $\mc{B}$ covers $X$ since $X\in\mc{T}$. For the intersection property, let $B_1,B_2\in\mc{B}$ and take $x\in B_1\cap B_2$. Then $B_1\cap B_2\in\mc{T}$, so it is covered by $\mc{B}$.<span style="float:right;">$\blacklozenge$</span>
