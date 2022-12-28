---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 09/06/2022 11:12:11
Tags: #Proposition #Later/Linear_Algebra

Proved by: [[Elementary matrices slash operations have inverses of the same type]], [[Product of invertible matrices is invertible]], [[Matrix Invertibility Theorem]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N^+$. Then, for all $A,B\in\mat{m\times n}{K}$, $A\sim B$ iff there exists an invertible matrix $P\in\mat{m}{K}$ such that $B=PA$._

```

_Proof_.
* ($\Rightarrow$): If $A\sim B$, there exist elementary matrices $E_1,\dots,E_k\in\mat{m}{K}$ for some $k\in\N$ such that
$$\begin{equation}
    B=\l(E_k\times\cdots\times E_1\r)\times A.
\end{equation}$$
Since each $E_i$ is invertible and products of invertible matrices are invertible, set $P\coloneqq E_k\times\cdots\times E_1$.

* ($\Leftarrow$): If $B=PA$ for some invertible matrix $P$, then $P\sim I_m$ and hence there exist elementary matrices $F_1,\dots,F_l\in\mat{m}{K}$ for some $l\in\N$ such that
$$\begin{equation}
    \begin{aligned}
        P&=\l(F_l\times\cdots\times F_1\r)\times I_m \\
        &=F_l\times\cdots\times F_1.
    \end{aligned}
\end{equation}$$
The result follows since $B=\l(F_l\times\cdots\times F_1\r)\times A$.<span style="float:right;">$\blacksquare$</span>
