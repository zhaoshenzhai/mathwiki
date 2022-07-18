<br />
<br />

Date Created: 09/03/2022 08:46:47
Tags: #Definition #Later/Set_Theory

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Category]], [[Functor]], [[Natural Transformation]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition (Informal).

_Let $X\coloneqq\l\{x\mid\psi\l(x\r)\r\}$ be a class. The formula $\phi\l(x,y\r)$ is referred to as a **class function** if_
$$\begin{equation}
    \fa x:\l[\psi\l(x\r)\Rightarrow\ex!y:\phi\l(x,y\r)\r]
\end{equation}$$
_and we wish to consider the collection of all pairs $\tpl{x,y}$ satisfying $\phi\l(x,y\r)$; write $\dom\phi\coloneqq X$, and, if there exists some formula $\xi\l(y\r)$ such that_
$$\begin{equation}
    \fa y:\l[\xi\l(y\r)\Rightarrow\l(\ex x:\psi\l(x\r)\land\phi\l(x,y\r)\r)\r],
\end{equation}$$
_write $\cdm\phi\coloneqq Y\coloneqq\l\{y\mid\xi\l(y\r)\r\}$ and $\phi:X\to Y$._

```
