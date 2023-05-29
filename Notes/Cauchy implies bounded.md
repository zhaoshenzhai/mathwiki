---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 01/11/2022 00:53:00
Tags: #Type/Proposition #Topic/Analysis

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $\tpl{X,d}$ be a metric space and consider a sequence $\tpl{x_n}$ in $X$. If $\tpl{x_n}$ is Cauchy, then it is bounded.

```

<i>Proof.</i> Take $\epsilon\coloneqq1$, so $d\l(x_n,x_m\r)<1$ for all eventually $m,n\in\N$, say for all $m,n\geq N$ for some $N\in\N$. In particular, we have $d\l(x_n,x_N\r)<1$, so
$$\begin{equation}
    \l|x_n\r|=\l|x_n-x_N+x_N\r|\leq\l|x_n-x_N\r|+\l|x_N\r|<\l|x_N\r|+1
\end{equation}$$
for all $n\geq N$. Setting
$$\begin{equation}
    r\coloneqq\max\l\{x_0,\dots,x_{N-1},\l|x_N\r|+1\r\},
\end{equation}$$
we see that $\l|x_n\r|\leq r$ for all $n\in\N$ and thus $\tpl{x_n}$ is bounded.<span style="float:right;">$\blacksquare$</span>
