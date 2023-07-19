---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 03/04/2023 10:50:04
Tags: #Type/Proposition #Later/Module_Theory

Proved by: [[Eigenvalue iff root of characteristic polynomial]], [[Basis Extension Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Schur).

Let $T:V\to V$ be a linear operator on a finite-dimensional $K$-vector space $V$. If $\cchi_T$ splits, then there exists a basis $\mc{B}$ of $V$ such that $\l[T\r]_\mc{B}$ is upper-triangular.

```

<i>Proof.</i> We proceed by induction on $n\coloneqq\dim V$.
* If $n=1$, then any basis will do.

Suppose that every linear operator $R$ between $\l(n-1\r)$-dimensional vector spaces whose $\cchi_R$ splits admits a triangularization. Let $\lambda_1\in K$ be a root of $\cchi_T$. Then $\lambda_1$ is an eigenvalue of $T$, so there exists a non-zero vector $v_1\in V$ such that $Tv_1=\lambda_1v_1$. Extending $\l\{v_1\r\}$ to a basis $\mc{B}_0\coloneqq\l\{v_1,\dots,v_n\r\}$ of $V$, we see that the first column of $\l[T\r]_{\mc{B}_0}$ has $\lambda_1$ as its first entry and zeros everywhere else. Set $W\coloneqq\span\l\{v_2,\dots,v_n\r\}$ and consider the linear operator $R:W\to W$ obtained as left-multiplication of the bottom-right $\l(n-1\r)\times\l(n-1\r)$ block of $\l[T\r]_{\mc{B}_0}$. Then
$$\begin{equation}
    \l[T\r]_{\mc{B}_0}=
    \begin{bmatrix}
        \lambda_1I & A \\
        O & B
    \end{bmatrix}
\end{equation}$$
where $A$ is some $1\times\l(n-1\r)$ matrix and $B\coloneqq\l[R\r]_{\mc{B}_0\comp\l\{v_1\r\}}$. Thus $\cchi_R\divides\cchi_T$, so $\cchi_R$ splits too. Then $R$ satisfies our induction hypothesis, so there exists a basis $\mc{C}$ of $W$ such that $\l[R\r]_\mc{C}$ is upper-triangular. Letting $\mc{B}\coloneqq\l\{v_1\r\}\cup\mc{C}$, we see that $\l[T\r]_\mc{B}$ is upper-triangular.<span style="float:right;">$\blacksquare$</span>
