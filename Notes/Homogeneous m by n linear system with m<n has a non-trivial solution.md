---
custom_alias: Homogeneous $m\times n$ linear system with $m<n$ $\Rightarrow$ non-trivial solutions
---

<br />
<br />

Date Created: 28/03/2022 15:32:39
Tags: #Proposition #Closed

Proved by: [[Classification of linear systems of equations (infinite field)]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be an infinite field and take $A\in\mat{m\times n}{K}$ with $m<n$. Then the homogeneous linear system $A\v{x}=\v{0}$ has a non-trivial solution._

```

_Proof_. Let $R\coloneqq\rref\l(A\r)$ be of (row) rank $r$, so $R$ has $r$ non-zero rows. Certainly $r\leq m$, so $r<n$ and hence the system $A\v{x}=\v{0}$ has infinitely-many solutions if $\l|K\r|=\infty$ and finitely-many, but more than $1$, if $\l|K\r|<\infty$. In any case, the system $A\v{x}=\v{0}$ has more than one solution and hence has a non-trivial solution.<span style="float:right;">$\blacksquare$</span>
