---
custom_alias: $\Diag{n}{K}\subseteq\mat{n}{K}$ is a linear subspace
---

<br />
<br />

Date Created: 05/05/2022 22:10:54
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $n\in\N^\ast$. Then $\Diag{n}{K}\subseteq\mat{n}{K}$ is a linear subspace._

```

_Proof_. It suffices to show that $0_n\in\Diag{n}{K}$ and, for every $\alpha\in K$ and $A,B,\in\Diag{n}{K}$, that $\alpha A+B\in\Diag{n}{K}$.
* ($0_n\in\Diag{n}{K}$): This follows readily since every entry of $0_n$ is $0$.

* ($\alpha A+B\in\Diag{n}{K}$): Take $i,j\in\l\{1,\dots,n\r\}$ such that $i\neq j$, so $a_{ij}=b_{ij}=0$. It follows then that
$$\begin{equation}
    \begin{aligned}
        \l(\alpha A+B\r)_{ij}&=\l(\alpha A\r)_{ij}+b_{ij} && \textrm{Definition of matrix addition} \\
        &=\alpha\l(a_{ij}\r)+\l(b_{ij}\r) && \textrm{Definition of scalar multiplication} \\
        &=\alpha\l(0\r)+0 && a_{ij}=b_{ij}=0 \\
        &=0, && \textrm{Arithmetic}
    \end{aligned}
\end{equation}$$
so $\alpha A+B$ is a diagonal matrix too.<span style="float:right;">$\blacksquare$</span>
