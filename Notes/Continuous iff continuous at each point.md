---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 24/11/2022 14:01:58
Tags: #Proposition #Later/Topology

Proved by: _Not Applicable_
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
* ($\Rightarrow$): Take $p\in X$ and any $V\in\mc{T}_Y$ containing $f\l(p\r)$. Then $p\in\preim_f\l(V\r)$ is open
