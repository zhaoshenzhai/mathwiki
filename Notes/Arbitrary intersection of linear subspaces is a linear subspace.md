<div class="topSpace"></div>

Date Created: 03/04/2022 18:40:47
Tags: #Proposition

Proved by: [[Linear subspace iff closed under linear combination]]
References: _Not Applicable_
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and let $V$ be a vector space over $K$. If_ $\l\{U_i\r\}_{i\in I}$ _is an indexed family of $K$-linear subspaces of $V$, then its intersection_
$$\begin{equation}
    U\coloneqq\bigcap_{i\in I}U_i,
\end{equation}$$
_together with the restricted operations, is also a $K$-linear subspace of $V$._

```

_Proof_. Take $\alpha\in K$ and $u_1,u_2\in U$; it suffices to show that $0\in U$ and $\alpha u_1+u_2\in U$. Since each $U_i$ is a linear subspace of $V$ and $u_1,u_2\in U\subseteq U_i$, we see that $0\in U_i$ and $\alpha u_1+u_2\in U_i$ for all $i\in I$. It then follows from the definition of the intersection that $0\in U$ and $\alpha u_1+u_2\in U$, so the result follows.<span style="float:right;">$\blacksquare$</span>
