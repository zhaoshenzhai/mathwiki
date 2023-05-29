<div class="topSpace"></div>

Date Created: 14/02/2023 10:40:35
Tags: #Type/Proposition #Topic/Analysis

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $K$ denote either $\R$ or $\C$ and let $V$ be a normed vector space over $K$. Then the function
$$\begin{equation}
    d:V\times V\to\R\ \ \ \ \ \ \ \ \textrm{\it{mapping}}\ \ \ \ \ \ \ \ \tpl{x,y}\mapsto\|x-y\|
\end{equation}$$
is a metric on $V$.

```

_Proof_. We verify the axioms for a metric on $V$. Indeed, they translate directly from the corresponding axioms for $\|\slot\|$.
* (Positive-definiteness): Take $v,w\in V$. Obviously $d\l(v,w\r)=\|v-w\|\geq0$, and $d\l(v,w\r)=0$ iff $\|v-w\|=0$ iff $v-w=0$ iff $v=w$.
* (Symmetry): Take $v,w\in V$ and observe that $d\l(v,w\r)=\|v-w\|=\l|-1\r|\|v-w\|=\|\l(-1\r)\l(v-w\r)\|=\|w-v\|=d\l(w,v\r)$.
* (Triangle-inequality): Take $u,v,w\in V$ and observe that
$$\begin{equation}
    d\l(u,w\r)=\|u-w\|=\|\l(u-v\r)+\l(v-w\r)\|\leq\|u-v\|+\|v-w\|=d\l(u,v\r)+d\l(v,w\r).\qedin
\end{equation}$$
