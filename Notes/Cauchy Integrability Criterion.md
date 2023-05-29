<div class="topSpace"></div>

Date Created: 28/03/2023 16:14:26
Tags: #Type/Theorem #Topic/Analysis

Proved by: [[Metric-completeness of R]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Cauchy Integrability Criterion).

Let $f:\l[a,b\r]\to\R$ and let $\ms{P}$ be the set of all partitions of $\l[a,b\r]$. Then $f\in\RI{\l[a,b\r]}$ iff
$$\begin{equation}
    \fa\epsilon>0,\ex\delta>0,\fa\mc{P},\mc{Q}\in\ms{P}:\|\mc{P}\|,\|\mc{Q}\|<\delta\Rightarrow\l|S\l(f,\mc{P}\r)-S\l(f,\mc{Q}\r)\r|<\epsilon.
\end{equation}$$

```

_Proof_. The forward direction is trivial and simply uses the triangle inequality. Conversely, we construct a sequence $\tpl{\delta_n}_{n=1}^\infty$ by letting $\delta_n>0$ be such that if $\mc{P}$ and $\mc{Q}$ are partitions of $\l[a,b\r]$ such that $\|\mc{P}\|,\|\mc{Q}\|<\delta_n$, then $\l|S\l(f,\mc{P}\r)-S\l(f,\mc{Q}\r)\r|<1/n$. W.l.o.g., assume that $\delta_{n+1}\leq\delta_n$ for all $n$; otherwise, replace $\delta_n$ by $\delta_n'\coloneqq\underset{1\leq i\leq n}{\min}\l\{\delta_i\r\}$.

For all $n\in\N$, let $\mc{P}_n$ be a partition of $\l[a,b\r]$ such that $\|\mc{P}_n\|<\delta_n$. We claim that $\tpl{S\l(f,\mc{P}_n\r)}_{n=1}^\infty$ is Cauchy, so let $\epsilon>0$ and let $N\in\N^+$ be large enough so that $1/N<\epsilon$. Take $m,n\geq N$ with, say, $m>n$. Then $\delta_m\leq\delta_n$, so $\|\mc{P}_n\|,\|\mc{P}_m\|\leq\delta_n$ and hence
$$\begin{equation}
    \l|S\l(f,\mc{P}_n\r)-S\l(f,\mc{P}_m\r)\r|\leq\frac{1}{n}\leq\frac{1}{N}<\epsilon.
\end{equation}$$
By completeness of $\R$, this sequence converges, so let $L\coloneqq\lim\limits_{n\to\infty}S\l(f,\mc{P}_n\r)$. We claim that $L$ is the integral of $f$, so let $\epsilon>0$. Choose any $N>2/\epsilon$ and set $\delta\coloneqq\delta_N$. Then, for any partition $\mc{Q}$ of $\l[a,b\r]$ with $\|\mc{Q}\|<\delta$, we have
$$\begin{equation}
    \l|S\l(f,\mc{Q}\r)-L\r|\leq\l|S\l(f,\mc{Q}\r)-S\l(f,\mc{P}_N\r)\r|+\l|S\l(f,\mc{P}_N\r)-L\r|<\frac{1}{N}+\frac{1}{N}<\epsilon.\qedin
\end{equation}$$
