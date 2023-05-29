---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 21/03/2023 10:49:32
Tags: #Type/Proposition #Topic/Analysis

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Abel$\textrm{'}$s Summation Formula).

Let $\tpl{a_k}_{k=1}^\infty$ and $\tpl{b_k}_{k=1}^\infty$ be sequences in $\R$ and let $\tpl{s_n}$ be the sequence of partial sums of $b_k$, say with $s_0\coloneqq0$. Then, for any $m>n$, we have
$$\begin{equation}
    \sum_{k=n+1}^{m}a_kb_k=\l(a_ms_m-a_{n+1}s_n\r)+\sum_{k=n+1}^{m-1}\l(a_k-a_{k+1}\r)s_k.
\end{equation}$$

```

<i>Proof.</i> Note that $b_k=s_k-s_{k-1}$ for all $k\in\N^+$, so
$$\begin{equation}
    \sum_{k=n+1}^{m}a_kb_k=\sum_{k=n+1}^{m}a_ks_k-\sum_{k=n+1}^{m}a_ks_{k-1}.
\end{equation}$$
Reindexing both sums, we see that
$$\begin{equation}
    \sum_{k=n+1}^{m}a_kb_k=\sum_{k=n}^{m-1}a_ks_k+a_ms_m-a_ns_n-\sum_{k=n}^{m-1}a_{k+1}s_k
\end{equation}$$
and hence
$$\begin{align}
    \sum_{k=n+1}^{m}a_kb_k&=a_ms_m-a_ns_n+\sum_{k=n}^{m-1}\l(a_k-a_{k+1}\r)s_k \\
    &=a_ms_m-a_{n+1}s_n+\sum_{k=n+1}^{m-1}\l(a_k-a_{k+1}\r)s_k.\qedin
\end{align}$$
