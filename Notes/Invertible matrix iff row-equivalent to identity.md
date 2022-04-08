---
custom_alias: $A$ invertible $\Leftrightarrow$ $A\sim I$
---

<br />
<br />

Date Created: 08/04/2022 12:00:33
Tags: #Proposition #Closed

Proved by: [$A$ invertible $\Rightarrow$ $A\v{x}=\v{b}$ has a unique solution](Invertible%20coefficient%20matrix%20implies%20unique%20solution.md), [Linear system $A\v{x}=\v{b}$ has a unique solution $\Leftrightarrow$ $A\sim I$](Linear%20system%20has%20unique%20solution%20iff%20coefficient%20matrix%20row-equivalent%20to%20identity.md), [Row-equivalent $\Leftrightarrow$ factors through elementary matrices](Row-equivalent%20iff%20factors%20through%20elementary%20matrices.md), [[Elementary matrices have inverses of the same type]], [[Inversion anti-respects matrix multiplication]]
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
