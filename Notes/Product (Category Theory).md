<br />
<br />

Date Created: 12/03/2022 11:37:51
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: [[Cartesian Product]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $\cat{C}$ be a category and consider an indexed family_ $\l\{X_i\r\}_{i\in I}$ _of objects in $\cat{C}$. A **(categorical) product of $\l\{X_i\r\}$** is a pair $\tpl{X,\l\{\pi_i\r\}}$ consisting of_
* _an object $X$, denoted by_ $\prod_{i\in I}X_i$_, and_
* _a family of morphisms $\pi_i:X\to X_i$, called **canonical projections**,_

_such that for every object $Y\in\obj\l(\cat{C}\r)$ and family of morphisms $\l\{\tau_i:Y\to X_i\r\}$, there exists a unique morphism $\phi:Y\to X$ making each diagram_

<center><img src="https://raw.githubusercontent.com/zhaoshenzhai/MathWiki/master/Images/2022-03-12_114225/image.svg", width=120></center>

_commute; that is, if each $\tau_i$ factors uniquely as $\tau_i=\pi_i\circ\phi$._

```
