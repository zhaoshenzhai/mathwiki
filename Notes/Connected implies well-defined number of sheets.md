---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 22/05/2023 14:07:01
Tags: #Type/Proposition #Topic/Topology

Proved by: [[Connected iff only empty and entire set is clopen]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $p:\widetilde{X}\to X$ be a covering map of a topological space $X$. If $X$ is connected, then the fibers $p^{-1}\!\l(x\r)$ at each $x\in X$ are equinumerous.

```

_Proof_. Let $\l\{U_i\r\}$ be an evenly-covered open cover of $X$, so $p^{-1}\!\l(U_i\r)=\coprod_{j\in J}V_{ij}$ for disjoint open sets $V_{ij}\subseteq\widetilde{X}$ where each $\l.p\r|_{V_{ij}}:V_{ij}\to U_i$ is a homeomorphism. Fix $x_0\in X$, say $x_0\in U_0$, and consider the set $S\coloneqq\l\{x\in X\mid\l|p^{-1}\!\l(x\r)\r|=\l|p^{-1}\!\l(x_0\r)\r|\r\}$. We claim that $S$ is both open and closed, so $S=X$ and we are done.
* Take $x\in S$, say $x\in U_i$ for some $i\in I$. For all $x'\in U_i$, the set $p^{-1}\!\l(x'\r)\cap V_{ij}$ is a singleton for all $j\in J$, so $\l|p^{-1}\!\l(x'\r)\r|=\l|J\r|$. Thus $x'\in S$, so $U_i\subseteq S$.
* Take $x\in X\comp S$, so $\l|p^{-1}\!\l(x\r)\r|\neq\l|p^{-1}\!\l(x_0\r)\r|$ and hence $x\not\in U_0$. Thus $x\in U_i$ for some $i\neq0$, and for all $x'\in U_i$, the fiber $p^{-1}\!\l(x'\r)$ is not equinumerous with $p^{-1}\!\l(x_0\r)$. Thus $U_i\subseteq X\comp S$.<span style="float:right;">$\blacksquare$</span>
