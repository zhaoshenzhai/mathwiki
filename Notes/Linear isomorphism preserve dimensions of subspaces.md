<div class="topSpace"></div>

Date Created: 05/06/2022 19:01:53
Tags: #Proposition

Proved by: [[Image of linear map is a subspace of its codomain]], [[Linearly isomorphic iff dimensions coincide (finite-dim.)]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be finite-dimensional vector spaces over some field $K$, say with $n\coloneqq\dim V$ and $m\coloneqq\dim W$, and let $T:V\to W$ be a linear isomorphism. Then, for every linear subspace $V_0\subseteq V$, we have_
$$\begin{equation}
    \dim V_0=\dim\im_T\l(V_0\r).
\end{equation}$$

```

_Proof_. Observe that $\im_T\l(V_0\r)$ is a linear subspace of $W$, so we may talk about its dimension in the first place. Consider the linear map
$$\begin{equation}
    \begin{aligned}
        \widehat{T}:V_0&\to\im_T\l(V_0\r) \\
        v&\mapsto T\l(v\r);
    \end{aligned}
\end{equation}$$
we claim that $\widehat{T}$ is linear linear isomorphism, for then $V_0\iso\im_T\l(V_0\r)$ and thus the result follows. Take $w\in\im_T\l(V_0\r)$. Indeed, since $\im_T\l(V_0\r)\subseteq W$ and $T$ is a linear isomorphism, there exists a unique $v\in V$ such that $T\l(v\r)=w$. But $w\in\im_T\l(V_0\r)$ implies that such a $v$ is in $V_0$, so $w=T\l(v\r)=\widehat{T}\l(v\r)$ for some unique $v\in V_0$.<span style="float:right;">$\blacksquare$</span>
