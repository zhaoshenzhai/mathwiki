<div class="topSpace"></div>

Date Created: 25/02/2022 14:25:38
Tags: #Type/Definition #Later/Category_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: [[Comma Category]]

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Slice category is comma category of identity over inclusion]]
Justifications: [[Slice category is a category]]

``` ad-Definition
title: Definition.

Let $\cat{C}$ be a category and fix $C\in\Obj\l(\cat{C}\r)$. The <b>slice category of $\cat{C}$ over $C$</b> is the category $\l(\cat{C}\downarrow C\r)$ defined by the following data:
* The objects are pairs $\tpl{X,f}$ where $X\in\Obj\l(\cat{C}\r)$ and $f$ is a $\cat{C}$-morphisms with $\cdm f=C$; that is,
$$\begin{equation}
    \Obj\l(\cat{C}\downarrow C\r)\coloneqq\l\{f\in\Hom_\cat{C}\!\l(X,C\r)\mid X\in\Obj\l(\cat{C}\r)\r\}.
\end{equation}$$
* For all $\l(\cat{C}\downarrow C\r)$-objects $\tpl{X,f}$ and $\tpl{X',f'}$, the morphisms from $\tpl{X,f}$ to $\tpl{X',f'}$ are $\cat{C}$-morphisms $\phi:X\to X'$ such that the diagram
![[Images/2022-02-25_145240/image.svg|180]]

  commutes; that is,$$\begin{equation}
      \Hom_{\l(\cat{C}\downarrow C\r)}\!\l(\tpl{X,f},\tpl{X',f'}\r)\coloneqq\l\{\phi\in\Hom_\cat{C}\!\l(X,X'\r)\mid f=f'\circ\phi\r\}.
  \end{equation}$$
* For all $\l(\cat{C}\downarrow C\r)$-objects $\tpl{X,f}$, the identity morphism on $\tpl{X,f}$ is the $\cat{C}$-identity $\id_X$.
* For all $\l(\cat{C}\downarrow C\r)$-morphisms $\phi:\tpl{X_1,f_1}\to\tpl{X_2,f_2}$ and $\phi':\tpl{X_2,f_2}\to\tpl{X_3,f_3}$, the composite morphism of $\phi'$ after $\phi$ is the $\cat{C}$-composite morphism $\phi'\circ\phi:X_1\to X_3$.

```
