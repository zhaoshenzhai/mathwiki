<div class="topSpace"></div>

Date Created: 25/02/2022 14:25:38
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: [[Comma Category]]

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: [[Slice category is comma category of identity over inclusion]]
Justifications: [[Slice category is a category]]

``` ad-Definition
title: Definition.

_Let $\cat{C}$ be a category and fix $C\in\obj\l(\cat{C}\r)$. The **slice category of $\cat{C}$ over $C$** is the category $\l(\cat{C}\downarrow C\r)$ defined by the following data:_
* _The objects are pairs $\tpl{X,f}$ where $X\in\obj\l(\cat{C}\r)$ and $f$ is a $\cat{C}$-morphisms with $\cdm f=C$; that is,_
$$\begin{equation}
    \obj\l(\cat{C}\downarrow C\r)\coloneqq\l\{f\in\hom_\cat{C}\!\l(X,C\r)\mid X\in\obj\l(\cat{C}\r)\r\}.
\end{equation}$$
* _For all $\l(\cat{C}\downarrow C\r)$-objects $\tpl{X,f}$ and $\tpl{X',f'}$, the morphisms from $\tpl{X,f}$ to $\tpl{X',f'}$ are $\cat{C}$-morphisms $\phi:X\to X'$ such that the diagram_
<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-02-25_145240/image.svg", width=180></center>

  _commutes; that is,_$$\begin{equation}
      \hom_{\l(\cat{C}\downarrow C\r)}\!\l(\tpl{X,f},\tpl{X',f'}\r)\coloneqq\l\{\phi\in\hom_\cat{C}\!\l(X,X'\r)\mid f=f'\circ\phi\r\}.
  \end{equation}$$
* _For all $\l(\cat{C}\downarrow C\r)$-objects $\tpl{X,f}$, the identity morphism on $\tpl{X,f}$ is the $\cat{C}$-identity $\id_X$._
* _For all $\l(\cat{C}\downarrow C\r)$-morphisms $\phi:\tpl{X_1,f_1}\to\tpl{X_2,f_2}$ and $\phi':\tpl{X_2,f_2}\to\tpl{X_3,f_3}$, the composite morphism of $\phi'$ after $\phi$ is the $\cat{C}$-composite morphism $\phi'\circ\phi:X_1\to X_3$._

```
