<div class="topSpace"></div>

Date Created: 09/02/2023 10:10:17
Tags: #Proposition #Topics/Analysis

Proved by: [[Closed subset of compact set is compact]], [[Extreme Value Theorem]], [[Compact implies closed (Hausdorff)]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,\mc{T}_X}$ and $\tpl{Y,\mc{T}_Y}$ be Hausdorff spaces and consider an invertible continuous function $f:X\to Y$. If $X$ is compact, then $f^{-1}:Y\to X$ is also continuous._

```

_Proof_. Let $V$ be an open set in $X$, so $V^c$ is closed in $X$ and hence is compact. Then $\im_f\!\l(V^c\r)$ is compact, so it is closed and hence its complement is open in $V$.
* We claim that $\im_f\!\l(V^c\r)^c=\im_f\l(V\r)$. Indeed, take $y\in\im_f\l(V\r)$. Then $y=f\l(x\r)$ for some unique $x\in V$, so $f\l(x\r)\neq f\l(x\r)$ for all $z\in V^c$, from which is follows that $y=f\l(x\r)\not\in\im_f\!\l(V^c\r)$. The converse is clear.

Thus $\im_f\!\l(V\r)$ is open in $V$, so $f^{-1}$ is continuous.<span style="float:right;">$\blacksquare$</span>
