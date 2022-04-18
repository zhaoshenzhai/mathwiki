---
alias: auto_aliasing
---

<br />
<br />

Date Created: 25/02/2022 13:16:20
Tags: #Proposition #Closed 

Proved by: [$\cat{Set}$ is a locally-small category](Category%20of%20sets%20is%20a%20locally-small%20category.md)
Justifications: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_The category of relations $\cat{Rel}$ (with objects $\l\langle X,\rho\r\rangle$ and morphisms relation-preserving maps) is a locally-small category._

```

_Proof_.  It suffices to check that the identities and composite morphisms are well-defined since the axioms are inherited directly from that of $\cat{Set}$; $\cat{Rel}$ is locally-small follows from the fact that for all pairs $\l\langle X,\rho\r\rangle$ and $\l\langle Y,\sigma\r\rangle$, we have that
$$\begin{equation}
    \hom\l(\l\langle X,\rho\r\rangle,\l\langle Y,\sigma\r\rangle\r)\subseteq Y^X
\end{equation}$$
and is thus a set by Specification.
* Take $\l\langle X,\rho\r\rangle\in\obj\l(\cat{Rel}\r)$ and $x_1,x_2\in X$. If $\l\langle x_1,x_2\r\rangle\in\rho$, observe that
$$\begin{equation}
    \l\langle\id_{\l\langle X,\rho\r\rangle}\l(x_1\r),\id_{\l\langle X,\rho\r\rangle}\l(x_2\r)\r\rangle=\l\langle\id_X\l(x_1\r),\id_X\l(x_2\r)\r\rangle=\l\langle x_1,x_2\r\rangle\in\rho
\end{equation}$$
too and thus $\id_{\l\langle X,\rho\r\rangle}\in\hom\l(X,X\r)$.

* Take morphisms $f:\l\langle X,\rho\r\rangle\to\l\langle Y,\sigma\r\rangle$ and $g:\l\langle Y,\sigma\r\rangle\to\l\langle Z,\tau\r\rangle$; we need to prove that for all $x_1,x_2\in X$,
$$\begin{equation}
    \l\langle x_1,x_2\r\rangle\in\rho\ \ \ \ \Rightarrow\ \ \ \ \l\langle\l(g\circ f\r)\l(x_1\r),\l(g\circ f\r)\l(x_2\r)\r\rangle\in\tau.
\end{equation}$$
To do so, observe that $f\l(x_1\r)$ and $f\l(x_2\r)$ are elements in $Y$ such that $\l\langle f\l(x_1\r),f\l(x_2\r)\r\rangle\in\sigma$, so, since $g$ is a morphism, we have that $\l\langle g\l(f\l(x_1\r)\r),g\l(f\l(x_2\r)\r)\r\rangle\in\tau$. The result then follows from the definition of composition of functions.<span style="float:right;">$\blacksquare$</span>
