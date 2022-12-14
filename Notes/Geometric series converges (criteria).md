---
mathLink: Geometric series converges $\Leftrightarrow$ $\l|r\r|<1$
---

<div class="topSpace"></div>

Date Created: 01/09/2022 17:00:29
Tags: #Proposition #Courses/MATH222

Proved by: [[Sequential Limit Theorems in R]], [[Limit of geometric]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ denote either $\R$ or $\C$ and consider a geometric sequence $a_n\coloneqq a_0r^n$ for some fixed $a_0,r\in K$ where $a_0\neq0$. Then the geometric series_ $\sum_{n=0}^\infty a_0r^n$ _converges iff $\l|r\r|<1$, in which case_
$$\begin{equation}
    \sum_{n=0}^\infty a_0r^n=\frac{a_0}{1-r}.
\end{equation}$$

```

_Proof_. Let $s_n\coloneqq\sum_{k=0}^na_0r^n$ be the sequence of partial sums of $\tpl{a_n}$, and observe that
$$\begin{equation}
    \begin{aligned}
        \l(1-r\r)s_n&=\l(1-r\r)\sum_{k=0}^na_0r^n && \textrm{Substitution} \\
        &=\sum_{k=0}^na_0r^n-\sum_{k=0}^na_0r^{n+1} && \textrm{Distribution} \\
        &=
            \begin{aligned}
                a_0&+a_0r^1+\cdots+a_0r^n \\
                &-a_0r^1-\cdots-a_0r^n-a_0r^{n+1}
            \end{aligned} && \textrm{Expansion} \\
        &=a_0-a_0r^{n+1}. && \textrm{Cancellation}
    \end{aligned}
\end{equation}$$
Thus, if $r\neq 1$, we have
$$\begin{equation}
    s_n=\frac{a_0\l(1-r^{n+1}\r)}{1-r}
\end{equation}$$
and hence
$$\begin{equation}
    \begin{aligned}
        \lim_{n\to\infty}\sum_{k=0}^na_0r^n&=\lim_{n\to\infty}\frac{a_0\l(1-r^{n+1}\r)}{1-r} && \textrm{Substitution} \\
        &=\frac{a_0}{1-r}\l(1-\lim_{n\to\infty}r^{n+1}\r). && \textrm{Linearity of $\lim_{n\to\infty}$; $a_0\neq0$}
    \end{aligned}
\end{equation}$$
Note that the limit converges to $0$ iff $\l|r\r|<1$ (assuming $r\neq1$) and diverges otherwise, so the series $\sum_{n=0}^\infty a_0r^n$ converges to
$$\begin{equation}
    \frac{a_0}{1-r}
\end{equation}$$
iff $\l|r\r|<1$. If $r=1$, then $a_n=a_0$; since $a_0\neq0$, we see that the series diverges.<span style="float:right;">$\blacksquare$</span>
