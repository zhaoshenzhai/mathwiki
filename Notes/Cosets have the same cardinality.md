<div class="topSpace"></div>

Date Created: 13/10/2022 13:59:17
Tags: #Proposition #Courses/MATH235

Proved by: [[Basic properties of groups]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $H\subseteq G$ be a subgroup of a group $G$ and fix $g\in G$. Then there exists a bijection $\phi:H\to gH$._

```

**Remark.** In particular, this shows that every coset (both left and right) of $H$ in $G$ have the same cardinality.<span style="float:right;">$\blacklozenge$</span>

---

_Proof_. Define $\phi:h\to gh$.
* (Injection): Take $h_1,h_2\in H$ such that $\phi\l(h_1\r)=\phi\l(h_2\r)$. Then $gh_1=gh_2$, so $h_1=h_2$.
* (Surjection): Take $x\in gH$, so there exists some $h\in H$ such that $x=gh$. Observe then that $\phi\l(h\r)=gh=x$.<span style="float:right;">$\blacksquare$</span>
