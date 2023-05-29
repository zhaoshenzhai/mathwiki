<div class="topSpace"></div>

Date Created: 05/04/2023 10:36:05
Tags: #Type/Definition #Topic/Linear_Algebra

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Linear map between vector spaces of same dimension is injective iff surjective]]

``` ad-Definition
title: Definition.

A linear operator $T:V\to V$ on an inner product space $V$ is said to be **unitary** if $T^\adj T=TT^\adj=\id$.

```

<b>Remark.</b> Unitary operators are analogous to complex numbers $z\in\C$ such that $\bar{z}z=z\bar{z}=1$, which occurs iff $\l|z\r|=1$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Clearly $T$ is unitary iff $T^\adj=T^{-1}$. Also, unitary operators are isometries since $\|Tv\|^2=\inprod{Tv}{Tv}=\inprod{T^\adj Tv}{v}=\inprod{v}{v}=\|v\|^2$ for all $v\in V$. The converse holds in finite-dimensional spaces too, since if $T^\adj T=\id$, then $T$ is injective and hence bijective with inverse $T^\adj$.<span style="float:right;">$\blacklozenge$</span>
