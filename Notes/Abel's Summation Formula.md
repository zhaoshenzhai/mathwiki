---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 21/03/2023 10:49:32
Tags: #Proposition #Topics/Analysis

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition (Abel$\textrm{'}$s Summation Formula).

_Let_ $\tpl{a_k}_{k=1}^\infty$ _and_ $\tpl{b_k}_{k=1}^\infty$ _be sequences in $\R$ and let $\tpl{s_n}$ be the sequence of partial sums of $b_k$, say with $s_0\coloneqq0$. Then, for any $m>n$, we have_
$$\begin{equation}
    \sum_{k=n+1}^{m}a_kb_k=\l(a_ms_m-a_{n+1}s_n\r)+\sum_{k=n+1}^{m-1}\l(a_k-a_{k+1}\r)s_k.
\end{equation}$$

```

_Proof_. Note that $b_k=s_k-s_{k-1}$ for all $k\in\N^+$, so
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
