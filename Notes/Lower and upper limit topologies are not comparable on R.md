---
mathLink: $\LLtopR$ and $\ULtopR$ not comparable
---

<div class="topSpace"></div>

Date Created: 05/02/2022 17:43:47
Tags: #Type/Proposition #Later/Topology

Proved by: [[Criteria for fineness w.r.t. bases]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $\R$ be the set of real numbers. Then the lower and upper limit topologies $\LLtopR$ and $\ULtopR$ on $\R$, respectively, are not comparable.

```

<i>Proof.</i> ($\LLtopR\not\subseteq\ULtopR$): Take $\l[a,b\r)\in\mc{B}_\textrm{LL}$ and choose $x=a$. Then any $\l(c,d\r]\in\mc{B}_\textrm{UL}$ containing $x$ necessarily implies that $c<a$, so $\l(c,d\r]\not\subseteq\l[a,b\r)$.

($\ULtopR\not\subseteq\LLtopR$): Take $\l(a,b\r]\in\mc{B}_\textrm{UL}$ and choose $x=b$. Then any $\l[c,d\r)\in\mc{B}_\textrm{LL}$ containing $x$ necessarily implies that $d>b$, so $\l[c,d\r)\not\subseteq\l(a,b\r]$.<span style="float:right;">$\blacksquare$</span>
