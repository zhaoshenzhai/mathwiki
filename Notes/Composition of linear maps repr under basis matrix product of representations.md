---
mathLink: auto
---

<br />
<br />

Date Created: 19/05/2022 20:12:57
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V,W,Z$ be finite-dimensional vector spaces over some field $K$ with bases_
$$\begin{equation}
    \mc{B}\coloneqq\l\{b_1,\dots,b_m\r\},\ \ \ \ \ \ \ \ \mc{C}\coloneqq\l\{c_1,\dots,c_n\r\}, \ \ \ \ \textrm{\it{and}}\ \ \ \  \mc{D}\coloneqq\l\{d_1,\dots,d_p\r\},
\end{equation}$$
_respectively. Then, for all linear maps $T:V\to W$ and $U:W\to Z$, we have_
$$\begin{equation}
    \l[U\circ T\r]_\mc{B}^\mc{D}=\l[U\r]_\mc{C}^\mc{D}\l[T\r]_\mc{B}^\mc{C}.
\end{equation}$$

```

_Proof_. Let $\l[T\r]_\mc{B}^\mc{C}=\l[\alpha_{ij}\r]$, $\l[U\r]_\mc{C}^\mc{D}=\l[\beta_{jk}\r]$, and $\l[U\circ T\r]_\mc{B}^\mc{D}=\l[\gamma_{ik}\r]$ where each $\alpha_{ij},\beta_{jk},\gamma_{ik}\in K$ are the unique coefficients such that
$$\begin{equation}
    T\l(b_i\r)=\sum_{j=1}^n\alpha_{ij}c_j,\ \ \ \ \ \ \ \ U\l(c_j\r)=\sum_{k=1}^p\beta_{jk}d_k,\ \ \ \ \textrm{and}\ \ \ \ \l(U\circ T\r)\l(b_i\r)=\sum_{j=1}^n\gamma_{ik}d_k
\end{equation}$$
for all $1\leq i\leq m$, $1\leq j\leq n$, and $1\leq k\leq p$, respectively. Observe then that
$$\begin{equation}
    \begin{aligned}
        \l(U\circ T\r)\l(b_i\r)&=U\l(T\l(b_i\r)\r) && \textrm{Definition of $\circ$} \\
        &=U\l(\sum_{j=1}^n\alpha_{ij}c_j\r) && \textrm{Substitution} \\
        &=\sum_{j=1}^n\alpha_{ij}U\l(c_j\r) && \textrm{Linearity of $U$} \\
        &=\sum_{j=1}^n\alpha_{ij}\l(\sum_{k=1}^p\beta_{jk}d_k\r) && \textrm{Substitution} \\
        &=\sum_{j=1}^n\sum_{k=1}^p\alpha_{ij}\beta_{jk}d_k && \textrm{Distribution} \\
        &=\sum_{k=1}^p\sum_{j=1}^n\alpha_{ij}b_{jk}d_k && \textrm{Discrete Fubini's Theorem} \\
        &=\sum_{k=1}^p\l(\sum_{j=1}^n\alpha_{ij}\beta_{jk}\r)d_k, && \textrm{Distribution}
    \end{aligned}
\end{equation}$$
so, since the coefficients of $\l(U\circ T\r)\l(b_i\r)$ are unique, we have $\gamma_{ik}=\sum_{j=1}^n\alpha_{ij}\beta_{ij}$ for all $1\leq i\leq m$ and $1\leq k\leq p$. It follows then that
$$\begin{align}
    \l[U\circ T\r]_\mc{B}^\mc{D}&=\l[\sum_{j=1}^n\alpha_{ij}\beta_{jk}\r] && \textrm{Substitution} \\
    &=\l[\alpha_{ij}\r]\l[\beta_{jk}\r] && \textrm{Definition of matrix multiplication} \\
    &=\l[U\r]_\mc{C}^\mc{D}\l[T\r]_\mc{B}^\mc{C}. && \textrm{Substitution}\qedin
\end{align}$$
