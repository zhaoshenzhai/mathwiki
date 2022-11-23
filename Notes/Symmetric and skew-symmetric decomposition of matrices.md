---
mathLink: $\mat{n}{K}=\Sym_n\!\l(K\r)\oplus\Skew_n\!\l(K\r)$ for $\char K\neq2$
---

<div class="topSpace"></div>

Date Created: 09/05/2022 18:30:12
Tags: #Proposition

Proved by: [[Transposition is a linear map]], [[Symmetric matrices form a linear subspace of set of matrices]], [[Skew-symmetric matrices form a linear subspace of set of matrices]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field with $\char K\neq2$ and fix $n\in\N^+$. Then_
$$\begin{equation}
    \mat{n}{K}=\Sym_n\!\l(K\r)\oplus\Skew_n\!\l(K\r).
\end{equation}$$

```

_Proof_. It suffices to show that $\mat{n}{K}=\Sym_n\!\l(K\r)+\Skew_n\!\l(K\r)$ and $\Sym_n\!\l(K\r)\cap\Skew_n\!\l(K\r)=\l\{0_n\r\}$.
* ($\mat{n}{K}=\Sym_n\!\l(K\r)+\Skew_n\!\l(K\r)$): Take $A\in\mat{n}{K}$ and observe that
$$\begin{equation}
    A=\frac{A+A^\trans}{2}+\frac{A-A^\trans}{2},
\end{equation}$$
so it suffices to show that $A+A^\trans\in\Sym_n\!\l(K\r)$ and $A-A^\trans\in\Skew_n\!\l(K\r)$. Indeed, observe that
$$\begin{equation}
    \begin{aligned}
        \l(A+A^\trans\r)^\trans&=A^\trans+\l(A^\trans\r)^\trans \\
        &=A^\trans+A \\
        &=A+A^\trans
    \end{aligned}\ \ \ \ \ \ \ \ 
    \begin{aligned}
        \l(A-A^\trans\r)^\trans&=A^\trans-\l(A^\trans\r)^\trans && \textrm{Transpostion respects matrix addition} \\
        &=A^\trans-A && \textrm{Transposition is an involution} \\
        &=-\l(A-A^\trans\r). && \textrm{Arithmetic}
    \end{aligned}
\end{equation}$$

* ($\Sym_n\!\l(K\r)\cap\Skew_n\!\l(K\r)=\l\{0_n\r\}$): Take $\l[t_{ij}\r]\in\Sym_n\!\l(K\r)\cap\Skew_n\!\l(K\r)$, so
$$\begin{equation}
    \l[t_{ij}\r]=\l[t_{ij}\r]^\trans=-\l[t_{ij}\r].
\end{equation}$$
It follows then that $\l[t_{ij}\r]=-\l[t_{ij}\r]$, so $t_{ij}=-t_{ij}$ for all $i,j\in\l\{1,\dots,n\r\}$. Since $t_{ij}\in K$ and $\char K\neq2$, we see that
$$\begin{equation}
    t_{ij}+t_{ij}=0\ \ \ \ \Rightarrow\ \ \ \ t_{ij}=0
\end{equation}$$
for all $i,j\in\l\{1,\dots,n\r\}$, so $\l[t_{ij}\r]=0_n$.<span style="float:right;">$\blacksquare$</span>
