<br />
<br />

Date Created: 15/01/2022 21:15:56
Categories: #Set_Theory
Status: _Next_

Types: _Not Applicable_
Examples: [[Union of empty set is empty]], [[Unions of sets equal but not the sets themselves]]
Properties: [[Union is monotone w.r.t. subsets]], [[Union with another set is monotone w.r.t. subsets]], [[Element of set is a subset of its union]], [[Set of unions and intersections are sets]]
Constructions: [[Intersection]]
Generalizations: _Not Applicable_

!!! ad-Definition Definition.

Let $u$ be a set. The **union of $u$** is the set $\bigcup u$ whose elements are exactly the elements of the elements of $u$.

--- admonition

_Proof_. (that $\bigcup u$ is a set): By the Axiom of Union, there exists a set $A$ such that for all $v$ and $x$, if $x\in v$ and $v\in u$, then $x\in A$:
$$\begin{equation}
    \ex A\fa v\fa x\l[\l(x\in v\land v\in u\r)\Rightarrow x\in A\r].
\end{equation}$$
