<div class="topSpace"></div>

Date Created: 27/12/2023 21:48:40
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: [[Convergence of Sequences in R]]
Constructions: [[Sequential Space]], [[Compact Space#^sequential-compactness]]
Generalizations: <i>Not Applicable</i>

Properties: [[Characterizations of topology via nets]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $X$ be a topological space. A <b>net</b> in $X$ is a map $x_\blob:I\to X$ from a directed set $I$. For a subset $A\subseteq X$, we say that $x_\blob$ is <b>eventually in</b> (resp. <b>frequently in</b>) $A$ if $\ex i\in I,\fa j\geq i:x_j\in A$ (resp. $\fa i\in I,\ex j\geq i:x_j\in A$).
* A point $x\in X$ is said to be a <b>limit point</b> of $x_\blob$ if $x_\blob$ is eventually in every neighborhood of $x$.
* A point $x\in X$ is said to be a <b>cluster point</b> of $x_\blob$ if $x_\blob$ is frequently in every neighborhood of $x$.

A <b>subnet</b> of a net $x_\blob:I\to X$ is a net $y_\blob:J\to X$ together with a map $\phi:J\to I$ such that $x_{\phi\l(j\r)}=y_j$ and $\fa i_0\in I,\ex j_0\in J\st j\geq j_0\Rightarrow\phi\l(j\r)\geq i_0$.

```

<b>Remark.</b> We let $\lim x_\blob$ denote the set of limit points of $x_\blob$ and write $x_\blob\to x$ if $x\in\lim x_\blob$. Note that $X$ is Hausdorff iff every net converges to at-most one point.<span style="float:right;">$\blacklozenge$</span>
