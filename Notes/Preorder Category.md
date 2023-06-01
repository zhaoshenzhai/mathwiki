<div class="topSpace"></div>

Date Created: 21/02/2022 19:00:12
Tags: #Type/Definition #Later/Category_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Commutative Diagram]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Preorder category is a category]]

``` ad-Definition
title: Definition.

Let $\tpl{X,\leq}$ be a preordered set. The <b>preorder category induced by $\tpl{X,\leq}$</b> is the category $\cat{C}\tpl{X,\leq}$ defined by the following data:
* The objects are elements of $X$; that is, $\Obj\l(\cat{C}\tpl{X,\leq}\r)\coloneqq X$.
* For all $x,y\in X$, $\Hom\l(x,y\r)\coloneqq\l\{\tpl{x,y}\r\}$ if $x\leq y$ and $\Hom\l(x,y\r)=\em$ otherwise.
* For all $x\in X$, $\id_x\coloneqq\tpl{x,x}$.
* For all $x,y,z\in X$, the composite morphism is $\tpl{y,z}\circ\tpl{x,y}\coloneqq\tpl{x,z}$.

```
