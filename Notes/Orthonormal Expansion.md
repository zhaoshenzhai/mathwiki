<div class="topSpace"></div>

Date Created: 27/06/2022 15:48:46
Tags: #Proposition

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ denote either $\R$ or $\C$ and let $V$ be an inner product space over $K$. If_ $\mc{B}\coloneqq\l\{e_i\r\}_{i\in I}$ _is an orthonormal basis for $V$ and $v\in V$, then_
$$\begin{equation}
    v=\sum_{i=1}^n\bilform{v}{e_i}e_i.
\end{equation}$$
_In other words,_ $\l[v\r]_\mc{B}=\tpl{\bilform{v}{e_1},\dots,\bilform{v}{e_n}}$_._

```

_Proof_. Since $\mc{B}$ is a basis for $V$, there exist scalars $\alpha_1,\dots,\alpha_n\in K$ such that $v=\sum_{i=1}^n\alpha_ie_i$. For all $j\in\l\{1,\dots,n\r\}$, take the inner product of both sides with $e_j$ to obtain
$$\begin{equation}
    \begin{aligned}
        \bilform{v}{e_j}&=\bilform{\sum_{i=1}^n\alpha_ie_i}{e_j} && \textrm{Substitution} \\
        &=\sum_{i=1}^n\alpha_i\bilform{e_i}{e_j} && \textrm{Linearity in the first slot} \\
        &=\alpha_j, && \bilform{e_i}{e_j}=\delta_{ij}
    \end{aligned}
\end{equation}$$
from which the result follows.<span style="float:right;">$\blacksquare$</span>
