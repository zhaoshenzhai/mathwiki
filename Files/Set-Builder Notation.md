<br />
<br />

Date Created: 16/01/2022 15:26:07
Tags: #Definition #Closed  

Requires: [[Axiom Schema of Specification]]

Types: _Not Applicable_
Examples: _Not Applicable_ 
Properties: [[Set-builder notation is unique]]
Constructions: [[Pair Set]], [[Union]], [[Intersection]], [[Power Set]], [[Relative Complement]], [[Domain and Range]], [[Replacement Image]], [[Cartesian Product (Kuratowski)]]
Generalizations: _Not Applicable_

!!! ad-Definition Definition.

Let $z$ be the set asserted by the Axiom Schema of Specification, that is, let $z$ be a set such that there exists a set $v$ and a formula $\phi\l(x\r)$, not free in $z$, such that $\fa x\l[x\in z\Leftrightarrow\l(x\in v\land\phi\l(x\r)\r)\r]$. Then the set $z$ can be written in **set-builder notation** as
$$\begin{equation}
    \l\{x\mid x\in v\land\phi\l(x\r)\r\}\ \ \ \ \ \ \ \ \textrm{or}\ \ \ \ \ \ \ \ \l\{x\in v\mid\phi\l(x\r)\r\}.
\end{equation}$$

--- admonition

**Remark.** To construct a set $z$ whose elements $x$ are exactly the ones satisfying a certain property $\phi\l(x\r)$, we must show that there exists some set $v$ such that $\phi\l(x\r)\Rightarrow x\in v$ for then the Axiom Schema of Specification shows that $z$ is indeed a set.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** In particular, observe that $\fa x\l(x\in z\Rightarrow x\in v\r)$. Hence $z\subseteq v$.<span style="float:right;">$\blacklozenge$</span>
