---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 22/05/2023 14:07:01
Tags: #Type/Proposition #Topic/Topology

Proved by: [[Fundamental Theorem of Equivalence Relations]], [[Connected iff only empty and entire set is clopen]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $p:\widetilde{X}\to X$ be a covering map of a topological space $X$. If $X$ is connected, then the fibers $p^{-1}\!\l(x\r)$ at each $x\in X$ are equinumerous.

```

<i>Proof.</i> Consider the equivalence relation $\sim$ on $X$ defined by $x\sim x'$ iff the fibers over $x$ and $x'$ are equinumerous. We claim that the equivalence classes are all open, and since they partition $X$, the connectedness of $X$ then shows that there is only one equivalence class, as desired. Indeed, take $x\in X$ and let $U\ni x$ be evenly-covered by some sheets $V_j$. For any $x'\in U$, the set $p^{-1}\!\l(x'\r)\cap V_j$ is a singleton for all $j\in J$, so $\l|p^{-1}\!\l(x'\r)\r|=\l|J\r|$. In particular, since $x\in U$, we have $x\sim x'$, as desired.<span style="float:right;">$\blacksquare$</span>
