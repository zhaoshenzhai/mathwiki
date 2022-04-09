<br />
<br />

Date Created: 23/03/2022 19:32:10
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Row-equivalence of matrices is an equivalence relation]], [Row-equivalent augmented matrices $\Rightarrow$ equivalent linear systems](Row-equivalent%20augmented%20matrices%20implies%20equivalent%20linear%20systems.md)
Sufficiencies: [[Gaussian Algorithm]], [[Gauss-Jordan Algorithm]]
Equivalences: [Row-equivalent $\Leftrightarrow$ factors through elementary matrices](Row-equivalent%20iff%20factors%20through%20elementary%20matrices.md), [Row-equivalent $\Leftrightarrow$ factors through invertible matrix](Row-equivalent%20iff%20factors%20through%20invertible%20matrix.md)
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $K$ be a field and consider matrices $A,B\in\mat{m\times n}{K}$ for some $m,n\in\N$. The matrix $B$ is said to be **row-equivalent to $A$** if there exists elemenatary row operations_
$$\begin{equation}
    e_1,\dots,e_k:\mat{m\times n}{K}\to\mat{m\times n}{K}
\end{equation}$$
_for some $k\in\N$ such that $B=\l(e_k\circ\cdots\circ e_i\r)\l(A\r)$._

```

**Remark.** If $B$ is row-equivalent to $A$, write $B\sim A$.<span style="float:right;">$\blacklozenge$</span>
