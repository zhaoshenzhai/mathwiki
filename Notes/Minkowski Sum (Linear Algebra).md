<br />
<br />

Date Created: 20/04/2022 17:04:04
Tags: #Definition #Closed

Types: [[Direct Sum (Linear Algebra)]]
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [Minkowski sum is direct $\Leftrightarrow$ only trivial decomposition exists for zero](Minkowski%20sum%20is%20direct%20iff%20only%20trivial%20decomposition%20exists%20for%20zero.md)
Sufficiencies: _Not Applicable_
Equivalences: [[Minkowski sum of linear subspaces is the span of their union]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let_ $\l\{U_i\r\}_{i\in I}$ _be an indexed family of linear subspaces of a vector space $V$ over $K$. The_ **_Minkowski sum of_ $\l\{U_i\r\}_{i\in I}$** _is the set_
$$\begin{equation}
    \sum_{i\in I}U_i\coloneqq\l\{u\in V\mid\ex J\subseteq I:\l|J\r|<\infty\land\l(\fa j\in J,\ex u_j\in U_j:u=\sum_{j\in J}u_j\r)\r\}.
\end{equation}$$

```

**Remark.** In other words, $\sum_{i\in I}U_i$ is the set of all possible finite sums of elements from $\bigcup_{i\in I}U_i$. If $I=\l\{1,\dots,n\r\}$ for some $n\in\N$, the sum reduces to
$$\begin{equation}
    \sum\limits_{i=1}^nU_i\coloneqq\l\{u\in V\mid\fa j\in\l\{1,\dots,n\r\},\ex u_j\in U_j:u=\sum\limits_{j=1}^nu_j\r\}.\exqedin
\end{equation}$$
