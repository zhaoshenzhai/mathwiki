---
custom_alias: $A$ invertible $\Leftrightarrow$ $A\sim I$
---

<br />
<br />

Date Created: 08/04/2022 12:00:33
Tags: #Proposition #Closed

Proved by: [$A$ invertible $\Rightarrow$ $A\v{x}=\v{b}$ has a unique solution](Invertible%20coefficient%20matrix%20implies%20unique%20solution.md), [Linear system $A\v{x}=\v{b}$ has a unique solution $\Leftrightarrow$ $A\sim I$](Linear%20system%20has%20unique%20solution%20iff%20coefficient%20matrix%20row-equivalent%20to%20identity.md), [Row-equivalent $\Leftrightarrow$ factors through elementary matrices](Row-equivalent%20iff%20factors%20through%20elementary%20matrices.md), [[Elementary matrices have inverses of the same type]], [Matrix invertible $\Leftrightarrow$ factors invertible](Matrix%20invertible%20iff%20factors%20invertible.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $n\in\N$. Then, for all $A\in\mat{n}{K}$, $A$ is invertible iff $A\sim I$._

```

_Proof_.
* ($\Rightarrow$): Since $A$ is invertible, the linear $A\v{x}=\v{b}$ has a unique solution for any $\v{b}\in\mat{n\times1}{K}$, from which it follows that $A\sim I$.

* ($\Leftarrow$): Since $A\sim I$, there exist elementary matrices $E_1,\dots,E_k\in\mat{n}{K}$ such that
$$\begin{equation}
    \begin{aligned}
        A&=\l(E_k\times\cdots\times E_1\r)\times I && \textrm{Row-equivalent $\Leftrightarrow$ factors through elementary matrices} \\
        &=E_k\times\cdots\times E_1. && \textrm{Identity matrix is the identity of matrix multiplication}
    \end{aligned}
\end{equation}$$
Since elementary matrices and product of matrices are invertible, we see that $A$ is invertible.<span style="float:right;">$\blacksquare$</span>

---

**Remark.** This shows that if $A\sim I$, the same elementary row-operations $e_1,\dots,e_k:\mat{n}{K}\to\mat{n}{K}$ that reduce $A$ to $I$ reduce $I$ to $A^{-1}$. Explicitly, we have that $I=\l(e_k\circ\cdots\circ e_1\r)\l(A\r)$, so their corresponding elementary matrices satisfy
$$\begin{equation}
    I=\l(E_k\times\cdots\times E_1\r)\times A.
\end{equation}$$
Since $A$ is invertible, we can right-multiply both sides by $A^{-1}$ to obtain
$$\begin{equation}
    A^{-1}=\l(E_k\times\cdots\times E_1\r)\times I\\
\end{equation}$$
and thus
$$\begin{equation}
    A^{-1}=\l(e_k\circ\dots\circ e_1\r)\l(I\r).
\end{equation}$$
This is useful in practice since it allows us to compute $A^{-1}$ using Gauss-Jordan Elimination for any invertible $A\in\mat{n}{K}$.<span style="float:right;">$\blacklozenge$</span>
