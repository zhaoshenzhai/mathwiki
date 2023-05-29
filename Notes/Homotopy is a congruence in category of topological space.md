---
mathLink: auto
---


<div class="topSpace"></div>

Date Created: 19/05/2023 13:49:20
Tags: #Type/Proposition #Topic/Topology

Proved by: [[Continuous functions is a sheaf]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $X$ and $Y$ be topological spaces and fix $S\subseteq X$. The $\textrm{`}$is homotopic to rel $S$$\textrm{'}$ relation is an equivalence relation.
* Furthermore, let $T\subseteq Z$ be a subset of a topological space $Z$. Suppose that $f_0,f_1:X\to Y$ agree on $S$, $g_0,g_1:Y\to Z$ agree on $T$, and $f_i\l(S\r)\subseteq T$. If $f_0\htopeq f_1\rel S$ and $g_0\htopeq g_1\rel T$, then $g_0\circ f_0\htopeq g_1\circ f_1\rel S$.

```

**Remark.** Taking $S=\em$ shows that being freely homotopic is also a congruence relation.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Let $f_0,f_1,f_2:X\to Y$ be continuous functions agreeing on $S$. We first verify that $\htopeq$ is an equivalence relation.
* (Reflexive): Let $F\l(x,t\r)\coloneqq f_0\l(x\r)$ for all $x\in X$ and $t\in I$, which defines a homotopy from $f_0$ to itself rel $S$.
* (Symmetry): If $F:f_0\htopeq f_1\rel S$, then $F'\!\l(x,t\r)\coloneqq F\l(x,1-t\r)$ defines a homotopy from $f_1$ to $f_0$ rel $S$.
* (Transitive): Let $F:f_0\htopeq f_1\rel S$ and $G:f_1\htopeq f_2\rel S$ be homotopies. Then the function $H:X\times I\to Y$ defined by $H\l(x,t\r)\coloneqq F\l(x,2t\r)$ for $0\leq t\leq1/2$ and $H\l(x,t\r)\coloneqq G\l(x,2t-1\r)$ for $1/2\leq t\leq 1$ glues to a continuous function and is a homotopy from $f_0$ to $f_2$ rel $S$.

Let $F:f_0\htopeq f_1\rel S$ and $G:g_0\htopeq g_1\rel T$ be homotopies. We claim that $H:X\times I\to Z$ defined by $H\l(x,t\r)\coloneqq G\l(F\l(x,t\r),t\r)$ is a homotopy from $g_0\circ f_0$ to $g-1\circ f_1$ rel $S$.
* First, observe that $H\l(x,0\r)=G\l(F\l(x,0\r),0\r)=G\l(f_0\l(x\r),0\r)=\l(g_0\circ f_0\r)\l(x\r)$ for all $x\in X$, and similarly $H\l(x,1\r)=\l(g_1\circ f_1\r)\l(x\r)$ for all $x\in X$.
* Take $x\in S$ and $t\in I$. Since $F\l(x,t\r)=f_0\l(x\r)\in T$, we see that $H\l(x,t\r)=G\l(F\l(x,t\r),t\r)=G\l(f_0\l(x\r),t\r)=\l(g_0\circ f_0\r)\l(x\r)$. Similarly, $H\l(x,t\r)=\l(g_1\circ f_1\r)\l(x\r)$, as desired.<span style="float:right;">$\blacksquare$</span>
