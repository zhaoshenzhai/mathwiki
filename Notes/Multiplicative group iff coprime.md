---
mathLink: $a\in\Z_n^\times$ $\Leftrightarrow$ $a\perp n$
---

<div class="topSpace"></div>

Date Created: 14/12/2022 14:49:10
Tags: #Type/Proposition #Topic/Ring_Theory

Proved by: [[Bezout's Identity]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Fix $n\in\N^+$ and $\l[a\r]\in\Z_n$. Then $\l[a\r]\in\Z_n^\times$ iff $a\perp n$.

```

<i>Proof.</i> Let $d\coloneqq\gcd\l(a,n\r)$ and suppose that there exists some $\l[b\r]\in\Z_n$ such that $ab\mod{n}1$. Then $n\divides\!\l(ab-1\r)$, so there exists some $k\in\Z$ such that $ab-nk=1$. But then $d\divides\!\l(ab-nk\r)=1$, so $d=1$. Conversely, if $a\perp n$, then Bézout$\textrm{'}$s Identity furnishes $r,s\in\Z$ such that $ar+ns=1$. Then $ns=1-ar$, so $n\divides\!\l(1-ar\r)$ and hence $ar\mod{n}1$. Observe then that $\l[a\r]\l[r\r]=\l[1\r]$, so $\l[a\r]\in\Z_n^\times$.<span style="float:right;">$\blacksquare$</span>
