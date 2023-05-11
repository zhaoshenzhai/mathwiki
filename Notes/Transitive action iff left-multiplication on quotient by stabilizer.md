---
mathLink: Transitive action on $G$ $\Leftrightarrow$ left-multiplication on $G/G_x$
---

<div class="topSpace"></div>

Date Created: 10/05/2023 20:15:03
Tags: #Type/Proposition #In_Progress

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $G$ be a group and fix $x\in X$. Then every transitive left-action $\phi$ on a set $X$ is equivariant to the left-multiplication action on $G/G_x$._

```

_Proof_. Consider the function $f:G/G_x\to X$ mapping $gG_x\mapsto gx$. We claim that $f$ is an equivariant bijection.
* That $f$ is well-defined is clear, since if $g_1G_x=g_2G_x$, then $g_1^{-1}g_2\in G_x$ and hence $g_1^{-1}g_2x=x$. Thus $g_1x=g_2x$.
* That $f$ is equivariant is also clear, since for all $g_1,g_2\in G$, we have $f\l(g_1\l(g_2G_x\r)\r)=f\l(\l(g_1g_2\r)G_x\r)=\l(g_1g_2\r)x=g_1\l(g_2x\r)=g_1f\l(g_2G_x\r)$.

Take $y\in X$, so, since $\phi$ is transitive, we see that $y=gx$ for some $g\in G$. Thus $f\l(gG_x\r)=gx=y$, so $f$ is surjective. If $g_1x=g_2x$ for some $g_1,g_2\in G$, then $g_1^{-1}g_2x=x$ and hence $g_1^{-1}g_2\in G_x$. Then $g_1G_x=g_2G_x$, so $f$ is injective.<span style="float:right;">$\blacksquare$</span>
