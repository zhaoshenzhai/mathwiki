---
mathLink: $\sqrt[n]{a}\to1$
---

<div class="topSpace"></div>

Date Created: 04/10/2022 15:11:41
Tags: #Proposition #Courses/MATH254

Proved by: [[Bernoulli's Inequality]], [[1 over linear converges to 0]], [[Squeeze Theorem (Sequences)]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_For all $a\in\R^+$, we have_ $\lim_{n\to\infty}\sqrt[n]{a}=1$_._

```

_Proof_. If $a=1$, then $\sqrt[n]{a}=1$ is the constant sequence, which converges to $1$. We consider the cases for when $a<1$ and $a>1$.
* ($a>1$): We claim that $\sqrt[n]{a}>1$; if $\sqrt[n]{a}\leq1$, then $a\leq 1^n=1$, a contradiction. Set $d_n\coloneqq\sqrt[n]{a}-1>0$. It suffices to show that $d_n\to0$ as $n\to\infty$, for then $\sqrt[n]{a}\to1$ as $n\to\infty$. Observe that $\sqrt[n]{a}=1+d_n$, so, by Bernoulli' Identity, $c=\l(1+d_n\r)^n\geq1+nd_n$. Thus
$$\begin{equation}
    d\l(d_n,0\r)=\l|d_n\r|=d_n\leq\frac{c-1}{n}=\l(c-1\r)\cdot\frac{1}{n},
\end{equation}$$
and since $1/n\to0$ as $n\to\infty$, the result follows.

* ($a<1$): We claim $\sqrt[n]{a}<1$; if $\sqrt[n]{a}\geq1$, then $a\geq1^n=1$, a contradiction. Hence $1/\sqrt[n]{a}>1$, so set $d_n\coloneqq\frac{1}{\sqrt[n]{a}}-1>0$. Similarly, it suffices to show that $d_n\to0$ as $n\to\infty$. Observe that $\sqrt[n]{a}=\frac{1}{1+d_n}$, so, by Bernoulli' Identity,
$$\begin{equation}
    c=\frac{1}{\l(1+d_n\r)^n}\leq\frac{1}{1+nd_n}.
\end{equation}$$
But then $1+nd_n\leq1/c$, so
$$\begin{equation}
    d\l(d_n,0\r)=\l|d_n\r|=d_n\leq\l(\frac{1}{c}-1\r)\cdot\frac{1}{n}.
\end{equation}$$
Since $1/n\to0$ as $n\to\infty$, the result follows.<span style="float:right;">$\blacksquare$</span>
