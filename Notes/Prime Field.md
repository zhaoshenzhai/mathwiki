---
mathLink: $\F_p$
---

<div class="topSpace"></div>

Date Created: 03/11/2022 19:37:02
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Multiplicative Group of Integers mod n]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Multiplicative group iff coprime]]

``` ad-Definition
title: Definition.

Let $n>1$. The <b>ring of integers modulo $n$</b> is the quotient ring $\Z/n\Z$ of $\Z$ by the ideal $n\Z\ideal\Z$.
* If $p\coloneqq n$ is prime, then $\F_p\coloneqq\Z/p\Z$ is the <b>prime field of order $p$</b>.

```

<b>Remark.</b> Indeed, $\Z/n\Z$ is a commutative ring with unity, but, unless $n$ is prime, is <i>not</i> an integral domain and hence not a field.
* If $p\coloneqq n$ is prime, take $a\in\F_p\comp\l\{0\r\}$, so $a\perp p$ and hence $a\in F_p^\times$. Thus there is some $b\in F_p^\times$ such that $ab=1=ba$, as desired.
* Otherwise, if $n$ is not prime, then there exist $1<k,l<n$ such that $n=kl$. Then $kl=n=0$ despite $k,l\neq0$, so $\Z/n\Z$ is not an integral domain.<span style="float:right;">$\blacklozenge$</span>
