---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 22/01/2023 22:23:11
Tags: #Type/Definition #Topic/Ring_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Gauss's Lemma (Primitivity)]], [[Gauss's Lemma (Irreducibility)]], [[Associate primitive polynomials in fraction field are associate]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Maximal implies prime]], [[Krull's Theorem]], [[Basic properties of prime and irreducible elements]], [[Greatest Common Divisor#^gcd-exist-in-ufd]]

``` ad-Definition
title: Definition.

Let $R$ be a commutative ring and take a nonzero polynomial $f\in R\l[x\r]$. Then $f$ is said to be <b>primitive</b> if $f\not\in\mf{p}R\l[x\r]$ for any principal prime ideals $\mf{p}\nsubgrp R$, where $\mf{p}R\l[x\r]$ is the polynomial ring with coefficients in $\mf{p}$.
* The polynomial $f$ is said to be <b>very primitive</b> if the same holds for all prime ideals $\mf{p}\nsubgrp R$.

```

<b>Remark.</b> Equivalently, a polynomial $f\coloneqq\sum_{i=0}^na_ix^i\in R\l[x\r]$ is very primitive iff $\gen{a_0,\dots,a_n}=\gen{1}$, and, if $R$ is a UFD, $f$ is primitive iff $\gcd\l(a_0,\dots,a_n\r)=\gen{1}$.
* Indeed, $f$ is very primitive iff the coefficients $a_i$ are not contained in any prime ideal of $R$, so in particular they are not contained in any maximal ideal of $R$. Since every proper ideal is contained in a maximal ideal of $R$, we see that $\gen{a_0,\dots,a_n}=\gen{1}$ is not proper. Conversely, if $\gen{a_0,\dots,a_n}=\gen{1}$, then no prime ideal contains it and hence $f$ is very primitive.

* If $R$ is a UFD, then $\gcd\l(a_0,\dots,a_n\r)\neq\gen{1}$ occurs precisely when there is an irreducible element $p\in R$ such that $\gen{a_0,\dots,a_n}\subseteq\gen{p}$. Such a $p\in R$ is prime, so $f$ is primitive iff $\gen{a_0,\dots,a_n}\not\subseteq\gen{p}$ for any prime element $p\in R$. This occurs iff $f\not\in\mf{p}R\l[x\r]$ for any prime ideal $\mf{p}\nsubgrp R$.

This motivates the definition of the <i>content</i> of $f$, defined as $\cont\l(f\r)\coloneqq\gcd\l(a_0,\dots,a_n\r)$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> It is clear that $\cont\l(rf\r)=r\cont\l(f\r)$ for all $r\in R\comp\l\{0\r\}$. Furthermore, given any non-zero $f\in R\l[x\r]$ with $\gen{r}=\cont\l(f\r)$, we can always write $f=rf'$ for the primitive $f'\coloneqq f/r\in R\l[x\r]$. Finally, if $f=rf'$ with $f'$ primitive, then $\gen{r}=\cont\l(f\r)$.<span style="float:right;">$\blacklozenge$</span>
