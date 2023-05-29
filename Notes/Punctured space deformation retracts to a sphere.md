---
mathLink: $S^n\htopeq\R^{n+1}\comp\l\{0\r\}$
---

<div class="topSpace"></div>

Date Created: 21/05/2023 10:37:26
Tags: #Type/Proposition #Topic/Topology

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

For all $n\in\N^+$, the sphere $S^n$ is a (strong) deformation retract of $\R^{n+1}\comp\l\{0\r\}$.

```

_Proof_. Let $X\coloneqq\R^{n+1}\comp\l\{0\r\}$ and consider the homotopy $F\l(x,t\r):X\times I\to X$ defined by
$$\begin{equation}
    F\l(x,t\r)\coloneqq\l(\l(1-t\r)+\frac{t}{\|x\|}\r)x
\end{equation}$$
for all $x\in X$ and $t\in I$. Then $F\l(x,0\r)=x$ and $F\l(x,1\r)=x/\|x\|\in S^n$ where $F^2\l(\slot,1\r)=F\l(\slot,1\r)$, so $F$ is a deformation retraction from $X$ to $S^n$. Furthermore, since $F\l(x,t\r)=x$ for all $x\in S^n$, the deformation retract is strong.<span style="float:right;">$\blacksquare$</span>
