---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 21/02/2022 15:37:23
Tags: #Type/Definition #Topic/Category_Theory

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Function space is a set]], [[Composition of functions is a function]], [[Composition of relations is associative]], [[Identity function is the identity of function composition]]

``` ad-Definition
title: Definition.

_The **category of sets** is the (locally-small) category $\catset$ defined by the following data:_
* _The objects are sets; that is, $\Obj\l(\catset\r)\coloneqq V$ where $V$ is the universal class._
* _For all sets $X$ and $Y$, the morphisms from $X$ to $Y$ are functions_ $\tpl{\Gamma_{\mathclap{f}}\ ,X,Y}$_; that is, $\Hom\l(X,Y\r)\coloneqq Y^X$._
* _For all sets $X$, the identity morphism on $X$ is the identity function $\id_X:X\to X$._
* _For all functions $g:Y\to Z$ and $f:X\to Y$, the composite morphism of $g$ after $f$ is the composite function $g\circ f:X\to Z$._

```
