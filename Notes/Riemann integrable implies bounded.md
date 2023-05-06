---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 28/03/2023 13:08:39
Tags: #Type/Proposition #Topic/Analysis

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $f:\l[a,b\r]\to\R$ be Riemann integrable. Then $f$ is bounded on $\l[a,b\r]$._

```

_Proof_. Let $L$ be the integral of $f$ and suppose, for sake of contradiction, that $f$ is unbounded on $\l[a,b\r]$. Then for all $\epsilon>0$, there exists some $\delta>0$ such that for any tagged partition $\mc{P}$ with $\|\mc{P}\|<\delta$, we have $\l|S\l(f,\mc{P}\r)-L\r|<\epsilon$. Choose $\epsilon\coloneqq1$, so $\l|S\l(f,\mc{P}\r)-L\r|<1$ and hence
$$\begin{equation}
    \l|S\l(f,\mc{P}\r)\r|<\l|L\r|+1.
\end{equation}$$
Let $\mc{Q}\coloneqq\l\{x_1,\dots,x_n\r\}$ be a partition of $\l[a,b\r]$ with tags $q_i\in\l[x_{i-1},x_i\r]$ such that $\|\mc{Q}\|<\delta$. Since $\l|f\r|$ is not bounded on $\l[a,b\r]$, there exists $1\leq k\leq n$ such that $\l|f\r|$ is not bounded on $\l[x_{k-1},x_k\r]$. We pick the tags $q_i$ such that $\l|S\l(f,\mc{Q}\r)\r|>\l|L\r|+1$. Indeed, let $q_i\coloneqq x_i$ for all $i\neq k$ and let $q_k\in\l[x_{k-1},x_k\r]$ be such that
$$\begin{equation}
    \l|f\l(q_k\r)\l(x_k-x_{k-1}\r)\r|>\l|L\r|+1+\l|\sum_{i\neq k}f\l(q_i\r)\l(x_i-x_{i-1}\r)\r|.
\end{equation}$$
But since $\l|a\r|=\l|a-b+b\r|\leq\l|a+b\r|+\l|b\r|$ for any $a,b\in\R$, we see that
$$\begin{equation}
    \l|S\l(f,\mc{Q}\r)\r|=\l|\sum_{i=1}^{n}f\l(q_i\r)\l(x_i-x_{i-1}\r)\r|\geq\l|f\l(q_k\r)\l(x_k-x_{k-1}\r)\r|-\l|\sum_{i\neq k}f\l(q_i\r)\l(x_i-x_{i-1}\r)\r|>\l|L\r|+1.\qedin
\end{equation}$$
