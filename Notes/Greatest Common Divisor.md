---
mathLink-blocks:
    gcd-exist-in-ufd: GCDs exist in UFDs
---

<div class="topSpace"></div>

Date Created: 14/09/2022 19:47:03
Tags: #Type/Definition #Topic/Ring_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Primitivity and Content]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Bezout's Identity]], [[Euclidean Algorithm]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $R$ be a integral domain and take $a,b\in R$. An element $d\in R$ is said to be a <b>greatest common divisor (GCD) of $a$ and $b$</b> if $d\divides a,b$ and $d'\divides d$ for all common divisors $d'$ of $a$ and $b$.
* The greatest common divisor of $a$ and $b$ is unique up to a unit; the associate class of $d$ is denoted $\gcd\l(a,b\r)$.

```

<b>Remark.</b> If $R$ is a UFD, then $\gcd\l(a,b\r)$ exists. Indeed, we may write $a=u\prod_{i=1}^{n}p_i^{\alpha_i}$ and $b=v\prod_{i=1}^{n}p_i^{\beta_i}$ for some irreducible $p_i\in R$, integers $\alpha_i,\beta_j\geq0$, and units $u,v\in R^\times$. Let $\mu_i\coloneqq\min\l\{\alpha_i,\beta_i\r\}$ and set $d\coloneqq\prod_{i=1}^{n}p_i^{\mu_i}$, which contains all irreducible factors of both $a$ and $b$ and hence divides both $a$ and $b$. If $d'$ is another common divisor for $a$ and $b$, say $d'=w\prod_{i=1}^{n}p_i^{\gamma_i}$ where $\gamma_i\geq0$ and $w\in R^\times$, then $\gamma_i\leq\alpha_i,\beta_i\leq\mu_i$ for all $1\leq i\leq n$ and hence $d'\divides d$.<span style="float:right;">$\blacklozenge$</span>
^gcd-exist-in-ufd
