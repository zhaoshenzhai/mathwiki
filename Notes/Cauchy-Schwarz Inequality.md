---
mathLink-blocks:
    inner-product-space-induces-a-norm: Inner product induces a norm
---

<div class="topSpace"></div>

Date Created: 26/06/2022 17:19:32
References: #Ref/Axl24
Tags: #Type/Theorem #Topic/Functional_Analysis

Proved by: [[Basic properties of orthogonal projections]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: [[Algebra of Lp spaces#^holder]]

``` ad-Theorem
title: Theorem (Cauchy-Schwarz Inequality).

Let $V$ be an inner product space. Then, for all $u,v\in V$, we have $\l|\inprod{u}{v}\r|\leq\|u\|\|v\|$, where equality holds iff $\l\{u,v\r\}$ is linearly dependent.

```

<b>Remark.</b> If $k=\R$, this shows us that $-1\leq\frac{\inprod{u}{v}}{\|u\|\|v\|}\leq1$, which enables us to define the <i>angle between $u$ and $v$</i> as the unique $\theta_{u,v}\in\l[0,\pi\r]$ such that $\cos\theta_{u,v}=\frac{\inprod{u}{v}}{\|u\|\|v\|}$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Every inner product induces a norm $\|v\|\coloneqq\sqrt{\inprod{v}{v}}$. Positive-definiteness and absolute homogeneity follows immediately; for the triangle inequality, take $v,w\in V$ and observe that
^inner-product-space-induces-a-norm
$$\begin{equation}
    \|v+w\|^2=\inprod{v+w}{v+w}=\|v\|^2+\|w\|^2+2\Re\inprod{v}{w}\leq\|v\|^2+\|w\|^2+2\Re\l(\|v\|\|w\|\r)=\l(\|v\|+\|w\|\r)^2,
\end{equation}$$
from which the result follows by taking roots.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> If $v=0$, then both sides reduce to $0$. Otherwise, the projection $P_v$ onto $\span\l\{v\r\}$ is a contraction and hence
$$\begin{equation}
    \|P_v\!\l(u\r)\|=\l\|\frac{\inprod{u}{v}}{\inprod{v}{v}}v\r\|=\l|\frac{\inprod{u}{v}}{\inprod{v}{v}}\r|\|v\|\leq\|u\|,
\end{equation}$$
so $\l|\inprod{u}{v}\r|\leq\|u\|\|v\|$. Note that $P_v$ is the identity on $\span\l\{v\r\}$, so the equality claim follows.<span style="float:right;">$\blacksquare$</span>
