---
alias: auto_aliasing
---

<br />
<br />

Date Created: 09/04/2022 08:10:28
Tags: #Proposition #Closed

Proved by: [Left-invertible square matrix $\Rightarrow$ invertible](Left-invertible%20square%20matrix%20implies%20invertible.md), [[Inversion is an involution]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider $A\in\mat{n}{K}$ for some fixed $n\in\N^\ast$. If $A$ is right-invertible, then $A$ is invertible._

```

_Proof_. Let $C\in\mat{n}{K}$ be a right-inverse of $A$, so $AC=I$. It follows then that $A$ is a left-inverse of $C$, and since $C$ is square, we see that $C$ is invertible. Observe then that
$$\begin{equation}
    \begin{aligned}
        A&=AI && \textrm{Identity matrix is the identity of matrix multiplication} \\
        &=A\l(CC^{-1}\r) && \textrm{Definition of inverse matrix} \\
        &=\l(AC\r)C^{-1} && \textrm{Associativity of matrix multiplication} \\
        &=IC^{-1} && \textrm{Definition of left-inverse} \\
        &=C^{-1}, && \textrm{Identity matrix is the identity of matrix multiplication}
    \end{aligned}
\end{equation}$$
and since $C^{-1}$ is invertible with inverse $\l(C^{-1}\r)^{-1}=C$, we see that $A$ is invertible with inverse $C$.<span style="float:right;">$\blacksquare$</span>
