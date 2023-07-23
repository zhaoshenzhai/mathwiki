<div class="topSpace"></div>

Date Created: 11/02/2022 11:45:28
Tags: #Type/Definition #Topic/Topology/Later

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Open set in open subspace is open]], [[Subspace topology of subspace topology is subspace topology]], [[Product and subspace topologies on subsets coincide]], [[Restricted order topology subset of subspace topology]], [[Restricted order and subspace topologies coincide for convex sets]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Subspace topology (basis)]], [[Subspace topology (subbasis)]]
Justifications: [[Subspace topology is a topology]]

``` ad-Definition
title: Definition.

Let $\tpl{X,\mc{T}}$ be a topological space and fix a subset $Y\subseteq X$. Then the <b>subspace topology on $Y$ inherited from $X$</b> is the topology
$$\begin{equation}
    \l.\mc{T}\r|_Y\coloneqq\l\{V\in\pow\l(Y\r)\st\ex U\in\mc{T}:V=U\cap Y\r\}.
\end{equation}$$
The subset $Y\subseteq X$, equipped with the subspace topology $\l.\mc{T}\r|_Y$, is a <b>(topological) subspace of $X$</b>.

```

<b>Remark.</b> The subspace topology on $Y$ can be visualized by the following diagram:

![[Images/2022-02-11_115828/image.svg|260]]

The thick intervals $V_1$ and $V_2$ are open in $\l.\mc{T}\r|_Y$ since $V_1=U_1\cap Y$ and $V_2=U_2\cap Y$.<span style="float:right;">$\blacklozenge$</span>
