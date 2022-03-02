<br />
<br />

Date Created: 11/02/2022 11:45:28
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Topological Subspace]]
Generalizations: _Not Applicable_

Properties: [[Open set in open subspace is open]], [$\l.\l.\mc{T}\r|_Y\r|_Z=\l.\mc{T}\r|_Z$](Subspace%20topology%20of%20subspace%20topology%20is%20subspace%20topology.md), [$\l.\l(\mc{T}_X\times\mc{T}_Y\r)\r|_{S\times T}=\l.\mc{T}_X\r|_S\times\l.\mc{T}_Y\r|_T$](Product%20and%20subspace%20topologies%20on%20subsets%20coincide.md), [$\mc{T}\l(\l.<\r|_Y\r)\subseteq\l.\mc{T}\l(<\r)\r|_Y$](Restricted%20order%20topology%20subset%20of%20subspace%20topology.md), [[Restricted order and subspace topologies coincide for convex sets]]
Sufficiencies: _Not Applicable_
Equivalences: [[Subspace topology (basis)]], [[Subspace topology (subbasis)]]
Justifications: [[Subspace topology is a topology]]

``` ad-Definition
title: Definition.

_Let $\l\langle X,\mc{T}\r\rangle$ be a topological space and fix a subset $Y\subseteq X$. Then the **subspace topology on $Y$ inherited from $X$ w.r.t. $\mc{T}$** is the topology_
$$\begin{equation}
    \l.\mc{T}\r|_Y\coloneqq\l\{V\in\pow\l(Y\r)\mid\ex U\in\mc{T}:V=U\cap Y\r\}.
\end{equation}$$

```

**Remark.** The subspace topology on $Y$ can be visualized by the following diagram:

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/11-02-2022_115828/image.svg", width=260></center>

The thick intervals $V_1$ and $V_2$ are open in $\l.\mc{T}\r|_Y$ since $V_1=U_1\cap Y$ and $V_2=U_2\cap Y$.<span style="float:right;">$\blacklozenge$</span>
