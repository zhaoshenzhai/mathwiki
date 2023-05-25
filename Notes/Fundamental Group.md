<div class="topSpace"></div>

Date Created: 17/05/2023 20:22:08
Tags: #Type/Definition #Topic/Topology

Types: _Not Applicable_
Examples: [[Fundamental group of the circle]]
Constructions: [[Simply-connected Space]], [[Lifting Criterion]]
Generalizations: _Not Applicable_

Properties: [[Basic properties of fundamental group]]
Sufficiencies: _Not Applicable_
Equivalences: [[Galois Correspondence of Covering Spaces]]
Justifications: [[Basic properties of homotopies of paths]], [[Independence of base point]]

``` ad-Definition
title: Definition.

_Let $X$ be a topological space and fix $x_0\in X$. The **fundamental group of $X$ based at $x_0$** is the group $\pi_1\!\l(X,x_0\r)$ of homotopy classes of loops at $x_0$ under concatenation._
* _If $X$ is path-connected, then the **fundamental group of $X$** is $\pi_1\!\l(X\r)\coloneqq\pi_1\!\l(X,x_0\r)$, independent of the basepoint._

_This induces a functor $\pi_1:\catptop\to\catgrp$ by mapping each morphism $f:\tpl{X,x_0}\to\tpl{Y,y_0}$ to the morphism_ $f_\ast:\pi_1\l(X,x_0\r)\to\pi_1\l(Y,y_0\r):\l[\gamma\r]\mapsto\l[f\circ\gamma\r]$_._

```
