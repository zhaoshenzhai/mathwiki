---
mathLink: $X$ compact $\Rightarrow$ $\tpl{\CONT{\l(X\r)},\|\slot\|_\infty}$ Banach
---

<div class="topSpace"></div>

Date Created: 09/04/2023 14:41:01
Tags: #Type/Proposition #Topic/Analysis

Proved by: [[Metric-completeness of R]], [[Extreme Value Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $X$ be a metric space. If $X$ is compact, then $\CONT{\l(X\r)}$, equipped with the sup norm $\|\slot\|_\infty$, is Banach.

```

<i>Proof.</i> Fix $\epsilon>0$ and let $\tpl{f_n}$ be a Cauchy sequence in $\CONT{\l(X\r)}$, so $\max_{x\in X}\l|f_n\!\l(x\r)-f_m\!\l(x\r)\r|<\epsilon$ for all eventually $m,n\in\N$. Fixing $x\in X$, we see that $\l|f_n\!\l(x\r)-f_m\!\l(x\r)\r|<\epsilon$ eventually and so $\tpl{f_n\!\l(x\r)}$ is a Cauchy sequence in $\R$. Since $\R$ is complete, this sequence converges to some $f\l(x\r)\in\R$.
* First, note that $\sup_{x\in X}\l|f_n\!\l(x\r)-f\l(x\r)\r|<\epsilon$ for all eventually $n\in\N$. Indeed, for all $x\in X$, we have $f\l(x\r)=\lim_{m\to\infty}f_m\!\l(x\r)$ and since $\l|f_n\!\l(x\r)-f_m\!\l(x\r)\r|<\epsilon/2$ for all eventually $m,n\in\N$, we take the limit so that
$$\begin{equation}
    \l|f_n\!\l(x\r)-f\l(x\r)\r|=\lim\limits_{m\to\infty}\l|f_n\!\l(x\r)-f_m\!\l(x\r)\r|\leq\frac{\epsilon}{2}.
\end{equation}$$
The result follows by taking the supremum over all $x\in X$.

We claim that the function $f:X\to\R$ is a continuous function, for then we can replace the $\sup$ with a $\max$ above and the result follows. For all $z\in X$, observe that $\l|f_n\!\l(z\r)-f\l(z\r)\r|<\epsilon/3$ for all eventually $n\in\N$, say for all $n\geq N$. The function $f_N$ is continuous on $X$, so there exists some $\delta>0$ such that for all $y\in B\l(x,\delta\r)$, we have $\l|f_N\!\l(x\r)-f_N\!\l(y\r)\r|<\epsilon/3$. Using the triangle inequality, we see that
$$\begin{equation}
    \l|f\l(x\r)-f\l(y\r)\r|\leq\l|f\l(x\r)-f_N\!\l(x\r)\r|+\l|f_N\!\l(x\r)-f_N\!\l(y\r)\r|+\l|f_N\!\l(y\r)-f\l(y\r)\r|<\frac{\epsilon}{3}+\frac{\epsilon}{3}+\frac{\epsilon}{3}=\epsilon,
\end{equation}$$
as desired.<span style="float:right;">$\blacksquare$</span>
