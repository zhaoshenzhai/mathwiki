---
mathLink-blocks:
    fundamental-group: Fundamental Group
---

<div class="topSpace"></div>

Date Created: 16/10/2023 20:00:58
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: [[Fundamental group of the circle]]
Constructions: [[Simply-connected Space]], [[Lifting Criterion]]
Generalizations: <i>Not Applicable</i>

Properties: [[Basic properties of fundamental group]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Galois Correspondence of Covering Spaces]]
Justifications: [[Basic properties of homotopies of paths]], [[Independence of base point]]

``` ad-Definition
title: Definition.

Let $X$ be a topological space. The <b>fundamental groupoid</b> of $X$ is the groupoid $\pi_1\!\l(X\r)$ whose set of objects is $X$ and whose morphisms $x\to y$ are homotopy classes of paths $\gamma:x\pathto y$.
* The <b>fundamental group</b> of $X$ at some fixed $x_0\in X$ is the isotropy group of $\pi_1\!\l(X\r)$ at $x_0$, denoted $\pi_1\!\l(X,x_0\r)$.

```
^fundamental-group

<b>Remark.</b> We have a functor $\pi_1:\catptop\to\catgrp$ mapping each pointed space $\tpl{X,x_0}$ to its fundamental group and each morphism $f:\tpl{X,x_0}\to\tpl{Y,y_0}$ to the morphism $f_\ast:\pi_1\!\l(X,x_0\r)\to\pi_1\!\l(Y,y_0\r)$ mapping $\l[\gamma\r]\mapsto\l[f\circ\gamma\r]$.

---

<b>Remark.</b> Two points $x,y\in X$ are in the same orbit of $\pi_1\!\l(X\r)$ iff there is a path $\gamma:x\pathto y$, so the orbits of $\pi_1\!\l(X\r)$ are precisely the <i>path components</i> of $X$. Thus, if $X$ is path-connected, then $\pi_1\!\l(X,x_0\r)\iso\pi_1\!\l(X,x_0'\r)$ for any choice of basepoints $x_0,x_0'\in X$.<span style="float:right;">$\blacklozenge$</span>
