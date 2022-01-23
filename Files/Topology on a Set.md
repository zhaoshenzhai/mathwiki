<br />
<br />

Date Created: 23/01/2022 18:40:57
Tags: #Definition #Closed 

Requires: [[Subset]], [[Power Set]], [[Empty Set]], [[Union]], [[Intersection]], [[Cardinality]]
Constructions: [[Topological Space]]
Generalizations: _Not Applicable_

Types: _Not Applicable_
Examples: [[Trivial Topology]], [[Discrete Topology]], [[Cofinite Topology]], [[Cocountable Topology]]
Properties: _Not Applicable_

!!! ad-Definition Definition.

Let $X$ be a set. A **topology on $X$** is a set $\mc{T}\subseteq\ms{P}\l(X\r)$ satisfying:
* $\axi{Top1}$. $\em\in\mc{T}$ and $X\in\mc{T}$.
* $\axi{Top2}$. Arbitrary unions of elements of $\mc{T}$ are in $\mc{T}$:
$$\begin{equation}
    \fa\mc{U}\subseteq\mc{T}:\bigcup\mc{U}\in\mc{T}
\end{equation}$$
* $\axi{Top3}$. Finite intersections of elements of $\mc{T}$ are in $\mc{T}$:
$$\begin{equation}
    \fa\mc{U}\subseteq\mc{T}:\l(\mc{U}\neq\em\land\l|\mc{U}\r|<\infty\r)\Rightarrow\bigcap\mc{U}\in\mc{T}.
\end{equation}$$

Elements of $\mc{T}$ are said to be **open sets of $X$ w.r.t. $\mc{T}$**.

--- admonition
