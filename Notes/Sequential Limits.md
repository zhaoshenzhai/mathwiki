---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 29/08/2022 16:59:28
Tags: #Type/Definition #Topic/Topology

Types: <i>Not Applicable</i>
Examples: [[Limit of geometric sequence]], [[Ratio Test (Sequence)]]
Constructions: [[Sequentially Compact Space]], [[Characterizations of continuity (metric)]], [[Euler's Number]], [[Infinite Series]]
Generalizations: <i>Not Applicable</i>

Properties: [[Subsequential limits are closed]]
Sufficiencies: [[Real Numbers#^bolzano-weierstrass]]
Equivalences: [[Convergence Criteria in R]]
Justifications: [[Hausdorff implies limits are unique]]

``` ad-Definition
title: Definition.

Let $X$ be a topological space and fix $x\in X$. A sequence $\tpl{x_n}_{n\in\N}$ in $X$ is said to <b>converge to $x$</b>, and $x$ is said to be a <b>limit of $\tpl{x_n}$</b>, if for every neighborhood $U\ni x$, we have $x_n\in U$ for all eventually $n\in\N$.
* If $X$ is Hausdorff, then $x$ is unique and we write $\lim\limits_{n\to\infty}x_n\coloneqq x$ or $x_n\to x$ as $n\to\infty$.

```

<b>Remark.</b> Since convergence is a ‘tail property’ of the sequence, the sequence $\tpl{x_n}_{n\in\N}$ converges iff $\tpl{x_n}_{n\geq n_0}$ converges for any $n_0\in\N$. Similarly, if $\tpl{x_n'}_{n\in\N}$ is a sequence such that $\fa^\infty n\in\N:x_n'=x_n$, then $\tpl{x_n}_{n\in\N}$ converges iff $\tpl{x'_n}_{n\in\N}$ converges.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A <i>subsequence</i> of $\tpl{x_n}$ is any sequence of the form $\tpl{x_n}\circ\sigma$ where $\sigma:\N\to\N$ is an increasing sequence. A limit of a subsequence is called a <i>subsequential limit</i>, and if all subsequential limits of $\tpl{x_n}$ coincide, say to $x\in X$, then $x_n\to x$. The supremum of all subsequential limits of $\tpl{x_n}$ is the <i>limit superior</i> of $x_n$, and similarly for its <i>limit inferior</i>. Equivalently, note that
$$\begin{equation}
    \limsup\limits_{n\to\infty}x_n=\lim\limits_{n\to\infty}\sup\limits_{m\geq n}x_m\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \liminf\limits_{n\to\infty}x_n=\lim\limits_{n\to\infty}\inf\limits_{m\geq n}x_m.\exqedin
\end{equation}$$
