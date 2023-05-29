---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 24/01/2023 11:48:43
Tags: #Type/Proposition #Topic/Analysis

Proved by: [[Neighborhood characterization of cluster points (metric)]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $\tpl{X,d}$ be a metric space. If $X$ is sequentially compact, then it is bounded.

```

_Proof_. Suppose not, so for any $p\in X$ and any $n\in\N^+$, there exists some $p_n\in X$ such that $d\l(p,p_n\r)\geq n$. We shall show that the sequence $\tpl{p_n}_{n=1}^\infty$ does not have a cluster point in $X$. For sake of contradiction, suppose that $q\in X$ is a cluster point of $\tpl{p_n}$. Letting $\epsilon\coloneqq d\l(p,q\r)$, we see that the ball $B\l(q,\epsilon\r)$ contains infinitely-many points in $\im\tpl{p_n}$. But for any such point $r\in B\l(q,\epsilon\r)$, we have that
$$\begin{equation}
    d\l(p,r\r)\leq d\l(p,q\r)+d\l(q,r\r)\leq\epsilon+\epsilon=2\epsilon,
\end{equation}$$
so the ball $B\l(p,2\epsilon\r)$ contains infinitely-many points in $\im\tpl{p_n}$. But this cannot happen since $d\l(p,p_n\r)\geq n>2\epsilon$ for all eventually $n\in\N$.<span style="float:right;">$\blacksquare$</span>
