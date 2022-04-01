---
alias: auto_aliasing
---

<br />
<br />

Date Created: 01/04/2022 21:34:08
Tags: #Proposition #Closed

Proved by: _Not Applicable_
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Consider the field $\R$ of real numbers and fix $m,n,p\in\N$. Then, for all $A\in\mat{m\times n}{\R}$ and $B\in\mat{n\times p}{\R}$, we have that $AB=\l[\v{a}_i\dotpro\v{b}_k\r]$ where_ $\v{a}_i\coloneqq\l\langle a_{i1},\dots,a_{in}\r\rangle$ _is the $i^{th}$ row of $A$ and_ $\v{b}_k\coloneqq\l\langle b_{1k},\dots,b_{nk}\r\rangle$ _is the $k^{th}$ column of $B$, both in vector form._

```

_Proof_. Letting $\l[\l(ab\r)_{ik}\r]\coloneqq AB$, we see that
$$\begin{align}
    \l(ab\r)_{ik}&=\sum_{j=1}^na_{ij}b_{jk} && \textrm{Definition of matrix multiplication} \\
    &=\sum_{j=1}^n\l(\v{a}_i\r)_j\l(\v{b}_k\r)_j && \textrm{Indices of $\v{a}_i$ and $\v{b}_k$} \\
    &=\v{a}_i\dotpro\v{b}_k. && \textrm{Definition of dot product}\qedin
\end{align}$$
