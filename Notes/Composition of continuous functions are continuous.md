<div class="topSpace"></div>

Date Created: 25/11/2022 08:35:12
Tags: #Type/Proposition #Topic/Topology

Proved by: [[Image slash preimage of compositions]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $X$, $Y$, and $Z$ be topological spaces. If $f:X\to Y$ and $g:Y\to Z$ are continuous, then so is $g\circ f:X\to Z$. In particular, if $f$ is continuous at $p$ and $g$ is continuous at $f\l(p\r)$, then $g\circ f$ is continuous at $p$.

```

<i>Proof.</i> Take an open set $W\subseteq Z$, so, since $g$ is continuous, we see that $\preim_g\l(W\r)$ is open in $Y$. But $f$ is continuous, so
$$\begin{equation}
    \preim_{g\circ f}\l(W\r)=\preim_f\l(\preim_g\l(W\r)\r)
\end{equation}$$
is open in $X$. Suppose now that $f$ is continuous at $p$ and $g$ is continuous at $f\l(p\r)$, and let $W\subseteq Z$ be a neighborhood of $\l(g\circ f\r)\l(p\r)$. Then, since $g$ is continuous, there exists a neighborhood $V$ of $f\l(p\r)$ such that $\im_g\l(V\r)\subseteq W$. But $f$ is continuous, so there exists a neighborhood $U$ of $p $such that $\im_f\l(U\r)\subseteq V$. Observe then that
$$\begin{equation}
    \im_{g\circ f}\l(U\r)=\im_g\l(\im_f\l(U\r)\r)\subseteq\im_g\l(V\r)\subseteq W.\qedin
\end{equation}$$
