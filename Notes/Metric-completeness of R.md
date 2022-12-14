---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 01/11/2022 00:52:54
Tags: #Theorem #Courses/MATH254

Proved by: [[Convergent implies Cauchy]], [[Cauchy implies bounded]], [[Bolzano-Weierstrass Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Metric-completeness of $\R$).

_Let $\tpl{x_n}$ be a sequence in $\R$. Then $\tpl{x_n}$ converges iff it is Cauchy._

```

_Proof_. The forward direction holds for all metric spaces. Conversely, since $\tpl{x_n}$ is bounded, Bolzano-Weierstrass furnishes a subsequence $\tpl{x_{n_k}}$ of $\tpl{x_n}$ that converges to some $l\in\R$. We claim that $\lim\limits_{n\to\infty}x_n=l$. Indeed, take $\epsilon>0$. Since $\fa^\infty k\in\N:d\l(x_{n_k},l\r)<\epsilon/2$ and $\fa^\infty k,n\in\N:d\l(x_{n_k},x_n\r)<\epsilon/2$, we see that
$$\begin{equation}
    d\l(x_n,l\r)\leq d\l(x_n,x_{n_k}\r)+d\l(x_{n_k},l\r)<\epsilon/2+\epsilon/2=\epsilon
\end{equation}$$
for all eventually $n\in\N$, so we are done.<span style="float:right;">$\blacksquare$</span>
