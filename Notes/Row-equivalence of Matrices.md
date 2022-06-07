<br />
<br />

Date Created: 23/03/2022 19:32:10
Tags: #Definition #Later/Linear_Algebra/Systems

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [Row-equivalent augmented matrices $\Rightarrow$ equivalent linear systems](Row-equivalent%20augmented%20matrices%20implies%20equivalent%20linear%20systems.md)
Sufficiencies: [[Gaussian Algorithm]]
Equivalences: [Row-equivalent $\Leftrightarrow$ factors through elementary matrices](Row-equivalent%20iff%20factors%20through%20elementary%20matrices.md), [Row-equivalent $\Leftrightarrow$ factors through invertible matrix](Row-equivalent%20iff%20factors%20through%20invertible%20matrix.md)
Justifications: [[Row-equivalence of matrices is an equivalence relation]]

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider matrices $A,B\in\mat{m\times n}{K}$ for some $m,n\in\N^\ast$. The matrix $B$ is said to be **row-equivalent to $A$** if there exist elemenatary row operations_
$$\begin{equation}
    e_1,\dots,e_k:\mat{m\times n}{K}\to\mat{m\times n}{K}
\end{equation}$$
_for some $k\in\N$ such that $B=\l(e_k\circ\cdots\circ e_i\r)\l(A\r)$._

_Similarly for **column-equivalence of matrices**._

```

**Remark.** Since row-equivalence is an equivalence relation, write $B\sim A$.<span style="float:right;">$\blacklozenge$</span>
