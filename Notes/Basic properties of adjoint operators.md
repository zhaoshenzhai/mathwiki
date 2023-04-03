<div class="topSpace"></div>

Date Created: 03/04/2023 16:06:38
Tags: #Proposition #Topics/Functional_Analysis

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $U$, $V$, and $W$ be inner product spaces. Then the following properties holds._
1. _For all linear maps $S,T:V\to W$ and $\lambda\in K$, we have $\l(S+\lambda T\r)^\ast=S^\ast+\bar{\lambda}T^\ast$._
2. _For all linear maps $S:V\to W$ and $T:U\to V$, we have $\l(ST\r)^\ast=T^\ast S^\ast$._
3. _For all linear maps $T:V\to W$, we have $T^{\ast\ast}=T$._

```

_Proof_. Let $S$ and $T$ be the appropriate linear maps and take $\lambda\in K$. Observe then that
$$\begin{gathered}
    \inprod{v}{\l(S+\lambda T\r)^\ast w}=\inprod{\l(S+\lambda T\r)v}{w}=\inprod{Sv}{w}+\lambda\inprod{Tv}{w}=\inprod{v}{S^\ast w}+\lambda\inprod{v}{T^\ast w}=\inprod{v}{S^\ast w+\lambda T^\ast w} \\
    \inprod{u}{\l(ST\r)^\ast w}=\inprod{\l(ST\r)u}{w}=\inprod{S\l(Tu\r)}{w}=\inprod{Tu}{S^\ast w}=\inprod{u}{\l(T^\ast S^\ast\r)w} \\
    \inprod{w}{T^{\ast\ast}v}=\inprod{T^\ast w}{v}=\bar{\inprod{v}{T^\ast w}}=\bar{\inprod{Tv}{w}}=\inprod{w}{Tv}
\end{gathered}$$
for all $u\in U$, $v\in V$, and $w\in W$, so the results follow.<span style="float:right;">$\blacksquare$</span>
