---
mathLink: Universal Property of $\pi:R\to R/\mf{a}$
---

<div class="topSpace"></div>

Date Created: 04/06/2023 16:27:42
Tags: #Type/Theorem #Topic/Ring_Theory

Proved by: [[Universal Property of Quotient Groups]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Universal Property of Quotient Rings).

Let $\mf{a}\idealeq R$ be an ideal of a ring $R$. Then the projection $\pi:R\to R/\mf{a}$ is universal among homomorphisms whose kernel contains $\mf{a}$. That is, for any ring $S$ and any homomorphism $\phi:R\to S$ such that $\mf{a}\subringeq\ker\phi$, there exists a unique homomorphism $\widetilde{\phi}:R/\mf{a}\to S$ making the diagram below commute:
![[Images/2023-06-04_163210/image.svg|175]]

```

<i>Proof.</i> Viewing $R$ and $S$ as additive groups and $\mf{a}$ as a normal subgroup of $R$, there is a unique group homomorphism $\widetilde{\phi}:R/\mf{a}\to S$ such that the diagram commutes. To show that $\widetilde{\phi}$ is a ring homomorphism, observe that $\widetilde{\phi}\l(1+\mf{a}\r)=\phi\l(1\r)=1$, and, for all $r,s\in R$, that
$$\begin{equation}
    \widetilde{\phi}\l(\l(r+\mf{a}\r)\l(s+\mf{a}\r)\r)=\widetilde{\phi}\l(rs+\mf{a}\r)=\phi\l(rs\r)=\phi\l(r\r)\phi\l(s\r)=\widetilde{\phi}\l(r+\mf{a}\r)\widetilde{\phi}\l(s+\mf{a}\r).\qedin
\end{equation}$$
