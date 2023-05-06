---
mathLink: $\Sym\l(X\r)$
---

<div class="topSpace"></div>

Date Created: 05/10/2022 19:09:54
Tags: #Type/Definition #Topic/Group_Theory

Types: [[Alternating Group]]
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Cayley's Theorem]], [[Basic properties of symmetric groups]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $X$ be a set. The **symmetric group on $X$** is the automorphism group $\Sym\l(X\r)\coloneqq\Aut\l(X\r)$. A subgroup of $\Sym\l(X\r)$ is called a **permutation group on $X$**._

```

**Remark.** The action of $\Sym\l(X\r)$ on $X$ given by $\sigma\cdot i\coloneqq\sigma\l(i\r)$ for all $\sigma\in\Sym\l(X\r)$ and $i\in X$ is faithful since the only permutation that fixes all elements in $X$ is the identity. It is also transitive since for all $i,j\in X$ we have the transposition $\l(i\ j\r)$. <span style="float:right;">$\blacklozenge$</span>

---

**Remark.** If $X=\l\{1,\dots,n\r\}$, as is usually the case, we denote $S_n\coloneqq\Sym\l(\l\{1,\dots,n\r\}\r)$. For all $i\in X$, its stabilizer $G_i$ (where $G\coloneqq S_n$) is isomorphic to $S_{n-1}$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** It can be proved that there is a unique homomorphism $\epsilon:S_n\to\l\{\pm1\r\}$ such that $\epsilon\l(\tau\r)=-1$ for all transpositions $\tau\in S_n$. For all $\sigma\in S_n$, the image $\epsilon\l(\sigma\r)$ is called the **sign of $\sigma$**. If $\epsilon\l(\sigma\r)=1$, then $\sigma$ is said to be **even**, and otherwise $\sigma$ is said to be **odd**.<span style="float:right;">$\blacklozenge$</span>
