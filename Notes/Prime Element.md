<div class="topSpace"></div>

Date Created: 16/07/2023 21:24:20
Tags: #Type/Definition #Topic/Ring_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Irreducible implies prime (UFD)]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $R$ be an integral domain. An element $p\in R$ is <b>prime</b> if $p\not\in R^\times$ and $p\divides\!\l(rs\r)$ implies either $p\divides r$ or $p\divides s$.

```

<b>Remark.</b> Equivalently, $p\in R$ is prime iff its principal ideal $\gen{p}$ is prime. Also, every prime element $p\in R$ is irreducible. Indeed, if $p=rs$ for some $r,s\in R$, then either $p\divides r$ or $p\divides s$. Assume w.l.o.g. that $p\divides r$, so $pa=r$ for some $a\in R$. Then $p=rs=pas$, so $as=1$ and hence $s\in R^\times$.<span style="float:right;">$\blacklozenge$</span>
