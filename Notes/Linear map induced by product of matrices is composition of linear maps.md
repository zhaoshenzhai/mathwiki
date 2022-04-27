<br />
<br />

Date Created: 07/04/2022 01:04:29
Tags: #Proposition #Closed

Proved by: [[Matrix multiplication is associative]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n,p\in\N^\ast$. Then, for every $A\in\mat{m\times n}{K}$ and $B\in\mat{n\times p}{K}$, we have that_
$$\begin{equation}
    T_{AB}=T_A\circ T_B.
\end{equation}$$

```

_Proof_. Take $\v{x}\in K^n$. The result follows from the following computation:
$$\begin{align}
    T_{AB}\l(\v{x}\r)&=\l(AB\r)\v{x} && \textrm{Definition of induced linear map} \\
    &=A\l(B\v{x}\r) && \textrm{Associativity of matrix multiplication} \\
    &=A\l(T_B\l(\v{x}\r)\r) && \textrm{Definition of induced linear map} \\
    &=T_A\l(T_B\l(\v{x}\r)\r) && \textrm{Definition of induced linear map} \\
    &=\l(T_A\circ T_B\r)\l(\v{x}\r). && \textrm{Definition of function composition}\qedin
\end{align}$$
