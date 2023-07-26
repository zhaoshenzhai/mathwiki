---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 30/12/2022 17:15:17
Tags: #Type/Definition #Topic/Real_Analysis #Courses/MATH358

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

Fix $m,n\in\N^+$, let $U\subseteq\R^n$ be open, and fix $\vec{u}\in\R^n\comp\l\{\vec{0}\r\}$. For a function $f:U\to\R^m$ and $\vec{a}\in\R^n$, the <b>directional derivative of $f$ at $\vec{a}$ w.r.t. $\vec{u}$</b> is the limit
$$\begin{equation}
    D_\vec{u}f\l(\vec{a}\r)\coloneqq\lim\limits_{t\to0}\frac{f\l(\vec{a}+t\vec{u}\r)-f\l(\vec{a}\r)}{t},
\end{equation}$$
provided that the limit exists. For each $1\leq i\leq n$, the <b>$i^\textrm{th}$-partial derivative of $f$ at $\vec{a}$</b> is the directional derivative $D_if\l(\vec{a}\r)\coloneqq D_{\vec{e}_i}f\l(\vec{a}\r)$.

```
