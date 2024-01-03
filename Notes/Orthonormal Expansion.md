<div class="topSpace"></div>

Date Created: 27/06/2022 15:48:46
References: #Ref/Axl24
Tags: #Type/Proposition #Topic/Functional_Analysis

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $V$ be an inner product space. If $\mc{B}\coloneqq\l\{e_i\r\}_{i\in I}$ is an orthonormal basis for $V$ and $v\in V$, then $v=\sum_{i=1}^n\inprod{v}{e_i}e_i$. In other words, $\l[v\r]_\mc{B}=\tpl{\inprod{v}{e_1},\dots,\inprod{v}{e_n}}$.

```

<i>Proof.</i> Since $\mc{B}$ is a basis for $V$, there exist scalars $\alpha_1,\dots,\alpha_n\in K$ such that $v=\sum_{i=1}^n\alpha_ie_i$. For all $j\in\l\{1,\dots,n\r\}$, take the inner product of both sides with $e_j$ to obtain
$$\begin{equation}
    \inprod{v}{e_j}=\inprod{\sum_{i=1}^n\alpha_ie_i}{e_j}=\sum_{i=1}^n\alpha_i\inprod{e_i}{e_j}=\alpha_j
\end{equation}$$
from which the result follows.<span style="float:right;">$\blacksquare$</span>
