<div class="topSpace"></div>

Date Created: 07/05/2022 20:28:12
Tags: #Type/Theorem #Later/Module_Theory

Proved by: [[Subspaces of finite-dim. vector spaces have complements]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Dimension Theorem).

Let $V$ and $W$ be $K$-vector spaces and consider a linear map $T:V\to W$. If $V$ is finite-dimensional, then
$$\begin{equation}
    \dim V=\dim\ker T+\dim\im T.
\end{equation}$$
In other words, we have $\dim V=\nullity T+\rank T$.

```

<i>Proof.</i> Write $V=\ker T\oplus V'$ for some $V'\subseteq V$. Note that the restriction $\l.T\r|_{V'}:V'\to\im T$ is an isomorphism, so $\dim V'=\dim\im T$. But $\dim V'=\dim V-\dim\ker T$, so the result follows.<span style="float:right;">$\blacksquare$</span>
