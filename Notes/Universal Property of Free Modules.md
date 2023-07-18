<div class="topSpace"></div>

Date Created: 18/07/2023 15:58:54
Tags: #Type/Theorem #Topic/Module_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Universal Property of Free Modules).

Let $X$ be a set. Then the map $j:X\to F^R\!\l(X\r)$ mapping $x\mapsto \delta_x$ is initial in the category of functions $f:X\to M$ to an $R$-module $M$.
![[Images/2023-07-18_154443/image.svg|125]]

```

<b>Remark.</b> In particular, we have the corresponding universal property for the free abelian group $F^\textrm{ab}\!\l(X\r)$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Note that $F^R\!\l(X\r)\coloneqq R^{\oplus X}$ and $\delta_x:X\to M$ is the function defined by $\delta_x\!\l(t\r)\coloneqq1$ if $x=t$ and $0$ otherwise. Then every $\tpl{r_x}\in R^{\oplus X}$ can be written (uniquely) as the sum $\tpl{r_x}=\sum_{x\in X}r_x\delta_x$, so any homomorphism $\phi:F^R\!\l(X\r)\to M$ with $f=\phi\circ j$ must be such that
$$\begin{equation}
    \phi\l(r_x\r)=\phi\l(\sum r_x\delta_x\r)=\sum r_x\phi\l(\delta_x\r)=\sum r_x\l(\phi\circ j\r)\l(x\r)=\sum r_x f\l(x\r).
\end{equation}$$
The function $\phi$ defined this way is an $R$-module homomorphism, so we are done.<span style="float:right;">$\blacksquare$</span>
