<br />
<br />

Date Created: 16/03/2022 16:48:30
Tags: #Definition #Category_Theory

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: [[Category (via Hom-classes)]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\mb{U}$ be a Grothendieck universe. A **$\mb{U}$-category (via directed graphs)** is a sextuple $\cat{C}\coloneqq\l\langle\mc{O},\mc{H},\dom,\cdm,\id,\circ\r\rangle$ consisting of_
* _a $\mb{U}$-class $\obj\l(\cat{C}\r)\coloneqq\mc{O}\subseteq\mb{U}$ whose elements are called **$\cat{C}$-objects**,_
* _a $\mb{U}$-class $\hom\l(\cat{C}\r)\coloneqq\mc{H}\subseteq\mb{U}$ whose elements are called **$\cat{C}$-morphisms**,_
* _two functions $\dom,\cdm:\mc{O}\to\mc{H}$ assigning to each morphism $f\in\mc{H}$ its **domain** and **codomain**, respectively,_
* _a function $\id:\mc{O}\to\mc{H}$ assigning to each object $X\in\mc{O}$ an element $\id_X\in\mc{H}$ called the **$\cat{C}$-identity of $X$**, and_
* _a function $\circ:\mc{C}\to\mc{H}$, where $\mc{C}\coloneqq\l\{\l\langle f,g\r\rangle\in\mc{H}^2\mid\cdm f=\dom g\r\}$ is the set of all **composable pairs of morphisms**, assigning to each such pair $\l\langle f,g\r\rangle$ to its **$\cat{C}$-composite** $g\circ f$,_

_satisfying:_
* _$\axicat[Targets]\bf{.}$ For all composable pairs $\l\langle f,g\r\rangle\in\mc{C}$ and objects $X\in\mc{O}$, we have that $\dom\l(g\circ f\r)=f$, $\cdm\l(g\circ f\r)=g$, and $\dom\l(\id_X\r)=X=\cdm\l(\id_X\r)$._

* _$\axicat[Associativity]\bf{.}$ For all $f,g,h\in\mc{H}$ with $\l\langle f,g\r\rangle,\l\langle g,h\r\rangle\in\mc{C}$, we have that $h\circ\l(g\circ f\r)=\l(h\circ g\r)\circ f$; that is, the following diagram commutes:_

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-02-21_142913/image.svg", width=330, width=230></center>

* _$\axicat[Unit]\bf{.}$ For all $f\in\mc{H}$, we have that_ $\id_{\cdm f}\circ f=f=f\circ\id_{\dom f}$_; that is, the following diagram commutes:_

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-16_175045/image.svg", width=330></center>

```

**Remark.** To even state $\axicat[Associativity]$, we need that $\l\langle g\circ f,h\r\rangle,\l\langle f,h\circ g\r\rangle$
