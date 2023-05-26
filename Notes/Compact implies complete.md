---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 08/03/2023 12:42:15
Tags: #Type/Proposition #Topic/Analysis

Proved by: [[Characterizations of compactness (metric space)]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{X,d}$ be a metric space. If $X$ is compact, then it is complete._

```

_Proof_. Let $\tpl{x_n}$ be a Cauchy sequence in $X$. Since $X$ is compact, it is sequentially compact and hence $\tpl{x_n}$ admits a subsequence $\tpl{x_{n_k}}$ converging to some $x\in X$. We claim that $x_n\to x$, so take $\epsilon>0$. Indeed, since $x_{n_k}\to x$, there is some $N_1\in\N$ such that $d\l(x_{n_k},x\r)<\epsilon/2$ for all $n_k\geq N_1$. Furthermore, Cauchyness of $\tpl{x_n}$ furnishes some $N_2\in\N$ such that $d\l(x_n,x_m\r)<\epsilon/2$ for all $m,n\geq N_2$. Set $N\coloneqq\max\l\{N_1,N_2\r\}$ and pick any $n_k\geq N$. Observe then that
$$\begin{equation}
    d\l(x_n,x\r)\leq d\l(x_n,x_{n_k}\r)+d\l(x_{n_k},x\r)<\frac{\epsilon}{2}+\frac{\epsilon}{2}=\epsilon.
\end{equation}$$
for all $n\geq N$, so $x_n\to x$.<span style="float:right;">$\blacksquare$</span>
