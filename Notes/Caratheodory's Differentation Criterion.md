---
mathLink: Carath$\acute{\textrm{e}}$odory$\textrm{'}$s Differentiation Criterion
---

<div class="topSpace"></div>

Date Created: 02/12/2022 00:20:34
Tags: #Type/Theorem #Topic/Analysis

Proved by: [[Sequential slash functional limit characterizations of continuity]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Carath$\acute{\textbf{e}}$odory$\textrm{'}$s Differentiation Criterion).

Fix some $\Omega\subseteq\R$ and a cluster point $c\in\Omega$. A function $f:\Omega\to\R$ is differentiable at $c$ iff there exists a function $\phi:\Omega\to\R$, continuous at $c$, such that
$$\begin{equation}
    f\l(x\r)-f\l(c\r)=\phi\l(x\r)\l(x-c\r)
\end{equation}$$
for all $x\in\Omega$, in which case $\phi\l(c\r)=f'\l(c\r)$.

```

_Proof_.
* ($\Rightarrow$): Define $\phi:\Omega\to\R$ by mapping
$$\begin{equation}
    \phi\l(x\r)\coloneqq\begin{dcases}
        f'\l(c\r) & \textrm{if }x=c \\
        \frac{f\l(x\r)-f\l(c\r)}{x-c} & \textrm{else}
    \end{dcases}
\end{equation}$$
for all $x\in\Omega$. Thus the equation $f\l(x\r)-f\l(c\r)=\phi\l(x\r)\l(x-c\r)$ holds for all $x\in\Omega$, and $\phi$ is continuous at $c$ since
$$\begin{equation}
    \lim\limits_{x\to c}\phi\l(x\r)=\lim\limits_{x\to c}\frac{f\l(x\r)-f\l(c\r)}{x-c}=f'\l(c\r)=\phi\l(c\r).
\end{equation}$$

* ($\Leftarrow$): Suppose $\phi:\Omega\to\R$ is a function, continuous at $c$, and is such that $f\l(x\r)-f\l(c\r)=\phi\l(x\r)\l(x-c\r)$ for all $x\in\Omega$. Observe then that
$$\begin{equation}
    \lim\limits_{x\to c}\frac{f\l(x\r)-f\l(c\r)}{x-c}=\lim\limits_{x\to c}\phi\l(x\r)=\phi\l(c\r),
\end{equation}$$
so $f$ is differentiable at $c$ with $f'\l(c\r)=\phi\l(c\r)$.<span style="float:right;">$\blacksquare$</span>
