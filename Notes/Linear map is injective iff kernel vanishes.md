---
mathLink: Linear map $T$ is injective $\Leftrightarrow$ $\ker T=\l\{0\r\}$
---

<div class="topSpace"></div>

Date Created: 13/05/2022 20:25:22
Tags: #Proposition #Later/Linear_Algebra

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be vector spaces over some field $K$ and consider a linear map $T:V\to W$. Then $T$ is injective iff $\ker T=\l\{0\r\}$._

```

_Proof_.
* ($\Rightarrow$): Take $v\in\ker T$, so $T\l(v\r)=0$. Since $T\l(0\r)=0$ and $T$ is injective, we see that $T\l(v\r)=T\l(0\r)$ and thus $v=0$.

* ($\Leftarrow$): Take $v_1,v_2\in V$ such that $T\l(v_1\r)=T\l(v_2\r)$. It follows then that $T\l(v_1\r)-T\l(v_2\r)=0$ which, because $T$ is linear, implies that $T\l(v_1-v_2\r)=0$. But then $v_1-v_2\in\ker T$, so $v_1-v_2=0$ and thus $v_1=v_2$.<span style="float:right;">$\blacksquare$</span>
