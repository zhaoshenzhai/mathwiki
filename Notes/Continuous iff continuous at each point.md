---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 24/11/2022 14:01:58
Tags: #Type/Proposition #Later/Topology

Proved by: [[Compositions of images slash preimages]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,\mc{T}_X}$ and $\tpl{Y,\mc{T}_Y}$ be topological spaces. Then a function $f:X\to Y$ is continuous iff_
$$\begin{equation}
    \fa p\in X,\fa V\in\mc{U}_{f\l(p\r)},\ex U\in\mc{U}_p:\im_f\!\l(U\r)\subseteq V,
\end{equation}$$
_where_ $\mc{U}_{f\l(p\r)}$ _and_ $\mc{U}_p$ _are the set of all neighborhoods of $f\l(p\r)$ and $p$, respectively._

```

_Proof_.
* ($\Rightarrow$): Take $p\in X$ and any $V\in\mc{T}_Y$ containing $f\l(p\r)$. Then $\preim_f\l(V\r)$ is a neighborhood of $p$ with $\im_f\!\l(\preim_f\!\l(V\r)\r)\subseteq V$.

* ($\Leftarrow$): Let $V\in\mc{T}_Y$. Then, for any $p\in\preim_f\!\l(V\r)$, we see that $f\l(p\r)\in V$ and hence there exists a neighborhood $U_p$ of $p$ such that $\im_f\!\l(U_p\r)\subseteq V$. We claim that
$$\begin{equation}
    \preim_f\!\l(V\r)=\bigcup_{p\in X}U_p,
\end{equation}$$
so it is open. The forward direction follows immediately since $p\in U_p$. The backwards direction is also clear, for
$$\begin{equation}
    U_p\subseteq\preim_f\!\l(\im_f\!\l(U_p\r)\r)\subseteq\preim_f\!\l(V\r).\qedin
\end{equation}$$
