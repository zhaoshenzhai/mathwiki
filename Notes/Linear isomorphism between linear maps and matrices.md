---
mathLink: $\Phi_\mc{B}^\mc{C}:\hom\l(V,W\r)\simto\mat{m\times n}{K}$ ($\dim V=n$, $\dim W=m$)
---

<div class="topSpace"></div>

Date Created: 17/05/2022 10:57:09
Tags: #Proposition

Proved by: [[Unique Representation Theorem (Hamel)]], [[Existence of unique linear map via action on basis vectors]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be finite-dimensional vector spaces over some field $K$, say with $n\coloneqq\dim V$ and $m\coloneqq\dim W$, and fix two choices of bases_
$$\begin{equation}
    \mc{B}\coloneqq\l\{b_1,\dots,b_n\r\}\ \ \ \ \textrm{\it{and}}\ \ \ \ \mc{C}\coloneqq\l\{c_1,\dots,c_m\r\}
\end{equation}$$
_of $V$ and $W$, respectively. Then the matrix representation_
$$\begin{equation}
    \Phi_\mc{B}^\mc{C}:\hom\l(V,W\r)\to\mat{m\times n}{K}\ \ \ \ \textrm{\it{mapping}}\ \ \ \ T\mapsto\l[T\r]_\mc{B}^\mc{C}
\end{equation}$$
_is a linear isomorphism. In particular, we have $\hom\l(V,W\r)\iso\mat{m\times n}{K}$._

```

_Proof_. We need to prove that $\Phi_\mc{B}^\mc{C}$ is a bijective linear map.
* (Linearity): Take $T_1,T_2\in\hom\l(V,W\r)$ and $k\in K$, so there exist unique coefficients $\alpha_{ij},\beta_{ij}\in K$ for all $i\in\l\{1,\dots,m\r\}$ and $j\in\l\{1,\dots,n\r\}$ such that
$$\begin{equation}
    T_1\l(b_j\r)=\sum_{i=1}^m\alpha_{ij}c_i\ \ \ \ \textrm{and}\ \ \ \ T_2\l(b_j\r)=\sum_{i=1}^m\beta_{ij}c_i
\end{equation}$$
for all $j\in\l\{1,\dots,n\r\}$. Observe then that
$$\begin{equation}
    \begin{aligned}
        \l(kT_1+T_2\r)\l(b_j\r)&=kT_1\l(b_j\r)+T_2\l(b_j\r) && \textrm{Definition of $+$ and $\cdot$} \\
        &=k\sum_{i=1}^m\alpha_{ij}c_i+\sum_{i=1}^m\beta_{ij}c_i && \textrm{Substitution} \\
        &=\sum_{i=1}^m\l(k\alpha_{ij}+\beta_{ij}\r)c_i, && \textrm{Arithmetic}
    \end{aligned}
\end{equation}$$
and since $\gamma_{ij}\coloneqq k\alpha_{ij}+\beta_{ij}$ are the unique set of coefficients such that $\l(kT_1+T_2\r)\l(b_j\r)=\sum_{i=1}^m\gamma_{ij}c_i$, we see that
$$\begin{equation}
    \begin{aligned}
        \Phi_\mc{B}^\mc{C}\l(\alpha T_1+T_2\r)&=\l[\gamma_{ij}\r] && \textrm{Definition of $\Phi_\mc{B}^\mc{C}$} \\
        &=\l[k\alpha_{ij}+\beta_{ij}\r] && \textrm{Substitution} \\
        &=k\l[\alpha_{ij}\r]+\l[\beta_{ij}\r] && \textrm{Definitions of matrix operations} \\
        &=k\Phi_\mc{B}^\mc{C}\l(T_1\r)+\Phi_\mc{B}^\mc{C}\l(T_2\r). && \textrm{Definition of $\Phi_\mc{B}^\mc{C}$}
    \end{aligned}
\end{equation}$$

* (Bijectivity): Take $A\coloneqq\l[\alpha_{ij}\r]\in\mat{m\times n}{K}$. Indeed, since $\sum_{i=1}^m\alpha_{ij}c_i\in W$ for all $j\in\l\{1,\dots,n\r\}$, there exists a unique linear map $T:V\to W$ such that
$$\begin{equation}
    T\l(b_j\r)=\sum_{i=1}^m\alpha_{ij}c_i
\end{equation}$$
for all $j\in\l\{1,\dots,n\r\}$. Thus $A=\Phi_\mc{B}^\mc{C}\l(T\r)$ uniquely, so we are done.<span style="float:right;">$\blacksquare$</span>
