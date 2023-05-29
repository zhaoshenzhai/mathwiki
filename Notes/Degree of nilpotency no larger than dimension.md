---
mathLink: $T:V\to V$ nilpotent $\Rightarrow$ $T^{\dim V}=0$
---

<div class="topSpace"></div>

Date Created: 08/03/2023 14:46:12
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $V$ be a finite-dimensional $K$-vector space, say with $n\coloneqq\dim V$. If $T:V\to V$ is nilpotent, then $T^n=0$.

```

<i>Proof.</i> For each $i\in\N$, let $U_i\coloneqq\ker T^i$ which clearly forms an ascending chain $U_0\subseteq U_1\subseteq U_2\subseteq\cdots\subseteq V$. Let $m$ be the degree of nilpotency of $T$, so $U_m=V$. We claim that $m\leq n$, so $T^n\!\l(v\r)=T^{n-m}\!\l(T^m\!\l(v\r)\r)=T^{n-m}\!\l(0\r)=0$ for all $v\in V$. Suppose otherwise, so, since
$$\begin{equation}
    0=\dim U_0\leq\cdots\leq\dim U_m=n<m,
\end{equation}$$
there exists some $k<m$ such that $\dim U_k=\dim U_{k+1}$; indeed, if $0=\dim U_0<\cdots<\dim U_m$, then $\dim U_m\geq m$. Thus $U_k=U_{k+1}$.
* This also shows that $U_{k+1}=U_{k+2}$. Indeed, since $U_{k+1}\subseteq U_{k+2}$, it suffices to show that converse direction. Take $v\in U_{k+2}$, so $T^{k+2}\!\l(v\r)=T^{k+1}\!\l(T\l(v\r)\r)=0$. Then $T\l(v\r)\in U_{k+1}=U_k$, so $T^{k+1}\!\l(v\r)=T^k\!\l(T\l(v\r)\r)=0$. Hence $v\in U_{k+1}$, so $U_{k+2}\subseteq U_{k+1}$.

By induction, this shows that $U_k=U_{k+1}=U_{k+2}=\cdots=V$, so $T^k\!\l(v\r)=0$ for all $v\in V$. That is, $T^k=0$ with $k<m$, which contradicts the minimality of $m$.<span style="float:right;">$\blacksquare$</span>
