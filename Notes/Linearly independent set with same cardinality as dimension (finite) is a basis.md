---
mathLink: Linearly independent $U\subseteq V$ with $\l|U\r|=\dim V<\infty$ is a basis
---

<div class="topSpace"></div>

Date Created: 02/05/2022 14:12:33
Tags: #Proposition #Later/Linear_Algebra

Proved by: [[Basis Extension Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a finite-dimensional vector space $V$ over $K$. If $U\subseteq V$ is linearly independent with $\l|U\r|=\dim V$, then $U$ is a basis for $V$._

```

_Proof_. Since $U$ is linearly independent, we can extend it to a basis $\mc{B}$ of $V$. Since $\l|U\r|=\dim V<\infty$, any non-trivial extension of $U$ will result in a set with cardinality greater than $\dim V$, so the extension $\mc{B}$ of $U$ must be the trivial one; that is, $U=\mc{B}$. Note that $\dim V<\infty$ is crucial here; if this is dropped, non-trivial extensions of $U$ may still have cardinality $\dim V$.<span style="float:right;">$\blacksquare$</span>
