<br />
<br />

Date Created: 06/03/2022 16:54:42
Tags: #Definition #In_Progress

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\cat{C}$, $\cat{D}$, and $\cat{E}$ be categories and fix two functors $\ms{F}:\cat{C}\to\cat{E}$ and $\ms{G}:\cat{D}\to\cat{E}$. The **comma category of $\ms{F}$ over $\ms{G}$** is the category $\l(\ms{F}\downarrow\ms{G}\r)$ defined by the following data:_
* _The objects are triples $\l\langle C,D,f\r\rangle$ where $C\in\obj\l(\cat{C}\r)$, $D\in\obj\l(\cat{D}\r)$, and $f:\ms{F}\l(C\r)\to\ms{G}\l(D\r)\in\hom\l(\cat{E}\r)$._

* _For all $\l(\ms{F}\downarrow\ms{G}\r)$-objects $\l\langle C,D,f\r\rangle$ and $\l\langle C',D',f'\r\rangle$, the morphisms from $\l\langle C,D,f\r\rangle$ to $\l\langle C',D',f'\r\rangle$ are pairs $\l\langle\phi,\psi\r\rangle$ where $\phi:C\to C'\in\hom\l(\cat{C}\r)$ and $\psi:D\to D'\in\hom\l(\cat{D}\r)$ such that the diagram_
  <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-06_170916/image.svg"></center>

    _commutes._

```
