---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 26/01/2022 17:46:40
Tags: #Type/Definition #Later/Set_Theory

Types: <i>Not Applicable</i>
Examples: [[Inclusion Function]]
Constructions: <i>Not Applicable</i>
Generalizations: [[Restriction (Relation)]]

Properties: <i>Not Applicable</i>
Sufficiencies: [[Continuous Extension Theorem]]
Equivalences: <i>Not Applicable</i>
Justifications: [[Restriction of function is a function]]

``` ad-Definition
title: Definition.

Let $f:X\to Y$ and fix $S\subseteq X$. The <b>restriction of $f$ to $S$</b> is the function
$$\begin{equation}
    \l.f\r|_S:S\to Y\ \ \ \ \mathit{mapping}\ \ \ \ x\mapsto f\l(x\r)
\end{equation}$$
for all $x\in S$. Moreover, for all $\widetilde{X}\supseteq X$, a function $\widetilde{f}:\widetilde{X}\to Y$ is an <b>extension of $f$ to $\widetilde{X}$</b> if $\l.\widetilde{f}\r|_X=f$.

```

<b>Remark.</b> Formally, $\l.f\r|_S\coloneqq\l\{z\st\ex x\in S:z=\tpl{x,f\l(x\r)}\r\}$. Note that $\l.f\r|_S$ is also the restriction of $f$, _viewed as a relation_, since
$$\begin{align}
    \l.f\r|_S&=\l\{z\st\ex x\in S:x=\tpl{x,f\l(x\r)}\r\}\\
    &=\l\{z\st\ex x:x\in S\land z=\tpl{x,f\l(x\r)}\r\}\\
    &=\l\{z\st\ex x:z=\tpl{x,f\l(x\r)}\land x\in S\r\}\\
    &=\l\{z\st\ex x,y:z=\tpl{x,y}\land z\in f\land x\in S\r\}\\
    &=\l\{z\in f\st\ex x,y:z=\tpl{x,y}\land x\in S\r\}\\
    &=f\rest S.\exqedin
\end{align}$$
