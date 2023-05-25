---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 24/05/2023 15:28:53
Tags: #Type/Proposition #Topic/Topology

Proved by: [[Lifting Criterion]], [[Unique Lifting Property]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,x_0}$ be a path-connected and locally path-connected pointed space, and let $p_i:(\widetilde{X}_i,\widetilde{x}_i)\to\tpl{X,x_0}$ be connected and locally-path connected covering maps for $i=1,2$. Then the covering maps are equivalent iff_ $p_{1\ast}\pi_1\,(\widetilde{X}_1,\widetilde{x}_1)=p_{2\ast}\pi_1\,(\widetilde{X}_2,\widetilde{x}_2)$_._

```

_Proof_.
* ($\Rightarrow$): Let $f:\widetilde{X}_1\to\widetilde{X}_2$ be a homeomorphism with $p_1=p_2\circ f$ and $p_2=p_1\circ f^{-1}$. Then $p_{1\ast}\pi_1\,(\widetilde{X}_1,\widetilde{x}_1)=p_{2\ast}f\,(\pi_1\,(\widetilde{X}_2,\widetilde{x}_2))\subseteq p_{2\ast}\pi_1\,(\widetilde{X}_2,\widetilde{x}_2)$ and similarly for the converse, so equality holds.
* ($\Leftarrow$): Conversely, by the Lifting Criterion, there exists a unique lift $f:(\widetilde{X}_1,\widetilde{x}_1)\to(\widetilde{X}_2,\widetilde{x}_2)$ of $p_1$ along $p_2$. Similarly there exists a unique lift $g:(\widetilde{X}_2,\widetilde{x}_2)\to(\widetilde{X}_1,\widetilde{x}_1)$ of $p_2$ along $p_1$. In particular, $\l(g\circ f\r)\l(\widetilde{x}_1\r)=\widetilde{x}_1$ and is a lift of $p_1$ along itself, so by uniqueness of lifts, the map $g\circ f$ is the identity. Similarly, $f\circ g=\id$, so $f$ is a homeomorphism.<span style="float:right;">$\blacksquare$</span>
