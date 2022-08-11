<div class="topSpace"></div>

Date Created: 03/04/2022 18:40:47
Tags: #Proposition #Closed

Proved by: [$U\subseteq V$ is a vector space $\Leftrightarrow$ $0\in U$ and restricted operations close in $U$](Linear%20subspace%20iff%20closed%20under%20linear%20combination.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and let $V$ be a vector space over $K$. If_ $\l\{U_a\r\}_{a\in A}$ _is an indexed family of $K$-linear subspaces of $V$, then its intersection_
$$\begin{equation}
    U\coloneqq\bigcap_{a\in A}U_a,
\end{equation}$$
_together with the restricted operations, is also a $K$-linear subspace of $V$._

```

_Proof_. Take $\alpha\in K$ and $u_1,u_2\in U$; it suffices to show that $0\in U$ and $\alpha u_1+u_2\in U$. Since each $U_a$ is a linear subspace of $V$ and $u_1,u_2\in U\subseteq U_a$, we see that $0\in U_a$ and $\alpha u_1+u_2\in U_a$ for all $a\in A$. It then follows from the definition of the intersection that $0\in U$ and $\alpha u_1+u_2\in U$, so the result follows.<span style="float:right;">$\blacksquare$</span>
