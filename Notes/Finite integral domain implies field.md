---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 14/11/2022 21:55:48
References:
Tags: #Type/Proposition #Topic/Rings_and_Modules/Ring_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $R$ be an integral domain. If $R$ is finite, then it is a field.

```

<i>Proof.</i> It suffices to show that $R$ is a division ring, so take $r\in R\comp\l\{0\r\}$ and consider the function $\phi_r\!:R\comp\l\{0\r\}\to R\comp\l\{0\r\}$ mapping $r\mapsto rs$. We claim that $\phi_r$ is a bijection, so in particular $\phi_r^{-1}\!\l(1\r)\in R\comp\l\{0\r\}$. It will then follow that $r\cdot\phi_r^{-1}\l(1\r)=\phi_r\l(\phi_r^{-1}\l(1\r)\r)=1$, so we are done. Indeed, $\phi_r$ is injective since if $rs_1=rs_2$, we see from $r\neq0$ that $s_1=s_2$. Since $R$ is finite, $\phi_r$ is also bijective and we are done.<span style="float:right;">$\blacksquare$</span>
