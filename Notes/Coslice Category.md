<div class="topSpace"></div>

Date Created: 25/02/2022 19:36:21
Tags: #Type/Definition #Later/Category_Theory

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: [[Comma Category]]

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: [[Coslice category is comma category of inclusion over identity]]
Justifications: [[Coslice category is a category]]

``` ad-Definition
title: Definition.

_Let $\cat{C}$ be a category and fix $C\in\Obj\l(\cat{C}\r)$. The **coslice category of $\cat{C}$ under $C$** is the category $\l(C\downarrow\cat{C}\r)$ defined by the following data:_
* _The objects are pairs $\tpl{X,f}$ where $X\in\Obj\l(\cat{C}\r)$ and $f$ is a $\cat{C}$-morphisms with $\dom f=C$; that is,_
$$\begin{equation}
    \Obj\l(C\downarrow\cat{C}\r)\coloneqq\l\{f\in\Hom_\cat{C}\!\l(C,X\r)\mid X\in\Obj\l(\cat{C}\r)\r\}.
\end{equation}$$
* _For all $\l(C\downarrow\cat{C}\r)$-objects $\tpl{X,f}$ and $\tpl{X',f'}$, the morphisms from $\tpl{X,f}$ to $\tpl{X',f'}$ are $\cat{C}$-morphisms $\psi:X\to X'$ such that the diagram_
![[Images/2022-03-07_161830/image.svg|180]]

  _commutes; that is,_$$\begin{equation}
      \Hom_{\l(C\downarrow\cat{C}\r)}\!\l(\tpl{X,f},\tpl{X',f'}\r)\coloneqq\l\{\psi\in\Hom_\cat{C}\!\l(X,X'\r)\mid f'=\psi\circ f\r\}.
  \end{equation}$$
* _For all $\l(C\downarrow\cat{C}\r)$-objects $\tpl{X,f}$, the identity morphism on $\tpl{X,f}$ is the $\cat{C}$-identity $\id_X$._
* _For all $\l(C\downarrow\cat{C}\r)$-morphisms $\psi:\tpl{X_1,f_1}\to\tpl{X_2,f_2}$ and $\psi':\tpl{X_2,f_2}\to\tpl{X_3,f_3}$, the composite morphism of $\psi'$ after $\psi$ is the $\cat{C}$-composite morphism $\psi'\circ\psi:X_1\to X_3$._

```
