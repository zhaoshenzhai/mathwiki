<div class="topSpace"></div>

Date Created: 14/03/2023 11:15:29
Tags: #Proposition #Topics/Analysis

Proved by: [[Sequential Limit Theorems in R]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: [[p series converges iff p>1]]

``` ad-Proposition
title: Proposition.

_The infinite series_ $\sum_{k=1}^{\infty}1/k$ _diverges._

```

_Proof_. Suppose, for sake of contradiction, that it converges to some $S>0$. Letting $s_n$ be its sequence of partial sums, we see that
$$\begin{equation}
    \begin{aligned}
        s_{2n}=\sum_{k=1}^{2n}\frac{1}{k}&=1+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+\frac{1}{5}+\frac{1}{6}+\frac{1}{7}+\frac{1}{8}+\cdots+\frac{1}{2n-1}+\frac{1}{2n} \\
        &\geq1+\frac{1}{2}+\frac{1}{4}+\frac{1}{4}+\frac{1}{6}+\frac{1}{6}+\frac{1}{8}+\frac{1}{8}+\cdots+\frac{1}{2n}+\frac{1}{2n} \\
        &=1+\frac{1}{2}+\frac{1}{2}+\frac{1}{3}+\frac{1}{4}+\cdots+\frac{1}{n} \\
        &=\frac{1}{2}+s_n,
    \end{aligned}
\end{equation}$$
so $\lim\limits_{n\to\infty}s_n=\lim\limits_{n\to\infty}s_{2n}\geq\frac{1}{2}+\lim\limits_{n\to\infty}s_n$, a contradiction.<span style="float:right;">$\blacksquare$</span>
