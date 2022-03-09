<br />
<br />

Date Created: 06/03/2022 16:54:42
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: [[Slice category is comma category of identity over inclusion]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Comma category is a category]]

``` ad-Definition
title: Definition.

_Let $\cat{C}$, $\cat{D}$, and $\cat{E}$ be categories and fix two covariant functors_
<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-07_144906/image.svg", width=140></center>

_The **comma category of $\ms{F}$ over $\ms{G}$** is the category $\l(\ms{F}\downarrow\ms{G}\r)$ defined by the following data:_
* _The objects are triples $\l\langle E,D,f\r\rangle$ where $E\in\obj\l(\cat{E}\r)$, $D\in\obj\l(\cat{D}\r)$, and_ $f\in\hom_\cat{C}\!\l(\ms{F}\l(E\r),\ms{G}\l(D\r)\r)$_._

* _For all $\l(\ms{F}\downarrow\ms{G}\r)$-objects $\l\langle E,D,f\r\rangle$ and $\l\langle E',D',f'\r\rangle$, the morphisms from $\l\langle E,D,f\r\rangle$ to $\l\langle E',D',f'\r\rangle$ are pairs $\l\langle\phi,\psi\r\rangle$ where $\phi:E\to E'$ and $\psi:D\to D'$ such that the diagram_
  <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-06_170916/image.svg", width=140></center>

    _commutes; that is,_
    $$\begin{equation}
        \hom_{\l(\ms{F}\downarrow\ms{G}\r)}\!\l(\l\langle E,D,f\r\rangle,\l\langle E',D',f'\r\rangle\r)\coloneqq\l\{\l\langle\phi,\psi\r\rangle\in\hom_\cat{E}\!\l(E,E'\r)\times\hom_\cat{D}\!\l(D,D'\r)\mid\ms{G}\l(\psi\r)\circ f=f'\circ\ms{F}\l(\phi\r)\r\}.
    \end{equation}$$
* _For all $\l(\ms{F}\downarrow\ms{G}\r)$-objects $\l\langle E,D,f\r\rangle$, the identity morphism on $\l\langle E,D,f\r\rangle$ is the pair $\l\langle\id_E,\id_D\r\rangle$._
* _For all $\l(\ms{F}\downarrow\ms{G}\r)$-morphisms $\l\langle\phi,\psi\r\rangle:\l\langle E_1,D_1,f_1\r\rangle\to\l\langle E_2,D_2,f_2\r\rangle$ and $\l\langle\phi',\psi'\r\rangle:\l\langle E_2,D_2,f_2\r\rangle\to\l\langle E_3,D_3,f_3\r\rangle$, the composite morphism of $\l\langle\phi',\psi'\r\rangle$ after $\l\langle\phi,\psi\r\rangle$ is the pair $\l\langle\phi'\circ\phi,\psi'\circ\psi\r\rangle$._

```
