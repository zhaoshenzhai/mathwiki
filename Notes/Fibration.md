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

Let $p:E\to B$ be a continuous map. For a topological space $X$, we say that $\tpl{X,p}$ has the <b>homotopy lifting property</b> if the following diagram commutes:
![[Images/2023-05-18_172053/image.svg|140]] That is, for any homotopy $F:X\times I\to B$ and any lift $\widetilde{f}_0:X\to E$ of $F\l(\slot,0\r)$, there is a lift $\widetilde{F}:X\times I\to E$ of $F$ such that $\widetilde{f}_0=\widetilde{F}\l(\slot,0\r)$.
* If $p$ has this property for all topological spaces $X$, then $p$ is said to be a <b>fibration</b>.

```
