---
custom_alias: $A$ invertible $\Rightarrow$ $A\v{x}=\v{b}$ has a unique solution
---

<br />
<br />

Date Created: 08/04/2022 03:28:32
Tags: #Proposition #Closed

Proved by: [[Matrix multiplication is associative]], [[Algebraic identities of matrix operations]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider any $n\times n$ linear system $A\v{x}=\v{b}$ for some fixed $n\in\N^\ast$. If $A\in\mat{n}{K}$ is invertible, then the system has a unique solution $\v{x}=A^{-1}\v{b}$._

```

_Proof_. First, observe that $A^{-1}\v{b}$ is a solution of the system $A\v{x}=\v{b}$ since
$$\begin{equation}
    \begin{aligned}
        A\l(A^{-1}\v{x}\r)&=\l(AA^{-1}\r)\v{x} && \textrm{Associativity of matrix multiplication} \\
        &=I\v{x} && \textrm{Definition of inverse matrix} \\
        &=\v{x}. && \textrm{Identity matrix is the identity of matrix multiplication}
    \end{aligned}
\end{equation}$$
To show that this is the only solution, observe that if $A\v{x}=\v{b}$, then, left-multiplying both sides by $A^{-1}$, we have that
$$\begin{align}
    A^{-1}\l(A\v{x}\r)&=A^{-1}\v{b} && \textrm{Substitution} \\
    \l(A^{-1}A\r)\v{x}&=A^{-1}\v{b} && \textrm{Associativity of matrix multiplication} \\
    I\v{x}&=A^{-1}\v{b} && \textrm{Definition of inverse matrix} \\
    \v{x}&=A^{-1}\v{b}. && \textrm{Identity matrix is the identity of matrix multiplication}\qedin
\end{align}$$
