<div class="topSpace"></div>

Date Created: 24/11/2022 13:48:28
Tags: #Definition #Topics/Analysis

Types: _Not Applicable_
Examples: [[Continuous Function in a Metric Space]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Extreme Value Theorem]], [[Intermediate Value Theorem]], [[Inverse of continuous functions]], [[Composition of continuous functions are continuous]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Continuous iff continuous at each point]]

``` ad-Definition
title: Definition.

_Let $\tpl{X,\mc{T}_X}$ and $\tpl{Y,\mc{T}_Y}$ be topological spaces. A function $f:X\to Y$ is said to be **continuous w.r.t $\mc{T}_X$ and $\mc{T}_Y$** if preimages of open sets are open; that is, if_
$$\begin{equation}
    \fa V\in\mc{T}_Y:\preim_f\l(V\r)\in\mc{T}_X.
\end{equation}$$
_In particular, for all fixed $p\in X$, we say that $f$ is **continuous at $p$ w.r.t. $\mc{T}_X$ and $\mc{T}_Y$** if_
$$\begin{equation}
    \fa V\in\mc{U}_{f\l(p\r)},\ex U\in\mc{U}_p:\im_f\!\l(U\r)\subseteq V,
\end{equation}$$
_where_ $\mc{U}_{f\l(p\r)}$ _and_ $\mc{U}_p$ _are the set of all neighborhoods of $f\l(p\r)$ and $p$, respectively._

```
