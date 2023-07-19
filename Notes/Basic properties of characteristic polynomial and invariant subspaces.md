---
mathLink: Basic properties of $\cchi_T$ and $T$-invariant subspaces
---

<div class="topSpace"></div>

Date Created: 16/03/2023 21:48:25
Tags: #Type/Proposition #Later/Module_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: [[Cyclic subspace of finite-dimensional is finite-dimensional]]

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $T:V\to V$ be a linear operator on a finite-dimensional $K$-vector space $V$. For any $T$-invariant subspace $W\subseteq V$ and $R\coloneqq\l.T\r|_W$, we have $\cchi_R\divides\cchi_T$.
* Consider $W\coloneqq C_T\!\l(v\r)$ for a fixed $v\in V\comp\l\{0\r\}$ and set $k\coloneqq\dim W$. If $T^kv=\sum_{i=0}^{k-1}\alpha_iT^iv$ for some $\alpha_i\in K$, then $\cchi_R\!\l(x\r)=x^k-\sum_{i=0}^{k-1}\alpha_ix^i$.

```

<i>Proof.</i> We first prove that $\cchi_R\divides\cchi_T$.
* Let $\mc{B}\coloneqq\l\{v_1,\dots,v_k\r\}$ be a basis for $W$ and extend it to a basis $\mc{C}\coloneqq\l\{v_1,\dots,v_n\r\}$ of $V$. Then, since $W$ is $T$-invariant, we see that
$$\begin{equation}
    A\coloneqq\l[T\r]_\mc{C}=
    \begin{bmatrix}
        B_1 & B_2 \\
        O & B_3
    \end{bmatrix}
\end{equation}$$
where $B_1\coloneqq\l[R\r]_\mc{B}$. Observe then that
$$\begin{equation}
    \cchi_T\!\l(x\r)=\det\l(xI_n-A\r)=\det
    \begin{bmatrix}
        xI_n-B_1 & -B_2 \\
        O & xI_{n-k}-B_3
    \end{bmatrix}=\det\l(xI_n-B_1\r)\det\l(xI_{n-k}-B_3\r)=\cchi_R\!\l(x\r)\det\l(xI_{n-k}-B_3\r),
\end{equation}$$
so $\cchi_R\divides\cchi_T$.

Now, since $\mc{B}\coloneqq\l\{v,Tv,T^2v,\dots,T^{k-1}v\r\}$ is a basis for $W$, write $T^kv=\sum_{i=0}^{k-1}\alpha_iT^iv$ for some $\alpha_i\in K$. Then $\l[R\r]_\mc{B}$ has the following form.
![[Images/2023-03-16_220647/image.svg|175]]

Calculating its characteristic polynomial, we obtain the desired result.<span style="float:right;">$\blacksquare$</span>
