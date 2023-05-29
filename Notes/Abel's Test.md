---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 11/04/2023 10:41:04
Tags: #Type/Proposition #Topic/Analysis

Proved by: [[Dirichlet's Test]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition (Abel$\textrm{'}$s Test).

Let $\tpl{a_k}$ and $\tpl{b_k}$ be sequences in $\R$. If $\tpl{a_k}$ is monotone and convergent and $\sum_{k=1}^{\infty}b_k$ converges, then $\sum_{k=1}^{\infty}a_kb_k$ converges too.

```

_Proof_. W.l.o.g., assume that $\tpl{a_k}$ is increasing with limit $a\in\R$ and consider the sequence $c_k\coloneqq a-a_k$. Observe that $\tpl{c_k}$ is non-increasing and $c_k\to0$. Now, since $a_kb_k=ab_k-c_kb_k$, and $\sum_{k=1}^{\infty}c_kb_k$ converges by Dirichlet$\textrm{'}$s Test, we see that
$$\begin{equation}
    \sum_{k=1}^{\infty}a_kb_k=a\sum_{k=1}^{\infty}b_k-\sum_{k=1}^{\infty}c_kb_k
\end{equation}$$
converges too.<span style="float:right;">$\blacksquare$</span>
