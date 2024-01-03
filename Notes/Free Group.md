---
mathLink-blocks:
    universal-property-of-free-groups: Universal Property of Free Groups
---

<div class="topSpace"></div>

Date Created: 10/05/2023 14:03:31
References:
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

Let $X$ be a set. The <b>free group</b> on $X$ is the initial object $F\l(X\r)$ in the category of functions $f:X\to G$ to a group $G$.
![[Images/2023-05-10_141434/image.svg|125]]

```

<b>Remark.</b> The free group $F\l(X\r)$ can be constructed as follows.
^universal-property-of-free-groups
* Fix any set $X^{-1}$ in bijection with $X$ and any $e\not\in X\cup X^{-1}$. A <i>word in $A\coloneqq X\cup X^{-1}\cup\l\{e\r\}$</i> is a sequence in $A$ where $a_i=e$ eventually. A word is said to be <i>reduced</i> if it has no non-trailing $e$’s and no consecutive inverses, where the <i>inverse of $x$</i> is the element $x^{-1}\in X^{-1}$ in correspondence with $x$. The free group on $X$ is the group $F\l(X\r)$ consisting of all reduced words with the concatenation operation, together with the map $j:X\to F\l(X\r)$ mapping $x\mapsto\tpl{x,e,e,\dots}$.

Indeed, any homomorphism $\phi:F\l(X\r)\to G$ with $f=\phi\circ j$ must satisfy $\phi\l(x_1^{\epsilon_1},\dots,x_n^{\epsilon_n},e,e,\dots\r)=f\l(x_1\r)^{\epsilon_1}\cdots f\l(x_n\r)^{\epsilon_n}$ for $x_i\in X$ and $\epsilon_i=\pm1$, and the function defined this way is a homomorphism.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A group $G$ is said to be <i>free</i> if $G=F\l(X\r)$ for some set $X$, and the minimal such $X$ is called a <i>free basis for $G$</i> with $\l|X\r|$ the <i>rank of $G$</i>.<span style="float:right;">$\blacklozenge$</span>
