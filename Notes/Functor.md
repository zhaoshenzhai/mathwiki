---
mathLink-blocks:
    category-of-small-categories: $\catcat$
---

<div class="topSpace"></div>

Date Created: 06/03/2022 15:11:37
Tags: #Type/Definition #Topic/Category_Theory

Types: <i>Not Applicable</i>
Examples: [[Hom Functor]], [[Topological Space#^open-set-functor]], [[Path#^path-components]], [[Fundamental Group]], [[Cone]], [[Abelianization]], [[Dual Space]]
Constructions: [[Natural Transformation]], [[Equivalence of Categories]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $C$ and $D$ be categories. A <b>functor</b> $F:C\to D$ is a map sending each $c\in C$ to some $Fc\in D$ and each $f\in C\l(c,c'\r)$ to some $Ff\in D\l(Fc,Fc'\r)$, such that
* (Unit). $F1_c=1_{Fc}$ for all $c\in C$, and
* (Compatibility). $F\l(g\circ f\r)=Fg\circ Ff$ for all composable morphisms $f,g\in C$.

The <b>category of small categories</b> is the category $\catcat$ whose objects are small categories and whose morphisms are functors.

```
^category-of-small-categories

<b>Remark.</b> A functor $F:C\to D$ is <i>full</i> (resp. <i>faithful</i>) if $F:C\l(c,c'\r)\to D\l(Fc,Fc'\r)$ is surjective (resp. injective) for every $c,c'\in C$. It is <i>essentially surjective</i> if for any $d\in D$, there is some $c\in C$ such that $Fc\iso d$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Functors $F:C\to D$ as defined above are said to be <i>covariant</i>. A <i>contravariant</i> functor from $C$ to $D$ is a just functor $F:C^\textrm{op}\to D$.<span style="float:right;">$\blacklozenge$</span>
