---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 21/03/2023 11:08:06
Tags: #Theorem #Topics/Analysis

Proved by: [[Monotone Convergence Theorem]], [[Convergent implies bounded (sequential)]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Riemann$\textrm{'}$s Rearrangement Theorem).

_Let $\tpl{a_k}$ be a sequence in $\R$ such that_ $\sum_{k=0}^{\infty}a_k$ _converges conditionally. For any $\alpha\in\bar{\R}$, there exists a rearrangement $\sigma:\N\to\N$ of_ $\sum_{k=0}^{\infty}a_k$ _that converges to $\alpha$._

```

_Proof_. Since $\sum_{k=0}^{\infty}a_k$ converges conditionally, the sequence $\tpl{a_k}$ must have infinitely-many positive and negative terms. Thus we have the sequences $\tpl{a_k^+}$ and $\tpl{a_k^-}$ defined by
$$\begin{equation}
    a_k^+\coloneqq
    \begin{dcases}
        a_k & \textrm{if }a_k>0 \\
        0 & \textrm{else}
    \end{dcases}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ a_k^-\coloneqq
    \begin{dcases}
        \l|a_k\r| & \textrm{if }a_k<0 \\
        0 & \textrm{else.}
    \end{dcases}
\end{equation}$$
Then, for all $k\in\N$, we see that $a_k=a_k^+-a_k^-$ and $\l|a_k\r|=a_k^++a_k^-$. We claim that $\sum_{k=0}^{\infty}a_k^+$ and $\sum_{k=0}^{\infty}a_k^-$ both diverge to $+\infty$.
* It suffices to show that each sequence of partial sums is unbounded. Indeed, observe that
$$\begin{equation}
    \sum_{k=0}^{n}\l|a_k\r|=\sum_{k=0}^{n}a_k^++\sum_{k=1}^{n}a_k^-\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \sum_{k=0}^{n}a_k=\sum_{k=0}^{n}a_k^+-\sum_{k=0}^{n}a_k^-
\end{equation}$$
and since $\sum_{k=0}^{n}\l|a_k\r|$ is unbounded, at least one of $\sum_{k=0}^{n}a_k^+$ and $\sum_{k=0}^{n}a_k^-$ is also unbounded. But $\sum_{k=0}^{n}a_k$ is bounded (since it converges), so both sequence of partial sums must be unbounded.

We first prove the theorem with $0<\alpha<+\infty$; that is, we prove that there exists a rearrangement $\sum_{k=0}^{\infty}a_k'$ that converges to $\alpha$. Let $\tpl{b_k}$ and $\tpl{c_k}$ be the sequences $\tpl{a_k^+}$ and $\tpl{a_k^-}$ in the same respective order but with all $0$$\textrm{'}$s omitted. We may do so since they do not contribute anything to the sum.
* Since both $\sum_{k=0}^{\infty}b_k$ and $\sum_{k=0}^{\infty}c_k$ are unbounded (above), we set $a_k'\coloneqq b_k$ for all $0\leq k\leq n_1$ where $n_1\in\N$ is the smallest number such that $\sum_{k=0}^{n_1}b_k>\alpha$. Next, set $a_{n_1+k}'\coloneqq-c_k$ for all $0\leq k\leq n_2$ where $n_2\in\N$ is the smallest number such that $\sum_{k=0}^{n_1}b_k-\sum_{k=0}^{n_2}c_k<\alpha$. Continuing this way, we define $n_3,n_4,\dots$ so that
$$\begin{equation}
    \sum_{k=0}^{\infty}a_k'=\sum_{k=0}^{n_1}b_k-\sum_{k=0}^{n_2}c_k+\sum_{k=0}^{n_3}b_{n_1+k}-\sum_{k=0}^{n_4}c_{n_2+k}+\sum_{k=0}^{n_5}b_{n_1+n_3+k}-\sum_{k=0}^{\infty}c_{n_2+n_4+k}+\cdots.
\end{equation}$$
Note that each $n_i>0$, so every term in $\tpl{c_k}$ and $\tpl{c_k}$ is used in the sum; that is, there exists a bijection between $\tpl{a_k}$ and $\tpl{a_k'}$. We claim that $\lim\limits_{n\to\infty}\sum_{k=0}^{n}a_k'=\alpha$. For any $j>1$, let $n\in\N$ be such that
$$\begin{equation}
    n_1+n_2+\cdots+n_{j-1}\leq n<n_1+n_2+\cdots+n_j.
\end{equation}$$
If $j$ is even, then $\sum_{k=0}^{n}a_k'$ exceeds $\alpha$ by no more than $b_{n_1+n_3+n_5+\cdots+n_{j-1}}$. Similarly, if $j$ is odd, then $\sum_{k=0}^{n}a_k'$ is less than $\alpha$ by no more than $c_{n_2+n_4+n_6+\cdots+n_{j-1}}$. But $\sum_{k=0}^{\infty}a_k$ converges, so $\lim\limits_{k\to\infty}a_k\to0$ and hence for every $\epsilon>0$, there is some $J\in\N$ such that if $j\geq J$, then
$$\begin{equation}
    0<b_{n_1+n_3+n_5+\cdots+n_{j-1}}<\epsilon\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 0<c_{n_2+n_4+n_6+\cdots+n_{j-1}}<\epsilon.
\end{equation}$$
Finally, taking $j\geq J$ and $n\geq n_1+n_2+\cdots+n_{j-1}$, we see that $\l|\sum_{k=0}^{n}a_k'-\alpha\r|<\epsilon$. Thus $\sum_{k=0}^{\infty}a_k'=\alpha$, so we are done.

Finally, note that this argument holds for when $\alpha<0$ too by swapping the roles of $\tpl{b_k}$ and $\tpl{c_k}$. Similarly, if $\alpha=0$, then start the $\textrm{`}$steps$\textrm{'}$ with either $\tpl{b_k}$ or $\tpl{c_k}$ and continue as above. Otherwise, if $\alpha=\pm\infty$, we control the steps so that we surpass each integer number with terms in $\tpl{b_k}$, then backtrack with terms in $\tpl{c_k}$, and surpass the next (depending on if $\alpha=+\infty$ or $\alpha=-\infty$.) integer number with terms in $\tpl{b_k}$.<span style="float:right;">$\blacksquare$</span>
