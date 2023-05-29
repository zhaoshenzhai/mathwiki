<div class="topSpace"></div>

Date Created: 29/06/2022 12:26:36
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: [[Pythagorean Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $V$ be an inner product space. Take $v\in V$. For $U$ a finite-dimensional linear subspace of $V$, we have the estimate
$$\begin{equation}
    \l\|v-\proj_U\!\l(v\r)\r\|\leq\|v-u\|
\end{equation}$$
for all $u\in U$; equality holds iff $u=\proj_U\!\l(v\r)$.

```

<i>Proof.</i> First, observe that $v-\proj_U\!\l(v\r)\in U^\perp$ and $\proj_U\!\l(v\r)-u\in U$, so they are orthogonal. Thus we may apply the Pythagorean Theorem to obtain
$$\begin{equation}
    \begin{aligned}
        \l\|v-\proj_U\!\l(v\r)\r\|^2&\leq\l\|v-\proj_U\!\l(v\r)\r\|^2+\l\|\proj_U\!\l(v\r)-u\r\|^2 && \l\|\proj_U\!\l(v\r)-u\r\|^2\geq0 \\
        &=\l\|\l[v-\proj_U\!\l(v\r)\r]+\l[\proj_U\!\l(v\r)-u\r]\r\|^2 && \textrm{Pythagoras} \\
        &=\|v-u\|^2. && \textrm{Simplification}
    \end{aligned}
\end{equation}$$
This is an equality iff $\l\|\proj_U\!\l(v\r)-u\r\|=0$, which occurs iff $u=\proj_U\!\l(v\r)$.<span style="float:right;">$\blacksquare$</span>
