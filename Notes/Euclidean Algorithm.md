<div class="topSpace"></div>

Date Created: 16/09/2022 12:00:27
References:
Tags: #Type/Theorem #Topic/Rings_and_Modules/Ring_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Euclidean Algorithm).

Let $R$ be a Euclidean Domain and take $a,b\in R$. Then the sequence of divisions $a=q_0b+r_0$, $b=q_1r_0+r_1$, and $r_i=q_{i+2}r_{i+1}+r_{i+2}$ for $i\geq0$ terminates with $r_n=0$ at some smallest $n\in\N$ and $\gcd\l(a,b\r)=r_{n-1}$.

```

<i>Proof.</i> Let $v:R\comp\l\{0\r\}\to\N$ be a Euclidean valuation on $R$ and note that $v\l(b\r)>v\l(r_0\r)>v\l(r_1\r)>\cdots\geq0$. Since all remainders are integers, there must exist some $n\in\N$ such that $v\l(r_n\r)=0$, whence $r_n=0$.
* We need the following (trivial) fact, that for all $a,b,q,r\in R$ with $a=qb+r$, we have $\gen{a,b}=\gen{b,r}$. Indeed, $r=a-qb\in\gen{a,b}$ and $a=qb+r\in\gen{b,r}$.

Applying this repeatedly gives us $\gcd\l(a,b\r)=\gcd\l(b,r\r)=\gcd\l(r_0,r_1\r)=\cdots=\gcd\l(r_{n-2},r_{n-1}\r)$, but since $r_{n-2}=q_nr_{n-1}$, we see that $\gcd\l(r_{n-2},r_{n-1}\r)=r_{n-1}$.<span style="float:right;">$\blacksquare$</span>
