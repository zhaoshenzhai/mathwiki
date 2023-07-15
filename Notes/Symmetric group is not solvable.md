---
mathLink: $S_n$ is not solvable for $n\geq5$
---

<div class="topSpace"></div>

Date Created: 14/07/2023 23:17:38
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: [[Simplicity of alternating group]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

If $n\geq5$, then the symmetric group $S_n$ is not solvable.

```

<i>Proof.</i> Consider the normal series $S_n\nsupgrp A_n\nsupgrp\l\{e\r\}$, which is not abelian since its composition factors are $\Z/2\Z$ and $A_n$. Since $A_n$ is simple, it has no non-trivial proper normal subgroups and hence $A_n\nsupgrp\l\{e\r\}$ is the only normal series for $A_n$. Furthermore, since $\l[S_n:A_n\r]=2$, we see that any proper normal subgroup $N\nsubgrpeq S_n$ is a subgroup of $A_n$. But then $N=N\cap A_n$ is normal, so either $N=\l\{e\r\}$ or $N=A_n$. Thus $A_n$ is the only non-trivial proper normal subgroup of $S_n$, so this is the only normal series for $S_n$. Thus $S_n$ does not admit an abelian series, so it is not solvable.<span style="float:right;">$\blacksquare$</span>
