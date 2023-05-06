<div class="topSpace"></div>

Date Created: 27/06/2022 15:48:46
Tags: #Type/Proposition #Topic/Linear_Algebra

Proved by: [[Coordinate representation of vector spaces]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ be an inner product space. If_ $\mc{B}\coloneqq\l\{e_i\r\}_{i\in I}$ _is an orthonormal basis for $V$ and $v\in V$, then_ $v=\sum_{i=1}^n\inprod{v}{e_i}e_i$_. In other words,_ $\l[v\r]_\mc{B}=\tpl{\inprod{v}{e_1},\dots,\inprod{v}{e_n}}$_._

```

_Proof_. Since $\mc{B}$ is a basis for $V$, there exist scalars $\alpha_1,\dots,\alpha_n\in K$ such that $v=\sum_{i=1}^n\alpha_ie_i$. For all $j\in\l\{1,\dots,n\r\}$, take the inner product of both sides with $e_j$ to obtain
$$\begin{equation}
    \inprod{v}{e_j}=\inprod{\sum_{i=1}^n\alpha_ie_i}{e_j}=\sum_{i=1}^n\alpha_i\inprod{e_i}{e_j}=\alpha_j
\end{equation}$$
from which the result follows.<span style="float:right;">$\blacksquare$</span>
