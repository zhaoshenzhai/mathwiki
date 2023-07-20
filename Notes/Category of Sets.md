---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 21/02/2022 15:37:23
Tags: #Type/Definition #Later/Category_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Function space is a set]], [[Composition of functions is a function]], [[Composition of relations is associative]], [[Identity function is the identity of function composition]]

``` ad-Definition
title: Definition.

The <b>category of sets</b> is the (locally-small) category $\catset$ defined by the following data:
* The objects are sets; that is, $\Obj\l(\catset\r)\coloneqq V$ where $V$ is the universal class.
* For all sets $X$ and $Y$, the morphisms from $X$ to $Y$ are functions $\tpl{\Gamma_{\mathclap{f}}\ ,X,Y}$; that is, $\Hom\l(X,Y\r)\coloneqq Y^X$.
* For all sets $X$, the identity morphism on $X$ is the identity function $\id_X:X\to X$.
* For all functions $g:Y\to Z$ and $f:X\to Y$, the composite morphism of $g$ after $f$ is the composite function $g\circ f:X\to Z$.

```
