<div class="topSpace"></div>

Date Created: 30/08/2023 19:17:16
References: #Ref/Mac10
Tags: #Type/Definition #Topic/Category_Theory/Later

Types: <i>Not Applicable</i>
Examples: [[Fundamental Group]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\cat{C}$ be a category and fix $A\in\Obj\l(\cat{C}\r)$. The <b>$\Hom$ functors</b> at $A$ are the functors $\Hom\l(A,\slot\r):\cat{C}\to\catset$ and $\Hom\l(\slot,A\r):\cat{C}\to\catset$ respectively mapping
* each object $B\in\Obj\l(\cat{C}\r)$ to the objects $\Hom\l(A,B\r)$ and $\Hom\l(B,A\r)$, and
* each morphism $f:B\to C$ to the morphisms $\Hom\l(A,f\r):\Hom\l(A,B\r)\to\Hom\l(A,C\r):g\mapsto f\circ g$ and $\Hom\l(f,A\r):\Hom\l(B,A\r)\to\Hom\l(C,A\r):h\mapsto h\circ f$.

```

<b>Remark.</b> If $\Hom\l(A,B\r)$ has more structure than a set, we can consider $\Hom$ functors to the appropriate category.
* Notably, we have for a fixed ring $R$ and a fixed $R$-module $A$ the $\Hom$ functors $\Hom\l(A,\slot\r):\catmod[R]\to\catabgrp$ and $\Hom\l(\slot,A\r):\catmod[R]\to\catabgrp$.<span style="float:right;">$\blacklozenge$</span>
