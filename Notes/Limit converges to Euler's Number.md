---
mathLink: $\l(1+\frac{1}{n}\r)^n$ converges
---

<div class="topSpace"></div>

Date Created: 23/10/2022 16:01:56
Tags: #Proposition #Courses/MATH254

Proved by: [[Binomial Theorem]], [[Monotone Convergence Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_The sequence_ $\tpl{\l(1+\frac{1}{n}\r)^n}_{n\in\N^+}$ _in $\R$ converges to some real $e$ between $2$ and $3$._

```

_Proof_. We shall prove that the sequence $e_n\coloneqq\l(1+\frac{1}{n}\r)^n$ is increasing by comparing consecutive terms. Indeed, by the Binomial Theorem, we see that
$$\begin{equation}
    \begin{aligned}
        e_n&=\l(1+\frac{1}{n}\r)^n && \textrm{Definition} \\
        &=\sum_{k=0}^n\binom{n}{k}\frac{1}{n^k} && \textrm{Binomial Theorem} \\
        &=1+\sum_{k=1}^n\binom{n}{k}\frac{1}{n^k} && \textrm{Split off first term} \\
        &=1+\sum_{k=1}^n\frac{1}{k!n^k}\prod_{i=0}^{k-1}\l(n-i\r) && \textrm{Definition of $\binom{n}{k}$} \\
        &=1+\sum_{k=1}^n\frac{1}{k!}\prod_{i=0}^{k-1}\frac{n-i}{n} && \textrm{Distribute into factors} \\
        &=1+\sum_{k=1}^n\frac{1}{k!}\prod_{i=0}^{k-1}\l(1-\frac{i}{n}\r). && \textrm{Simplification}
    \end{aligned}\cref{\ast}
\end{equation}$$
Thus we have
$$\begin{equation}
    \begin{aligned}
        e_{n+1}&=1+\sum_{k=1}^{n+1}\frac{1}{k!}\prod_{i=1}^{k-1}\l(1-\frac{i}{n+1}\r) && \ref{\ast}\textrm{ with $m\coloneqq n+1$} \\
        &>1+\sum_{k=1}^n\frac{1}{k!}\prod_{k=1}^{k-1}\l(1-\frac{i}{n+1}\r) && \textrm{Remove last term} \\
        &>1+\sum_{k=1}^n\frac{1}{k!}\prod_{i=0}^{k-1}\l(1-\frac{i}{n}\r) && \textrm{Compare terms} \\
        &=e_n && \ref{\ast}
    \end{aligned}
\end{equation}$$
for all $n\in\N^+$, so $\tpl{e_n}$ is increasing. Since $e_1=2$, we see that the sequence is bounded below by $2$. We now show that $\tpl{e_n}$ is bounded above by $3$, and so, by the Monotone Convergence Theorem, converges to some number $2<e<3$. Indeed, we have that
$$\begin{align}
    e_n&=1+\sum_{k=1}^n\frac{1}{k!}\prod_{i=0}^{k-1}\frac{n-i}{n} && \ref{\ast} \\
    &\leq1+\sum_{k=1}^n\frac{1}{k!} && n-i\leq n \\
    &\leq1+\sum_{k=1}^n\frac{1}{2^{k-1}} && k!=\prod_{i=2}^ki\geq 2^{k-1} \\
    &=1+\sum_{k=0}^{n-1}\frac{1}{2^k} && \textrm{Reindex} \\
    &=1+2\l(1-\frac{1}{2^n}\r) && \textrm{Geometric Sequence} \\
    &<3. && 2^n>0\qedin
\end{align}$$
