---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 01/12/2022 13:10:10
Tags: #Proposition #Analysis

Proved by: [[Sequential slash functional limit characterizations of continuity]], [[Functional Limit Theorems in R]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Fix $\Omega\subseteq\R$ and a cluster point $c\in\Omega\subseteq\R$. If a function $f:\Omega\to\R$ is differentiable at $c$, then it is continuous at $c$._

```

_Proof_. Simply observe that
$$\begin{equation}
    \lim\limits_{x\to c}\l[f\l(x\r)-f\l(c\r)\r]=\lim\limits_{x\to c}\l[\frac{f\l(x\r)-f\l(c\r)}{x-c}\cdot\l(x-c\r)\r]=\l(\lim\limits_{x\to c}\frac{f\l(x\r)-f\l(c\r)}{x-c}\r)\cdot\l(\lim\limits_{x\to c}x-c\r)=f'\l(c\r)\cdot0=0.\qedin
\end{equation}$$
