---
custom_alias: $A\sim I$ $\Rightarrow$ $A\v{x}=\v{b}$ has a unique solution
---

<br />
<br />

Date Created: 08/04/2022 07:45:42
Tags: #Proposition #Closed

Proved by: [[RREF of a matrix is unique]], [[Gauss-Jordan Elimination]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider an $n\times n$ linear system $A\v{x}=\v{b}$. If $A\sim I$, then the system has a unique solution._

```

_Proof_. Observe that $I$ is in RREF, and since the RREF of a matrix is unique, we see that $I=\rref\l(A\r)$. By Gauss-Jordan Elimination, we see that the system $A\v{x}=\v{b}$ is consistent; since $I$ has no non-zero rows, every column is a pivot column and thus the solution is unique.<span style="float:right;">$\blacksquare$</span>
