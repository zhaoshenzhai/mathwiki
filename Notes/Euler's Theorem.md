---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 13/10/2022 12:18:15
Tags: #Type/Theorem #Topic/Group_Theory #Topic/Number_Theory

Proved by: [[Integers#^invertible-iff-coprime]], [[Lagrange's Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Euler).

Fix $n\in\N^+$. For all $a\perp n$, we have $a^{\phi\l(n\r)}\equiv1\mod{n}$.

```

<i>Proof.</i> Note that $a\in\Z_n^\times$, so, by Lagrange’s Theorem, we see that $\ord{a}$ divides $\l|\l(\Z/n\Z\r)^\times\r|=\phi\l(n\r)$. Hence $a^{\phi\l(n\r)}\equiv1\mod{n}$, as desired.<span style="float:right;">$\blacksquare$</span>
