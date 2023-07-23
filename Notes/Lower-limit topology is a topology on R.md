---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 04/02/2022 17:58:28
Tags: #Type/Proposition #Topic/Topology/Later

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\R$ be the set of real numbers. Then the lower limit topology $\LLtopR\coloneqq\mc{T}\l(\mc{B}_\textrm{LL}\r)$ where
$$\begin{equation}
    \mc{B}_\textrm{LL}\coloneqq\l\{B\in\pow\l(\R\r)\st \ex a,b\in\R:a<b\land B=\l[a,b\r)\r\}.
\end{equation}$$
is a topology on $\R$.

```

<i>Proof.</i> It suffices to prove that $\mc{B}_\textrm{LL}$ is a basis for a topology on $\R$.
* ($\axibasis[1]$): For any $x\in\R$, take $B=\l[x,x+r\r)$ for any $r\in\R^+$. Observe that $x\in B$.
* ($\axibasis[2]$): Take any $B_1=\l[a,b\r)$ and $B_2=\l[c,d\r)$ in $\mc{B}_\textrm{LL}$. Observe that either $c<b$ or $b\leq c$; in the latter case, their intersection is empty. Otherwise, $B_1\cap B_2=\l[c,b\r)$ is again in $\mc{B}_\textrm{LL}$.<span style="float:right;">$\blacksquare$</span>
