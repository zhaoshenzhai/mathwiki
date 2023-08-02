<div class="topSpace"></div>

Date Created: 18/07/2023 20:18:33
Tags: #Type/Theorem #Topic/Module_Theory

Proved by: [[Krull's Theorem]], [[Ideal is maximal iff quotient is a field]], [[Isomorphism Theorems]], [[Basis Extension Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Invariant Basis Number).

Let $M$ be an $R$-module over a commutative ring $R$. If $B_1$ and $B_2$ are bases for $M$, then $\l|B_1\r|=\l|B_2\r|$.

```

<i>Proof.</i> Since both $B_1$ and $B_2$ are bases for $M$, we have $R^n\iso R^m$ where $n\coloneqq\l|B_1\r|$ and $m\coloneqq\l|B_2\r|$. Consider a maximal ideal $\mf{m}\nsubgrp R$, which exists by Krull’s Theorem, making $R/\mf{m}$ a field. Equipping $R^n/\mf{m}R^n$ with its natural $R/\mf{m}$-vector space structure, we have $R^n/\mf{m}R^n\iso\l(R/\mf{m}\r)^n$. Similarly, we have $R^m/\mf{m}R^m\iso\l(R/\mf{m}\r)^m$, so $\l(R/\mf{m}\r)^n\iso\l(R/\mf{m}\r)^m$ as $R/\mf{m}$-vector spaces. The exchange lemma then forces $n=m$, as desired.<span style="float:right;">$\blacksquare$</span>
