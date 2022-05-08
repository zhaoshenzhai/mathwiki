<br />
<br />

Date Created: 20/04/2022 17:33:40
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [Independence of family $\Leftrightarrow$ unique representation $\Leftrightarrow$ only trivial representation of zero (direct sum)](Independence%20of%20family%20iff%20unique%20representation%20iff%20only%20trivial%20representation%20of%20zero%20(direct%20sum).md)

``` ad-Definition
title: Definition.

_Let_ $\l\{U_i\r\}_{i\in I}$ _be an indexed family of distinct linear subspaces of a vector space $V$ over some field $K$ such that_ $V=\sum_{i\in I}U_i$_. Then $V$ is said to be the_ **_(internal) direct sum of_ $\l\{U_i\r\}_{i\in I}$**_, denoted by_
$$\begin{equation}
    \bigoplus_{i\in I}U_i\coloneqq\sum_{i\in I}U_i=V,
\end{equation}$$
_if one of the following equivalent statements hold (all sums_ $\sum_{i\in I}u_i$ _are assumed to have $u_i=0$ for all but finitely-many $i\in I$):_
* _The family_ $\l\{U_i\r\}_{i\in I}$ _is independent:_
$$\begin{equation}
    \fa i\in I:U_i\cap\sum_{j\neq i}U_j=\l\{0\r\}.
\end{equation}$$

* _Every $v\in V$ admits a unique representation as a sum of vectors in_ $\l\{U_i\r\}_{i\in I}$:
$$\begin{equation}
    \fa v\in V,\fa i\in I,\ex!u_i\in U_i:v=\sum\limits_{i\in I}u_i.
\end{equation}$$
* _The zero vector admits only the trivial decomposition as a sum of vectors in_ $\l\{U_i\r\}_{i\in I}$:
$$\begin{equation}
    \fa i\in I,\fa u_i\in U_i:\sum\limits_{i\in I}u_i=0\ \ \ \ \Rightarrow\ \ \ \ \fa i\in I:u_i=0.
\end{equation}$$

_In any case, each $U_i$ is said to be a **direct summand of $V$**._
```
