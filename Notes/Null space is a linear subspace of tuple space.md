<br />
<br />

Date Created: 03/04/2022 15:51:12
Tags: #Proposition #Closed

Proved by: [[Zero matrix is the absorbing element of matrix multiplication]], [[Algebraic consequences (vector space)]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N^\ast$. Then, for every $A\in\mat{m\times n}{K}$, the null space $\null\l(A\r)$ is a $K$-linear subspace of $K^n$._

```

_Proof_. It suffices to verify that $\v{0}_n\in\null\l(A\r)$ and, for every $\alpha\in K$ and $\v{x},\v{y}\in\null\l(A\r)$, that $\alpha\v{x}+\v{y}\in\null\l(A\r)$.
* ($\v{0}_n\in\null\l(A\r)$): This follows directly from the fact that $A\v{0}_n=\v{0}_m$.

* ($\alpha\v{x}+\v{y}\in\null\l(A\r)$): The result follows from the following computation:
$$\begin{align}
    A\l(\alpha\v{x}+\v{y}\r)&=A\l(\alpha\v{x}\r)+\v{y} && \textrm{Distribution of matrix multiplication over addition} \\
    &=\alpha A\l(\v{x}\r)+A\l(\v{y}\r) && \textrm{Compatibility of matrix and scalar multiplications} \\
    &=\alpha\v{0}_m+\v{0}_m && \v{x},\v{y}\in\null\l(A\r) \\
    &=\v{0}_m+\v{0}_m && \textrm{$\v{0}_m$ is the right-absorbing element of scalar multiplication} \\
    &=\v{0}_m. && \textrm{$\v{0}_m$ is the neutral element of matrix addition}\qedin
\end{align}$$
