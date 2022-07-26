---
mathLink: Homogeneous system $A\v{x}=\v{0}$ has only trivial solution $\Leftrightarrow$ columns/rows of $A$ are linearly independent
---

<br />
<br />

Date Created: 30/04/2022 19:44:11
Tags: #Proposition #Closed

Proved by: [Matrix multiplication (columns/rows)](Matrix%20multiplication%20(columns%20slash%20rows).md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider am $m\times n$ linear system $A\v{x}=\v{0}$ for some $m,n\in\N^\ast$. Then the system has only the trivial solution iff the columns_ $\v{a}_{\blob;1},\dots,\v{a}_{\blob;n}$ _of $A$ are linearly independent._

_Similarly, the system has only the trivial solution iff the rows_ $\v{a}_{1;\blob},\dots,\v{a}_{m;\blob}$ _of $A$ are linearly independent._

```

_Proof_. Observe that
$$\begin{equation}
    A\v{x}=\v{0}\Rightarrow\v{x}=\v{0}\ \ \ \ \ \ \ \ \Leftrightarrow\ \ \ \ \ \ \ \ \sum\limits_{j=1}^nx_j\v{a}_{\blob;j}=\v{0}\Rightarrow\v{x}=\v{0},
\end{equation}$$
so the system has only the trivial solution iff the columns $\v{a}_{\blob;1},\dots,\v{a}_{\blob;n}$ of $A$ are linearly independent. The proof for rows is identical.<span style="float:right;">$\blacksquare$</span>
