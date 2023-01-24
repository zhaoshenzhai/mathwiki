---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 24/01/2023 12:06:15
Tags: #Proposition #Topics/Analysis

Proved by: [[Sequential characterization of closure (metric)]], [[Neighborhood characterization of cluster points (metric)]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,d}$ be a metric space. If $X$ is sequentially compact, then it is countably compact._

```

_Proof_. Let $\l\{U_i\r\}_{i=0}^\infty$ be a countable open cover of $X$ and suppose, for sake of contradiction, that for each $n\in\N$ there is some $p_n\in X$ such that
$$\begin{equation}
    p_n\not\in\bigcup_{i=0}^{n}U_i.
\end{equation}$$
Note that $\tpl{p_n}$ is a sequence in $X$, so, since $X$ is sequentially compact, it admits a subsequence converging to some $p\in X$. Then $p\in U_N$ for some $N\in\N$, and since $U_N$ is open, there exists some $\epsilon>0$ such that $B_\epsilon\!\l(p\r)\subseteq U_N$. Observe that $p$ is a cluster point of $\tpl{p_n}$, so $B_\epsilon\!\l(p\r)$, and hence $U_N$, contains infinitely-many points in $\im\tpl{p_n}$. However, by construction of $p_n$, we see that $p_n\not\in U_N$ once $n>N$, a contradiction.<span style="float:right;">$\blacksquare$</span>
