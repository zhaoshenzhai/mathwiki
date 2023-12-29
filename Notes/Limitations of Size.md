---
mathLink: Metrizable $\Rightarrow$ Limitation of Size
---

<div class="topSpace"></div>

Date Created: 28/12/2023 16:17:40
Tags: #Type/Theorem #In_Progress

Proved by: [[Distance between subspaces#^closed-G-delta-open-F-sigma]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Limitation of Size).

Let $X$ be a topological space and fix an infinite cardinal $\kappa$. Then $1\Rightarrow2$ holds in general, and $2\Rightarrow3\Rightarrow4\Rightarrow1$ holds if $X$ is metrizable.
1. ($\kappa$-second-countable). The space $X$ admits a basis of cardinality $\leq\kappa$.
2. ($\kappa$-Lindelöf). Every open cover of $X$ admits a subcover of cardinality $\leq\kappa$.
4. ($\kappa$-chain-condition). Every family of pairwise disjoint non-empty open subsets of $X$ has cardinality $\leq\kappa$.
3. ($\kappa$-separable). The space $X$ admits a dense subset of cardinality $\leq\kappa$.

```

<b>Remark.</b> In particular, with $\kappa\coloneqq\aleph_0$, a metrizable space $X$ is separable iff it is second-countable, which occurs iff it is Lindelöf.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof $(1\Rightarrow2)$.</i> Fix a basis $\mc{B}$ for $\tau$ with $\l|\mc{B}\r|\leq\kappa$ and let $\mc{U}$ be an open cover of $X$. Consider the subcollection $\mc{B}'$ of $\mc{B}$ consisting of all $B\in\mc{B}$ such that $B\subseteq U$ for some $U\in\mc{U}$. For each $B\in\mc{B}$, let $U_B\in\mc{U}$ contain $B$, and we claim that $\mc{U}'\coloneqq\l\{U_B\in\mc{B}\st B\in\mc{B}'\r\}$ is the desired subcover. Indeed, that $\l|\mc{U}'\r|\leq\kappa$ is clear. For any $x\in X$, there is some $U\in\mc{U}$ and $B\in\mc{B}$ such that $x\in B\subseteq U$. Then $B\in\mc{B}'$ and $U_B\in\mc{U}'$, so $x\in B\subseteq U_B$ as desired.<span style="float:right;">$\blacksquare$</span>

---


<i>Proof $(2\Rightarrow3)$.</i> We claim that every discrete subspace $A\subseteq X$ has cardinality $\leq\kappa$, for then if $\mc{U}$ is a family of pairwise disjoint non-empty open subsets of $X$, picking $x_U\in U$ for each $U\in\mc{U}$ arbitrarily gives us a discrete set $\l\{x_U\st U\in\mc{U}\r\}$, so $\l|\mc{U}\r|\leq\kappa$.
* First, assume $A$ is closed. In this case, pick neighborhoods $U_x\ni x$ for each $x\in X$ with $\l\{x\r\}=U_x\cap A$ and consider the open cover $\mc{U}\coloneqq\l\{U_x\st x\in A\r\}\cup\l\{X\comp A\r\}$ of $X$.
