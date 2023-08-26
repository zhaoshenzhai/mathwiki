---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 22/01/2023 22:29:15
Tags: #Type/Theorem #Topic/Ring_Theory

Proved by: [[Universal Property of Monoid Rings and Algebras]], [[Isomorphism Theorems]], [[Basic properties of polynomial rings (integral domain)]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Gauss’s Lemma for Primitivity of Polynomials).

Let $R$ be a UFD. For all $f,g\in R\l[x\r]$, we have $\cont\l(fg\r)=\cont\l(f\r)\cont\l(g\r)$.

```

<i>Proof.</i> We show that for all $f,g\in R\l[x\r]$, the product $fg$ is primitive iff both $f$ and $g$ are primitive.
* Indeed, we have $R\l[x\r]/\!\l(\mf{p}R\l[x\r]\r)\iso\l(R/\mf{p}\r)\l[x\r]$ for all ideals $\mf{p}\nsubgrpeq R$, since the projection $\pi:R\to R/\mf{p}$ extends to a homomorphism $\phi:R\l[x\r]\to\l(R/\mf{p}\r)\l[x\r]$ with kernel $\mf{p}R\l[x\r]$. It follows that $\mf{p}R\l[x\r]\nsubgrp R\l[x\r]$ is prime if $\mc{p}\nsubgrp R$ is. Thus $fg\not\in\mf{p}R\l[x\r]$ for any principal prime ideals $\mf{p}$ iff both $f,g\not\in\mf{p}R\l[x\r]$ for any principal prime ideals $\mf{p}$, which occurs iff both $f$ and $g$ are primitive.

Decomposing $f=rf'$ and $g=sg'$ for some primitive polynomials $f',g'\in R\l[x\r]$, where $\gen{r}=\cont\l(f\r)$ and $\gen{s}=\cont\l(g\r)$, and applying the lemma gives
$$\begin{equation}
    \cont\l(fg\r)=\cont\l(rsf'g'\r)=rs\cont\l(f'g'\r)=rs\gen{1}=\gen{rs}=\gen{r}\gen{s}=\cont\l(f\r)\cont\l(g\r).\qedin
\end{equation}$$
