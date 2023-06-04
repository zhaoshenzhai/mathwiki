---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 30/12/2022 17:15:17
Tags: #Type/Definition #Topic/Analysis #Courses/MATH358

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Differentiable implies existence of directional derivatives]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Fix $m,n\in\N^+$, let $U\subseteq\R^n$ be open, and fix $\v{u}\in\R^n\comp\l\{\v{0}\r\}$. For a function $f:U\to\R^m$ and $\v{a}\in\R^n$, the <b>directional derivative of $f$ at $\v{a}$ w.r.t. $\v{u}$</b> is the limit
$$\begin{equation}
    D_\v{u}f\l(\v{a}\r)\coloneqq\lim\limits_{t\to0}\frac{f\l(\v{a}+t\v{u}\r)-f\l(\v{a}\r)}{t},
\end{equation}$$
provided that the limit exists. For each $1\leq i\leq n$, the <b>$i^\textrm{th}$-partial derivative of $f$ at $\v{a}$</b> is the directional derivative $D_if\l(\v{a}\r)\coloneqq D_{\v{e}_i}f\l(\v{a}\r)$.

```
