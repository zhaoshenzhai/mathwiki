---
mathLink: Divisibility in $R\l[x\r]$ via $\Frac R$
---

<div class="topSpace"></div>

Date Created: 23/01/2023 07:50:34
Tags: #Type/Proposition #Topic/Rings_and_Modules/Ring_Theory

Proved by: [[Gauss's Lemma (Primitivity)]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $f,g\in R\l[x\r]$ be non-zero polynomials in a UFD $R$ and set $k\coloneqq\Frac R$. If $\cont g\subseteq\cont f$ and $\gen{g}\subseteq\gen{f}$ in $k\l[x\r]$, then $\gen{g}\subseteq\gen{f}$ in $R\l[x\r]$.

```

<b>Remark.</b> In particular, if $f$ and $g$ are primitive, then $f\sim g$ in $k\l[x\r]$ implies $f\sim g$ in $R\l[x\r]$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Since $\gen{g}\subseteq\gen{f}$ in $k\l[x\r]$, we have $g=fh$ for some $h\in k\l[x\r]$. Let $a$ be the product of all the denominators of $h$, so $ah\in R\l[x\r]$ and hence $ah=bh'$ for some primitive polynomial $h'\in R\l[x\r]$, where $\gen{b}\coloneqq\cont\l(ah\r)$. Then $h=\frac{b}{a}h'$ with $h'\in R\l[x\r]$ primitive, so $a\cont g=b\cont\l(f'h\r)=b\cont f\cont h'=b\cont{f}$ by Gauss’s Lemma. By hypothesis, we have $b\cont f=a\cont g\subseteq a\cont f$. Since $R$ is an integral domain and $\cont f\neq\gen{0}$, we have $b=ac$ for some $c\in R$. Thus $h=ch'\in R\l[x\r]$, as desired.<span style="float:right;">$\blacksquare$</span>
