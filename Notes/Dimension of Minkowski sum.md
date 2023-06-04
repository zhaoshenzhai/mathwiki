<div class="topSpace"></div>

Date Created: 20/01/2023 09:44:56
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: [[Dimension Theorem]], [[Basis and dimension for direct sum]], [[Linearly isomorphic iff dimensions coincide (finite-dim.)]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $V$ be a finite-dimensional $K$-vector space and consider subspaces $U_1,U_2\subseteq V$. Then
$$\begin{equation}
    \dim\l(U_1+U_2\r)=\dim U_1+\dim U_2-\dim\l(U_1\cap U_2\r).
\end{equation}$$

```

<i>Proof.</i> Consider the function
$$\begin{equation}
    T:U_1\oplus U_2\to U_1+U_2\ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ \tpl{u_1,u_2}\mapsto u_1+u_2.
\end{equation}$$
It is clearly linear and surjective, so the Dimension Theorem gives
$$\begin{equation}
    \dim\l(U_1\oplus U_2\r)=\dim\ker T+\dim\l(U_1+U_2\r).
\end{equation}$$
But $\dim\l(U_1\oplus U_2\r)=\dim U_1+\dim U_2$, so the result follows if we show that $\ker T\iso U_1\cap U_2$. Indeed, for all $u\in U_1\cap U_2$, we see that $\tpl{u,-u}\in U_1\oplus U_2$ with $T\l(u,-u\r)=u+\l(-u\r)=0$. Thus we may consider the map $\phi: U_1\cap U_2\to\ker T:u\mapsto\tpl{u,-u}$, which is clearly linear and injective. It is also surjective, since for all $\tpl{u_1,u_2}\in\ker T$, we have $u_1+u_2=0$ and hence $u_1=-u_2\in U_2$. Thus $u_1\in U_1\cap U_2$ is such that $\phi\l(u_1\r)=\tpl{u_1,-u_1}=\tpl{u_1,u_2}$.<span style="float:right;">$\blacksquare$</span>
