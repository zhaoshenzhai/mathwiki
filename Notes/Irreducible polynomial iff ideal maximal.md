---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 22/01/2023 23:31:02
Tags: #Proposition #Topics/Ring_Theory #Courses/MATH457

Proved by: [[Basic properties of divisibility and associates]]
References: [[Ideal is maximal iff quotient is a field]], [[Polynomial rings over UFDs are UFDs]], [[Irreducible implies prime (UFD)]]
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and let $f\in K\l[x\r]$. Then $f$ is irreducible iff the ideal $\ideal{f}$ is maximal._

```

**Remark.** It follows then that $K\l[x\r]/\ideal{f}$ is a field iff $f$ is irreducible. Since $K\l[x\r]$ is a UFD, this also holds iff $p$ is prime.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Observe that $\ideal{f}$ is maximal iff $\ideal{f}\not\subset\ideal{g}$ for any $\ideal{g}\neq R$. But this occurs iff $g\ndivides f$ for any $g\in R\comp R^\times$, iff $f$ is irreducible.<span style="float:right;">$\blacksquare$</span>
