<br />
<br />

Date Created: 23/03/2022 19:32:10
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: [Matrix invertible $\Leftrightarrow$ $\l[A\mid I_n\r]\sim\l[I_n\mid A^{-1}\r]$](Matrix%20invertible%20iff%20augmented%20matrix%20reducible%20to%20identity.md)
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [Row-equivalent augmented matrices $\Rightarrow$ equivalent linear systems](Row-equivalent%20augmented%20matrices%20implies%20equivalent%20linear%20systems.md)
Sufficiencies: [[Gaussian Algorithm]]
Equivalences: [Row-equivalence of matrices $\Leftrightarrow$ factors through invertible matrix](Row-equivalence%20of%20matrices%20iff%20factors%20through%20invertible%20matrix.md)
Justifications: [[Row-equivalence of matrices is an equivalence relation]], [[Elementary operations act as multiplication by its elementary matrix]]

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider matrices $A,B\in\mat{m\times n}{K}$ for some $m,n\in\N^\ast$. The matrix $B$ is said to be **row-equivalent to $A$** if there exist elemenatary row operations_
$$\begin{equation}
    e_1,\dots,e_k:\mat{m\times n}{K}\to\mat{m\times n}{K}
\end{equation}$$
_for some $k\in\N$ such that $B=\l(e_k\circ\cdots\circ e_i\r)\l(A\r)$. Equivalently, $B$ is row-equivalent to $A$ if there exist elementary matrices $E_1,\dots,E_k\in\mat{m}{K}$ such that $B=\l(E_k\times\cdots\times E_1\r)\times A$._

_Similarly for **column-equivalence of matrices**._

```

**Remark.** Since row-equivalence is an equivalence relation, write $A\sim B$.<span style="float:right;">$\blacklozenge$</span>
