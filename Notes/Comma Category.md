<div class="topSpace"></div>

Date Created: 06/03/2022 16:54:42
Tags: #Definition #Later/Category_Theory

Types: _Not Applicable_
Examples: [[Slice category is comma category of identity over inclusion]], [[Coslice category is comma category of inclusion over identity]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Comma category is a category]]

``` ad-Definition
title: Definition.

_Let $\cat{C}$, $\cat{D}$, and $\cat{E}$ be categories and fix two covariant functors_
<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-03-07_144906/image.svg", width=140></center>

_The **comma category of $\ms{F}$ over $\ms{G}$** is the category $\l(\ms{F}\downarrow\ms{G}\r)$ defined by the following data:_
* _The objects are triples $\tpl{E,D,f}$ where $E\in\Obj\l(\cat{E}\r)$, $D\in\Obj\l(\cat{D}\r)$, and_ $f\in\Hom_\cat{C}\!\l(\ms{F}\l(E\r),\ms{G}\l(D\r)\r)$_._

* _For all $\l(\ms{F}\downarrow\ms{G}\r)$-objects $\tpl{E,D,f}$ and $\tpl{E',D',f'}$, the morphisms from $\tpl{E,D,f}$ to $\tpl{E',D',f'}$ are pairs $\tpl{\phi,\psi}$ where $\phi:E\to E'$ and $\psi:D\to D'$ such that the diagram_
  <center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-03-06_170916/image.svg", width=140></center>

    _commutes; that is,_
    $$\begin{equation}
        \Hom_{\l(\ms{F}\downarrow\ms{G}\r)}\!\l(\tpl{E,D,f},\tpl{E',D',f'}\r)\coloneqq\l\{\tpl{\phi,\psi}\in\Hom_\cat{E}\!\l(E,E'\r)\times\Hom_\cat{D}\!\l(D,D'\r)\mid\ms{G}\l(\psi\r)\circ f=f'\circ\ms{F}\l(\phi\r)\r\}.
    \end{equation}$$
* _For all $\l(\ms{F}\downarrow\ms{G}\r)$-objects $\tpl{E,D,f}$, the identity morphism on $\tpl{E,D,f}$ is the pair $\tpl{\id_E,\id_D}$._
* _For all $\l(\ms{F}\downarrow\ms{G}\r)$-morphisms $\tpl{\phi,\psi}:\tpl{E_1,D_1,f_1}\to\tpl{E_2,D_2,f_2}$ and $\tpl{\phi',\psi'}:\tpl{E_2,D_2,f_2}\to\tpl{E_3,D_3,f_3}$, the composite morphism of $\tpl{\phi',\psi'}$ after $\tpl{\phi,\psi}$ is the pair $\tpl{\phi'\circ\phi,\psi'\circ\psi}$._

```
