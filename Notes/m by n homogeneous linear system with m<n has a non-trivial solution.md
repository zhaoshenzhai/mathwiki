---
custom_alias: $m\times n$ homogeneous linear system with $m<n$ $\Rightarrow$ non-trivial solutions
---

<br />
<br />

Date Created: 28/03/2022 15:32:39
Tags: #Proposition #Open 

Proved by: [[Classification of consistent linear systems of equations (infinite field)]]
Generalizations: _Not Applicable_

Examples: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be an infinite field and take $\v{A}\in\mat{m\times n}{K}$ with $m<n$. Then the homogeneous linear system $\v{A}\v{x}=\v{0}$ has a non-trivial solution._

```

_Proof_. Let $\v{R}\coloneqq\rref\l(\v{A}\r)$, say with $r$ non-zero rows. Certainly $r\leq m$, so $r<n$ and hence the system $\v{A}\v{x}=\v{0}$ has infinitely-many solutions if $\l|K\r|=\infty$ and finitely-many, but more than $1$, if $\l|K\r|<\infty$. In any case, the system $\v{A}\v{x}=\v{0}$ has more than one solution and hence has a non-trivial solution.<span style="float:right;">$\blacksquare$</span>
