<br />
<br />

Date Created: 06/03/2022 15:11:37
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: [[Identity Functor]], [[Inclusion Functor]], [[Constant Functor]], [[Covariant Power Set Functor]]
Constructions: [[Natural Transformation]], [[Comma Category]], [[Composition (Functor)]], [[Left inverse (Functor)]], [[Right Inverse (Functor)]], [[Diagram]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition (Informal).

_Let $\cat{C}$ and $\cat{D}$ be categories. A **(covariant) functor $\ms{F}$ from $\cat{C}$ to $\cat{D}$** is a pair_ $\l\langle\ms{F}^{\obj},\l\{\ms{F}^{\hom}_{X,Y}\r\}_{X,Y\in\obj\l(\cat{C}\r)}\r\rangle$ _where_
$$\begin{equation}
    \ms{F}^{\obj}:\obj\l(\cat{C}\r)\to\obj\l(\cat{D}\r)
\end{equation}$$
and, for all $X,Y\in\obj\l(\cat{C}\r)$,
$$\begin{equation}
    \ms{F}^{\hom}_{X,Y}:\hom_\cat{C}\!\l(X,Y\r)\to\hom_\cat{D}\!\l(\ms{F}^{\obj}\l(X\r),\ms{F}^{\obj}\l(Y\r)\r),
\end{equation}$$

_satisfying:_
* _$\axifunctor[1]$ (Unitality)$\bf{.}$ For all $X\in\obj\l(\cat{C}\r)$,_ $\ms{F}^{\hom}\l(\id_X\r)=\id_{\ms{F}^{\obj}\l(X\r)}$_._
* _$\axifunctor[2]$ (Compositionality)$\bf{.}$ For all $X,Y,Z\in\obj\l(\cat{C}\r)$,_ $f\in\hom_\cat{C}\!\l(X,Y\r)$_, and_ $g\in\hom_\cat{C}\!\l(Y,Z\r)$_, the following diagram commutes._
  <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-06_160504/image.svg", width=300></center>

    _That is,_ $\ms{F}^{\hom}\l(g\circ_\cat{C}f\r)=\ms{F}^{\hom}\l(g\r)\circ_\cat{D}\ms{F}^{\hom}\l(f\r)$_._

```

**Remark.** If $\ms{F}$ is a functor from $\cat{C}$ to $\cat{D}$, write $\ms{F}:\cat{C}\to\cat{D}$. By abuse of notation, denote both $\ms{F}^{\obj}$ and $\ms{F}^{\hom}$ by $\ms{F}$ itself.<span style="float:right;">$\blacklozenge$</span>
