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

<i>Proof.</i> Let $n\coloneqq\l|B_1\r|$ and write $R^n\coloneqq F^R\!\l(B_1\r)=M$ as the free $R$-module of $B_1$. By Krull’s theorem, $R$ descends into a field $R/\mf{m}$ for some maximal ideal $\mf{m}\subgrp R$. Note that $\mf{m}R^n\subgrpeq R^n$ is a submodule, and that the quotient $R^n/\mf{m}R^n$ has a natural $R/\mf{m}$-vector space structure since $r\l(\tpl{r_i}+\mf{m}R^n\r)=r\tpl{r_i}+\mf{m}R^n=\mf{m}R^n$ for all $r\in\mf{m}$. We define an isomorphism of $R/\mf{m}$-vector spaces $R^n/\mf{m}R^n\iso\l(R/\mf{m}\r)^n$ as follows.
* Consider the $R$-module homomorphism $\phi:R^n\to\l(R/\mf{m}\r)^n$ mapping $\tpl{r_b}\mapsto\tpl{r_b+\mf{m}}$, where $\tpl{r_b}\in\ker\phi$ iff $r_b\in\mf{m}$ for all $b\in B_1$. But $\gen{B_1}=R^n$, so any element $\sum_{x\in R^n}\!r_xx\in\mf{m}R^n$ can be written as some $\tpl{r_b}$ and thus $\ker\phi=\mf{m}R^n$.

Similarly, if $m\coloneqq\l|B_1\r|$, then $R^m/\mf{m}R^m\iso\l(R/\mf{m}\r)^m$. Thus $\l(R/\mf{m}\r)^n\iso\l(R/\mf{m}\r)^m$, so $n=m$, as desired.<span style="float:right;">$\blacksquare$</span>
