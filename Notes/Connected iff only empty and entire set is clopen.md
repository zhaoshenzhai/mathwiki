---
mathLink: Connected $\Leftrightarrow$ only $\em$ and $X$ are clopen
---

<div class="topSpace"></div>

Date Created: 22/05/2023 14:30:07
Tags: #Type/Proposition #Topic/Topology

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $X$ be a topological space. Then $X$ is connected iff only $\em$ and $X$ are both open and closed.

```

<i>Proof.</i>
* ($\Rightarrow$): If $U\subseteq X$ is both open and closed, then, in particular, $X\comp U$ is open. Then $X=U\cup\l(X\comp U\r)$ is a disjoint union of two open sets, so either $U=\em$ or $X\comp U=\em$. Thus the only open and closed sets in $X$ are $\em$ and $X$, as desired.
* ($\Leftarrow$): If $X=U\cup V$ for disjoint open sets $U,V\subseteq X$, then $V=X\comp U$ is closed. Thus either $V=\em$ or $V=X$, and similarly either $U=\em$ or $U=X$.<span style="float:right;">$\blacklozenge$</span>
