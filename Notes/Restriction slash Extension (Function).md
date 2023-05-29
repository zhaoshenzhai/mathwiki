---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 26/01/2022 17:46:40
Tags: #Type/Definition #Later/Set_Theory

Types: _Not Applicable_
Examples: [[Inclusion Function]]
Constructions: _Not Applicable_
Generalizations: [[Restriction (Relation)]]

Properties: _Not Applicable_
Sufficiencies: [[Continuous Extension Theorem]]
Equivalences: _Not Applicable_
Justifications: [[Restriction of function is a function]]

``` ad-Definition
title: Definition.

Let $f:X\to Y$ and fix $S\subseteq X$. The **restriction of $f$ to $S$** is the function
$$\begin{equation}
    \l.f\r|_S:S\to Y\ \ \ \ \textrm{\it{mapping}}\ \ \ \ x\mapsto f\l(x\r)
\end{equation}$$
for all $x\in S$. Moreover, for all $\widetilde{X}\supseteq X$, a function $\widetilde{f}:\widetilde{X}\to Y$ is an **extension of $f$ to $\widetilde{X}$** if $\l.\widetilde{f}\r|_X=f$.

```

<b>Remark.</b> Formally, $\l.f\r|_S\coloneqq\l\{z\mid\ex x\in S:z=\tpl{x,f\l(x\r)}\r\}$. Note that $\l.f\r|_S$ is also the restriction of $f$, _viewed as a relation_, since
$$\begin{align}
    \l.f\r|_S&=\l\{z\mid\ex x\in S:x=\tpl{x,f\l(x\r)}\r\}\\
    &=\l\{z\mid\ex x:x\in S\land z=\tpl{x,f\l(x\r)}\r\}\\
    &=\l\{z\mid\ex x:z=\tpl{x,f\l(x\r)}\land x\in S\r\}\\
    &=\l\{z\mid\ex x,y:z=\tpl{x,y}\land z\in f\land x\in S\r\}\\
    &=\l\{z\in f\mid\ex x,y:z=\tpl{x,y}\land x\in S\r\}\\
    &=f\rest S.\exqedin
\end{align}$$
