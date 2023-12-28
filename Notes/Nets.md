<div class="topSpace"></div>

Date Created: 27/12/2023 21:48:40
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Characterizations of topology via nets]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $X$ be a topological space. A <b>net</b> in $X$ is a map $x_\blob:I\to X$ from a directed set $I$. For a subset $A\subseteq X$, we say that $x_\blob$ is <b>eventually in</b> (resp. <b>frequently in</b>) $A$ if $\ex i\in I,\fa j\geq i:x_j\in A$ (resp. $\fa i\in I,\ex j\geq i:x_j\in A$).
* A point $x\in X$ is said to be a <b>limit</b> of $x_\blob$ if $x_\blob$ is eventually in every neighborhood of $x$. In this case, we write $x_\blob\to x$.
* A point $x\in X$ is said to be a <b>cluster point</b> of $x_\blob$ if $x_\blob$ is frequently in every neighborhood of $x$.

```
