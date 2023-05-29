---
mathLink: $T$ self-adjoint and $U$ is $T$-invariant $\Rightarrow$ $U^\perp$ is $T$-invariant
---

<div class="topSpace"></div>

Date Created: 12/04/2023 10:04:34
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $T:V\to V$ be a linear operator on an inner product space $V$. If $T$ is self-adjoint and $U\subseteq V$ is $T$-invariant, then so is $U^\perp$.

```

<i>Proof.</i> Take $v\in U^\perp$, so $\inprod{u}{v}=0$ for all $u\in U$. Then $\inprod{u}{Tv}=\inprod{Tu}{v}$ for all $u\in U$, so, since $Tu\in U$, we see that $\inprod{u}{Tv}=0$ for all $u\in U$.<span style="float:right;">$\blacksquare$</span>
