---
mathLink-blocks:
    projection-maps: Projection Maps
    function-space: Function Space
---

<div class="topSpace"></div>

Date Created: 20/01/2022 13:11:23
References: #Ref/NONE
Tags: #Type/Definition #Topic/Set_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i> 
Constructions: [[Topological Space#^product-space]], [[Group#^direct-product]], [[Direct Product (ring)]], [[Direct Sum (Module)]], [[Semidirect Product]]
Generalizations: <i>Not Applicable</i> 

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $X$ and $Y$ be sets. The <b>Cartesian product</b> of $X$ and $Y$ is the set $X\times Y\coloneqq\l\{u\st\ex x\in X,\ex y\in Y:u=\tpl{x,y}\r\}$.
* We have the (surjective) projection maps $\pi_X:X\times Y\to X$ mapping $\tpl{x,y}\mapsto x$, and similarly $\pi_Y:X\times Y\to Y$ mapping $\tpl{x,y}\mapsto y$.

```
^projection-maps

<b>Remark.</b> More generally, the <b>Cartesian product</b> of an indexed set $\l\{X_i\r\}_{i\in I}$ is $\prod_{i\in I}X_i\coloneqq\l\{f:I\to\bigcup_{i\in I}X_i\st\fa i\in I:f\l(i\r)\in X_i\r\}$. This product, equipped with the projection maps $\l\{\pi_i\r\}_{i\in I}$ defined by $\pi_i:f\mapsto f\l(i\r)$, is a product in $\catset$.
* If $X\coloneqq X_i=X_j$ for all $i,j\in I$, the product $X^I\coloneqq\prod_{i\in I}X$ is the set of all functions $f:I\to X$.<span style="float:right;">$\blacklozenge$</span>
^function-space
