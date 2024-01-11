<div class="topSpace"></div>

Date Created: 08/01/2024 11:08:06
References: #Ref/Lee12
Tags: #Type/Definition #In_Progress/Topology

Types: [[Smooth Manifold]]
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Topology of manifolds]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Fix $n\geq0$. An <b> $n$-manifold</b> is a second countable Hausdorff space $M$ that is locally-Euclidean, in the sense that each $p\in M$ admits a <b>coordinate chart</b> $\tpl{U,\phi}$ consisting of a neighborhood $U\ni p$ and a homeomorphism $\phi:U\to V$ onto an open subset $V\subseteq\R^n$.

```

<b>Remark.</b> An <i>atlas</i> for $M$ is a collection $\l\{\tpl{U_i,\phi_i}\r\}$ of charts that cover $M$, and the <i>transition map</i> of two charts $\tpl{U_1,\phi_1}$ and $\tpl{U_2,\phi_2}$ of $M$ with $U_1\cap U_2\neq\em$ is the map $\phi_2\circ\phi_1^{-1}:\phi_1\!\l(U_1\cap U_2\r)\to\phi_2\!\l(U_1\cap U_2\r)$, which is a map between subsets of $\R^n$. These charts provide <i>local coordinates</i> for points in $U_1\cap U_2$, and since no chart is distinguished from the others, we can only define notions using local coordinates if they are invariant under the transition map.<span style="float:right;">$\blacklozenge$</span>
