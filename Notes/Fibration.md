<div class="topSpace"></div>

Date Created: 18/05/2023 15:08:53
Tags: #Type/Definition #Topic/Topology

Types: <i>Not Applicable</i>
Examples: [[Covering Space]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $p:E\to B$ be a continuous map. For a topological space $X$, we say that $\tpl{X,p}$ has the **homotopy lifting property** if for any homotopy $F:X\times I\to B$ and any continuous map $\widetilde{f}_0:X\times\l\{0\r\}\to E$ lifting $f_0\coloneqq\l.F\r|_{X\times\l\{0\r\}}$, there exists a homotopy $\widetilde{F}:X\times I\to E$ lifting $F$ such that $\widetilde{f}_0=\l.\widetilde{F}\r|_{X\times\l\{0\r\}}$.
![[Images/2023-05-18_172053/image.svg|150]]
* If $p$ has this property for all topological spaces $X$, then $p$ is said to be a **fibration**.

```
