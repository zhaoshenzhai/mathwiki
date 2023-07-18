<div class="topSpace"></div>

Date Created: 10/05/2023 14:03:31
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Generating Set (Group)]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
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

<b>Remark.</b> The free group is equipped with the natural map $j:X\to F\l(X\r):x\mapsto\tpl{x,e,e,\dots}$, which is initial in the category of functions $f:X\to G$ to a group $G$.
![[Images/2023-05-10_141434/image.svg|125]]Indeed, any homomorphism $\phi:F\l(X\r)\to G$ with $f=\phi\circ j$ must satisfy $\phi\l(x_1^{\epsilon_1},\dots,x_n^{\epsilon_n},e,e,\dots\r)=f\l(x_1\r)^{\epsilon_1}\cdots f\l(x_n\r)^{\epsilon_n}$ for $x_i\in X$ and $\epsilon_i=\pm1$, and the function defined this way is a homomorphism.<span style="float:right;">$\blacklozenge$</span>
