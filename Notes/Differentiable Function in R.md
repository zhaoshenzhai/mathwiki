---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 30/11/2022 23:11:36
Tags: #Definition #Topics/Analysis

Types: _Not Applicable_
Examples: [[Power Rule]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Differentiable implies continuous]], [[Differentiation Theorems in R]]
Sufficiencies: _Not Applicable_
Equivalences: [[Fundamental Increment Lemma]], [[Caratheodory's Differentation Criterion]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Fix some $\Omega\subseteq\R$ and a cluster point $c\in\Omega$. A function $f:\Omega\to\R$ is said to be **differentiable at $c$** if the limit_
$$\begin{equation}
    f'\l(c\r)\coloneqq\lim\limits_{x\to c}\frac{f\l(x\r)-f\l(c\r)}{x-c}=\lim\limits_{h\to0}\frac{f\l(c+h\r)-f\l(c\r)}{h}
\end{equation}$$
_exists, in which case $f'\l(c\r)$ is said to be the **derivative of $f$ at $c$**._

```

**Remark.** If $f$ is differentiable at $c\in\R$, the line $l:\R\to\R:x\mapsto f'\l(c\r)\l(x-c\r)+f\l(c\r)$ is said to be **tangent to $f$ at $c$**. Indeed, one may reformulate differentiability at $c$ as the existence of a linear function whose error $f\l(x\r)-l\l(x\r)$ convergences to $0$ superlinearly.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** If $\Omega$ has no isolated points (most commonly an interval, or $\R$ itself) and $f$ is differentiable at all $c\in\Omega$, then we may define the **derivative of $f$** as the function
$$\begin{equation}
    f':\Omega\to\R\ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ c\mapsto f'\l(c\r).\exqedin
\end{equation}$$
