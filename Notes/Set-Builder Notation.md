<br />
<br />

Date Created: 16/01/2022 15:26:07
Context: #FOL $\to$ #ZF
Tags: #Definition #Closed  

Types: _Not Applicable_
Examples: _Not Applicable_ 
Constructions: [[Pair Set]], [[Union]], [[Intersection]], [[Power Set]], [[Relative Complement]], [[Domain and Range]], [[Replacement Image]], [[Cartesian Product (Kuratowski)]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Set-builder notation is unique]]

``` ad-Definition
title: Definition.

_Let $z$ be the set asserted by the Axiom Schema of Specification, that is, let $z$ be a set such that there exists a set $v$ and a formula $\phi\l(x\r)$, not free in $z$, such that $\fa x\l[x\in z\Leftrightarrow\l(x\in v\land\phi\l(x\r)\r)\r]$. Then the set $z$ can be written in **set-builder notation** as_
$$\begin{equation}
    \l\{x\mid x\in v\land\phi\l(x\r)\r\}\ \ \ \ \ \ \ \ \textit{or}\ \ \ \ \ \ \ \ \l\{x\in v\mid\phi\l(x\r)\r\}.
\end{equation}$$

```

**Remark.** In particular, observe that $\fa x\l(x\in z\Rightarrow x\in v\r)$. Hence $z\subseteq v$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** To construct a set $z$ whose elements $x$ are exactly the ones satisfying a certain property $\phi\l(x\r)$, we must show that there exists some set $v$ such that $\phi\l(x\r)\Rightarrow x\in v$ for then the Axiom Schema of Specification shows that $z$ is indeed a set.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** It is convenient to introduce the notation
$$\begin{equation}
    \l\{\psi\l(x_1,\dots,x_2\r)\mid\phi\l(x\r)\r\}\coloneqq\l\{x\mid\ex x_1,\dots,x_n:x=\psi\l(x_1,\dots,x_2\r)\land\phi\l(x\r)\r\}
\end{equation}$$
where $\psi\l(x_1,\dots,x_n\r)$ is some pre-defined expression involving the sets $x_1,\dots,x_n$.<span style="float:right;">$\blacklozenge$</span>
