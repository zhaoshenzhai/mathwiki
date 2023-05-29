---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 28/12/2022 20:34:50
Tags: #Type/Proposition #Topic/Analysis

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{X,d}$ be a metric space. If $\tpl{X,d}$ is compact, then it is bounded.

```

<i>Proof.</i> Fix any $p\in X$ and observe that $X=\bigcup_{n\in\N}B\l(p,n\r)$. Since $X$ is compact, there exists a subcollection $B\l(p,n_1\r),\dots,B\l(p,n_k\r)$ such that
$$\begin{equation}
    X=\bigcup_{i=1}^kB\l(p,n_i\r)\subseteq B\l(p,m\r)
\end{equation}$$
where $m\coloneqq\max\l\{n_1,\dots,n_k\r\}$. Then, for any $x,y\in X$, we see that
$$\begin{equation}
    d\l(x,y\r)\leq d\l(x,p\r)+d\l(y,p\r)<m+m=2m.\qedin
\end{equation}$$
