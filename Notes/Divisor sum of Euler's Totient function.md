---
mathLink: Divisor sum of $\phi\l(n\r)$
---

<div class="topSpace"></div>

Date Created: 06/05/2023 02:13:30
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: [[Basic properties of cyclic groups]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

For all $n\in\N^+$, we have $n=\sum_{m\divides n}\phi\l(m\r)$.

```

<i>Proof.</i> Let $G$ be a cyclic group of order $n$ and observe, by Lagrange$\textrm{'}$s Theorem, that
$$\begin{equation}
    n=\l|G\r|=\sum_{1\leq m\leq n}\#\l\{g\in G\mid\ord{g}=m\r\}=\sum_{m\divides n}\#\l\{g\in G\mid\ord{g}=m\r\}.
\end{equation}$$
Now, since $G$ is cyclic, there exist a unique cyclic subgroup $\gen{g_0}$ of order $m$. This shows that every element $g\in G$ of order $m$ generates the same subgroup $\gen{g_0}$, so they are of the form $g=g_0^k$ for some $k\in\Z$. But this occurs iff $k\perp m$, so there are exactly $\phi\l(m\r)$-many elements in $G$ of order $m$.<span style="float:right;">$\blacksquare$</span>
