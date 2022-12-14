---
mathLink: $R$ integral domain $\Rightarrow$ $\charac R$ prime or $0$
---

<div class="topSpace"></div>

Date Created: 15/11/2022 13:10:05
Tags: #Proposition #Courses/MATH235

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ be an integral domain. Then its characteristic is either prime or $0$._

```

_Proof_. Let $n\coloneqq\charac R$. If $n\neq0$, then, in particular, we have that $n1=0$. Suppose, for sake of contradiction, that $m$ is not prime. Thus there exist integers $1<a,b<n$ such that $n=ab$. But then
$$\begin{equation}
    a1\cdot b1=\l(ab\r)1=n1=0,
\end{equation}$$
so either $a1=0$ or $b1=0$. But $a,b<n$ and $n=\charac R$, so this forces $a=0$ or $b=0$, a contradiction.<span style="float:right;">$\blacksquare$</span>
