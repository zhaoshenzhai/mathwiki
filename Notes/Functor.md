<br />
<br />

Date Created: 06/03/2022 15:11:37
Tags: #Definition #In_Progress

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

_Let $\cat{C}$ and $\cat{D}$ be categories. A **(covariant) functor $\ms{F}$ from $\cat{C}$ to $\cat{D}$** consists of the data of_
* _ a (class) function_ $\ms{F}_\textrm{Obj}:\obj\l(\cat{C}\r)\to\obj\l(\cat{D}\r)$ _and,_
* _for all $X,Y\in\obj\l(\cat{C}\r)$, a function_
$$\begin{equation}
    \ms{F}_\textrm{Hom}:\hom_\cat{C}\!\l(X,Y\r)\to\hom_\cat{D}\!\l(\ms{F}_\textrm{Obj}\l(X\r),\ms{F}_\textrm{Obj}\l(Y\r)\r)
\end{equation}$$

_satisfying:_
* _$\axifunctor[1]$ (Unitality)$\bf{.}$ For all $X\in\obj\l(\cat{C}\r)$,_ $\ms{F}_\textrm{Hom}\l(\id_X\r)=\id_{\ms{F}_\textrm{Obj}\l(X\r)}$_._
* $\axifunctor[2]$ (Compositionality)$\bf{.}$ For all $X,Y,Z\in\obj\l(\cat{C}\r)$, $f\in\hom_\cat{C}\!\l(X,Y\r)$, and $g\in\hom_\cat{C}\!\l(Y,Z\r)$, the following diagram commutes.

```
