---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 21/06/2022 08:05:38
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $T:V\to V$ be a linear operator on a $K$-vector space $V$. If $\lambda_1,\dots,\lambda_m\in K$ are distinct eigenvalues of $T$ and $v_1,\dots,v_m\in V$ are their corresponding eigenvectors, then $\l\{v_1,\dots,v_m\r\}$ is linearly independent.

```

<i>Proof.</i> We proceed by induction on $m$.
* If $m=1$, then, since $v_1\neq0$, we see that $\l\{v_1\r\}$ is linearly independent.

Suppose now that $\l\{v_1,\dots,v_{m-1}\r\}$ is linearly independent for some $m-1\geq1$. If $\sum_{i=1}^{m}\alpha_iv_i=0$ for some $\alpha_i\in K$, then, applying $T-\lambda_m\id_V$ on both sides, we see that
$$\begin{equation}
    \sum_{i=1}^{m}\alpha_iT\l(v_i\r)-\alpha_i\lambda_mv_i=\sum_{i=1}^{m}\alpha_i\l(\lambda_i-\lambda_m\r)v_i=\sum_{i=1}^{m-1}\alpha_i\l(\lambda_i-\lambda_m\r)v_i=0.
\end{equation}$$
Linear independence of $\l\{v_1,\dots,v_{m-1}\r\}$ shows that $\alpha_i\l(\lambda_i-\lambda_m\r)=0$ for all $1\leq i\leq m-1$, but since $\lambda_i\neq\lambda_m$ for all $1\leq i\leq m-1$, we see that each $\alpha_i=0$. Thus $\alpha_mv_m=0$, so $\alpha_m=0$ too.<span style="float:right;">$\blacksquare$</span>
