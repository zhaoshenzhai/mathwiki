<div class="topSpace"></div>

Date Created: 02/04/2023 18:13:29
Tags: #Type/Proposition #Topic/Analysis

Proved by: [[Cauchy Integrability Criterion]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition (Squeeze Theorem).

Let $f:\l[a,b\r]\to\R$. Then $f\in\RI{\l[a,b\r]}$ iff for all $\epsilon>0$, there exist $\alpha_\epsilon,\beta_\epsilon\in\RI{\l[a,b\r]}$ with $\alpha_\epsilon\!\l(x\r)\leq f\l(x\r)\leq\beta_\epsilon\!\l(x\r)$ for all $x\in\l[a,b\r]$ such that $\int_{a}^{b}\beta_\epsilon-\alpha_\epsilon<\epsilon$.

```

_Proof_. The forward direction is obvious by taking $\alpha_\epsilon\coloneqq f\eqqcolon\beta_\epsilon$. Conversely, let $\epsilon>0$, so there exist $\delta>0$ such that if $\mc{P}$ is any partition of $\l[a,b\r]$ with $\|\mc{P}\|<\delta$, then
$$\begin{equation}
    \int_{a}^{b}\alpha_\epsilon-\frac{\epsilon}{3}<S\l(\alpha_\epsilon,\mc{P}\r)\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ S\l(\beta_\epsilon,\mc{P}\r)<\int_{a}^{b}\beta_\epsilon+\frac{\epsilon}{3}.
\end{equation}$$
But clearly $S\l(\alpha_\epsilon,\mc{P}\r)\leq S\l(f,\mc{P}\r)\leq S\l(\beta_\epsilon,\mc{P}\r)$, so
$$\begin{equation}
    \int_{a}^{b}\alpha_\epsilon-\frac{\epsilon}{3}<S\l(f,\mc{P}\r)<\int_{a}^{b}\beta_\epsilon+\frac{\epsilon}{3}.
\end{equation}$$
The same holds if $\mc{Q}$ is another partition of $\l[a,b\r]$ with $\|\mc{Q}\|<\delta$, so
$$\begin{equation}
    \l|S\l(f,\mc{P}\r)-S\l(f,\mc{Q}\r)\r|<\frac{2\epsilon}{3}+\int_{a}^{b}\beta_\epsilon-\alpha_\epsilon<\epsilon,
\end{equation}$$
from which the result follows by the Cauchy Criterion.<span style="float:right;">$\blacksquare$</span>
