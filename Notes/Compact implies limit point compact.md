---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 29/12/2022 21:18:52
Tags: #Type/Proposition #Topic/Topology

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $X$ be a topological space and consider an infinite subset $S\subseteq X$. If $X$ is compact, then $S$ has a cluster (limit) point in $X$.

```

<i>Proof.</i> Suppose that $S$ has no cluster points in $X$, so $x\not\in\bar{S\comp\l\{x\r\}}$ for all $x\in X$. Thus, for each $x\in X$, there exists a neighborhood $U_x$ such that $U_x\cap\l(S\comp\l\{x\r\}\r)=\em$. Thus $U_x$ contains at most one point in $S$ (namely $x$, if $x\in S$), and observe that $\l\{U_x\r\}_{x\in X}$ is an open cover of $X$. But no finite subcollection thereof can cover $X$, lest it covers $S$, which is impossible from our remarks above.<span style="float:right;">$\blacksquare$</span>
