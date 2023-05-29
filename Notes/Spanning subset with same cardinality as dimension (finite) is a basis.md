---
mathLink: Spanning set $U\subseteq V$ with $\l|U\r|=\dim V<\infty$ is a basis
---

<div class="topSpace"></div>

Date Created: 02/05/2022 14:36:38
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: [[Basis Extraction Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $V$ be a finite-dimensional $K$-vector space. If $U\subseteq V$ is a spanning set of $V$ with $\l|U\r|=\dim V$, then $U$ is a basis for $V$.

```

<b>Remark.</b> Note that $\dim V<\infty$ is crucial here; if this is dropped, non-trivial reductions of $U$ may still have cardinality $\dim V$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Since $U$ spans $V$, we can cut if down to a basis $\mc{B}$ of $V$. Since $\l|U\r|=\dim V<\infty$, any non-trivial reduction of $U$ will result in a set with cardinality less than $\dim V$, so the reduction $\mc{B}$ of $U$ must be the trivial one; that is, $U=\mc{B}$.<span style="float:right;">$\blacksquare$</span>
