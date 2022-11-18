---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 19/10/2022 21:46:36
Tags: #Proposition #Later/Topology

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,\mc{T}}$ be a Hausdorff topological space. Then any sequence_ $\tpl{x_n}_{n\in\N}$ _in $X$ converges to at most one point._

```

_Proof_. Suppose that $\lim\limits_{n\to\infty}x_n=x$ for some $x\in X$. Then, for all other $y\in X$, let $U,V$ be disjoint neighborhoods of $x$ and $y$, respectively. Thus
$$\begin{equation}
    \fa^\infty n\in\N:x_n\in U,
\end{equation}$$
and hence, in particular, we have $\fa^\infty n\in\N:x_n\not\in V$. Thus $\tpl{x_n}$ cannot converge to $y$.<span style="float:right;">$\blacksquare$</span>
