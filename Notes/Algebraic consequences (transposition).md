<br />
<br />

Date Created: 05/05/2022 15:48:47
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N^\ast$. Then, for all $A\in\mat{m\times n}{K}$, the following algebraic properties holds:_
* _Transposition is an involution: $\l(A^\trans\r)^\trans=A$._

* _Transposition respects matrix addition: For all $B\in\mat{m\times n}{K}$, we have that $\l(A+B\r)^\trans=A^\trans+B^\trans$._
* _Transposition respects scalar multiplication: For all $\alpha\in K$, we have that $\l(\alpha A\r)^\trans=\alpha A^\trans$._
* _Transposition anti-respects matrix multiplication: For all $p\in\N^\ast$ and $B\in\mat{n\times p}{K}$, we have that $\l(AB\r)^\trans=B^\trans A^\trans$._

```

_Proof_. Let $A=\l[a_{ij}\r]$ for some $a_{ij}\in K$.
* Observe that $\l(\l[a_{ij}\r]^\trans\r)^\trans=\l[a_{ji}\r]^\trans=\l[a_{ij}\r]$.

* Let $B=\l[b_{ij}\r]$ for some $b_{ij}\in K$ and observe that $\l(\l[a_{ij}\r]+\l[b_{ij}\r]\r)^\trans=\l[a_{ij}+b_{ij}\r]^\trans=\l[a_{ji}+b_{ji}\r]=\l[a_{ji}\r]+\l[b_{ji}\r]=\l[a_{ij}\r]^\trans+\l[b_{ij}\r]^\trans$.
* Observe that $\l(\alpha\l[a_{ij}\r]\r)^\trans=\l[\alpha a_{ij}\r]^\trans=\l[\alpha a_{ji}\r]=\alpha\l[a_{ji}\r]=\alpha\l[a_{ij}\r]^\trans$.
* Let $B=\l[b_{jk}\r]$ for some $b_{jk}\in K$. Since $AB\in\mat{m\times p}{K}$, $B^\trans\in\mat{p\times n}{K}$, and $A^\trans\in\mat{n\times m}{K}$, we have that $\l(AB\r)^\trans,B^\trans A^\trans\in\mat{p\times m}{K}$, so the sizes of $\l(AB\r)^\trans$ and $B^\trans A^\trans$ coincide. To see that their entries coincide too, take $k\in\l\{1,\dots,p\r\}$ and $i\in\l\{1,\dots,m\r\}$, and observe that

$\begin{align}
    \l(B^\trans A^\trans\r)_{ki}&=\sum_{j=1}^n\l(B^\trans\r)_{kj}\l(A^\trans\r)_{ji} && \textrm{Definition of matrix multiplication (entries)} \\
    &=\sum_{j=1}^nb_{jk}a_{ij} && \textrm{Definition of transpose} \\
    &=\sum_{j=1}^na_{ij}b_{jk} && \textrm{Commutativity of multiplication on }K \\
    &=\l(AB\r)_{ik} && \textrm{Definition of matrix multiplication} \\
    &=\l(\l(AB\r)^\trans\r)_{ki}. && \textrm{Definition of transpose}\qedin
\end{align}$
