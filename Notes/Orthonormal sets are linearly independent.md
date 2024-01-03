<div class="topSpace"></div>

Date Created: 26/06/2022 19:56:55
References: #Ref/Axl24 
Tags: #Type/Proposition #Topic/Functional_Analysis

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $K$ denote either $\R$ or $\C$ and let $V$ be an inner product space over $K$. Then every orthonormal list of vectors $\l\{e_i\r\}_{i\in I}\subseteq V$ is linearly independent.

```

<i>Proof.</i> Let $\l\{e_1,\dots,e_n\r\}$ be any finite subset of $\l\{e_i\r\}_{i\in I}$ and suppose that there exist scalars $\alpha_1,\dots,\alpha_n\in K$ such that $\sum_{i=1}^n\alpha_ie_i=0$. Then
$$\begin{equation}
    0=\inprod{\sum_{i=1}^n\alpha_ie_i}{e_j}=\sum_{i=1}^n\alpha_i\inprod{e_i}{e_j}=\alpha_j
\end{equation}$$
for all $j\in\l\{1,\dots,n\r\}$, so the result follows.<span style="float:right;">$\blacksquare$</span>
