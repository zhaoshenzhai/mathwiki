<div class="topSpace"></div>

Date Created: 07/05/2022 20:28:12
Tags: #Theorem #Topics/Linear_Algebra

Proved by: [[Subspaces of finite-dim. vector spaces have complements]], [[Restriction on complement of kernel is injective]], [[Linearly isomorphic iff dimensions coincide (finite-dim.)]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Dimension Theorem).

_Let $V$ and $W$ be vector spaces over some field $K$ and consider a linear map $T:V\to W$. If $V$ is finite-dimensional, then_
$$\begin{equation}
    \dim V=\dim\ker T+\dim\im T.
\end{equation}$$
_In other words, we have $\dim V=\nullity T+\rank T$._

```

_Proof_. Write $V=\ker T+V'$ for some $V'\subseteq V$. Note that the restriction $\l.T\r|_{V'}:V'\to\im T$ is an isomorphism, so $\dim V'=\dim\im T$. But $\dim V'=\dim V-\dim\ker T$, so the result follows.<span style="float:right;">$\blacksquare$</span>
