<div class="topSpace"></div>

Date Created: 09/03/2022 08:46:47
Tags: #Type/Definition #Later/Set_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Category]], [[Functor]], [[Natural Transformation]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Informal).

Let $X\coloneqq\l\{x\st\psi\l(x\r)\r\}$ be a class. The formula $\phi\l(x,y\r)$ is referred to as a <b>class function</b> if
$$\begin{equation}
    \fa x:\l[\psi\l(x\r)\Rightarrow\ex!y:\phi\l(x,y\r)\r]
\end{equation}$$
and we wish to consider the collection of all pairs $\tpl{x,y}$ satisfying $\phi\l(x,y\r)$; write $\dom\phi\coloneqq X$, and, if there exists some formula $\xi\l(y\r)$ such that
$$\begin{equation}
    \fa y:\l[\xi\l(y\r)\Rightarrow\l(\ex x:\psi\l(x\r)\land\phi\l(x,y\r)\r)\r],
\end{equation}$$
write $\cdm\phi\coloneqq Y\coloneqq\l\{y\st\xi\l(y\r)\r\}$ and $\phi:X\to Y$.

```
