---
custom_alias: Square linear system $A\v{x}=\v{b}$ has a unique solution $\Leftrightarrow$ $A\sim I$
---

<br />
<br />

Date Created: 08/04/2022 07:45:42
Tags: #Proposition #Closed

Proved by: [[RREF of a matrix is unique]], [[Gauss-Jordan Elimination]], [[Full-rank square matrix in RREF is identity]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider an $n\times n$ linear system $A\v{x}=\v{b}$ for some fixed $n\in\N^\ast$. Then $A\sim I$ iff the system has a unique solution._

```

_Proof_.
* ($\Rightarrow$): Observe that $I$ is in RREF, and since the RREF of a matrix is unique, we see that $I=\rref\l(A\r)$. By Gauss-Jordan Elimination, we see that the system $A\v{x}=\v{b}$ is consistent; since $I$ has no non-zero rows, every column is a pivot column and thus the solution is unique.

* ($\Leftarrow$): Let $R\coloneqq\rref\l(A\r)$; we wish to show that $R=I$. Since $A\v{x}=\v{b}$ has a unique solution, we see that every column is a pivot column and thus $\col\rank\l(A\r)=n$. It follows then that $R$ is of full rank; the result follows since $R$ is a square matrix.<span style="float:right;">$\blacksquare$</span>
