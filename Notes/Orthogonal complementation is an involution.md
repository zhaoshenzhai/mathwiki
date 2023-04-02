---
mathLink: $U=\l(U^\perp\r)^\perp$
---

<div class="topSpace"></div>

Date Created: 28/06/2022 22:29:13
Tags: #Proposition #Topics/Linear_Algebra

Proved by: [[Basic properties of orthogonal complements]], [[Orthogonal Decomposition]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be an inner product space. If $U$ is a finite-dimensional linear subspace of $V$, then $U=\l(U^\perp\r)^\perp$._

```

_Proof_. We proceed by double containment.
* ($\subseteq$): Take $u\in U$. By definition, every $v\in U^\perp$ is, in particular, orthogonal to $u$, so $u\in\l(U^\perp\r)^\perp$.

* ($\supseteq$): Take $v\in\l(U^\perp\r)^\perp$. By the previous containment, we have the decomposition
$$\begin{equation}
    \l(U^\perp\r)^\perp=U\oplus U^\perp
\end{equation}$$
since $U$ is a finite-dimensional subspace of the vector space $\l(U^\perp\r)^\perp$. Thus there exist unique $u\in U$ and $w\in U^\perp$ such that $v=u+w$, so $v-u=w\in U^\perp$. By the previous containment, we have $u\in\l(U^\perp\r)^\perp$, so $v-u\in\l(U^\perp\r)^\perp$ too and hence
$$\begin{equation}
    v-u\in U^\perp\cap\l(U^\perp\r)^\perp.
\end{equation}$$
But then $v-u\in\l\{0\r\}$, so $v=u$ which implies that $v\in U$.<span style="float:right;">$\blacksquare$</span>
