<br />
<br />

Date Created: 01/04/2022 21:10:40
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n,p\in\N^\ast$. Then, for all $A\in\mat{m\times n}{K}$ and $B\in\mat{n\times p}{K}$, the rows $\v{c}_i$ of their product $C\coloneqq AB$ are linear combinations of the rows of $B$. Formally, letting_ $\v{c}_i\coloneqq\l[c_{i1}\ \ \cdots\ \ c_{ip}\r]$ _for all $i\in\l\{1,\dots m\r\}$, we have that_
$$\begin{equation}
    \fa i\in\l\{1,\dots,m\r\}:\v{c}_i=\sum_{j=1}^na_{ij}\v{b}_j
\end{equation}$$
_where_ $\v{b}_j\coloneqq\l[b_{j1}\ \ \cdots\ \ b_{jp}\r]$ _for all $j\in\l\{1,\dots,n\r\}$._

```

_Proof_. Take $i\in\l\{1,\dots,m\r\}$. The result follows from the following computation:

$\begin{align}
    \v{c}_i&=\l[\sum_{j=1}^na_{ij}b_{jk}\r]_{k\in\l\{1,\dots,p\r\}} && \textrm{Definition of matrix multiplication} \\
    &=\l[\sum_{j=1}^na_{ij}b_{j1}\ \ \cdots\ \ \sum_{j=1}^na_{ij}b_{jp}\r] && \textrm{Notation} \\
    &=\sum_{j=1}^n\l[a_{ij}b_{j1}\ \ \cdots\ \ a_{ij}b_{jp}\r] && \textrm{Definition of matrix addition} \\
    &=\sum_{j=1}^na_{ij}\l[b_{j1}\ \ \cdots\ b_{jp}\r] && \textrm{Definition of scalar(-matrix) multiplication} \\
    &=\sum_{j=1}^na_{ij}\v{b}_j. && \textrm{Definition of }\v{b}_j\qedin   
\end{align}$
