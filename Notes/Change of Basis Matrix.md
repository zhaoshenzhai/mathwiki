<br />
<br />

Date Created: 30/05/2022 22:20:35
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [Linear map invertible $\Leftrightarrow^\textrm{repr.}_\textrm{bases}$ matrix representation invertible](Linear%20map%20invertible%20repr%20under%20basis%20matrix%20representation%20invertible.md), [Composition of linear maps $\Leftrightarrow^\textrm{repr.}_\textrm{bases}$ matrix product of representations](Composition%20of%20linear%20maps%20repr%20under%20basis%20matrix%20product%20of%20representations.md)

``` ad-Definition
title: Definition.

_Let $V$ be a finite-dimensional vector space over some field $K$, say with $n\coloneqq\dim V$, and consider two bases $\mc{B}$ and $\mc{B}'$ thereof. The **change of basis matrix from $\mc{B}'$ to $\mc{B}$** is the invertible matrix_ $Q\coloneqq\l[\id_V\r]_{\mc{B}'}^\mc{B}\in\mat{n}{K}$_._

```

**Remark.** The name of $Q$ is justified via
$$\begin{equation}
    \l[v\r]_\mc{B}=\l[\id_V\l(v\r)\r]_\mc{B}=\l[\id_V\r]_{\mc{B}'}^\mc{B}\l[v\r]_{\mc{B}'}=Q\l[v\r]_{\mc{B}'},
\end{equation}$$
so left-multiplication by $Q$ sends the matrix representation of every vector $v\in V$ relative to $\mc{B}'$ to its representation relative to $\mc{B}$.

Let $\mc{B}\coloneqq\l\{e_1,\dots,e_n\r\}$ and $\mc{B}'\coloneqq\l\{e_1',\dots,e_n'\r\}$. To compute $Q=\l[q_{ij}\r]$, we need to evaluate
$$\begin{equation}
    \id_V\l(e_j'\r)=\sum_{i=1}^nq_{ij}e_i
\end{equation}$$
for all $1\leq j\leq n$; that is, we need to express each basis vector $e_j'\in\mc{B}'$ in terms of those in $\mc{B}$. Once this is done, every $v\in V$, expressed previously as a linear combination of $\mc{B}'$, can be be expressed as one in $\mc{B}$.<span style="float:right;">$\blacklozenge$</span>
