<br />
<br />

Date Created: 08/03/2022 15:53:32
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\cat{C}$, $\cat{D}$, and $\cat{E}$ be categories and consider two functors $\ms{F}:\cat{C}\to\cat{D}$ and $\ms{G}:\cat{D}\to\cat{E}$. The **composite functor of $\ms{G}$ after $\ms{F}$** is the functor $\ms{G}\circ\ms{F}:\cat{C}\to\cat{E}$ defined by:_
* _The (class) function_ $\l(\ms{G}\circ\ms{F}\r)_\textrm{Obj}$ _which sends each $X\in\obj\l(\cat{C}\r)$ to_ $\ms{G}_\textrm{Obj}\l(\ms{F}_\textrm{Obj}\l(X\r)\r)$_._
* _For all objects $X,Y\in\obj\l(\cat{C}\r)$, the function_
$$\begin{equation}
    \begin{aligned}
        \l(\ms{G}\circ\ms{F}\r)_\textrm{Hom}:\hom_\cat{C}\!\l(X,Y\r)&\to\hom_\cat{E}\!\l(\l(\ms{G}\circ\ms{F}\r)_\textrm{Obj}\l(X\r),\l(\ms{G}\circ\ms{F}\r)_\textrm{Obj}\l(Y\r)\r)\\
        f&\mapsto\ms{G}_\textrm{Hom}\l(\ms{F}_\textrm{Hom}\l(f\r)\r).
    \end{aligned}
\end{equation}$$

```
