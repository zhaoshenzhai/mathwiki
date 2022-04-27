<br />
<br />

Date Created: 02/04/2022 18:29:11
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n,p,q\in\N^\ast$. Then, for all $A\in\mat{m\times n}{K}$, $B\in\mat{n\times p}{K}$ and $C\in\mat{p\times q}{K}$, we have that $A\l(BC\r)=\l(AB\r)C$._

```

_Proof_. First, observe that the matrices $AB$, $BC$, $A\l(BC\r)$, and $\l(AB\r)C$ are all defined with sizes $m\times k$, $n\times q$, $m\times q$ and $m\times q$, respectively; in particular, the sizes of $A\l(BC\r)$ and $\l(AB\r)C$ coincide. To show that their entries coincide too, take $i\in\l\{1,\dots,m\r\}$ and $l\in\l\{1,\dots,q\r\}$, and observe that
$$\begin{align}
    \l(A\l(BC\r)\r)_{il}&=\sum_{j=1}^na_{ij}\l(BC\r)_{jl} && \textrm{Definition of matrix multiplication} \\
    &=\sum_{j=1}^na_{ij}\l(\sum_{k=1}^pb_{jk}c_{kl}\r) && \textrm{Definition of matrix multiplication} \\
    &=\sum_{j=1}^n\sum_{k=1}^pa_{ij}\l(b_{jk}c_{kl}\r) && \textrm{Left-distribution in $K$} \\
    &=\sum_{j=1}^n\sum_{k=1}^p\l(a_{ij}b_{jk}\r)c_{kl} && \textrm{Associativity of multiplication in $K$} \\
    &=\sum_{k=1}^p\sum_{j=1}^n\l(a_{ij}b_{jk}\r)c_{kl} && \textrm{Discrete Fubini's Theorem} \\
    &=\sum_{k=1}^p\l(\sum_{j=1}^na_{ij}b_{jk}\r)c_{kl} && \textrm{Right-distribution in $K$} \\
    &=\sum_{k=1}^p\l(AB\r)_{ik}c_{kl} && \textrm{Definition of matrix multiplication} \\
    &=\l(\l(AB\r)C\r)_{il}. && \textrm{Definition of matrix multiplication}\qedin
\end{align}$$
