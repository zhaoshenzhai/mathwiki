---
mathLink-blocks:
    morphism: Morphism (Category Theory)
---

<div class="topSpace"></div>

Date Created: 12/03/2022 17:41:32
Tags: #Type/Definition #Topic/Category_Theory

Types: <i>Not Applicable</i>
Examples: [[Function#^category-of-sets]], [[Group#^category-of-groups]], [[Module#^category-of-modules]], [[Category of Rings]], [[Category of Metric Spaces]], [[Category of Relations]]
Constructions: [[Functor]], [[Universal Objects]], [[Natural Transformation]], [[Slice Category]], [[Coslice Category]]
Generalizations: <i>Not Applicable</i>

Properties: [[Left-invertible implies monomorphism]], [[Right-invertible implies epimorphism]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Functor#^equivalence-of-categories]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A <b>category</b> $\cat{C}$ consists a collection $\Obj\l(\cat{C}\r)$ of <b>objects</b> in $\cat{C}$ and, 
* for any two objects $A,B\in\Obj\l(\cat{C}\r)$, a collection $\Hom_\cat{C}\!\l(A,B\r)$ of <b>morphisms</b> in $\cat{C}$,
* for any three objects $A,B,C\in\Obj\l(\cat{C}\r)$, a <b>composition map</b> $\Hom\l(B,C\r)\times\Hom\l(A,B\r)\to\Hom\l(A,B\r)$ mapping $\tpl{g,f}\mapsto g\circ f$,
* for any object $A$, an <b>identity</b> morphism $1_A\in\Hom\l(A,A\r)$,

such that $h\circ\l(g\circ f\r)=\l(h\circ g\r)\circ f$ for all $A\overset{f}{\rightarrow}B\overset{g}{\rightarrow}C\overset{h}{\rightarrow}D$ and $f\circ 1_A=f=f\circ1_B$ for all $f\in\Hom\l(A,B\r)$.

```
^morphism

<b>Remark.</b> For all $A\in\Obj\l(\cat{C}\r)$, the identity $1_A\in\Hom\l(A,A\r)$ is unique. Indeed, if $1_A'\in\Hom\l(A,A\r)$ is another identity, then $1_A=1_A\circ1_A'=1_A'$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A morphism $f\in\Hom\l(A,B\r)$ is an <i>isomorphism</i> if there is a morphism $g\in\Hom\l(B,A\r)$ such that $g\circ f=1_A$ and $f\circ g=1_B$. Such a $g$ is said to be the <b>inverse</b> of $f$, which is unique since $g=g\circ\l(f\circ g'\r)=\l(g\circ f\r)\circ g'=g'$ if $g'$ is another inverse of $f$.<span style="float:right;">$\blacklozenge$</span>
