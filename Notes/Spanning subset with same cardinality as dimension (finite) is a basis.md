---
mathLink: Spanning set $U\subseteq V$ with $\l|U\r|=\dim V<\infty$ is a basis
---

<div class="topSpace"></div>

Date Created: 02/05/2022 14:36:38
Tags: #Proposition #Later/Linear_Algebra

Proved by: [[Basis Extraction Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a finite-dimensional vector space $V$ over $K$. If $U\subseteq V$ is a spanning set of $V$ with $\l|U\r|=\dim V$, then $U$ is a basis for $V$._

```

_Proof_. Since $U$ spans $V$, we can cut if down to a basis $\mc{B}$ of $V$. Since $\l|U\r|=\dim V<\infty$, any non-trivial reduction of $U$ will result in a set with cardinality less than $\dim V$, so the reduction $\mc{B}$ of $U$ must be the trivial one; that is, $U=\mc{B}$. Note that $\dim V<\infty$ is crucial here; if this is dropped, non-trivial reductions of $U$ may still have cardinality $\dim V$.<span style="float:right;">$\blacksquare$</span>
