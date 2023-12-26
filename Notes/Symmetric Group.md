---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 05/10/2022 19:09:54
Tags: #Type/Definition #Topic/Group_Theory

Types: [[Alternating Group]]
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Basic properties of symmetric groups]], [[Basic properties of symmetric groups#^non-solvable]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Basic properties of symmetric groups#^sign]]

``` ad-Definition
title: Definition.

Let $X$ be a set. The <b>symmetric group</b> on $X$ is the automorphism group $\Sym\l(X\r)$ in $\catset$. A subgroup of $\Sym\l(X\r)$ is called a <b>permutation group</b> on $X$.
* If $X=\l\{1,\dots,n\r\}$, we write $S_n\coloneqq\Sym\l(\l\{1,\dots,n\r\}\r)$. There is a unique homomorphism $\epsilon:S_n\to\l\{\pm1\r\}$ such that $\epsilon\l(\tau\r)=-1$ for all transpositions $\tau\in S_n$.

```

<b>Remark.</b> The action of $\Sym\l(X\r)$ on $X$ given by $\sigma\cdot i\coloneqq\sigma\l(i\r)$ for all $\sigma\in\Sym\l(X\r)$ and $i\in X$ is faithful since the only permutation that fixes all elements in $X$ is the identity. It is also transitive since for all $i,j\in X$ we have the transposition $\l(i\ j\r)$. For all $i\in X$, the stabilizer $\Stab_{S_n}\!\l(i\r)$ is isomorphic to $S_{n-1}$.<span style="float:right;">$\blacklozenge$</span>
