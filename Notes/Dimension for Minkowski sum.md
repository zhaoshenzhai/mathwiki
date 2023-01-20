<div class="topSpace"></div>

Date Created: 20/01/2023 09:44:56
Tags: #Proposition #Topics/Linear_Algebra

Proved by: [[Subspaces of finite-dim. vector spaces have complements]], [[Basis slash dimension for direct sum]], [[Unique Representation Theorem (Direct Sum)]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be a finite-dimensional vector space over some field $K$ and consider subspaces $U_1,U_2\subseteq V$. Then_
$$\begin{equation}
    \dim\l(U_1+U_2\r)=\dim U_1+\dim U_2-\dim\l(U_1\cap U_2\r).
\end{equation}$$

```

_Proof_. Write $U_1=\l(U_1\cap U_2\r)\oplus U_1'$ and $U_2=\l(U_1\cap U_2\r)\oplus U_2'$ for some $U_1'\subseteq U_1$ and $U_2'\subseteq U_2$. Then
$$\begin{equation}
    U_1+U_2=\l[\l(U_1\cap U_2\r)\oplus U_1'\r]+\l[\l(U_1\cap U_2\r)\oplus U_2'\r]=\l(U_1\cap U_2\r)+U_1'+U_2'.
\end{equation}$$
We claim that the latter sum is direct, for then
$$\begin{equation}
    \begin{aligned}
        \dim\l(U_1+U_2\r)&=\dim\l(U_1\cap U_2\r)+\dim U_1-\dim\l(U_1\cap U_2\r)+\dim U_2-\dim\l(U_1\cap U_2\r) \\
        &=\dim U_1+\dim U_2-\dim\l(U_1\cap U_2\r).
    \end{aligned}
\end{equation}$$
* Take $v\in U_1\cap U_2$, $u_1\in U_1'\subseteq U_1$, and $u_2\in U_2'\subseteq U_2$, and suppose that $v+u_1+u_2=0$. Then $u_1=-v-u_2\in U_2$, so $u_1\in U_1\cap U_2$. But $\l(U_1\cap U_2\r)\cap U_1'=\l\{0\r\}$, so $u_1=0$. Similarly, $u_2=0$, so $v=0$ too.<span style="float:right;">$\blacksquare$</span>
