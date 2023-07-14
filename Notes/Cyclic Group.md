<div class="topSpace"></div>

Date Created: 26/09/2022 14:04:28
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: [[Group of units of finite field is a cyclic group]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Subgroups of cyclic groups]], [[Automorphisms and endomorphisms of cyclic groups]]
Sufficiencies: [[At most one dividing subgroup implies cyclic]]
Equivalences: [[Classification of Cyclic Groups]]
Justifications: [[Basic properties of order]]

``` ad-Definition
title: Definition.

A group $G$ is said to be <b>cyclic</b> if $G=\gen{x}$ for some $x\in G$, in which case $x$ is said to be a <b>generator of $G$</b>.

```

<b>Remark.</b> It is clear that every cyclic group is abelian, for if $g,h\in G$, then $g=x^m$ and $h=x^n$ for some $n,m\in\Z$. Then $gh=x^mx^n=x^nx^m=hg$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Generators for $G$ are not unique. In fact, if $G$ is finite, say with $\l|G\r|=n$, then $G=\gen{x^m}$ iff $m\perp n$. Indeed, we have $\ord{x^m}=\ord{x}/\gcd\l(m,\ord{x}\r)=n\gcd\l(m,n\r)$, so $\ord{\gen{x^m}}=n$ iff $m\perp n$. But $\gen{x^m}\leq G$, so $\gen{x^m}=G$ iff $m\perp n$.<span style="float:right;">$\blacklozenge$</span>
