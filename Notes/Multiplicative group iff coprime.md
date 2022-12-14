---
mathLink: $a\in\Z_n^\times$ $\Leftrightarrow$ $a\perp n$
---

<div class="topSpace"></div>

Date Created: 14/12/2022 14:49:10
Tags: #Proposition #Courses/MATH235

Proved by: [[Bezout's Identity]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Fix $n\in\N^+$ and $\l[a\r]\in\Z_n$. Then $\l[a\r]\in\Z_n^\times$ iff $a\perp n$._

```

_Proof_.
* ($\Rightarrow$): Let $d\coloneqq\gcd\l(a,n\r)$ and suppose that there exists some $\l[b\r]\in\Z_n$ such that $ab\mod{n}1$. Then $n\divides\!\l(ab-1\r)$, so there exists some $k\in\Z$ such that $ab-nk=1$. But then $d\divides\!\l(ab-nk\r)=1$, so $d=1$.

* ($\Leftarrow$): By B$\acute{\textrm{e}}$zout's Identity, there exist $r,s\in\Z$ such that $ar+ns=1$. Then $ns=1-ar$, so $n\divides\!\l(1-ar\r)$ and hence $ar\mod{n}1$. Then $\l[a\r]\l[r\r]=\l[1\r]$, so $\l[a\r]\in\Z_n^\times$.<span style="float:right;">$\blacksquare$</span>
