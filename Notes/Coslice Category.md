<div class="topSpace"></div>

Date Created: 25/02/2022 19:36:21
Tags: #Type/Definition #Topic/Category_Theory/Later

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: [[Comma Category]]

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Coslice category is comma category of inclusion over identity]]
Justifications: [[Coslice category is a category]]

``` ad-Definition
title: Definition.

Let $\cat{C}$ be a category and fix $C\in\Obj\l(\cat{C}\r)$. The <b>coslice category of $\cat{C}$ under $C$</b> is the category $\l(C\downarrow\cat{C}\r)$ defined by the following data:
* The objects are pairs $\tpl{X,f}$ where $X\in\Obj\l(\cat{C}\r)$ and $f$ is a $\cat{C}$-morphisms with $\dom f=C$; that is,
$$\begin{equation}
    \Obj\l(C\downarrow\cat{C}\r)\coloneqq\l\{f\in\Hom_\cat{C}\!\l(C,X\r)\st X\in\Obj\l(\cat{C}\r)\r\}.
\end{equation}$$
* For all $\l(C\downarrow\cat{C}\r)$-objects $\tpl{X,f}$ and $\tpl{X',f'}$, the morphisms from $\tpl{X,f}$ to $\tpl{X',f'}$ are $\cat{C}$-morphisms $\psi:X\to X'$ such that the diagram
![[Images/2022-03-07_161830/image.svg|180]]

  commutes; that is,$$\begin{equation}
      \Hom_{\l(C\downarrow\cat{C}\r)}\!\l(\tpl{X,f},\tpl{X',f'}\r)\coloneqq\l\{\psi\in\Hom_\cat{C}\!\l(X,X'\r)\st f'=\psi\circ f\r\}.
  \end{equation}$$
* For all $\l(C\downarrow\cat{C}\r)$-objects $\tpl{X,f}$, the identity morphism on $\tpl{X,f}$ is the $\cat{C}$-identity $\id_X$.
* For all $\l(C\downarrow\cat{C}\r)$-morphisms $\psi:\tpl{X_1,f_1}\to\tpl{X_2,f_2}$ and $\psi':\tpl{X_2,f_2}\to\tpl{X_3,f_3}$, the composite morphism of $\psi'$ after $\psi$ is the $\cat{C}$-composite morphism $\psi'\circ\psi:X_1\to X_3$.

```
