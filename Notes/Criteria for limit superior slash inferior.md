---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 29/10/2022 20:36:51
Tags: #Type/Proposition #Topic/Analysis

Proved by: [[Bolzano-Weierstrass Theorem]], [[Sequential Limit Theorems in R]], [[Monotone Convergence Theorem]], [[Subsequences converge to the same limit]], [[Limit of 1 over linear]], [[Squeezed Distance Lemma]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{x_n}$ be a bounded sequence in $\R$. Then, for all $x^\ast\in\R$, the following are equivalent.
1. $x^\ast=\limsup\limits_{n\to\infty}x_n$.
2. $x^\ast=\inf\l\{u\in\R\mid\fa^\infty n\in\N:x_n<u\r\}$.
3. For all $\epsilon>0$, $\fa^\infty n\in\N:x^\ast+\epsilon>x_n$ and $\ex^\infty n\in\N:x^\ast-\epsilon<x_n$.
4. $x^\ast=\inf_\limits{n\in\N}t_n=\lim\limits_{n\to\infty}t_n$ where $t_n\coloneqq\sup_\limits{m\geq n}x_m$ is the supremum of the $n$-tail of $\tpl{x_n}$.

Similarly for limit inferior.

```

<i>Proof.</i> For $1\Rightarrow2$, let $U\coloneqq\l\{u\in\R\mid\fa^\infty n\in\N:x_n<u\r\}$ and let $l\coloneqq\inf U$. It suffices to show that $d\l(x^\ast,l\r)\leq\epsilon$ for all $\epsilon>0$, for then they coincide.
* ($x^\ast+\epsilon\geq l$): It suffices to show that $x^\ast+\epsilon\in U$; that is, that $\fa^\infty n\in\N:x_n<x^\ast+\epsilon$. Indeed, if $\ex^\infty n\in\N:x^\ast+\epsilon<x_n$, then there exists a subsequence $\tpl{x_{n_k}}$ of $\tpl{x_n}$ such that $x_{n_k}>x^\ast+\epsilon$ for all $k\in\N$. By Bolzano-Weierstrass, there exists a convergent subsequence thereof, say to $s\in S$. Thus $s>x^\ast+\epsilon$, so $s-\epsilon>x^\ast$, contradicting the fact that $x^\ast$ is an upper bound of $S$.

* ($x^\ast-\epsilon\leq l$): If $x^\ast-\epsilon>l$, then, since $l$ is the <i>greatest</i> lower bound of $U$, there exists $u\in U$ such that $u<x^\ast-\epsilon$. Thus $\fa^\infty n\in\N:x_n<u<x^\ast-\epsilon$, so if a subsequence $\tpl{x_{n_k}}$ of $\tpl{x_n}$ converges to some $s\in S$, then $s<x^\ast-\epsilon$. Thus $x^\ast-\epsilon$ is also an upper bound of $S$, contradicting the fact that $x^\ast$ is the _least_ upper bound of $S$.

---

For $2\Rightarrow3$, let $U\coloneqq\l\{u\in\R\mid\fa^\infty n\in\N:x_n<u\r\}$ and let $\epsilon>0$. Being the <i>greatest</i> lower bound of $U$, we see that there exists $u\in U$ such that $u<x^\ast+\epsilon$. Thus $\fa^\infty n\in\N:x_n<u<x^\ast+\epsilon$. Furthermore, $x^\ast$ is a lower bound of $U$, so $x^\ast-\epsilon\not\in U$ and hence $\ex^\infty n\in\N:x^\ast-\epsilon<x_n$.

---

For $3\Rightarrow4$, first, observe that the sequence $\tpl{t_n}$ is a monotonically decreasing sequence and is bounded below by the lower bound of $\tpl{x_n}$. Thus, by the Monotone Convergence Theorem, we have that $\lim\limits_{n\to\infty}t_n=\inf\limits_{n\in\N}t_n\eqqcolon \tau$. Let $\epsilon>0$. It now suffices to show that $d\l(x^\ast,\tau\r)\leq\epsilon$, for then they coincide.
* ($x^\ast+\epsilon\geq\tau$): Since $x^\ast+\epsilon>x_m$ for sufficiently large $m\in\N$, say $m\geq n$ for some $n\in\N$, we see that $x^\ast+\epsilon\geq t_n$ and hence $x^\ast+\epsilon\geq\tau$.
* ($x^\ast-\epsilon\leq\tau$): Since $x^\ast-\epsilon<x_m$ for infinitely-many $m\in\N$, we see that $x^\ast-\epsilon<t_n$ for all $n\in\N$ and hence $x^\ast-\epsilon\leq\tau$.

---


For $4\Rightarrow1$, let $S$ be the set of all subsequential limits of $\tpl{x_n}$. It suffices to show that $x^\ast$ is an upper for $S$ that is in $S$, for then $x^\ast=\sup S$ and we are done.
* (Upper bound): Let $s\in S$, so there exists a subsequence $\tpl{x_{n_k}}$ that converges to $s$. Let $k\in\N$. Then, since $t_k\coloneqq\sup_\limits{m\geq n}x_m$ and $n_k\geq k$, we see that $x_{n_k}\leq t_k$. Thus $\lim\limits_{k\to\infty}x_{n_k}\leq\lim\limits_{k\to\infty}t_k$, so $s\leq x^\ast$.

* ($x^\ast\in S$): It suffices to construct some subsequence $\tpl{x_{n_k}}$ that converges to $x^\ast$. Set $n_0\coloneqq0$ and suppose that $n_0,\dots,n_k$ are defined for some $k\in\N$. Let $\epsilon_k\coloneqq\frac{1}{k+1}$. Then, since $t_{n_k}$ is the <i>least</i> upper bound of the $n_k$-tail $\l\{x_m\in\R\mid m\geq n_k\r\}$ of $\tpl{x_n}$, we see that
$$\begin{equation}
    \ex n_{k+1}\geq n_k:x_{n_{k+1}}>t_{n_k}-\epsilon_k.
\end{equation}$$
Then, since $x_{n_{k+1}}-\epsilon_k<t_{n_k}$ too, we see that $d\l(x_{n_{k+1}},t_{n_k}\r)<\epsilon_k$. It follows from the Triangle Inequality that
$$\begin{equation}
    d\l(x_{n_{k+1}},x^\ast\r)\leq d\l(x_{n_{k+1}},t_{n_k}\r)+d\l(t_{n_k},x^\ast\r)<\frac{1}{k+1}+d\l(t_{n_k},x^\ast\r),
\end{equation}$$
and since $\tpl{t_{n_k}}$ is a subsequence of $\tpl{t_n}$, it converges to $x^\ast$. Thus $d\l(t_{n_k},x^\ast\r)\to0$ as $k\to\infty$, so $\lim\limits_{k\to\infty}x_{n_k}=x^\ast$.<span style="float:right;">$\blacksquare$</span>
