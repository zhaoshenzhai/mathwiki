---
mathLink: $a^n\to0$
---

<div class="topSpace"></div>

Date Created: 04/10/2022 14:52:29
Tags: #Proposition #Courses/MATH254

Proved by: [[Bernoulli's Inequality]], [[Limit of 1 over linear]], [[Squeeze Theorem (Sequences)]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $a\in\R$. If $0<a<1$, then_ $\lim_{n\to\infty}a^n=0$_._

```

_Proof_. Set $b\coloneqq\frac{1}{a}-1$, so $a=\frac{1}{1+b}$. Observe then that
$$\begin{equation}
    d\l(a^n,0\r)=\l|a^n\r|=a^n=\l(\frac{1}{1+b}\r)^n=\frac{1}{\l(1+b\r)^n}\leq\frac{1}{1+bn}
\end{equation}$$
where the last inequality follows from Bernoulli's Inequality. But since the sequence of positive reals $\frac{1}{1+bn}\to0$ as $n\to\infty$, we see that $\lim_{n\to\infty}a^n=0$.<span style="float:right;">$\blacksquare$</span>
