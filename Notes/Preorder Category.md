<div class="topSpace"></div>

Date Created: 21/02/2022 19:00:12
Tags: #Definition

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

_Let $\tpl{X,\leq}$ be a preordered set. The **preorder category induced by $\tpl{X,\leq}$** is the category_ $\cat{C}\tpl{X,\leq}$ _defined by the following data:_
* _The objects are elements of $X$; that is, $\obj\l(\cat{C}\tpl{X,\leq}\r)\coloneqq X$._
* _For all $x,y\in X$, $\hom\l(x,y\r)\coloneqq\l\{\tpl{x,y}\r\}$ if $x\leq y$ and $\hom\l(x,y\r)=\em$ otherwise._
* _For all $x\in X$, $\id_x\coloneqq\tpl{x,x}$._
* _For all $x,y,z\in X$, the composite morphism is $\tpl{y,z}\circ\tpl{x,y}\coloneqq\tpl{x,z}$._

```
