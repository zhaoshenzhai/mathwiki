<br />
<br />

Date Created: 31/03/2022 20:09:00
Tags: #Proposition #Closed l

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N$. Then, for all $A\in\mat{m\times n}{K}$ and $\v{x}\in\mat{n\times 1}{K}\iso K^n$, their product $\v{b}\coloneqq A\v{x}$ is a linear combination of the columns of $A$. Formally,_
$$\begin{equation}
    \begin{aligned}
        \v{b}=\sum_{j=1}^nx_j\v{a}_j
    \end{aligned}
\end{equation}$$
_where_ $\v{a}_j\coloneqq\l[a_{ij}\ \ \cdots\ \ a_{mj}\r]^\trans$ _for all $j\in\l\{1,\dots,n\r\}$._


```

_Proof_. The result follows from the following computation:

$\begin{align}
    \v{b}&=\l[\sum_{j=1}^na_{ij}x_j\r]_{i\in\l\{1,\dots,m\r\}} && \textrm{Definition of matrix multiplication} \\
    &=\l[\sum_{j=1}^na_{1j}x_j\ \ \cdots\ \ \sum_{j-1}^na_{mj}x_j\r]^\trans && \textrm{Notation; transpose} \\
    &=\sum_{j=1}^n\l[a_{1j}x_j\ \ \cdots\ \ a_{mj}x_j\r]^\trans && \textrm{Definition of matrix addition} \\
    &=\sum_{j=1}^nx_j\l[a_{1j}\ \ \cdots\ a_{mj}\r]^\trans && \textrm{Definition of scalar(-matrix) multiplication} \\
    &=\sum_{j=1}^nx_j\v{a}_j. && \textrm{Definition of }\v{a}_j\qedin   
\end{align}$
