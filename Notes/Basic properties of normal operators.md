<div class="topSpace"></div>

Date Created: 05/04/2023 11:11:33
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: [[Basic properties of adjoint operators]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

A linear operator $T:V\to V$ on an inner product space is normal iff $\inprod{Tu}{Tv}=\inprod{T^\adj u}{T^\adj v}$ for every $u,v\in V$, in which case:
* $T^\adj$ is normal, $\|Tv\|=\|T^\adj v\|$ for all $v\in V$, and $v\in\ker T$ iff $v\in\ker T^\adj$.
* For all $\lambda\in K$, the operator $\l(T-\lambda\id\r)$ is normal.
* For all $\lambda\in K$, $v$ is an $\lambda$-eigenvector of $T$ iff it is an $\bar{\lambda}$-eigenvector of $T^\adj$.
* If $\lambda,\lambda'\in K$ are distinct eigenvalues, then $E_\lambda\perp E_{\lambda'}$.

```

<i>Proof.</i> Take $u,v\in V$. If $T$ is normal, then $\inprod{Tu}{Tv}=\inprod{T^\adj Tu}{v}=\inprod{TT^\adj u}{v}=\inprod{T^\adj u}{T^\adj v}$. Conversely, if $\inprod{Tu}{Tv}=\inprod{T^\adj u}{T^\adj v}$, then $\inprod{T^\adj Tu}{v}=\inprod{TT^\adj u}{v}$ and hence $T^\adj T=TT^\adj$.
* Since $T^{\adj\adj}=T$, we see that $T^\adj$ is normal too. The second claim follows by taking $u=v$, and the third follows from positive-definiteness of $\|\slot\|$.
* Observe that $\l(T-\lambda\id\r)\l(T-\lambda\id\r)^\adj=\l(T-\lambda\id\r)\l(T^\adj-\bar{\lambda}\id\r)=TT^\adj-\lambda T^\adj-\bar{\lambda}T+\l|\lambda\r|^2\id=\l(T^\adj-\bar{\lambda}\id\r)\l(T-\lambda\id\r)=\l(T-\lambda\id\r)^\adj\l(T-\lambda\id\r)$.
* This follows since $\l(T-\lambda\id\r)$ is normal with $\l(T-\lambda\id\r)^\adj=\l(T^\adj-\bar{\lambda}\id\r)$, so $v\in\ker\l(T-\lambda\id\r)$ iff $v\in\ker\l(T^\adj-\bar{\lambda}\id\r)$.
* Take $u\in E_\lambda$ and $v\in E_{\lambda'}$, so $Tu=\lambda u$ and $Tv=\lambda'v$. Then $\lambda\inprod{u}{v}=\inprod{\lambda u}{v}=\inprod{Tu}{v}=\inprod{u}{T^\ast v}=\inprod{u}{\bar{\lambda'}v}=\lambda'\inprod{u}{v}$, so, since $\lambda\neq\lambda'$, we have $u\perp v$.<span style="float:right;">$\blacksquare$</span>
