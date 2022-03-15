<br />
<br />

Date Created: 21/02/2022 19:00:12
Tags: #Definition #Closed 

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Commutative Diagram]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Preorder category is a category]]

``` ad-Definition
title: Definition.

_Let $\l\langle X,\leq\r\rangle$ be a preordered set. The **preorder category induced by $\l\langle X,\leq\r\rangle$** is the category_ $\cat{C}\l\langle X,\leq\r\rangle$ _defined by the following data:_
* _The objects are elements of $X$; that is, $\obj\l(\cat{C}\l\langle X,\leq\r\rangle\r)\coloneqq X$._
* _For all $x,y\in X$, $\hom\l(x,y\r)\coloneqq\l\{\l\langle x,y\r\rangle\r\}$ if $x\leq y$ and $\hom\l(x,y\r)=\em$ otherwise._
* _For all $x\in X$, $\id_x\coloneqq\l\langle x,x\r\rangle$._
* _For all $x,y,z\in X$, the composite morphism is $\l\langle y,z\r\rangle\circ\l\langle x,y\r\rangle\coloneqq\l\langle x,z\r\rangle$._

```
