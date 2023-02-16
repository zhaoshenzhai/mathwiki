---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 14/02/2023 11:14:24
Tags: #Proposition #Topics/Analysis

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition (Young$\textrm{'}$s Inequality for Products).

_Let $a,b\in\R_0^+$ and let $1<p,q<+\infty$ be conjugate exponents. Then_
$$\begin{equation}
    ab\leq\frac{a^p}{a}+\frac{b^q}{q}.
\end{equation}$$

```

_Proof_. Recall that a twice differentiable function $f:\R\to\R$ with $f''\l(x\r)\geq0$ for all $x$ is convex; that is
$$\begin{equation}
    f\l(\alpha t+\beta\l(1-t\r)\r)\leq tf\l(\alpha\r)+\l(1-t\r)f\l(\beta\r)
\end{equation}$$
for every $\alpha,\beta\in\R$ and $t\in\l[0,1\r]$. Noting that $e^x$ is convex, we take $\alpha\coloneqq p\ln a$, $\beta\coloneqq q\ln b$, and $t\coloneqq 1/p$ to give
$$\begin{equation}
    e^{\ln a+\ln b}\leq\frac{e^{p\ln a}}{p}+\frac{e^{q\ln b}}{q}.
\end{equation}$$
Simplifying gives the desired result.<span style="float:right;">$\blacksquare$</span>
