<div class="topSpace"></div>

Date Created: 08/03/2022 15:53:32
Tags: #Definition

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Identity functor is the identity of functor composition]], [[Composition of functors is associative]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\cat{C}$, $\cat{D}$, and $\cat{E}$ be categories and consider two functors $\ms{F}:\cat{C}\to\cat{D}$ and $\ms{G}:\cat{D}\to\cat{E}$. The **composite functor of $\ms{G}$ after $\ms{F}$** is the functor $\ms{G}\circ\ms{F}:\cat{C}\to\cat{E}$ defined by:_
* _The (class) function_ $\l(\ms{G}\circ\ms{F}\r)^{\obj}$ _which sends each $X\in\obj\l(\cat{C}\r)$ to_ $\ms{G}^{\obj}\l(\ms{F}^{\obj}\l(X\r)\r)$_._
* _For all objects $X,Y\in\obj\l(\cat{C}\r)$, the function_
$$\begin{equation}
    \begin{aligned}
        \l(\ms{G}\circ\ms{F}\r)^{\hom}:\hom_\cat{C}\!\l(X,Y\r)&\to\hom_\cat{E}\!\l(\l(\ms{G}\circ\ms{F}\r)^{\obj}\l(X\r),\l(\ms{G}\circ\ms{F}\r)^{\obj}\l(Y\r)\r)\\
        f&\mapsto\ms{G}^{\hom}\l(\ms{F}^{\hom}\l(f\r)\r).
    \end{aligned}
\end{equation}$$

```
