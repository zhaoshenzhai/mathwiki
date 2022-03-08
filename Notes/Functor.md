<br />
<br />

Date Created: 06/03/2022 15:11:37
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: [[Identity Functor]], [[Covariant Power Set Functor]]
Constructions: [[Composition (Functor)]], [[Comma Category]]
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
* _$\axifunctor[2]$ (Compositionality)$\bf{.}$ For all $X,Y,Z\in\obj\l(\cat{C}\r)$,_ $f\in\hom_\cat{C}\!\l(X,Y\r)$_, and_ $g\in\hom_\cat{C}\!\l(Y,Z\r)$_, the following diagram commutes._
  <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-06_160504/image.svg", width=300></center>

    _That is,_ $\ms{F}_\textrm{Hom}\l(g\circ f\r)=\ms{F}_\textrm{Hom}\l(g\r)\circ\ms{F}_\textrm{Hom}\l(f\r)$ _where the $\textrm{`}\circ\textrm{'}$ on the left hand side is the composition on $\cat{C}$ and the $\textrm{`}\circ\textrm{'}$ on the right hand side is the composition on $\cat{D}$._

```

**Remark.** If $\ms{F}$ is a functor from $\cat{C}$ to $\cat{D}$, write $\ms{F}:\cat{C}\to\cat{D}$. By abuse of notation, denote both $\ms{F}_\textrm{Obj}$ and $\ms{F}_\textrm{Hom}$ by $\ms{F}$ itself.<span style="float:right;">$\blacklozenge$</span>
