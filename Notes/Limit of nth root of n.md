---
mathLink: $\sqrt[n]{n}\to1$
---

<div class="topSpace"></div>

Date Created: 13/10/2022 08:32:51
Tags: #Type/Proposition #Topic/Analysis

Proved by: [[Bernoulli's Inequality]]
References: _Not Applicable_
Justifications: [[Existence of nth roots]]

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

$\lim\limits_{n\to\infty}\sqrt[n]{n}=1$.

```

_Proof_. Let $\epsilon>0$ and set
$$\begin{equation*}
    N\coloneqq\l\lceil\frac{2}{\epsilon^2}\r\rceil,
\end{equation*}$$
so in particular $N>2/\epsilon^2$ and thus $\sqrt{2/N}<\epsilon$. We claim that $d_n\coloneqq\sqrt[n]{n}-1\geq0$ for all $n\geq N$. Since $N\geq1$, every $n\geq N$ is $\geq1$. Hence if $\sqrt[n]{n}<1$, then $n<1^n=1$ which is a contradiction. Thus $\sqrt[n]{n}\geq1$, so $d_n\geq0$. Furthermore, by the Bernoulli$\textrm{'}$s Inequality, we see that
$$\begin{equation*}
    n=\l(1+d_n\r)^n\geq1+\frac{n\l(n-1\r)}{2}d_n^2.
\end{equation*}$$
Hence
$$\begin{equation*}
    \frac{n\l(n-1\r)}{2}d_n^2\leq n-1,
\end{equation*}$$
but since $n>1$, we can cancel $n-1$ from both sides and preserve the inequality to obtain
$$\begin{equation*}
    d_n^2\leq2/n.
\end{equation*}$$
Hence
$$\begin{equation*}
    d_n\leq\sqrt{\frac{2}{n}}\leq\sqrt{\frac{2}{N}}<\epsilon.
\end{equation*}$$
Finally, observe that
$$\begin{equation*}
    d\l(\sqrt[n]{n},1\r)=\l|\sqrt[n]{n}-1\r|=\l|d_n\r|=d_n<\epsilon,
\end{equation*}$$
which holds for all $n\geq N$. Thus $\lim\limits_{n\to\infty}\sqrt[n]{n}=1$.<span style="float:right;">$\blacksquare$</span>
