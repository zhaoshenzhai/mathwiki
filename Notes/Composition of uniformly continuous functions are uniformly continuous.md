<div class="topSpace"></div>

Date Created: 30/11/2022 22:30:47
Tags: #Type/Proposition #Topic/Analysis

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $\tpl{X,d_X}$, $\tpl{Y,d_Y}$, and $\tpl{Z,d_Z}$ be metric spaces. If $f:X\to Y$ and $g:Y\to Z$ are uniformly continuous, then so is $g\circ f:X\to Z$.

```

<i>Proof.</i> Take $\epsilon>0$, so, since $g$ is uniformly continuous, there exists some $\delta_1>0$ such that
$$\begin{equation}
    d_Y\l(y_1,y_2\r)<\delta_1\Rightarrow d_Z\l(g\l(y_1\r),g\l(y_2\r)\r)<\epsilon
\end{equation}$$
for all $y_1,y_2\in Y$. But $f$ is uniformly continuous, so there exists some $\delta>0$ such that
$$\begin{equation}
    d_X\l(x_1,x_2\r)<\delta\Rightarrow d_Y\l(f\l(x_1\r),f\l(x_2\r)\r)<\delta_1
\end{equation}$$
for all $x_1,x_2\in X$. Taking $y_1\coloneqq f\l(x_1\r)$ and $y_2\coloneqq f\l(x_2\r)$, we see that
$$\begin{equation}
    d_X\l(x_1,x_2\r),\delta\Rightarrow d_Z\l(g\l(f\l(x_1\r)\r),g\l(f\l(x_2\r)\r)\r)<\epsilon
\end{equation}$$
for all $x_1,x_2\in X$, so $g\circ f$ is uniformly continuous.<span style="float:right;">$\blacksquare$</span>
