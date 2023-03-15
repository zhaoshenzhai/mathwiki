---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 30/12/2022 15:49:05
Tags: #Definition #Topics/Analysis

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Differentiable implies existence of directional derivatives]], [[Differentiable implies represented by Jacobian]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Frechet derivative is unique]]

``` ad-Definition
title: Definition.

_Let $\tpl{X,\|\slot\|_X}$ and $\tpl{Y,\|\slot\|_Y}$ be normed vector spaces and let $U\subseteq X$ be open. A function $f:U\to Y$ is **(Fréchet) differentiable at $p\in U$** if there exists a bounded linear map $T:X\to Y$ such that_
$$\begin{equation}
    \lim\limits_{h\to0}\frac{\l\|f\l(p+h\r)-f\l(p\r)-Th\r\|_Y}{\|h\|_X}=0,
\end{equation}$$
_in which case $Df\l(p\r)\coloneqq T$ is said to be the **(Fréchet) derivative of $f$ at $p$**._

```

**Remark.** If $f$ is differentiable at all $p\in U$, then we may define the **(Fréchet) derivative of $f$** as the function
$$\begin{equation}
    Df:U\to Y\ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ p\to Df\l(p\r).\exqedin
\end{equation}$$
