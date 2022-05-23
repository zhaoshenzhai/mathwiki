<br />
<br />

Date Created: 07/05/2022 17:19:18
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n,p\in\N^\ast$. Then, for all $A\in\mat{m\times n}{K}$ and $B\in\mat{n\times p}{K}$, we have that_
$$\begin{equation}
    \l(AB\r)^\trans=B^\trans A^\trans.
\end{equation}$$

```

_Proof_. Let $A=\l[a_{ij}\r]$ and $B=\l[b_{jk}\r]$ for some $a_{ij},b_{jk}\in K$. Since $AB\in\mat{m\times p}{K}$, $B^\trans\in\mat{p\times n}{K}$, and $A^\trans\in\mat{n\times m}{K}$, we have that $\l(AB\r)^\trans,B^\trans A^\trans\in\mat{p\times m}{K}$, so the sizes of $\l(AB\r)^\trans$ and $B^\trans A^\trans$ coincide. To see that their entries coincide too, take $k\in\l\{1,\dots,p\r\}$ and $i\in\l\{1,\dots,m\r\}$, and observe that

$\begin{align}
    \l(B^\trans A^\trans\r)_{ki}&=\sum_{j=1}^n\l(B^\trans\r)_{kj}\l(A^\trans\r)_{ji} && \textrm{Definition of matrix multiplication} \\
    &=\sum_{j=1}^nb_{jk}a_{ij} && \textrm{Definition of transpose} \\
    &=\sum_{j=1}^na_{ij}b_{jk} && \textrm{Commutativity of multiplication on }K \\
    &=\l(AB\r)_{ik} && \textrm{Definition of matrix multiplication} \\
    &=\l(\l(AB\r)^\trans\r)_{ki}. && \textrm{Definition of transpose}\qedin
\end{align}$
