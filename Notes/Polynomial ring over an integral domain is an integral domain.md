---
mathLink: $R$ integral domain $\Rightarrow$ $R\l[x\r]$ integral domain
---

<div class="topSpace"></div>

Date Created: 14/11/2022 19:00:39
Tags: #Proposition #Courses/MATH235

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ be an integral domain. Then $R\l[x\r]$ is also an integral domain._

```

**Remark.** Indeed, this is an equivalence since if $R\l[x\r]$ is an integral domain, then, in particular, $ab=0$ implies that either $a=0$ or $b=0$; here, $a$ and $b$ are the constant polynomials in $R\l[x\r]$.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Take $f,g\in R\l[x\r]$, so $f=\sum_{i=0}^{n}a_ix_i$ and $g=\sum_{i=0}^{m}b_ix^i$ for some $a_i,b_i\in R$, and, if $f,g\neq0$, is such that $a_n,b_m\neq0$. Suppose that $fg=0$, so, in particular, we have $a_nb_m=0$. But $R$ is an integral domain, so either $a_n=0$ or $b_m=0$. But then either $f=0$ or $g=0$, so we are done.<span style="float:right;">$\blacksquare$</span>
