---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 05/04/2023 12:06:30
Tags: #Type/Proposition #Topic/Analysis

Proved by: [[Heine-Cantor Theorem]], [[Squeeze Theorem (Riemann Integration)]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

If $f:\l[a,b\r]\to\R$ is continuous, then $f\in\RI{\l[a,b\r]}$.

```

<i>Proof.</i> Let $\epsilon>0$. Since $f$ is uniformly continuous on $\l[a,b\r]$, there exists $\delta>0$ such that if $u,v\in\l[a,b\r]$ are such that $\l|u-v\r|>\delta$, then $\l|f\l(u\r)-f\l(v\r)\r|<\frac{\epsilon}{b-a}$. Let $\mc{P}$ be a partition with $\|\mc{P}\|<\delta$. On each interval $I_i\coloneqq\l[x_{i-1},x_i\r]$, $f$ attains its extrema, so let $u_i,v_i\in I_i$ be any points where $f$ attains its min/max in $I_i$. Define
$$\begin{equation}
    \alpha_\epsilon\coloneqq
    \begin{dcases}
        f\l(u_i\r) & \textrm{if }x\in\l[x_{i-1},x_i\r)\ \ \ \textrm{($i=1,2,\dots,n-1$)} \\
        f\l(u_n\r) & \textrm{if }x\in\l[x_{n-1},x_n\r]
    \end{dcases}
\end{equation}$$
and similarly for $\beta_\epsilon$. By construction, $\alpha_\epsilon\!\l(x\r)\leq f\l(x\r)\leq\beta_\epsilon\!\l(x\r)$, so by the Squeeze Theorem, $f\in\RI{\l[a,b\r]}$ if $\int_{a}^{b}\beta_\epsilon-\alpha_\epsilon<\epsilon$. But
$$\begin{equation}
    \int_{a}^{b}\beta_\epsilon-\alpha_\epsilon=\sum_{i=1}^{n}\l[f\l(v_i\r)-f\l(u_i\r)\r]\l(x_i-x_{i-1}\r)\leq\frac{\epsilon}{b-a}\sum_{i=1}^{\infty}\l(x_i-x_{i-1}\r)=\epsilon.\qedin
\end{equation}$$
