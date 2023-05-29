<div class="topSpace"></div>

Date Created: 19/05/2023 15:21:00
Tags: #Type/Definition #Topic/Topology

Types: [[Deformation Retraction]]
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Basic properties of fundamental group]]

``` ad-Definition
title: Definition.

Let $X$ and $Y$ be topological spaces. A continuous map $f:X\to Y$ is a **homotopy equivalence** if there exists a continuous map $g:Y\to X$ such that $g\circ f\htopeq\id_X$ and $f\circ g\htopeq\id_Y$.
* If such a function exists, then $X$ and $Y$ are said to be **homotopic equivalence**, or have the same **homotopy type**, and we write $X\htopeq Y$.
* If $X$ is homotopic to a point, we say that $X$ is **contractible**.

```

**Remark.** If $X$ and $Y$ are path-connected and are homotopy equivalent, then $\pi_1\l(X,x_0\r)\iso\pi_1\l(Y,y_0\r)$ for every $x_0\in X$ and $y_0\in Y$.
* In particular, if $X$ is contractible, then $\pi_1\l(X,x_0\r)$ vanishes for all $x_0\in X$.<span style="float:right;">$\blacklozenge$</span>
