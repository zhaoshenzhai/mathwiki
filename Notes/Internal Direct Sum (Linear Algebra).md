<br />
<br />

Date Created: 20/04/2022 17:33:40
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: [$\mat{n}{K}=\sym{n}{K}\oplus\skew{n}{K}$ for $\char K\neq2$](Symmetric%20and%20skew-symmetric%20decomposition%20of%20matrices.md)
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: [Internal direct sum $\Leftrightarrow$ unique representation $\Leftrightarrow$ only trivial representation of zero](Internal%20direct%20sum%20iff%20unique%20representation%20iff%20only%20trivial%20representation%20of%20zero.md)
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let_ $\l\{U_i\r\}_{i\in I}$ _be an indexed family of distinct linear subspaces of a vector space $V$ over some field $K$ such that_ $V=\sum_{i\in I}U_i$_. Then $V$ is said to be the_ **_(internal) direct sum of_ $\l\{U_i\r\}_{i\in I}$**_, denoted by_
$$\begin{equation}
    \bigoplus_{i\in I}U_i\coloneqq\sum_{i\in I}U_i=V,
\end{equation}$$
_and each $U_i$ is said to be a **direct summand of $V$**, if the family _$\l\{U_i\r\}_{i\in I}$ _is independent; that is, if_
$$\begin{equation}
    \fa i\in I:U_i\cap\sum_{j\neq i}U_j=\l\{0\r\}.
\end{equation}$$
```

**Remark.** If $I=\l\{1,2\r\}$, then $V=U_1\oplus U_2$ iff $V=U_1+U_2$ and $U_1\cap U_2=\l\{0\r\}$.<span style="float:right;">$\blacklozenge$</span>
