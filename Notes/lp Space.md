---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 12/01/2023 11:58:17
Tags: #Type/Definition #Later/Analysis

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Holder's Inequality]], [[Minkowski's Inequality]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[lp norm is a norm]]

``` ad-Definition
title: Definition.

Fix $p\in\l[1,\infty\r]$ and let $\ell^p\subseteq\R^\N$ be the space of sequences for which $\sum_{n=1}^{\infty}\l|x_n\r|^p<\infty$ if $p<\infty$, and $\sup_n\l|x_n\r|<\infty$ if $p=\infty$. The <b>$\ell^p$ norm</b> is the norm $\|\slot\|_p:\ell^p\to\R$ defined by
$$\begin{equation}
    \|\!\tpl{x_n}\|_p\coloneqq\l(\sum_{n=1}^{\infty}\l|x_n\r|^p\r)^{1/p}\ \ \ \ \mathit{if}\ \ \ \ p<\infty\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \mathit{and}\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \|\!\tpl{x_n}\|_p\coloneqq\sup_{n=1}^\infty\l|x_n\r|\ \ \ \ \mathit{else}
\end{equation}$$
for all $\tpl{x_n}\in\ell^p$.

```
