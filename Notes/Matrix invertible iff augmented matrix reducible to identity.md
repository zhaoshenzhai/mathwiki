---
mathLink: Matrix invertible $\Leftrightarrow$ $\l[A\mid I_n\r]\sim\l[I_n\mid A^{-1}\r]$
---

<div class="topSpace"></div>

Date Created: 10/06/2022 07:20:59
Tags: #Proposition

Proved by: [[Matrix Invertibility Theorem]], [[Row-equivalence of matrices iff factors through invertible matrix]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a matrix $A\in\mat{n}{K}$ for some fixed $n\in\N^+$. Then $A$ is invertible iff there exists a matrix $B\in\mat{n}{K}$ such that_
$$\begin{equation}
    \l[A\mid I_n\r]\sim\l[I_n\mid B\r],
\end{equation}$$
_in which case $A^{-1}=B$._

```

**Remark.** This allows us to test whether a matrix $A$ is invertible, and if it is, compute $A^{-1}$ and express both $A$ and $A^{-1}$ as a product of elementary matrices. Indeed, if $E_1,\dots,E_k\in\mat{n}{K}$ are the elementary matrices that reduce $A$ to $I_n$, then $I_n=E_k\times\cdots\times E_1\times A$ and hence
$$\begin{equation}
    A^{-1}=E_k\times\cdots\times E_1\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ A=E_1^{-1}\times\cdots\times E_K^{-1}.\exqedin
\end{equation}$$

---

_Proof_.
* ($\Rightarrow$): Observe that
$$\begin{equation}
    A^{-1}\l[A\mid I_n\r]=\l[A^{-1}A\mid A^{-1}I_n\r]=\l[I_n\mid A^{-1}\r],
\end{equation}$$
and since $A^{-1}$ is invertible, it factors as a product of elementary matrices, say $A^{-1}=E_k\times\cdots\times E_1$ for some $k\in\N$. Thus
$$\begin{equation}
    \l[I_n\mid A^{-1}\r]=\l(E_k\times\cdots\times E_1\r)\times\l[A\mid I_n\r], 
\end{equation}$$
so $\l[A\mid I_n\r]\sim\l[I_n\mid A^{-1}\r]$. Furthermore, if $\l[A\mid I_n\r]\sim\l[I_n\mid B\r]$ for some $B\in\mat{n}{K}$, then there exist an invertible matrix $C\in\mat{n}{K}$ such that $\l[I_n\mid B\r]=C\l[A\mid I_n\r]$. But then $CA=I_n$ and $B=CI_n=C$, so $B=C=A^{-1}$.

* ($\Leftarrow$): Conversely, if $\l[A\mid I_n\r]\sim\l[I_n\mid B\r]$ for some $B\in\mat{n}{K}$, then, in particular, we have $A\sim I_n$. Thus $A$ is invertible.<span style="float:right;">$\blacksquare$</span>
