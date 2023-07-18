<div class="topSpace"></div>

Date Created: 18/07/2023 15:48:55
Tags: #Type/Theorem #Topic/Group_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Universal Property of Free Groups).

Let $X$ be a set. Then the map $j:X\to F\l(X\r)$ mapping $x\mapsto\tpl{x,e,e,\dots}$ is initial in the category of functions $f:X\to G$ to a group $G$.
![[Images/2023-05-10_141434/image.svg|125]]

```

<i>Proof.</i> Any homomorphism $\phi:F\l(X\r)\to G$ with $f=\phi\circ j$ must satisfy $\phi\l(x_1^{\epsilon_1},\dots,x_n^{\epsilon_n},e,e,\dots\r)=f\l(x_1\r)^{\epsilon_1}\cdots f\l(x_n\r)^{\epsilon_n}$ for $x_i\in X$ and $\epsilon_i=\pm1$, and the function defined this way is a homomorphism.<span style="float:right;">$\blacksquare$</span>
