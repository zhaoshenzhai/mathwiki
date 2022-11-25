---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 25/11/2022 10:34:48
Tags: #Proposition #Courses/MATH254

Proved by: [[Heine-Borel Theorem]], [[Bolzano-Weierstrass Theorem]], [[Sequential slash limit characterizations of continuity]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition (Heine-Cantor in $\R$).

_Fix a compact subset $K\subseteq\R$. Then any continuous function $f:K\to\R$ is uniformly continuous._

```

_Proof_. Suppose, for sake of contradiction, that $f$ is not uniformly continuous. Then
$$\begin{equation}
    \ex\epsilon>0,\fa\delta>0,\ex x,y\in K:d\l(x,y\r)<\delta\land d\l(f\l(x\r),f\l(y\r)\r)\geq\epsilon.
\end{equation}$$
Taking $\delta\coloneqq1/n$ for all $n\in\N^+$, we obtain sequences $\tpl{x_n}$ and $\tpl{y_n}$ in $K$ such that, for all $n\in\N^+$, $d\l(x_n,y_n\r)<1/n$ despite $d\l(f\l(x_n\r),f\l(y_n\r)\r)\geq\epsilon$. But $K$ is bounded, so, by Bolzano-Weierstrass, there exists a convergent subsequence $\tpl{x_{n_k}}$ of $\tpl{x_n}$, say with limit $x\in\R$. Then, since
$$\begin{equation}
    d\l(y_{n_k},x\r)\leq d\l(y_{n_k},x_{n_k}\r)+d\l(x_{n_k},x\r)\to0+0=0,
\end{equation}$$
we see that $\tpl{y_{n_k}}$ converges to $x$ too. Furthermore, $x\in K$ since $K$ is closed, so, by continuity of $f$, we have that
$$\begin{equation}
    \lim\limits_{k\to\infty}f\l(x_{n_k}\r)=f\l(x\r)=\lim\limits_{k\to\infty}f\l(y_{n_k}\r).
\end{equation}$$
Thus $\lim\limits_{k\to\infty}\l(f\l(x_{n_k}\r)-f\l(y_{n_k}\r)\r)=0$, so $d\l(f\l(x_{n_k}\r),f\l(y_{n_k}\r)\r)<\epsilon$ for all eventually $k\in\N$, a contradiction.<span style="float:right;">$\blacksquare$</span>
