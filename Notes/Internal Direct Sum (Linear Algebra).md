<div class="topSpace"></div>

Date Created: 20/04/2022 17:33:40
Tags: #Type/Definition #Topic/Module_Theory/Later

Types: <i>Not Applicable</i>
Examples: [[Symmetric and skew-symmetric decomposition of matrices]]
Constructions: [[Complement (Linear Subspace)]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Unique Representation Theorem (Direct Sum)]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\l\{U_i\r\}_{i\in I}$ be an indexed family of distinct linear subspaces of a vector space $V$ over some field $K$ such that $V=\sum_{i\in I}U_i$. Then $V$ is said to be the <b>(internal) direct sum of $\l\{U_i\r\}_{i\in I}$</b>, denoted by
$$\begin{equation}
    \bigoplus_{i\in I}U_i\coloneqq\sum_{i\in I}U_i=V,
\end{equation}$$
and each $U_i$ is said to be a <b>direct summand of $V$</b>, if the family $\l\{U_i\r\}_{i\in I}$ is independent; that is, if
$$\begin{equation}
    \fa i\in I:U_i\cap\sum_{j\neq i}U_j=\l\{0\r\}.
\end{equation}$$

```

<b>Remark.</b> If $I=\l\{1,2\r\}$, then $V=U_1\oplus U_2$ iff $V=U_1+U_2$ and $U_1\cap U_2=\l\{0\r\}$.<span style="float:right;">$\blacklozenge$</span>
