---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 29/08/2022 16:59:28
Tags: #Type/Definition #Topic/Topology

Types: <i>Not Applicable</i>
Examples: [[Geometric Sequence]], [[Ratio Test (Sequence)]], [[Euler's Number]]
Constructions: [[Compact Space#^sequential-compactness]], [[Infinite Series]]
Generalizations: <i>Not Applicable</i>

Properties: [[Subsequential limits are closed]]
Sufficiencies: [[Real Numbers#^bolzano-weierstrass]]
Equivalences: [[Convergence Criteria in R]]
Justifications: [[Hausdorff Space#^hausdorff-implies-unique-limit]]

``` ad-Definition
title: Definition.

Let $X$ be a topological space and fix $x\in X$. A sequence $\tpl{x_n}_{n\in\N}$ in $X$ is said to <b>converge to $x$</b>, and $x$ is said to be a <b>limit of $\tpl{x_n}$</b>, if for every neighborhood $U\ni x$, we have $x_n\in U$ for all eventually $n\in\N$.
* If $X$ is Hausdorff, then $x$ is unique and we write $\lim\limits_{n\to\infty}x_n\coloneqq x$ or $x_n\to x$ as $n\to\infty$.

```

<b>Remark.</b> If $X$ is a metric space, then many topological notions can be characterized in terms of convergence of sequences. For instance, for any subset $A\subseteq X$, we have $x\in\bar{A}$ iff there is a sequence $\tpl{x_n}$ in $A$ that converges to $x$.
*  Indeed, for all $n\in\N^+$, we have $B\l(x,1/n\r)\cap A\neq\em$ and hence for all $n\in\N^+$ there exist $x_n\in A$ such that $d\l(x_n,x\r)<1/n$; then $x_n\to x$, as desired. Conversely, if $\tpl{x_n}$ is a sequence in $A$ such that $x_n\to x$, then for all $\epsilon>0$ we have $d\l(x_n,x\r)<\epsilon$ eventually. In particular we have $B\l(x,\epsilon\r)\cap A\neq0$, so $x\in\bar{A}$.

In the same vein, a subset $A\subseteq X$ is closed iff it contains the limit of all convergent sequences $\tpl{x_n}$ in $S$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A <i>subsequence</i> of $\tpl{x_n}$ is any sequence of the form $\tpl{x_n}\circ\sigma$ where $\sigma:\N\to\N$ is an increasing sequence. A limit of a subsequence is called a <i>subsequential limit</i>, and if all subsequential limits of $\tpl{x_n}$ coincide, say to $x\in X$, then $x_n\to x$. The supremum of all subsequential limits of $\tpl{x_n}$ is the <i>limit superior</i> of $x_n$, and similarly for its <i>limit inferior</i>. Equivalently, note that
$$\begin{equation}
    \limsup\limits_{n\to\infty}x_n=\lim\limits_{n\to\infty}\sup\limits_{m\geq n}x_m\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \liminf\limits_{n\to\infty}x_n=\lim\limits_{n\to\infty}\inf\limits_{m\geq n}x_m.\exqedin
\end{equation}$$
