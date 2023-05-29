---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 13/10/2022 08:20:23
Tags: #Type/Theorem #Topic/Analysis

Proved by: [[Binomial Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Bernoulli$\textrm{'}$s Inequality).

Let $a\in\R$ and fix $n\in\N^+$. Then, for all $k\in\N^+$ with $k\leq n$, we have
$$\begin{equation}
    \l(1+a\r)^n\geq1+\binom{n}{k}a^k.
\end{equation}$$

```

**Remark.** In particular, with $k=1$ and $k=2$, we obtain
$$\begin{equation}
    \l(1+a\r)^n\geq 1+an\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \l(1+a\r)^n\geq1+\frac{n\l(n-1\r)}{2}a^2.\exqedin
\end{equation}$$

---

_Proof_. By the Binomial Theorem, we have
$$\begin{equation}
    \l(1+b\r)^n=\sum_{i=0}^{n}\binom{n}{i}b^i.
\end{equation}$$
Let $I_k\coloneqq\l\{1,\dots,n\r\}\comp\l\{k\r\}$. Splitting off the first and $k^\textrm{th}$ term, we obtain
$$\begin{equation}
    \begin{aligned}
        \l(1+b\r)^n&=\binom{n}{0}b^0+\binom{n}{k}b^k+\sum_{i\in I_k}\binom{n}{i}b^i \\
                   &=1+\binom{n}{k}b^k+\sum_{i\in I_k}\binom{n}{i}b^i \\
                   &\geq1+\binom{n}{k}b^k
    \end{aligned}
\end{equation}$$
since the sum is always non-negative.<span style="float:right;">$\blacksquare$</span>
