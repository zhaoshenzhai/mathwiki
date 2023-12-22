---
mathLink: Löwenheim-Skolem Theorem
---

<div class="topSpace"></div>

Date Created: 21/12/2023 16:03:46
Tags: #Type/Theorem #In_Progress

Proved by: [[Compactness Theorem]]
References: <i>Not Applicable</i>
Justifications: [[Cantor-Schroder-Bernstein Theorem]]

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Löwenheim-Skolem).

Let $\mc{A}$ be an infinite $\sigma$-structure. Then $\mc{A}$ admits an elementary substructure/extension of any cardinality $\kappa\geq\max\l\{\l|\sigma\r|,\aleph_0\r\}$. More precisely:
* (Downward Löwenheim-Skolem). For any subset $S\subseteq A$, there is an elementary substructure $\mc{A}_0\elemembed\mc{A}$ with $A_0\supseteq S$ such that $\l|A_0\r|\leq\max\l\{\l|S\r|,\l|\sigma\r|,\aleph_0\r\}$.
* (Upward Löwenheim-Skolem). For any cardinal $\kappa\geq\max\l\{\l|A\r|,\l|\sigma\r|,\aleph_0\r\}$, there is an elementary extension $\mc{A}'\elemextend\mc{A}$ of cardinality $\kappa$.

```

<b>Remark.</b> We have the (at first) striking <i>Skolem paradox</i>, that if $\ZFC$ is satisfiable, then it has a countable model $\mc{M}$. But $\mc{M}$ has its own version of reals $\R^\mc{M}$, which by Cantor’s theorem is uncountable! To resolve this ‘paradox’ one needs to observe that countability refers to the existence of a bijection $\R^\mc{M}\to\N$, which does exist for us, but this bijection, viewed as a subset of $\R^\mc{M}\times\N$, is not an element of $M$. Within $\mc{M}$, one cannot ‘see’ this bijection, so $\R^\mc{M}$ is uncountable in $\mc{M}$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> 
