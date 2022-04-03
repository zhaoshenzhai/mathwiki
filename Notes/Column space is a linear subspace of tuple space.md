<br />
<br />

Date Created: 03/04/2022 18:18:22
Tags: #Proposition #Closed

Proved by: [[Linear subspace iff contains zero and operations are closed]], [[Zero matrix is the absorbing element of matrix multiplication]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N$. Then, for every $A\in\mat{m\times n}{K}$, the column space $\col\l(A\r)$ is a $K$-linear subspace of $K^m$._

```

_Proof_. It suffices to verify that $\v{0}\in\col\l(A\r)$ and, for every $\alpha\in K$ and $\v{y}_1,\v{y}_2\in\col\l(A\r)$, that $\alpha\v{y}_1+\v{y}_2\in\col\l(A\r)$.
* ($\v{0}_m\in\col\l(A\r)$): This follows directly from the fact that $A\v{0}_n=\v{0}_m$.

* ($\alpha\v{y}_1+\v{y}_2\in\col\l(A\r)$): Since $\v{y}_1,\v{y}_2\in\col\l(A\r)$, there exist $\v{x}_1,\v{x}_2\in K^n$ such that $A\v{x}_1=\v{y}_1$ and $A\v{x}_2=\v{y}_2$. Observe then that
$$\begin{equation}
    \begin{aligned}
        \alpha\v{y}_1+\v{y}_2&=\alpha\l(A\v{x}_1\r)+A\v{x}_2 && \textrm{Substitution} \\
        &=A\l(\alpha\v{x}_1\r)+A\v{x}_2 && \textrm{Compatibility of matrix and scalar multiplications} \\
        &=A\l(\alpha\v{x}_1+\v{x}_2\r), && \textrm{Distribution of matrix multiplication over addition}
    \end{aligned}
\end{equation}$$
and since the addition and scalar multiplication operations on $K^n$ close, we see that $\v{x}\coloneqq\alpha\v{x}_1+\v{x}_2\in K^n$ and thus
$$\begin{equation}
    \ex\v{x}\in K^n:A\v{x}=\alpha\v{y}_1+\v{y}_2,
\end{equation}$$
from which the result follows.<span style="float:right;">$\blacksquare$</span>
