<div class="topSpace"></div>

Date Created: 03/04/2023 16:06:38
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $U$, $V$, and $W$ be inner product spaces. Then the following properties holds.
1. For all linear maps $S,T:V\to W$ and $\lambda\in K$, we have $\l(S+\lambda T\r)^\adj=S^\adj+\bar{\lambda}T^\adj$.
2. For all linear maps $S:V\to W$ and $T:U\to V$, we have $\l(ST\r)^\adj=T^\adj S^\adj$.
3. For all linear maps $T:V\to W$, we have $T^{\adj\adj}=T$.

```

<i>Proof.</i> Let $S$ and $T$ be the appropriate linear maps and take $\lambda\in K$. Observe then that
$$\begin{gathered}
    \inprod{v}{\l(S+\lambda T\r)^\adj w}=\inprod{\l(S+\lambda T\r)v}{w}=\inprod{Sv}{w}+\lambda\inprod{Tv}{w}=\inprod{v}{S^\adj w}+\lambda\inprod{v}{T^\adj w}=\inprod{v}{S^\adj w+\lambda T^\adj w} \\
    \inprod{u}{\l(ST\r)^\adj w}=\inprod{\l(ST\r)u}{w}=\inprod{S\l(Tu\r)}{w}=\inprod{Tu}{S^\adj w}=\inprod{u}{\l(T^\adj S^\adj\r)w} \\
    \inprod{w}{T^{\adj\adj}v}=\inprod{T^\adj w}{v}=\bar{\inprod{v}{T^\adj w}}=\bar{\inprod{Tv}{w}}=\inprod{w}{Tv}
\end{gathered}$$
for all $u\in U$, $v\in V$, and $w\in W$, so the results follow.<span style="float:right;">$\blacksquare$</span>
