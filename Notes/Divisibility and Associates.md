---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 14/09/2022 19:41:39
Tags: #Type/Definition #Topic/Ring_Theory

Types: <i>Not Applicable</i>
Examples: [[Root iff factor (field)]]
Constructions: [[Greatest Common Divisor]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Associate primitive polynomials in fraction field are associate]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $R$ be a commutative ring and fix $a,b\in R$. We say that <b>$a$ divides $b$</b> if $b\in\gen{a}$, in which case we write $a\divides b$.
* If $\gen{a}=\gen{b}$, we say that $a$ and $b$ are <b>associate</b>, in which case we write $a\sim b$.

```

<b>Remark.</b> Some elementary properties of divisibility and associates.
* If $a\divides b_i$ for $i=1,2$, then $a\divides\!\l(rb_1\pm b_2\r)$ for all $r\in R$. Indeed, if $ar_1=b_i$ for some $r_i\in R$, then $a\l(rr_1\pm r_2\r)=rb_1\pm b_2$ and the result follows.
* If $u\in R^\times$, then $u\divides a$ for all $a\in R$. Indeed, $u\l(u^{-1}a\r)=a$.
* If $a=bu$ for some $u\in R^\times$, then $a\sim b$; the converse holds if $R$ is an integral domain. Indeed, we have $b=au^{-1}$ and the result follows. Conversely, write $a=bk$ and $b=al$ for $k,l\in R$, then $a=\l(al\r)k=a\l(lk\r)$ and hence $lk=1$. Set $u\coloneqq k\in R^\times$.<span style="float:right;">$\blacklozenge$</span>
