---
mathLink: $\tpl{\Z_n,+,\cdot}$ is a field $\Leftrightarrow$ $n$ prime
---

<div class="topSpace"></div>

Date Created: 03/11/2022 19:37:42
Tags: #Proposition #Courses/MATH235

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $n\in\N$ with $n\geq2$. Then $\tpl{\Z_n,+,\cdot}$ is a field iff $n$ is prime._

```

_Proof_. First, observe that $\l[a\r]\l[b\r]=\l[ab\r]=\l[ba\r]=\l[b\r]\l[a\r]$ for all $\l[a\r],\l[b\r]\in\Z_n$, so $\tpl{\Z_n,+,\cdot}$ is always a commutative ring (multiplication is associative and has an identity).
* Assume that $p\coloneqq n$ is prime and take $\l[a\r]\in\Z_p$; it suffices to show that $\tpl{\Z_p,+,\cdot}$ is a division ring with $\l[0\r]\neq\l[1\r]$ (but the latter is obvious). Take $\l[a\r]\in\Z_p\comp\l\{0\r\}$. Since $p$ is prime, we see that $\gcd\l(a,p\r)=1$ and hence $\l[a\r]\in\Z_p^\times$. Thus there exists some $\l[b\r]\in\Z_p^\times$ such that $\l[a\r]\cdot\l[b\r]=\l[1\r]=\l[b\r]\cdot\l[a\r]$, so $\tpl{\Z_p,+,\cdot}$ is a division ring.

* Otherwise, if $n$ is not prime, then there exist $k,l\in\N$ with $1<k,l<n$ such that $n=kl$. Then $kl=n\mod{n}0$, so $\l[k\r]\l[l\r]=\l[kl\r]=\l[0\r]$, despite $\l[k\r]\neq\l[0\r]$ and $\l[l\r]\neq0$. Thus $\Z_n$ is not an integral domain and hence is not a field.<span style="float:right;">$\blacksquare$</span>
