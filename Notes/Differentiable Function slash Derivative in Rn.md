---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 30/12/2022 15:49:05
Tags: #Definition #Topics/Analysis #Courses/MATH358

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Differentiable implies existence of directional derivatives]], [[Differentiable implies represented by Jacobian]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Derivative in Rn is unique]]

``` ad-Definition
title: Definition.

_Fix $m,n\in\N^+$ and let $U\subseteq\R^n$ be open. A function $f:U\to\R^m$ is **differentiable at $\v{a}\in U$** if there exists a linear map $L:\R^n\to\R^m$ such that_
$$\begin{equation}
    \lim\limits_{\v{h}\to\v{0}}\frac{\l\|f\l(\v{a}+\v{h}\r)-f\l(\v{a}\r)-L\l(\v{h}\r)\r\|_m}{\l\|\v{h}\r\|_n}=0,
\end{equation}$$
_in which case $Df\l(\v{a}\r)\coloneqq L$ is said to be the **derivative of $f$ at $\v{a}$**._

```

**Remark.** If $f$ is differentiable for all $\v{a}\in U$, then we may define the **derivative of $f$** as the function
$$\begin{equation}
    Df:U\to\R^m\ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ \v{a}\to Df\l(\v{a}\r).\exqedin
\end{equation}$$
