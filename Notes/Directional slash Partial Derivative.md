---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 30/12/2022 17:15:17
Tags: #Type/Definition #Topic/Analysis #Courses/MATH358

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[Differentiable implies existence of directional derivatives]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Fix $m,n\in\N^+$, let $U\subseteq\R^n$ be open, and fix $\v{u}\in\R^n\comp\l\{\v{0}\r\}$. For a function $f:U\to\R^m$ and $\v{a}\in\R^n$, the **directional derivative of $f$ at $\v{a}$ w.r.t. $\v{u}$** is the limit_
$$\begin{equation}
    D_\v{u}f\l(\v{a}\r)\coloneqq\lim\limits_{t\to0}\frac{f\l(\v{a}+t\v{u}\r)-f\l(\v{a}\r)}{t},
\end{equation}$$
_provided that the limit exists. For each $1\leq i\leq n$, the **$i^\textrm{th}$-partial derivative of $f$ at $\v{a}$** is the directional derivative_ $D_if\l(\v{a}\r)\coloneqq D_{\v{e}_i}f\l(\v{a}\r)$_._

```
