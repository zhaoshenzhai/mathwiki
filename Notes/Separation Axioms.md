---
mathLink: auto
mathLink-blocks:
    hausdorff-implies-unique-limit: Hausdorff $\Rightarrow$ limits are unique
---

<div class="topSpace"></div>

Date Created: 10/09/2023 15:09:23
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: [[Metric Space]]
Constructions: [[k-Space]]
Generalizations: <i>Not Applicable</i>

Properties: [[Basic properties of Hausdorff spaces]], [[Compact Space#^compact-hausdorff-implies-closed]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $X$ be a topological space. The following ‘separation axioms’ impose the existence of open sets that separate points/sets from each other:
* (Kolmogorov). $X$ is $T_0$ if whenever $x\neq y$, then they do not have the same neighborhoods.
* (Accessible). $X$ is $T_1$ if whenever $x\neq y$, then both have neighborhoods not containing the other.
* (Hausdorff). $X$ is $T_2$ if whenever $x\neq y$, there are disjoint open neighborhoods $U\in x$ and $V\ni y$.
* (Regular). $X$ is $T_3$ if it is $T_1$ and for each closed set $A\subseteq X$ and $y\not\in A$, there are disjoint open neighborhoods $U\supseteq A$ and $V\ni y$.
* (Normal). $X$ is $T_4$ if it is $T_1$ and for each pair of disjoint closed sets $A,B\subseteq X$, there are disjoint open neighborhoods $U\supseteq A$ and $V\supseteq B$.

```

<b>Remark.</b> Note that $X$ is $T_1$ iff every singleton $\l\{x\r\}$ is closed. In particular, this shows that $T_j\Rightarrow T_i$ whenever $i<j$ (the claims for when $j=1,2$ are trivial).
* Indeed, if $X$ is $T_1$ and $x\in X$, choose an open set $U_y\ni y$ for every $y\neq x$. Then $\l\{x\r\}^c=\bigcup_{y\neq x}U_y$ is open, hence $\l\{x\r\}$ is closed. Conversely, if $x\neq y$, then both $\l\{x\r\}^c$ is an open neighborhood of $y$ not containing $x$ and similarly for $\l\{y\r\}^c$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Every sequence $\tpl{x_n}$ in a Hausdorff space $X$ converges to at most one point. Indeed, suppose that $x_n\to x$. For any other $x\neq x'\in X$, let $U\ni x$ and $U'\ni x$ be disjoint neighborhoods thereof. Then $\fa^\infty n\in\N:x_n\in U$, so in particular we have $\fa^\infty n\in\N:x_n\not\in U'$. Thus $x_n\not\to x'$, as desired.<span style="float:right;">$\blacklozenge$</span> ^hausdorff-implies-unique-limit
