<div class="topSpace"></div>

Date Created: 20/10/2022 18:44:59
Tags: #Type/Theorem #Topic/Analysis

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Monotone Convergence Theorem).

Let $\tpl{x_n}$ be a sequence in $\R$. If $\tpl{x_n}$ is eventually monotone and bounded in $\R$, then it converges. In fact,
* if $\tpl{x_n}$ is eventually monotonically increasing and bounded above, then $\lim\limits_{n\to\infty}x_n=\sup\limits_{n\in\N}x_n$, and
* if $\tpl{x_n}$ is eventually monotonically decreasing and bounded below, then $\lim\limits_{n\to\infty}x_n=\inf\limits_{n\in\N}x_n$.

Otherwise, if $\tpl{x_n}$ is eventually monotone but not bounded, then it converges to $\pm\infty$. In fact,
* if $\tpl{x_n}$ is eventually monotonically increasing and unbounded above, then $\lim\limits_{n\to\infty}x_n=+\infty$, and
* if $\tpl{x_n}$ is eventually monotonically decreasing and unbounded below, then $\lim\limits_{n\to\infty}x_n=-\infty$.

```

<b>Remark.</b> If we make the convention that $\sup\limits_{n\in\N}x_n=+\infty$ if $\tpl{x_n}$ is unbounded above, and similarly if $\tpl{x_n}$ is unbounded below, then we may restate the theorem as: If $\tpl{x_n}$ is an eventually monotonically increasing (resp. decreasing) sequence in $X$, then $\lim\limits_{n\to\infty}x_n=\sup\limits_{n\in\N}x_n$ (resp. $\lim\limits_{n\to\infty}x_n=\inf\limits_{n\in\N}x_n$).<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Let $\epsilon>0$.
* Set $\beta\coloneqq\sup\limits_{n\in\N}x_n$. Since $\beta$ is the <i>least</i> upper bound of the sequence, there exists some $N\in\N$ such that $x_N>\beta-\epsilon$. But $\tpl{x_n}$ is eventually increasing, so $x_n\geq x_N$ for all $n\geq N$ and hence $x_n>\beta-\epsilon$ for all $n\geq N$. Then $-\epsilon<x_n-\beta$, and since $x_n-\beta<0<\epsilon$, we see that $\l|x_n-\beta\r|<\epsilon$. Thus $\lim\limits_{n\to\infty}x_n=\beta$.

* Set $\alpha\coloneqq\inf\limits_{n\in\N}x_n$. Since $\alpha$ is the <i>greatest</i> lower bound of the sequence, there exists some $N\in\N$ such that $x_N<\alpha+\epsilon$. But $\tpl{x_n}$ is eventually decreasing, so $x_n\leq x_N$ for all $n\geq N$ and hence $x_n<\alpha+\epsilon$ for all $n\geq N$. Then $x_n-\alpha<\epsilon$, and since $-\epsilon<0<x_n-\alpha$, we see that $\l|x_n-\alpha\r|<\epsilon$. Thus $\lim\limits_{n\to\infty}x_n=\alpha$.

Assume now that $\tpl{x_n}$ is eventually monotone but not bounded.
* If $\tpl{x_n}$ is eventually increasing and unbounded above, then $\fa B\in\R,\ex N\in\N:x_N>B$ and $\fa n\geq N:x_n\geq x_N$. Thus we see that
$$\begin{equation}
    \fa B\in\R,\ex N\in\N,\fa n\geq N:x_n>B.
\end{equation}$$
* If $\tpl{x_n}$ is eventually decreasing and unbounded below, then $\fa A\in\R,\ex N\in\N:x_N<A$ and $\fa n\geq N:x_n\leq x_N$. Thus we see that
$$\begin{equation}
    \fa A\in\R,\ex N\in\N,\fa n\geq N:x_n<A.\qedin
\end{equation}$$
