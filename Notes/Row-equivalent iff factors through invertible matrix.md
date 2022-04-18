---
alias: auto_aliasing
---

<br />
<br />

Date Created: 09/04/2022 08:39:08
Tags: #Proposition #Closed

Proved by: [$A$ invertible $\Leftrightarrow$ $A\sim I$](Matrix%20invertible%20iff%20row-equivalent%20to%20identity.md), [Row-equivalent $\Leftrightarrow$ factors through elementary matrices](Row-equivalent%20iff%20factors%20through%20elementary%20matrices.md), [Matrix invertible $\Leftrightarrow$ factors invertible](Matrix%20invertible%20iff%20factors%20invertible.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and fix $m,n\in\N$. Then, for all $A,B\in\mat{m\times n}{K}$, $A\sim B$ iff there exists an invertible matrix $P$ such that $B=PA$._

```

_Proof_. 
* ($\Rightarrow$) If $A\sim B$, then there exist elementary matrices $E_1,\dots,E_k\in\mat{m}{K}$ such that
$$\begin{equation}
    B=\l(E_k\times\cdots\times E_1\r)\times A.
\end{equation}$$
Since elementary matrices and product of matrices are invertible, set $P\coloneqq E_k\times\cdots\times E_1$ and the result follows.

* ($\Leftarrow$): Since $P$ is invertible, we see that $P\sim I$, so there exist elementary matrices $F_1,\dots,F_l\in\mat{m}{K}$ such that
$$\begin{equation}
    I=\underbrace{\l(F_1\times\cdots\times F_l\r)}_{Q\,\coloneqq}\times P.
\end{equation}$$
Assuming $B=PA$, we can left-multiply both sides by $Q$ to obtain
$$\begin{equation}
    \begin{aligned}
        QB&=Q\l(PA\r) && \textrm{Substitution} \\
        &=\l(QP\r)A && \textrm{Associativity of matrix multiplication} \\
        &=IA && \textrm{Substitution} \\
        &=A, && \textrm{Identity matrix is the identity of matrix multiplication}
    \end{aligned}
\end{equation}$$
and since $Q$ is a product of elementary matrices, we see that $A\sim B$.<span style="float:right;">$\blacksquare$</span>
