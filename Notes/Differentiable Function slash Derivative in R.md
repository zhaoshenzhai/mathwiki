---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 30/11/2022 23:11:36
Tags: #Type/Definition #Topic/Analysis

Types: <i>Not Applicable</i>
Examples: [[Power Rule]]
Constructions: <i>Not Applicable</i>
Generalizations: [[Frechet Differentiability slash Derivative]]

Properties: [[Differentiation Theorems in R]], [[Mean Value Theorems]], [[First Derivative Test]], [[Differentiable implies continuous]]
Sufficiencies: [[Fermat's Theorem on Stationary Points]], [[Derivatives and monotonicity]]
Equivalences: [[Fundamental Increment Lemma]], [[Caratheodory's Differentation Criterion]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Fix some $\Omega\subseteq\R$ and a cluster point $c\in\Omega$. A function $f:\Omega\to\R$ is said to be <b>differentiable at $c$</b> if the limit
$$\begin{equation}
    f'\l(c\r)\coloneqq\lim\limits_{x\to c}\frac{f\l(x\r)-f\l(c\r)}{x-c}=\lim\limits_{h\to0}\frac{f\l(c+h\r)-f\l(c\r)}{h}
\end{equation}$$
exists, in which case $f'\l(c\r)$ is said to be the <b>derivative of $f$ at $c$</b>.

```

<b>Remark.</b> If $\Omega$ has no isolated points and $f$ is differentiable at all $c\in\Omega$, then we may define the <b>derivative of $f$</b> as the function
$$\begin{equation}
    f':\Omega\to\R\ \ \ \ \ \ \ \ \textrm{mapping}\ \ \ \ \ \ \ \ c\mapsto f'\l(c\r).\exqedin
\end{equation}$$

---

<b>Remark.</b> If $f$ is differentiable at $c\in\R$, the line $l:\R\to\R:x\mapsto f'\l(c\r)\l(x-c\r)+f\l(c\r)$ is said to be <b>tangent to $f$ at $c$</b>. Indeed, one may reformulate differentiability at $c$ as the existence of a linear function whose error $f\l(x\r)-l\l(x\r)$ convergences to $0$ superlinearly.<span style="float:right;">$\blacklozenge$</span>
