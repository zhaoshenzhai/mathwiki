<div class="topSpace"></div>

Date Created: 30/01/2022 17:39:40
Tags: #Type/Proposition #Topic/Set_Theory/Later

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $X$ be a set and let $R$ be a well-founded relation on $X$. Then $R$ is irreflexive on $X$.

```

<i>Proof.</i> If $X=\em$, then the result is vacuously true. Suppose otherwise, so take $x\in X$ and consider the subset $\l\{x\r\}\subseteq X$. Since $R$ is well-founded on $X$, there exists $x\in\l\{x\r\}$, namely $x$ itself, such that $\lnot xRx$. The element $x\in X$ is arbitrary, so $R$ is irreflexive on $X$.<span style="float:right;">$\blacksquare$</span>
