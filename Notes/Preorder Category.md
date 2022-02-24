<br />
<br />

Date Created: 21/02/2022 19:00:12
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Preorder category is a category]]

``` ad-Definition
title: Definition.

_Let $\l\langle X,\leq\r\rangle$ be a preordered set. The **preorder category induced by $\l\langle X,\leq\r\rangle$** is the category_ $\cat{C}\l\langle X,\leq\r\rangle$ _whose objects are elements in $X$ and whose morphisms from $x\in X$ to $y\in X$ is the pair $\l\langle x,y\r\rangle$ if $x\leq y$ and is empty otherwise. Formally,_
* $\obj\l(\cat{C}\l\langle X,\leq\r\rangle\r)\coloneqq X$_,_
* _for all $x,y\in X$, $\hom\l(x,y\r)\coloneqq\l\{\l\langle x,y\r\rangle\r\}$ if $x\leq y$ and $\hom\l(x,y\r)=\em$ otherwise,_
* _for all $x\in X$, $\id_x\coloneqq\l\langle x,x\r\rangle$, and_
* _for all $x,y,z\in X$, the composite morphism is $\l\langle y,z\r\rangle\circ\l\langle x,y\r\rangle\coloneqq\l\langle x,z\r\rangle$._

```
