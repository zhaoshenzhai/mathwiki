<div class="topSpace"></div>

Date Created: 12/03/2022 11:37:51
Tags: #Type/Definition #Later/Category_Theory

Types: <i>Not Applicable</i>
Examples: [[Cartesian Product]], [[External Direct Product (Group)]], [[External Direct Product (Vector Space)]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\cat{C}$ be a category and consider an indexed family $\l\{X_i\r\}_{i\in I}$ of objects in $\cat{C}$. A **(categorical) product of $\l\{X_i\r\}$** is a pair $\tpl{X,\l\{\pi_i\r\}}$ consisting of
* an object $X$, denoted by $\prod_{i\in I}X_i$, and
* a family of morphisms $\pi_i:X\to X_i$, called **canonical projections**,

such that for every object $Y\in\Obj\l(\cat{C}\r)$ and family of morphisms $\l\{\tau_i:Y\to X_i\r\}$, there exists a unique morphism $\phi:Y\to X$ making each diagram

![[Images/2022-03-12_114225/image.svg|120]]

commute; that is, if each $\tau_i$ factors uniquely as $\tau_i=\pi_i\circ\phi$.

```
