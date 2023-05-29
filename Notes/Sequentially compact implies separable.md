---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 26/01/2023 10:20:09
Tags: #Type/Proposition #Topic/Analysis

Proved by: [[Sequentially compact implies bounded]], [[Convergent implies Cauchy]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $\tpl{X,d}$ be a metric space. If $X$ is sequentially compact, then it is separable.

```

_Proof_. We shall construct a countably dense subset of $X$ by induction. Let $p_0\in X$ be arbitrary and suppose, for some $n\in\N$, that $p_0,\dots,p_n\in X$ have been chosen. Since $X$ is bounded, set
$$\begin{equation}
    \delta_{n+1}\coloneqq\sup_{p\in X}\min_\limits{0\leq i\leq n}\l\{d\l(p,p_i\r)\r\}>0
\end{equation}$$
and choose $p_{n+1}\in X$ such that $d\l(p_i,p_{n+1}\r)\geq\delta_{n+1}/2$ for all $0\leq i\leq n$. The key idea of this construction is that for every $p\in X$ and $n\in\N$, there exists $0\leq i\leq n$ such that $d\l(p,p_i\r)\leq\delta_{n+1}$; indeed, take $0\leq i\leq n$ that achieves the minimum. This shows that $\im\tpl{p_n}$ is $\delta_n$-dense in $X$ for every $n\in\N$, but in fact it is dense in $X$; that is, for every $p\in X$ and any $\epsilon>0$, there exists some $p_i$ such that $d\l(p,p_i\r)<\epsilon$.

Take $p\in X$ and any $\epsilon>0$. By sequential compactness of $X$, the sequence $\tpl{p_n}$ has a subsequence converging to a point in $X$. Then the subsequence is Cauchy, so there exist $k,l\in\N$ with $k<l$ such that $d\l(p_k,p_l\r)<\epsilon/2$. But $d\l(p_i,p_l\r)\geq\delta_l/2$ for all $0\leq i<l$, so in particular we have
$$\begin{equation}
    \delta_l\leq2d\l(p_k,p_l\r)<\epsilon.
\end{equation}$$
By construction, there exists some $0\leq i<l$ such that $d\l(p,p_i\r)\leq\delta_l<\epsilon$, so we are done.<span style="float:right;">$\blacksquare$</span>
