---
mathLink: $a^n\to0$ or $+\infty$
---

<div class="topSpace"></div>

Date Created: 04/10/2022 14:52:29
Tags: #Type/Proposition #Topic/Real_Analysis

Proved by: [[Bernoulli's Inequality]], [[Limit of 1 over linear]], [[Squeezed Distance Lemma]], [[Monotone Convergence Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $a\in\R^+$. If $0\leq a<1$, then $\lim\limits_{n\to\infty}a^n=0$. Otherwise, if $a\geq1$, then $\lim\limits_{n\to\infty}a^n=+\infty$.

```

<i>Proof.</i> If $a=0$, we are done. Otherwise, if $0<a<1$, set $b\coloneqq\frac{1}{a}-1$, so $a=\frac{1}{1+b}$. Observe then that
$$\begin{equation}
    d\l(a^n,0\r)=\l|a^n\r|=a^n=\l(\frac{1}{1+b}\r)^n=\frac{1}{\l(1+b\r)^n}\leq\frac{1}{1+bn}
\end{equation}$$
where the last inequality follows from Bernoulli’s Inequality. But since the sequence of positive reals $\frac{1}{1+bn}\to0$ as $n\to\infty$, we see that $\lim\limits_{n\to\infty}a^n=0$.

Otherwise, if $a\geq1$, then $a^n$ is an increasing and unbounded sequence and hence converges to $+\infty$ by the Monotone Convergence Theorem.<span style="float:right;">$\blacksquare$</span>
