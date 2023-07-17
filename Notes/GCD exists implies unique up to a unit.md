---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 13/01/2023 12:56:59
Tags: #Type/Proposition #Topic/Ring_Theory #Courses/MATH457

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $R$ be a integral domain and fix $a,b\in R\comp\l\{0\r\}$. If $\gcd\l(a,b\r)$ exists, then it is unique up to a unit.

```

<i>Proof.</i> Let $d$ be a GCD of $a$ and $b$, and let $u\in R^\times$. We shall show that $ud$ is a GCD of $a$ and $b$, and that every GCD of $a$ and $b$ is of this form.
* Observe that $a=dk$ for some $k\in R$, so $a=\l(ud\r)\l(u^{-1}k\r)$ and hence $\l(ud\r)\divides a$. Similarly, $\l(ud\r)\divides b$, so $ud$ is a common divisor for $a$ and $b$. If $d'$ is another common divisor for $a$ and $b$, then, since $d$ is a GCD, we see that $d'\divides d$ and hence $d'\divides\!\l(ud\r)$.

* Let $d'$ be a GCD of $a$ and $b$, so $d'\divides a$ and $d'\divides b$. But since $d$ is a GCD of $a$ and $b$, we see that $d\divides d'$. Similarly, $d\divides d'$, so $d\sim d'$. But $R$ is an integral domain, so $d'=ud$ for some $u\in R^\times$.<span style="float:right;">$\blacksquare$</span>
