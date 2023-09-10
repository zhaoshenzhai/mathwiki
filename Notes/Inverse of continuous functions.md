<div class="topSpace"></div>

Date Created: 09/02/2023 10:10:17
Tags: #Type/Proposition #Topic/Topology

Proved by: [[Compact Space#^extreme-value-theorem]], [[Compact Space#^compact-hausdorff-implies-closed]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $X$ and $Y$ be Hausdorff spaces and consider an invertible continuous function $f:X\to Y$. If $X$ is compact, then $f^{-1}:Y\to X$ is also continuous.

```

<i>Proof.</i> Let $V$ be an open set in $X$, so $V^c$ is closed in $X$ and hence is compact. Then $f\l(V^c\r)$ is compact, so it is closed and hence its complement is open in $V$.
* We claim that $f\l(V^c\r)^c=f\l(V\r)$. Indeed, take $y\in f\l(V\r)$. Then $y=f\l(x\r)$ for some unique $x\in V$, so $f\l(x\r)\neq f\l(z\r)$ for all $z\in V^c$, from which is follows that $y=f\l(x\r)\not\in f\l(V^c\r)$. The converse is clear.

Thus $f\l(V\r)$ is open in $V$, so $f^{-1}$ is continuous.<span style="float:right;">$\blacksquare$</span>
