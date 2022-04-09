<br />
<br />

Date Created: 08/04/2022 05:00:31
Tags: #Proposition #Closed

Proved by: [[Matrix multiplication is associative]], [[Identity matrix is the identity of matrix multiplication]]
Generalizations: _Not Applicable_

Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $n\in\N^\ast$. Then, for all invertible matrices $A,B\in\mat{n}{K}$, their product $AB\in\mat{n}{K}$ is invertible with inverse_
$$\begin{equation}
    \l(AB\r)^{-1}=B^{-1}A^{-1}.
\end{equation}$$

```

_Proof_. We verify that $B^{-1}A^{-1}$ is both a left and a right inverse of $AB$.

$\begin{align}
    \l(B^{-1}A^{-1}\r)\l(AB\r)&=B^{-1}\l(A^{-1}A\r)B \hspace{1in}\l(AB\r)\l(B^{-1}A^{-1}\r)\hspace{-0.4in}&&=A\l(BB^{-1}\r)A^{-1} && \textrm{Associativity of matrix multiplication} \\
    &=B^{-1}IB &&=AIA^{-1} && \textrm{Definition of inverse matrix} \\
    &=B^{-1}B &&=AA^{-1} && \textrm{Identity matrix is the identity of matrix multiplication} \\
    &=I &&=I. && \textrm{Defintion of inverse matrix}\qedin
\end{align}$