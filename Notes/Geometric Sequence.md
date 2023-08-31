<div class="topSpace"></div>

Date Created: 04/10/2022 14:52:29
Tags: #Type/Example #Topic/Real_Analysis

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Binomial Theorem#^bernoulli]]

``` ad-Example
title: Example (Geometric Sequence).

A <b>geometric sequence</b> is a sequence of the form $r^n$ for some fixed $r\in\R$.
* If $0<r<1$, then $\lim\limits_{n\to\infty}r^n=0$. Otherwise, if $r\geq1$, then $\lim\limits_{n\to\infty}r^n=+\infty$.
* The series $\sum_{n=0}^{\infty}r^n$ converges iff $\l|r\r|<1$, in which case $\sum_{n=0}^{\infty}r^n=\frac{1}{1-r}$.

```

<i>Proof.</i> If $0<r<1$, set $a\coloneqq\frac{1}{r}-1$, so $r=\frac{1}{1+a}$, and observe that $d\l(r^n,0\r)=\l|r^n\r|=r^n=\l(\frac{1}{1+a}\r)^n=\frac{1}{\l(1+a\r)^n}\leq\frac{1}{1+an}$ where the last inequality follows from Bernoulli’s Inequality. But since the sequence of positive reals $\frac{1}{1+an}\to0$ as $n\to\infty$, we see that $\lim\limits_{n\to\infty}r^n=0$.
* Otherwise, if $r\geq1$, then $r^n$ is an increasing and unbounded sequence and hence converges to $+\infty$.

Let $s_k\coloneqq\sum_{n=0}^kr^n$ be its sequence of partial sums. Note that $\l(1-r\r)s_k=\l(1-r^{k+1}\r)$, so, if $r\neq 1$, we have $s_k=\frac{1-r^{k+1}}{1-r}$. Observe then that
$$\begin{equation}
    \l|s_k-\frac{1}{1-r}\r|=\l|\frac{r^{k+1}}{1-r}\r|,
\end{equation}$$
which converges (to $0$) iff $\l|r\r|<1$. The series clearly diverges when $r=1$.<span style="float:right;">$\blacksquare$</span>
