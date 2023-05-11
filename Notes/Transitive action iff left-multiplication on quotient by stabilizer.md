---
mathLink: Transitive action on $G$ $\Leftrightarrow$ left-multiplication on $G/G_x$
---

<div class="topSpace"></div>

Date Created: 10/05/2023 20:15:03
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: [[Universal Property of Quotient Sets]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $G$ be a group, let $X$ be a set, and fix $x\in X$. Then every transitive left-action on a set $X$ is equivariant to the left-multiplication action on $G/G_x$._

```

_Proof_. Consider the function $f:G\to X$ mapping $g\mapsto gx$. Then, for all $g_1,g_2\in G$, we have
$$\begin{equation}
    f\l(g_1\r)=f\l(g_2\r)\ \ \ \ \Leftrightarrow\ \ \ \ g_1x=g_2x\ \ \ \ \Leftrightarrow\ \ \ \ g_2^{-1}g_1x=x\ \ \ \ \Leftrightarrow\ \ \ \ g_2^{-1}g_1\in G_x\ \ \ \ \Leftrightarrow\ \ \ \ g_1\in g_2G_x,
\end{equation}$$
so the universal property of the quotient furnishes a unique function $\phi:G/G_x\to X$ mapping $gG_x\mapsto gx$. We claim that $\phi$ is an equivariant bijection.
* Take $g_1,g_2\in G$. Since $g_1$ acts on $g_2G_x$ by left-multiplication, we have $\phi\l(g_1\l(g_2G_x\r)\r)=\phi\l(\l(g_1g_2\r)G_x\r)=\l(g_1g_2\r)x=g_1\l(g_2x\r)=g_1\phi\l(g_2G_x\r)$.

Take $y\in X$, so, since $\phi$ is transitive, we see that $y=gx$ for some $g\in G$. Thus $\phi\l(gG_x\r)=gx=y$, so $\phi$ is surjective. If $g_1x=g_2x$ for some $g_1,g_2\in G$, then $g_1^{-1}g_2x=x$ and hence $g_1^{-1}g_2\in G_x$. Then $g_1G_x=g_2G_x$, so $\phi$ is injective.<span style="float:right;">$\blacksquare$</span>
