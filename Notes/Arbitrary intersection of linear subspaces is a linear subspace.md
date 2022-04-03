<br />
<br />

Date Created: 03/04/2022 18:40:47
Tags: #Proposition #Closed

Proved by: [[Linear subspace iff contains zero and operations are closed]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and let $V$ be a vector space over $K$. If_ $\l\{W_a\r\}_{a\in A}$ _is an indexed family of $K$-linear subspaces of $V$, then its intersection_
$$\begin{equation}
    W\coloneqq\bigcap_{a\in A}W_a,
\end{equation}$$
_together with the restricted operations, is also a $K$-linear subspace of $V$._

```

_Proof_. Take $\alpha\in K$ and $w_1,w_2\in W$; it suffices to show that $0\in W$ and $\alpha w_1+w_2\in W$. Since each $W_a$ is a linear subspace of $V$ and $w_1,w_2\in W\subseteq W_a$, we see that $0\in W_a$ and $\alpha w_1+w_2\in W_a$ for all $a\in A$. It then follows from the definition of the intersection that $0\in W$ and $\alpha w_1+w_2\in W$, so the result follows.<span style="float:right;">$\blacksquare$</span>
