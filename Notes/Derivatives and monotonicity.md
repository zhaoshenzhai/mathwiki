<div class="topSpace"></div>

Date Created: 30/12/2022 00:01:51
Tags: #Type/Proposition #Topic/Analysis

Proved by: [[Mean Value Theorems]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $a,b\in\R$ and let $f:\l(a,b\r)\to\R$ be differentiable. Then:
* $f'\l(x\r)\geq0$ for all $x\in\l(a,b\r)$ iff $f$ is monotonically increasing.
* $f'\l(x\r)=0$ for all $x\in\l(a,b\r)$ iff $f$ is constant.
* $f'\l(x\r)\leq0$ for all $x\in\l(a,b\r)$ iff $f$ is monotonically decreasing.

```

<i>Proof.</i> For all $x_1,x_2\in\l(a,b\r)$, the Mean Value Theorem furnishes some $x\in\l(x_1,x_2\r)$ such that
$$\begin{equation}
    f\l(x_2\r)-f\l(x_1\r)=\l(x_2-x_1\r)f'\l(x\r),
\end{equation}$$
from which all claims above can be read off.<span style="float:right;">$\blacksquare$</span>
