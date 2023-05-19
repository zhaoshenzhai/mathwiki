<div class="topSpace"></div>

Date Created: 18/05/2023 15:08:53
Tags: #Type/Definition #Topic/Topology

Types: _Not Applicable_
Examples: [[Covering Map slash Space]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $p:E\to B$ be a continuous map. For a topological space $X$, we say that $\tpl{X,p}$ has the **homotopy lifting property** if for any homotopy $F:X\times I\to B$ and any continuous map $\tilde{f}_0:X\times\l\{0\r\}\to E$ lifting_ $f_0\coloneqq\l.F\r|_{X\times\l\{0\r\}}$_, there exists a homotopy $\tilde{F}:X\times I\to E$ lifting $F$ such that_ $\tilde{f}_0=\l.\tilde{F}\r|_{X\times\l\{0\r\}}$_._
![[Images/2023-05-18_172053/image.svg|150]]
* _If $p$ has this property for all topological spaces $X$, then $p$ is said to be a **fibration**._

```

**Remark.** Under obvious identifications, we obtain some special cases.
* If $X$ is a point, then for each path $\gamma:I\to B$ starting at some point $x_0\in B$ and each $\tilde{x}_0\in p^{-1}\!\l(x_0\r)$, there exists a lift $\tilde{\gamma}:I\to E$ starting at $\tilde{x}_0$.
* If $X=I$, then for each homotopy $H:I\times I\to B$ of paths starting at some path $\gamma_0:I\to B$ and every lift $\tilde{\gamma}_0:I\to E$ of $\gamma_0$, there exists a homotopy $\tilde{H}:I\times I\to E$ lifting $H$.<span style="float:right;">$\blacklozenge$</span>
