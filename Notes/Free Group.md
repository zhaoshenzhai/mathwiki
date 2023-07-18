<div class="topSpace"></div>

Date Created: 10/05/2023 14:03:31
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Generating Set (Group)]]
Generalizations: <i>Not Applicable</i>

Properties: [[Universal Property of Free Groups]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $X$ be a set. Fix any set $X^{-1}$ in bijection with $X$ and any $e\not\in X\cup X^{-1}$.
* A <b>word in $A\coloneqq X\cup X^{-1}\cup\l\{e\r\}$</b> is a sequence in $A$ where $a_i=e$ eventually. A word is said to be <b>reduced</b> if it has no non-trailing $e$’s and no consecutive inverses, where the <b>inverse of $x$</b> is the element $x^{-1}\in X^{-1}$ in correspondence with $x$.

The <b>free group on $X$</b> is the group $F\l(X\r)$ consisting of all reduced words with the concatenation operation.
* A group $G$ is said to be <b>free</b> if there is some set $X$ such that $G=F\l(X\r)$, in which case $X$ is a <b>free basis for $G$</b> and $\l|X\r|$ is called the <b>rank of $G$</b>.

```
