<br />
<br />

Date Created: 11/02/2022 11:45:28
Tags: #Definition #Closed

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Topological Subspace]]
Generalizations: _Not Applicable_

Properties: [[Open set in open subspace is open]], [[Subspace topology of subspace topology is subspace topology]], [[Product and subspace topologies on subsets coincide]], [[Restricted order topology subset of subspace topology]]
Sufficiencies: _Not Applicable_
Equivalences: [[Subspace topology (basis)]], [[Subspace topology (subbasis)]]
Justifications: [[Subspace topology is a topology]]

!!! ad-Definition Definition.

_Let $\l\langle X,\mc{T}\r\rangle$ be a topological space and fix a subset $Y\subseteq X$. Then the **subspace topology on $Y$ inherited from $X$ w.r.t. $\mc{T}$** is the topology_
$$\begin{equation}
    \l.\mc{T}\r|_Y\coloneqq\l\{V\in\mc{P}\l(Y\r)\mid\ex U\in\mc{T}:V=U\cap Y\r\}.
\end{equation}$$

--- admonition

**Remark.** The subspace topology on $Y$ can be visualized by the following diagram:

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/11-02-2022_1158/image.svg", width=25%></center>

The thick intervals $V_1$ and $V_2$ are open in $\l.\mc{T}\r|_Y$ since $V_1=U_1\cap Y$ and $V_2=U_2\cap Y$.<span style="float:right;">$\blacklozenge$</span>
