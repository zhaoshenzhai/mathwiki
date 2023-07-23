---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 19/10/2022 21:46:36
Tags: #Type/Proposition #Topic/Topology/Later

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{X,\mc{T}}$ be a Hausdorff topological space. Then any sequence $\tpl{x_n}_{n\in\N}$ in $X$ converges to at most one point.

```

<i>Proof.</i> Suppose that $\lim\limits_{n\to\infty}x_n=x$ for some $x\in X$. Then, for all other $y\in X$, let $U,V$ be disjoint neighborhoods of $x$ and $y$, respectively. Thus
$$\begin{equation}
    \fa^\infty n\in\N:x_n\in U,
\end{equation}$$
and hence, in particular, we have $\fa^\infty n\in\N:x_n\not\in V$. Thus $\tpl{x_n}$ cannot converge to $y$.<span style="float:right;">$\blacksquare$</span>
