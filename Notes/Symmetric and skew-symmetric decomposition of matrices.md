---
mathLink: $\mat{n}{K}=\sym{n}{K}\oplus\skew{n}{K}$ for $\charfld K\neq2$
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

_Let $K$ be a field with $\charfld K\neq2$ and fix $n\in\N^\ast$. Then_
$$\begin{equation}
    \mat{n}{K}=\sym{n}{K}\oplus\skew{n}{K}.
\end{equation}$$

```

_Proof_. It suffices to show that $\mat{n}{K}=\sym{n}{K}+\skew{n}{K}$ and $\sym{n}{K}\cap\skew{n}{K}=\l\{0_n\r\}$.
* ($\mat{n}{K}=\sym{n}{K}+\skew{n}{K}$): Take $A\in\mat{n}{K}$ and observe that
$$\begin{equation}
    A=\frac{A+A^\trans}{2}+\frac{A-A^\trans}{2},
\end{equation}$$
so it suffices to show that $A+A^\trans\in\sym{n}{K}$ and $A-A^\trans\in\skew{n}{K}$. Indeed, observe that
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

* ($\sym{n}{K}\cap\skew{n}{K}=\l\{0_n\r\}$): Take $\l[t_{ij}\r]\in\sym{n}{K}\cap\skew{n}{K}$, so
$$\begin{equation}
    \l[t_{ij}\r]=\l[t_{ij}\r]^\trans=-\l[t_{ij}\r].
\end{equation}$$
It follows then that $\l[t_{ij}\r]=-\l[t_{ij}\r]$, so $t_{ij}=-t_{ij}$ for all $i,j\in\l\{1,\dots,n\r\}$. Since $t_{ij}\in K$ and $\charfld K\neq2$, we see that
$$\begin{equation}
    t_{ij}+t_{ij}=0\ \ \ \ \Rightarrow\ \ \ \ t_{ij}=0
\end{equation}$$
for all $i,j\in\l\{1,\dots,n\r\}$, so $\l[t_{ij}\r]=0_n$.<span style="float:right;">$\blacksquare$</span>
