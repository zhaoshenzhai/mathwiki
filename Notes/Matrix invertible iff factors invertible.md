---
alias: auto_aliasing
---

<br />
<br />

Date Created: 09/04/2022 09:11:03
Tags: #Proposition #Closed

Proved by: [[Inversion anti-respects matrix multiplication]], [Homogeneous square system $A\v{x}=\v{0}$ has only trivial solution $\Leftrightarrow$ $A\sim I$](Homogeneous%20square%20linear%20system%20only%20trivial%20solution%20iff%20coefficient%20matrix%20row-equivalent%20to%20identity.md), [$A$ invertible $\Leftrightarrow$ $A\sim I$](Matrix%20invertible%20iff%20row-equivalent%20to%20identity.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $n,k\in\N^\ast$. Then, for all $A_1,\dots,A_k\in\mat{n}{K}$, their product $A$ is invertible iff each $A_i$ is invertible._

```

_Proof_.
* ($\Leftarrow$): Since $A_1A_2$ is invertible, the result follows immediately by induction on $k$.

* ($\Rightarrow$): We proceed by induction on $k$. If $k=1$, then $A_1=A$ is invertible. Assume now that each $A_i$ with $i\in\l\{1,\dots,l\r\}$ is invertible for some $l\geq2$, and set
$$\begin{equation}
    A'\coloneqq A_1\times\cdots\times A_l.
\end{equation}$$
To prove that $A=A'A_{l+1}$ is invertible, it suffices to show that the homogeneous system $A\v{x}=\v{0}$ has only the trivial solution. Since each $A_i$ is invertible, our induction hypothesis states that $A'$ is invertible with inverse $\l(A'\r)^{-1}$, so, left-multiplying both sides of $A=A'A_{l+1}$ by $\l(A'\r)^{-1}$, we see that
$$\begin{equation}
    \begin{aligned}
        \l(A'\r)^{-1}A&=\l(A'\r)^{-1}\l(A'A_{l+1}\r) && \textrm{Substitution} \\
        &=\l(\l(A'\r)^{-1}A'\r)A_{l+1} && \textrm{Associativity of matrix multiplication} \\
        &=IA_{l+1} && \textrm{Definition of inverse matrix} \\
        &=A_{l+1}. && \textrm{Identity matrix is the identity of matrix multiplication}
    \end{aligned}
\end{equation}$$
Similarly, we can left-multiply the system $A\v{x}=\v{0}$ by $\l(A'\r)^{-1}$ to obtain
$$\begin{equation}
    \begin{aligned}
        \l(A'\r)^{-1}\l(A\v{x}\r)&=\l(A'\r)^{-1}\v{0} && \textrm{Substitution} \\
        \l(\l(A'\r)^{-1}A\r)\v{x}&=\v{0} && \textrm{Associativity and absorption of matrix multiplication} \\
        A_{l+1}\v{x}&=\v{0}. && \textrm{Substitution} \\
    \end{aligned}
\end{equation}$$
Since $A_{l+1}$ is invertible, we see that the system $A_{l+1}\v{x}=\v{0}$ has only the trivial solution. Thus any solution $\v{x}$ of $A\v{x}=\v{0}$ is forced to be trivial, so the result follows.<span style="float:right;">$\blacksquare$</span>
