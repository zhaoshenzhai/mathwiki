<br />
<br />

Date Created: 20/04/2022 17:04:04
Tags: #Definition #Closed

Types: [[Internal Direct Sum (Linear Algebra)]]
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Set of finite sums of elements in linear subspaces is the span of their union]]

``` ad-Definition
title: Definition.

_Let_ $\l\{U_i\r\}_{i\in I}$ _be an indexed family of linear subspaces of a vector space $V$ over $K$. The_ **_Minkowski sum of_ $\l\{U_i\r\}_{i\in I}$** _is, equivalently:_
* _The set of all possible finite sums of elements from each $U_i$:_
$$\begin{equation}
    \sum_{i\in I}U_i\coloneqq\l\{u\in V\mid\fa i\in I,\ex u_i\in U_i:u=\sum_{i\in I}u_i\r\}
\end{equation}$$
_where $u_i=0$ for all but finitely-many $i\in I$._

* _The smallest subspace of $V$ containing each $U_i$:_
$$\begin{equation}
    \sum_{i\in I}U_i\coloneqq\span\bigcup_{i\in I}U_i.
\end{equation}$$

```
