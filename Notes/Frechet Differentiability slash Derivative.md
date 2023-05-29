---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 30/12/2022 15:49:05
Tags: #Type/Definition #Topic/Analysis

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Differentiable implies existence of directional derivatives]], [[Differentiable implies represented by Jacobian]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Frechet derivative is unique]]

``` ad-Definition
title: Definition.

Let $\tpl{X,\|\slot\|_X}$ and $\tpl{Y,\|\slot\|_Y}$ be normed vector spaces and let $U\subseteq X$ be open. A function $f:U\to Y$ is **(Fréchet) differentiable at $p\in U$** if there exists a bounded linear map $T:X\to Y$ such that
$$\begin{equation}
    \lim\limits_{h\to0}\frac{\l\|f\l(p+h\r)-f\l(p\r)-Th\r\|_Y}{\|h\|_X}=0,
\end{equation}$$
in which case $Df\l(p\r)\coloneqq T$ is said to be the **(Fréchet) derivative of $f$ at $p$**.

```
