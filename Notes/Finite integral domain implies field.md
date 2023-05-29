---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 14/11/2022 21:55:48
Tags: #Type/Proposition #Topic/Ring_Theory

Proved by: [[Integral domain iff cancellable]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $R$ be a finite integral domain such that $0\neq1$. Then $R$ is a field.

```

_Proof_. It suffices to show that $R$ is a division ring, so take $r\in R\comp\l\{0\r\}$. Consider the function
$$\begin{equation}
    \phi_r\!:R\comp\l\{0\r\}\to R\comp\l\{0\r\}:s\mapsto r\cdot s;
\end{equation}$$
we claim that $\phi_r$ is a bijection and hence $\phi_r^{-1}\l(1\r)\in R$. It will then follow that
$$\begin{equation}
    r\cdot\phi_r^{-1}\l(1\r)=\phi_r\l(\phi_r^{-1}\l(1\r)\r)=1,
\end{equation}$$
so we are done. Indeed, it suffices to show that $\phi_r$ is injective, for since $R\comp\l\{0\r\}$ is finite, $\phi_r$ is also surjective.
* Take $s_1,s_2\in R\comp\l\{0\r\}$ such that $rs_1=rs_2$. Since $r\neq0$ and $R$ is an integral domain, we see that $s_1=s_2$.<span style="float:right;">$\blacksquare$</span>
