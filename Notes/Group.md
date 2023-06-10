<div class="topSpace"></div>

Date Created: 04/05/2022 13:08:40
Tags: #Type/Definition #Topic/Group_Theory

Types: [[Abelian Group]], [[Cyclic Group]], [[Simple Group]]
Examples: [[Automorphism or Symmetric Group]], [[Fundamental Group]], [[Group of Units]]
Constructions: [[Group Homomorphism]], [[Subgroup]], [[Group Action]], [[External Direct Product (Group)]], [[Order (Group Theory)]], [[Abelianization]], [[Exact Sequence]]
Generalizations: [[Groupoid]]

Properties: <i>Not Applicable</i>
Sufficiencies: [[Cayley's Theorem]], [[Free Group]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A <b>group</b> is a monoid $\tpl{G,\ast,e}$ such that every element is invertible. That is, for all $g\in G$, there is some $h\in G$ such that $g\ast h=e=h\ast g$.

```

<b>Remark.</b> For all $g\in G$, the element $g^{-1}\coloneqq h$ such that $g\ast g^{-1}=e=g^{-1}\ast g$ is unique and is called the <b>inverse element of $g$</b>.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Inverses satisfy the following properties.
* For all $g,h\in G$, we have $\l(gh\r)^{-1}=h^{-1}g^{-1}$. This is analogous to the inverse of functional compositions.
* We have ‘cancellation’: if either $gk=hk$ or $kg=kh$, then $g=h$.
* We have ‘division’: for all $g,h\in G$, there exists a unique $x\in G$ such that $gx=h$ given by $x\coloneqq g^{-1}h$.<span style="float:right;">$\blacklozenge$</span>
