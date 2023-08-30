---
mathLink-blocks:
    morphism: Morphism (Category Theory)
---

<div class="topSpace"></div>

Date Created: 12/03/2022 17:41:32
Tags: #Type/Definition #Topic/Category_Theory

Types: [[Thin Category]]
Examples: [[Function#^category-of-sets]], [[Group Homomorphism#^category-of-groups]], [[Module Homomorphism#^category-of-modules]], [[Ring Homomorphism#^category-of-rings]], [[Category of Relations]]
Constructions: [[Functor]], [[Universal Objects]], [[Slice Category]], [[Coslice Category]], [[Natural Transformation]]
Generalizations: <i>Not Applicable</i>

Properties: [[Left-invertible implies monomorphism]], [[Right-invertible implies epimorphism]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A <b>category</b> $\cat{C}$ consists a collection $\Obj\l(\cat{C}\r)$ of <b>objects</b> in $\cat{C}$ and, 
* for any two objects $A,B\in\Obj\l(\cat{C}\r)$, a collection $\Mor_\cat{C}\!\l(A,B\r)$ of <b>morphisms</b> in $\cat{C}$,
* for any three objects $A,B,C\in\Obj\l(\cat{C}\r)$, a <b>composition map</b> $\Mor\l(B,C\r)\times\Mor\l(A,B\r)\to\Mor\l(A,B\r)$ mapping $\tpl{g,f}\mapsto g\circ f$,
* for any object $A$, an <b>identity</b> morphism $1_A\in\Mor\l(A,A\r)$,

such that $h\circ\l(g\circ f\r)=\l(h\circ g\r)\circ f$ for all $A\overset{f}{\rightarrow}B\overset{g}{\rightarrow}C\overset{h}{\rightarrow}D$ and $f\circ 1_A=f=f\circ1_B$ for all $f\in\Mor\l(A,B\r)$.

```
^morphism

<b>Remark.</b> For all $A\in\Obj\l(\cat{C}\r)$, the identity $1_A\in\Mor\l(A,A\r)$ is unique. Indeed, if $1_A'\in\Mor\l(A,A\r)$ is another identity, then $1_A=1_A\circ1_A'=1_A'$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A morphism $f\in\Mor\l(A,B\r)$ is an <i>isomorphism</i> if there is a morphism $g\in\Mor\l(B,A\r)$ such that $g\circ f=1_A$ and $f\circ g=1_B$. Such a $g$ is said to be the <b>inverse</b> of $f$, which is unique since $g=g\circ\l(f\circ g'\r)=\l(g\circ f\r)\circ g'=g'$ if $g'$ is another inverse of $f$.<span style="float:right;">$\blacklozenge$</span>
