<br />
<br />

Date Created: 12/03/2022 17:41:32
Tags: #Definition #Later/Category_Theory

Types: [[Locally-small Category]], [[Groupoid]]
Examples: _Not Applicable_
Constructions: [[Object (Category Theory)]], [[Morphism (Category Theory)]], [[Functor]], [[Opposite Category]], [[Slice Category]], [[Coslice Category]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: [[Category (via Directed Graphs)]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\mb{U}$ be a Grothendieck universe. A **$\mb{U}$-category (via a family of hom-classes)** is a quadruple $\cat{C}\coloneqq\tpl{\mc{O},\hom,\id,\comp}$ consisting of_
* _a $\mb{U}$-class $\obj\l(\cat{C}\r)\coloneqq\mc{O}\subseteq\mb{U}$,_
* _a function $\hom$ assigning to each $\tpl{X,Y}\in\mc{O}^2$ a $\mb{U}$-class $\hom\l(X,Y\r)\subseteq\mb{U}$,_
* _a function $\id$ assigning to each $X\in\mc{O}$ an element $\id_X\coloneqq\id\l(X\r)\in\hom\l(X,Y\r)$, and_
* _a function $\comp$ assigning to each $\tpl{X,Y,Z}\in\mc{O}^3$ a function_
$$\begin{equation}
    \begin{aligned}
        \circ:\hom\l(X,Y\r)\times\hom\l(Y,Z\r)&\to\hom\l(X,Z\r)\\
        \tpl{f,g}&\mapsto g\circ f\coloneqq\circ\tpl{f,g},
    \end{aligned}
\end{equation}$$

_such that, for all $X,Y,Z,W\in\mc{O}$:_
* _$\axicat[1]$ (Associativity)$\bf{.}$ For all $f\in\hom\l(X,Y\r)$, $g\in\hom\l(Y,Z\r)$, and $h\in\hom\l(Z,W\r)$, the following diagram commutes._
<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-02-21_142913/image.svg", width=230></center>

* _$\axicat[2]$ (Unit)$\bf{.}$ For all $f\in\hom\l(X,Y\r)$, the following diagram commutes._
<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-02-09_213021/image.svg", width=230></center>
* _$\axicat[3]$ (Disjoint)$\bf{.}$ If $X\neq Z$ or $Y\neq W$, then $\hom\l(X,Y\r)\cap\hom\l(Z,W\r)=\em$._

```

**Remark.** $\axicat[3]$ can be $\textrm{`}$forced$\textrm{'}$ to hold since one can replace morphisms $f\in\hom\l(X,Y\r)$ with the triple $\tpl{f,X,Y}$; this is done, for instance, in $\catset$. Thus $\axicat[3]$ can be disregarded when verifying the axioms of a category.<span style="float:right;">$\blacklozenge$</span>
