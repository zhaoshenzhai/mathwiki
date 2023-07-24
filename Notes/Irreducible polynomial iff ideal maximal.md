---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 22/01/2023 23:31:02
Tags: #Type/Proposition #Topic/Ring_Theory #Courses/MATH457

Proved by: <i>Not Applicable</i>
References: [[Ideal is maximal iff quotient is a field]], [[Polynomial rings over UFDs are UFDs]], [[Basic properties of prime and irriducible elements]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $K$ be a field and let $f\in K\l[x\r]$. Then $f$ is irreducible iff the ideal $\gen{f}$ is maximal.

```

<b>Remark.</b> It follows then that $K\l[x\r]/\!\gen{f}$ is a field iff $f$ is irreducible. Since $K\l[x\r]$ is a UFD, this also holds iff $p$ is prime.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Observe that $\gen{f}$ is maximal iff $\gen{f}\not\subset\gen{g}$ for any $\gen{g}\neq R$. But this occurs iff $g\ndivides f$ for any $g\in R\comp R^\times$, iff $f$ is irreducible.<span style="float:right;">$\blacksquare$</span>
