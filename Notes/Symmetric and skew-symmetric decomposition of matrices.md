---
mathLink: $\mat{n}{K}=\Sym_n\!\l(K\r)\oplus\Skew_n\!\l(K\r)$ for $\charac K\neq2$
---

<div class="topSpace"></div>

Date Created: 09/05/2022 18:30:12
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $K$ be a field with $\charac K\neq2$ and fix $n\in\N^+$. Then $\mat{n}{K}=\Sym_n\!\l(K\r)\oplus\Skew_n\!\l(K\r)$.

```

<i>Proof.</i> It suffices to show that $\mat{n}{K}=\Sym_n\!\l(K\r)+\Skew_n\!\l(K\r)$ and $\Sym_n\!\l(K\r)\cap\Skew_n\!\l(K\r)=\l\{0_n\r\}$.
* Take $A\in\mat{n}{K}$ and observe that
$$\begin{equation}
    A=\frac{A+A^\trans}{2}+\frac{A-A^\trans}{2},
\end{equation}$$
so it suffices to show that $A+A^\trans\in\Sym_n\!\l(K\r)$ and $A-A^\trans\in\Skew_n\!\l(K\r)$. Indeed, observe that
$$\begin{equation}
    \l(A+A^\trans\r)^\trans=A^\trans+\l(A^\trans\r)^\trans=A^\trans+A=A+A^\trans\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \l(A-A^\trans\r)^\trans=A^\trans-\l(A^\trans\r)^\trans=A^\trans-A=-\l(A-A^\trans\r).
\end{equation}$$

* Take $\l[t_{ij}\r]\in\Sym_n\!\l(K\r)\cap\Skew_n\!\l(K\r)$, so $\l[t_{ij}\r]=\l[t_{ij}\r]^\trans=-\l[t_{ij}\r]$. It follows then that $\l[t_{ij}\r]=-\l[t_{ij}\r]$, so $t_{ij}=-t_{ij}$ for all $i,j\in\l\{1,\dots,n\r\}$. Since $t_{ij}\in K$ and $\charac K\neq2$, we see that $t_{ij}+t_{ij}=0$ implies that $t_{ij}=0$ for all $i,j\in\l\{1,\dots,n\r\}$, so $\l[t_{ij}\r]=0_n$.<span style="float:right;">$\blacksquare$</span>
