<div class="topSpace"></div>

Date Created: 16/01/2022 12:08:10
Tags: #Type/Axiom #Later/Set_Theory

Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>

``` ad-Axiom
title: Axiom Schema.

Consider the first-order language $\mc{L}$ consisting of one binary relation symbol $\in$ and let $\phi\l(x\r)$ be any $\mc{L}$-logical formula without $z$ free. The <b>Axiom Schema of Specification</b> is the $\mc{L}$-scheme
$$\begin{equation}
    \fa A\ex S\fa x\l[x\in S\Leftrightarrow\l(x\in A\land\phi\l(x\r)\r)\r].
\end{equation}$$

```

<b>Remark.</b> Observe, in particular, that $\fa x\l(x\in S\Rightarrow x\in A\r)$, so $S\subseteq A$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> To construct a set $S$ whose elements $x$ are exactly the ones satisfying a certain property $\phi\l(x\r)$, we must show that there exists some set $A$ such that $\phi\l(x\r)\Rightarrow x\in A$, for then Specification shows that $S$ is indeed a set.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> By Extensionality, such a set $S$ is unique and can thus be written as
$$\begin{equation}
    \l\{x\mid x\in A\land\phi\l(x\r)\r\}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \l\{x\in A\mid\phi\l(x\r)\r\}.
\end{equation}$$
It is also convenient to introduce the notation
$$\begin{equation}
    \l\{\psi\l(x_1,\dots,x_2\r)\mid\phi\l(x\r)\r\}\coloneqq\l\{x\mid\ex x_1,\dots,x_n:x=\psi\l(x_1,\dots,x_2\r)\land\phi\l(x\r)\r\}
\end{equation}$$
where $\psi\l(x_1,\dots,x_n\r)$ is some pre-defined expression involving the sets $x_1,\dots,x_n$.<span style="float:right;">$\blacklozenge$</span>
