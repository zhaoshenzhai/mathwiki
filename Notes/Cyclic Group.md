<div class="topSpace"></div>

Date Created: 26/09/2022 14:04:28
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: [[Integers]]
Constructions: <i>Not Applicable</i>
Generalizations: [[Cyclic Module]]

Properties: [[Subgroups of cyclic groups]], [[Automorphisms and endomorphisms of cyclic groups]]
Sufficiencies: [[At most one dividing subgroup implies cyclic]], [[Group of units of finite field is a cyclic group]]
Equivalences: <i>Not Applicable</i>
Justifications: [[Integers#^subgroups-of-integers]], [[Isomorphism Theorems]]

``` ad-Definition
title: Definition.

A group $G$ is said to be <b>cyclic</b> if $G=\gen{x}$ for some $x\in G$, in which case $x$ is said to be a <b>generator of $G$</b>.

```

<b>Remark.</b> In other words, there is a surjection $\phi:\Z\onto G$ mapping $n\mapsto x^n$. Its kernel is $\ker\phi=m\Z$ for some $m\in\Z$. If $\ker\phi$ vanishes, then $G\iso\Z$. In this case, $\ord{x}=\infty$ and $x$ is either $1$ or $-1$. Otherwise, we see that $G\iso\Z/m\Z$. The groups $\Z$ and $\Z/m\Z$ are clearly cyclic, so they are all the cyclic groups.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Generators for $G$ are not unique. In fact, if $G$ is finite, say with $\l|G\r|=n$, then $G=\gen{x^m}$ iff $m\perp n$. Indeed, we have $\ord{x^m}=n/\gcd\l(m,n\r)$, so $\ord x^m=n$ iff $m\perp n$. But $\gen{x^m}\leq G$, so $\gen{x^m}=G$ iff $m\perp n$.<span style="float:right;">$\blacklozenge$</span>
