---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 28/12/2022 20:34:50
Tags: #Proposition #Topics/Analysis

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,d}$ be a metric space. If $\tpl{X,d}$ is compact, then it is bounded._

```

_Proof_. Fix any $p\in X$, and, for each $n\in\N$, consider the ball $B_n\l(p\r)$. Then $X=\bigcup_{n\in\N}B_n\l(p\r)$, so since $X$ is compact, there exists a subcollection $B_{n_1}\!\l(p\r),\dots,B_{n_k}\!\l(p\r)$ such that
$$\begin{equation}
    X=\bigcup_{i=1}^kB_{n_i}\!\l(p\r)\subseteq B_{m}\l(p\r)
\end{equation}$$
where $m\coloneqq\max\l\{n_1,\dots,n_k\r\}$. Then, for any $x,y\in X$, we see that
$$\begin{equation}
    d\l(x,y\r)\leq d\l(x,p\r)+d\l(y,p\r)<m+m=2m.\qedin
\end{equation}$$
