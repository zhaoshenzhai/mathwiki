---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 29/12/2022 23:09:53
Tags: #Type/Proposition #Topic/Analysis

Proved by: [[Functional Limit Theorems in R]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition (Fermat$\textrm{'}$s Theorem on Stationary Points).

_Fix some $\Omega\subseteq\R$ and a point $c\in\Omega^\circ$. For a function $f:\Omega\to\R$, if $c$ is a local extremum of $f$ and $f$ is differentiable at $c$, then $f'\l(c\r)=0$._

```

_Proof_. Suppose that $c$ is a local minimum, so there exists some $\delta>0$ such that $f\l(c\r)\leq f\l(x\r)$ for all $x\in B_\delta\!\l(x\r)$. Observe then that
$$\begin{equation}
    \frac{f\l(x\r)-f\l(c\r)}{x-c}\leq0\ \ \ \ \textrm{if}\ \ \ \ x<c\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \ \frac{f\l(x\r)-f\l(c\r)}{x-c}\geq0\ \ \ \ \textrm{if}\ \ \ \ x>c,
\end{equation}$$
so, by considering one-sided limits, we see that
$$\begin{equation}
    0\leq\lim\limits_{x\to c^+}\frac{f\l(x\r)-f\l(c\r)}{x-c}=f'\l(c\r)=\lim\limits_{x\to c^-}\frac{f\l(x\r)-f\l(c\r)}{x-c}\leq0.\qedin
\end{equation}$$
