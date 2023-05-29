---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 04/02/2022 18:51:58
Tags: #Type/Proposition #Later/Topology

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $\R$ be the set of real numbers. Then the upper limit topology $\ULtopR\coloneqq\mc{T}\l(\mc{B}_\textrm{UL}\r)$ where
$$\begin{equation}
    \mc{B}_\textrm{UL}\coloneqq\l\{B\in\pow\l(\R\r)\mid \ex a,b\in\R:a<b\land B=\l(a,b\r]\r\}.
\end{equation}$$
is a topology on $\R$.

```

<i>Proof.</i> It suffices to prove that $\mc{B}_\textrm{UL}$ is a basis for a topology on $\R$.
* ($\axibasis[1]$): For any $x\in\R$, take $B=\l(x-r,x\r]$ for any $r\in\R^+$. Observe that $x\in B$.
* ($\axibasis[2]$): Take any $B_1=\l(a,b\r]$ and $B_2=\l(c,d\r]$ in $\mc{B}_\textrm{UL}$. Observe that either $c<b$ or $b\leq c$; in the latter case, their intersection is empty. Otherwise, $B_1\cap B_2=\l(c,b\r]$ is again in $\mc{B}_\textrm{UL}$.<span style="float:right;">$\blacksquare$</span>
