<div class="topSpace"></div>

Date Created: 25/11/2022 10:27:10
Tags: #Theorem #Topics/Analysis

Proved by: [[Characterizations of Compactness in Metric Spaces]], [[Sequential slash functional limit characterizations of continuity]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Heine-Cantor).

_Let $X$ and $Y$ be metric spaces. If $X$ is compact, then any continuous function $f:X\to Y$ is uniformly continuous._

```

_Proof_. Suppose, for sake of contradiction, that $f$ is not uniformly continuous. Then
$$\begin{equation}
    \ex\epsilon>0,\fa\delta>0,\ex p,q\in X:d_X\!\l(p,q\r)<\delta\land d_Y\!\l(f\l(p\r),f\l(q\r)\r)\geq\epsilon.
\end{equation}$$
Taking $\delta\coloneqq1/n$ for all $n\in\N^+$, we obtain sequences $\tpl{p_n}$ and $\tpl{q_n}$ in $X$ such that, for all $n\in\N^+$, $d_X\!\l(p_n,q_n\r)<1/n$ despite $d_Y\!\l(f\l(p_n\r),f\l(q_n\r)\r)\geq\epsilon$. But $X$ is compact, so it is sequentially compact and thus there exists a subsequence $\tpl{p_{n_k}}$ of $\tpl{p_n}$ converging to some $p\in X$. Then, since
$$\begin{equation}
    d_X\!\l(q_{n_k},p\r)\leq d_X\!\l(q_{n_k},p_{n_k}\r)+d_X\!\l(p_{n_k},p\r)\to0+0=0,
\end{equation}$$
we see that $\tpl{q_{n_k}}$ converges to $p$ too. Furthermore, by continuity of $f$, we have that
$$\begin{equation}
    \lim\limits_{k\to\infty}f\l(p_{n_k}\r)=f\l(p\r)=\lim\limits_{k\to\infty}f\l(q_{n_k}\r).
\end{equation}$$
Thus $\lim\limits_{k\to\infty}\l(f\l(p_{n_k}\r)-f\l(q_{n_k}\r)\r)=0$, so $d_Y\!\l(f\l(p_{n_k}\r),f\l(q_{n_k}\r)\r)<\epsilon$ for all eventually $k\in\N$, a contradiction.<span style="float:right;">$\blacksquare$</span>
