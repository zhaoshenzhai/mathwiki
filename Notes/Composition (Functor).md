<div class="topSpace"></div>

Date Created: 08/03/2022 15:53:32
Tags: #Type/Definition #Topic/Category_Theory/Later

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Composition of functors is associative]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\cat{C}$, $\cat{D}$, and $\cat{E}$ be categories and consider two functors $\ms{F}:\cat{C}\to\cat{D}$ and $\ms{G}:\cat{D}\to\cat{E}$. The <b>composite functor of $\ms{G}$ after $\ms{F}$</b> is the functor $\ms{G}\circ\ms{F}:\cat{C}\to\cat{E}$ defined by:
* The (class) function $\l(\ms{G}\circ\ms{F}\r)^{\Obj}$ which sends each $X\in\Obj\l(\cat{C}\r)$ to $\ms{G}^{\Obj}\l(\ms{F}^{\Obj}\l(X\r)\r)$.
* For all objects $X,Y\in\Obj\l(\cat{C}\r)$, the function
$$\begin{equation}
    \begin{aligned}
        \l(\ms{G}\circ\ms{F}\r)^{\Hom}:\Hom_\cat{C}\!\l(X,Y\r)&\to\Hom_\cat{E}\!\l(\l(\ms{G}\circ\ms{F}\r)^{\Obj}\l(X\r),\l(\ms{G}\circ\ms{F}\r)^{\Obj}\l(Y\r)\r)\\
        f&\mapsto\ms{G}^{\Hom}\l(\ms{F}^{\Hom}\l(f\r)\r).
    \end{aligned}
\end{equation}$$

```
