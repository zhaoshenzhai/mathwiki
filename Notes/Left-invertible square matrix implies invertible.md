---
alias: auto_aliasing
---

<br />
<br />

Date Created: 09/04/2022 07:57:45
Tags: #Proposition #Closed

Proved by: [Homogeneous square system $A\v{x}=\v{0}$ has only trivial solution $\Leftrightarrow$ $A\sim I$](Homogeneous%20square%20linear%20system%20only%20trivial%20solution%20iff%20coefficient%20matrix%20row-equivalent%20to%20identity.md), [$A$ invertible $\Leftrightarrow$ $A\sim I$](Matrix%20invertible%20iff%20row-equivalent%20to%20identity.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider $A\in\mat{n}{K}$ for some fixed $n\in\N^\ast$. If $A$ is left-invertible, then $A$ is invertible._

```

_Proof_. It suffices to show that the homogeneous system $A\v{x}=\v{0}$ has only the trivial solution. To this end, take any solution $\v{x}$ of this system and let $B\in\mat{N}{K}$ be a left-inverse of $A$. It follows then that
$$\begin{equation}
    \begin{aligned}
        A\v{x}&=\v{0} && \textrm{Assumption} \\
        B\l(A\v{x}\r)&=B\v{0} && \textrm{Substitution} \\
        \l(BA\r)\v{x}&=\v{0} && \textrm{Associativity and absorption of matrix multiplication} \\
        I\v{x}&=\v{0} && \textrm{Definition of left-inverse} \\
        \v{x}&=\v{0}, && \textrm{Identity matrix is the identity of matrix multiplication}
    \end{aligned}
\end{equation}$$
so all solutions are forced to be trivial.<span style="float:right;">$\blacksquare$</span>
