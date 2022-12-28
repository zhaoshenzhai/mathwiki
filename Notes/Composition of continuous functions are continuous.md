<div class="topSpace"></div>

Date Created: 25/11/2022 08:35:12
Tags: #Proposition #Analysis

Proved by: [[Image slash preimage of compositions]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,\mc{T}_X}$, $\tpl{Y,\mc{T}_Y}$, and $\tpl{Z,\mc{T}_Z}$ be topological spaces. If $f:X\to Y$ and $g:Y\to Z$ are continuous, then so is $g\circ f:X\to Z$. In particular, if $f$ is continuous at $p$ and $g$ is continuous at $f\l(p\r)$, then $g\circ f$ is continuous at $p$._

```

_Proof_. Take $W\in\mc{T}_Z$, so, since $g$ is continuous, we see that $\preim_g\l(W\r)\in\mc{T}_Y$. But $f$ is continuous, so
$$\begin{equation}
    \preim_{g\circ f}\l(W\r)=\preim_f\l(\preim_g\l(W\r)\r)\in\mc{T}_X.
\end{equation}$$
Suppose now that $f$ is continuous at $p$ and $g$ is continuous at $f\l(p\r)$, and take $W\in\mc{U}_{\l(g\circ f\r)\l(p\r)}$. Then, since $g$ is continuous, there exists $V\in\mc{U}_{f\l(p\r)}$ such that $\im_g\l(V\r)\subseteq W$. But $f$ is continuous, so there exists $U\in\mc{U}_p$ such that $\im_f\l(U\r)\subseteq V$. Observe then that
$$\begin{equation}
    \im_{g\circ f}\l(U\r)=\im_g\l(\im_f\l(U\r)\r)\subseteq\im_g\l(V\r)\subseteq W.\qedin
\end{equation}$$
