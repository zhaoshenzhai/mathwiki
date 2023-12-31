---
mathLink-blocks:
    functor-category: Functor Category
---

<div class="topSpace"></div>

Date Created: 12/03/2022 12:53:12
Tags: #Type/Definition #Topic/Category_Theory/Later

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Equivalence of Categories]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $F,G:C\to D$ be functors between categories. A <b>natural transformation</b> $\eta:F\to G$ is a collection $\eta\coloneqq\l\{\eta_c\r\}_{c\in C}$ of morphisms $\eta_c\in D\l(Fc,Gc\r)$ such that for each $c,c'\in C$ and $f\in C\l(c,c'\r)$, we have $Gf\circ\eta_c=\eta_{c'}\circ Ff$.
* The <b>functor category</b> from $C$ to $D$ is the category $D^C$ whose objects are functors $F:C\to D$ and whose morphisms are natural transformations.
![[Images/2022-03-12_130843/image.svg|200]]

```
^functor-category
