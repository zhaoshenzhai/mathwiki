---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 23/11/2022 14:10:58
Tags: #Type/Proposition #Topic/Rings_and_Modules/Ring_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Every Euclidean domain is a principal ideal domain.

```

<i>Proof.</i> Let $\mf{a}\nsubgrpeq R$ be an ideal in a Euclidean domain $R$ with valuation $N:R\to\N$. If $\mf{a}=0$ then we are done, so assume otherwise, in which case we choose $0\neq d\in\mf{a}$ with $N\l(d\r)$ minimal. Observe that $\gen{d}\subseteq\mf{a}$, and we claim that equality holds.
* Take $a\in\mf{a}$. Since $R$ is a Euclidean Domain, there exist $q,r\in R$, with either $r=0$ or $N\l(r\r)<N\l(d\r)$, such that $a=qd+r$. Then $r=a-qd$, and since $a,d\in\mf{a}$, we see that $r\in\mf{a}$. But $d$ has minimal valuation in $\mf{a}$, so $r=0$ and hence $a=qd$. Thus $a\in\gen{d}$, so we are done.<span style="float:right;">$\blacksquare$</span>
