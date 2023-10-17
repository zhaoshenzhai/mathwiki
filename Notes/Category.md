---
mathLink-blocks:
    morphism: Morphism (Category Theory)
---

<div class="topSpace"></div>

Date Created: 12/03/2022 17:41:32
Tags: #Type/Definition #Topic/Category_Theory

Types: [[Groupoid]]
Examples: [[Function#^category-of-sets]], [[Group#^category-of-groups]], [[Module#^category-of-modules]], [[Representation (Group)#^category-of-representations]], [[Group Action#^category-of-G-sets]], [[Ring#^category-of-rings]], [[Metric Space#^category-of-metric-spaces]]
Constructions: [[Functor]], [[Universal Objects]], [[Natural Transformation]], [[Slice Category]], [[Coslice Category]]
Generalizations: <i>Not Applicable</i>

Properties: [[Left-invertible implies monomorphism]], [[Right-invertible implies epimorphism]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Equivalence of Categories]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A <b>category</b> $C$ consists a collection $\Obj\l(C\r)$ of <b>objects</b> in $C$ and, 
* for any two objects $x,y\in\Obj\l(C\r)$, a collection $C\l(x,y\r)$ of <b>morphisms</b> in $C$,
* for any three objects $x,y,z\in\Obj\l(C\r)$, a <b>composition map</b> $C\l(y,z\r)\times C\l(x,y\r)\to C\l(x,z\r)$ mapping $\tpl{g,f}\mapsto g\circ f$,
* for any object $x$, an <b>identity</b> morphism $1_x\in C\l(x,x\r)$,

such that $h\circ\l(g\circ f\r)=\l(h\circ g\r)\circ f$ for all $x\overset{f}{\rightarrow}y\overset{g}{\rightarrow}z\overset{h}{\rightarrow}w$ and $f\circ 1_x=f=f\circ1_y$ for all $f\in C\l(x,y\r)$.

```
^morphism

<b>Remark.</b> For all $x\in\Obj\l(C\r)$, the identity $1_x\in C\l(x,x\r)$ is unique. Indeed, if $1_x'\in C\l(x,x\r)$ is another identity, then $1_x=1_x\circ1_x'=1_x'$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A morphism $f\in C\l(x,y\r)$ is an <i>isomorphism</i> if there is a morphism $g\in C\l(y,x\r)$ such that $g\circ f=1_x$ and $f\circ g=1_y$. Such a $g$ is said to be the <i>inverse</i> of $f$, which is unique since $g=g\circ\l(f\circ g'\r)=\l(g\circ f\r)\circ g'=g'$ if $g'$ is another inverse of $f$.<span style="float:right;">$\blacklozenge$</span>
