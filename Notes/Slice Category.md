<br />
<br />

Date Created: 25/02/2022 14:25:38
Tags: #Definition #In_Progress

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Slice category is a category]]

``` ad-Definition
title: Definition.

_Let $\cat{C}$ be a category and fix $X\in\obj\l(\cat{C}\r)$. The **slice category of $\cat{C}$ over $X$** is the category $\l(\cat{C}\downarrow X\r)$ where_
* _$\obj\l(\cat{C}\downarrow X\r)\coloneqq\l\{f\in\hom\l(\cat{C}\r)\mid\ex Z\in\obj\l(\cat{C}\r):\cdm f=X\r\}$ containing all $\cat{C}$-morphisms $f$ with $\cdm f=X$,_

* _for all $f,g\in\obj\l(\cat{C}\downarrow X\r)$,_$$\begin{equation}
        \hom_{\cat{C}\downarrow X}\!\l(f,g\r)\coloneqq\l\{\sigma\in\hom_\cat{C}\!\l(\dom f,\dom g\r)\mid f=g\circ\sigma\r\}
    \end{equation}$$
    _containing all $\cat{C}$-morphisms $\sigma:\dom f\to\dom g$ such that the diagram_
    <center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/25-02-2022_145240/image.svg"></center>
_commutes,_
* _for all $f\in\obj\l(\cat{C}\downarrow X\r)$,_ $\id_f\coloneqq\id_{\dom f}$_,_
* _for all morphisms $\sigma:f\to g$ and $\tau:g\to h$, the composite morphism $\tau\circ\sigma$ is the composition function $\tau\circ\sigma:\dom f\to\dom h$._

```
