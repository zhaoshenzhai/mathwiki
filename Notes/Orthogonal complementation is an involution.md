---
mathLink: $U=\l(U^\perp\r)^\perp$
---

<div class="topSpace"></div>

Date Created: 28/06/2022 22:29:13
References:
Tags: #Type/Proposition #Topic/Functional_Analysis

Proved by: [[Basic properties of orthogonal complements]], [[Orthogonal Decomposition]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $V$ be an inner product space. If $U$ is a finite-dimensional linear subspace of $V$, then $U=\l(U^\perp\r)^\perp$.

```

<i>Proof.</i> We proceed by double containment.
* ($\subseteq$). Take $u\in U$. By definition, every $v\in U^\perp$ is, in particular, orthogonal to $u$, so $u\in\l(U^\perp\r)^\perp$.

* ($\supseteq$). Take $v\in\l(U^\perp\r)^\perp$. By the previous containment, we have the decomposition $\l(U^\perp\r)^\perp=U\oplus U^\perp$ since $U$ is a finite-dimensional subspace of the vector space $\l(U^\perp\r)^\perp$. Thus there exist unique $u\in U$ and $w\in U^\perp$ such that $v=u+w$, so $v-u=w\in U^\perp$. By the previous containment, we have $u\in\l(U^\perp\r)^\perp$, so $v-u\in\l(U^\perp\r)^\perp$ too and hence $v-u\in U^\perp\cap\l(U^\perp\r)^\perp$. But then $v-u\in\l\{0\r\}$, so $v=u$ which implies that $v\in U$.<span style="float:right;">$\blacksquare$</span>
