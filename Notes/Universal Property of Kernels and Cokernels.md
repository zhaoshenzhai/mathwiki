---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 18/07/2023 14:04:29
Tags: #Type/Theorem #Topic/Module_Theory

Proved by: [[Universal Property of Quotients]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Universal Property of Kernels/Cokernels).

Let $\phi:M\to N$ be an $R$-module homomorphism. Then the inclusion $\iota:\ker\phi\to M$ is initial in the category of $R$-module homomorphisms $\alpha:K\to M$ where $\phi\circ\alpha$ is the trivial map. Dually for the projection $\pi:N\to\coker\phi$.

```

<b>Remark.</b> In $\catgrp$ and $\catring$, the inclusions satisfy the same universal property. Since $\catabgrp$ is equivalent to $\catmod[\Z]$, we have the same for projections too.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> If $\phi\circ\alpha$ is the trivial map, then $\phi\l(\alpha\l(k\r)\r)=e$ for all $k\in K$ and hence $\alpha\l(k\r)\in\ker\phi$ for all $k\in K$. Thus $\im\alpha\subgrpeq\ker\phi$, so the only $R$-module homomorphism $\widetilde{\alpha}:K\to\ker\phi$ with $\alpha=\iota\circ\widetilde{\alpha}$ is $\alpha$ with restricted domain.
![[Images/2023-07-18_135101/image.svg|450]]Dually, we have $\beta\l(\phi\l(m\r)\r)=0$ for all $m\in M$ and hence $\im\phi\subgrpeq\ker\beta$. Thus $\beta:N\to L$ descends uniquely into a map $\widetilde{\beta}:N/\im\phi\to L$, as desired.<span style="float:right;">$\blacksquare$</span>
