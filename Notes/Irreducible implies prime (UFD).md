---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 11/01/2023 17:02:49
Tags: #Type/Proposition #Topic/Ring_Theory #Courses/MATH457

Proved by: [[Basic properties of divisibility and associates]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ be a UFD. Then any irreducible element is prime._

```

_Proof_. Let $c\in R$ be irreducible and take $a,b\in R$ such that $c\divides\!\l(ab\r)$. Then $ab=cd$ for some $d\in R$. Since $R$ is a UFD, we can write $a=x_1x_2\cdots x_n$, $b=y_1y_2\cdots y_m$, and $d=z_1z_2\cdots z_k$ with all $x_i,y_j,z_k\in R$ irreducible. Then
$$\begin{equation}
    \l(x_1x_2\cdots x_n\r)\l(y_1y_2\cdots y_m\r)=c\l(z_1z_2\cdots z_k\r),
\end{equation}$$
so, since each factor is irreducible, the uniqueness of factorization forces $c\sim x_i$ for some $1\leq i\leq n$ or $c\sim y_j$ for some $1\leq j\leq m$. In the former case, $c\divides x_i$ and so $c\divides a$; in the latter, $c\divides y_j$ and so $c\divides b$.<span style="float:right;">$\blacksquare$</span>
