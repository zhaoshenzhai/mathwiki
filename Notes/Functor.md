<div class="topSpace"></div>

Date Created: 06/03/2022 15:11:37
Tags: #Type/Definition #Later/Category_Theory

Types: [[Left-invertible Functor]], [[Right-invertible Functor]], [[Diagram]]
Examples: [[Identity Functor]], [[Inclusion Functor]], [[Constant Functor]], [[Covariant Power Set Functor]]
Constructions: [[Natural Transformation]], [[Comma Category]], [[Composition (Functor)]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\cat{C}$ and $\cat{D}$ be categories. A **(covariant) functor $\ms{F}$ from $\cat{C}$ to $\cat{D}$** is an assignment that maps each $X\in\Obj\l(\cat{C}\r)$ to some $\ms{F}^{\Obj}\l(X\r)\in\Obj\l(\cat{D}\r)$ and each $f:X\to Y$ to some $\ms{F}^{\Hom}\l(f\r):\ms{F}^{\Obj}\l(X\r)\to\ms{F}^{\Obj}\l(Y\r)$, satisfying:_
* _$\axifunctor[1]$ (Unitality)$\bf{.}$ For all $X\in\Obj\l(\cat{C}\r)$,_ $\ms{F}^{\Hom}\l(\id_X\r)=\id_{\ms{F}^{\Obj}\l(X\r)}$_._

* _$\axifunctor[2]$ (Compositionality)$\bf{.}$ For all $X,Y,Z\in\Obj\l(\cat{C}\r)$,_ $f\in\Hom_\cat{C}\!\l(X,Y\r)$_, and_ $g\in\Hom_\cat{C}\!\l(Y,Z\r)$_, the following diagram commutes._
  <center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-03-06_160504/image.svg", width=300></center>

  _That is,_ $\ms{F}^{\Hom}\l(g\circ_\cat{C}\!f\r)=\ms{F}^{\Hom}\l(g\r)\circ_\cat{D}\!\ms{F}^{\Hom}\l(f\r)$_._

```

**Remark.** Formally, $\ms{F}\coloneqq\tpl{\ms{F}^{\Obj},\l\{\ms{F}^{\Hom}_{X,Y}\r\}_{X,Y\in\Obj\l(\cat{C}\r)}}$ where
$$\begin{equation}
    \ms{F}^{\Obj}:\Obj\l(\cat{C}\r)\to\Obj\l(\cat{D}\r)
\end{equation}$$
and, for all $X,Y\in\Obj\l(\cat{C}\r)$,
$$\begin{equation}
    \ms{F}^{\Hom}_{X,Y}:\Hom_\cat{C}\!\l(X,Y\r)\to\Hom_\cat{D}\!\l(\ms{F}^{\Obj}\l(X\r),\ms{F}^{\Obj}\l(Y\r)\r).\exqedin
\end{equation}$$

---

**Remark.** If $\ms{F}$ is a functor from $\cat{C}$ to $\cat{D}$, write $\ms{F}:\cat{C}\to\cat{D}$. By abuse of notation, denote $\ms{F}^{\Obj}$ and all $\ms{F}^{\Hom}_{X,Y}$ by $\ms{F}$ itself.<span style="float:right;">$\blacklozenge$</span>
