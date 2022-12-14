<div class="topSpace"></div>

Date Created: 26/06/2022 19:56:55
Tags: #Proposition

Proved by: [[Basic properties of orthogonal vectors]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ denote either $\R$ or $\C$ and let $V$ be an inner product space over $K$. Then every orthonormal list of vectors_ $\l\{e_i\r\}_{i\in I}\subseteq V$ _is linearly independent._

```

_Proof_. Let $\l\{e_1,\dots,e_n\r\}$ be any finite subset of $\l\{e_i\r\}_{i\in I}$ and suppose that there exist scalars $\alpha_1,\dots,\alpha_n\in K$ such that $\sum_{i=1}^n\alpha_ie_i=0$. Then
$$\begin{equation}
    \begin{aligned}
        \bilform{\sum_{i=1}^n\alpha_ie_i}{e_j}&=\sum_{i=1}^n\alpha_i\bilform{e_i}{e_j} && \textrm{Linearity in the first slot} \\
        &=\alpha_j && \bilform{e_i}{e_j}=\delta_{ij}
    \end{aligned}
\end{equation}$$
evaluates to $\bilform{0}{v}=0$ for all $j\in\l\{1,\dots,n\r\}$, so the result follows.<span style="float:right;">$\blacksquare$</span>
