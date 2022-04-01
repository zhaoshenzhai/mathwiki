<br />
<br />

Date Created: 31/03/2022 20:09:00
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n,p\in\N$. Then, for all $A\in\mat{m\times n}{K}$ and $B\in\mat{n\times p}{K}$, the columns $\v{c}_k$ of their product $C\coloneqq AB$ are linear combinations of the columns of $A$. Formally, letting_ $\v{c}_k\coloneqq\l[c_{1k}\ \ \cdots\ \ c_{mk}\r]$ _for all $k\in\l\{1,\dots p\r\}$, we have that_
$$\begin{equation}
    \fa k\in\l\{1,\dots,p\r\}:\v{c}_k=\sum_{j=1}^nb_{jk}\v{a}_j
\end{equation}$$
_where_ $\v{a}_j\coloneqq\l[a_{1j}\ \ \cdots\ \ a_{mj}\r]^\trans$ _for all $j\in\l\{1,\dots,n\r\}$._

```

_Proof_. Take $k\in\l\{1,\dots,p\r\}$. The result follows from the following computation:

$\begin{align}
    \v{c}_k&=\l[\sum_{j=1}^na_{ij}b_{jk}\r]_{i\in\l\{1,\dots,m\r\}} && \textrm{Definition of matrix multiplication} \\
    &=\l[\sum_{j=1}^na_{1j}b_{jk}\ \ \cdots\ \ \sum_{j=1}^na_{mj}b_{jk}\r]^\trans && \textrm{Notation; transpose} \\
    &=\sum_{j=1}^n\l[a_{1j}b_{jk}\ \ \cdots\ \ a_{mj}b_{jk}\r]^\trans && \textrm{Definition of matrix addition} \\
    &=\sum_{j=1}^nb_{jk}\l[a_{1j}\ \ \cdots\ a_{mj}\r]^\trans && \textrm{Definition of scalar(-matrix) multiplication} \\
    &=\sum_{j=1}^nb_{jk}\v{a}_j. && \textrm{Definition of }\v{a}_j\qedin   
\end{align}$
