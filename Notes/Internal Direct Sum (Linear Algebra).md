<div class="topSpace"></div>

Date Created: 20/04/2022 17:33:40
Tags: #Type/Definition #Topic/Linear_Algebra

Types: _Not Applicable_
Examples: [[Symmetric and skew-symmetric decomposition of matrices]]
Constructions: [[Complement (Linear Subspace)]]
Generalizations: _Not Applicable_

Properties: [[Basis slash dimension for direct sum]]
Sufficiencies: _Not Applicable_
Equivalences: [[Unique Representation Theorem (Direct Sum)]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

Let $\l\{U_i\r\}_{i\in I}$ be an indexed family of distinct linear subspaces of a vector space $V$ over some field $K$ such that $V=\sum_{i\in I}U_i$. Then $V$ is said to be the **(internal) direct sum of $\l\{U_i\r\}_{i\in I}$**, denoted by
$$\begin{equation}
    \bigoplus_{i\in I}U_i\coloneqq\sum_{i\in I}U_i=V,
\end{equation}$$
and each $U_i$ is said to be a **direct summand of $V$**, if the family $\l\{U_i\r\}_{i\in I}$ is independent; that is, if
$$\begin{equation}
    \fa i\in I:U_i\cap\sum_{j\neq i}U_j=\l\{0\r\}.
\end{equation}$$

```

<b>Remark.</b> If $I=\l\{1,2\r\}$, then $V=U_1\oplus U_2$ iff $V=U_1+U_2$ and $U_1\cap U_2=\l\{0\r\}$.<span style="float:right;">$\blacklozenge$</span>
