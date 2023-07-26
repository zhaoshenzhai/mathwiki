---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 28/12/2022 17:34:11
Tags: #Type/Theorem #Topic/Real_Analysis

Proved by: [[Sequential and functional limit characterizations of continuity]], [[Functional Limit Theorems in R]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Continuity Theorems in $\R$).

Let $X$ be a metric space, let $\Omega_1,\Omega_2\subseteq X$ be such that $\Omega\coloneqq\Omega_1\cap\Omega_2\neq\em$, and fix $p\in\Omega$. For functions $f:\Omega_1\to\R$ and $g:\Omega_2\to\R$ continuous at $p$, the following properties hold:
* (Linearity): For all $\alpha\in\R$, $\alpha f+g$ is continuous at $p$.
* (Multiplicativity): $f\cdot g$ is continuous at $p$.
* (Invertibility): If $g\l(p\r)\neq0$, then $1/g$ is continuous at $p$.

```

<i>Proof.</i> If $p$ is not a cluster point of $\Omega$, then the assertions are trivial. Otherwise, since $f$ and $g$ are continuous at $p$, we see that $\lim\limits_{x\to p}f\l(x\r)=f\l(p\r)$ and $\lim\limits_{x\to p}g\l(x\r)=g\l(p\r)$. Thus everything follows by functional limit theorems.<span style="float:right;">$\blacksquare$</span>
