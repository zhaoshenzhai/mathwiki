---
mathLink-blocks:
    morphism: Morphism
---

<div class="topSpace"></div>

Date Created: 12/03/2022 17:41:32
Tags: #Type/Definition #Topic/Category_Theory

Types: [[Groupoid]]
Examples: [[Function#^category-of-sets]], [[Structure#^category-of-structures]], [[Models and Semantic Truth#^category-of-models]], [[Group#^category-of-groups]], [[Module#^category-of-modules]], [[Monoid#^category-of-monoids]], [[Ring#^category-of-rings]], [[Representation (Group)#^category-of-representations]], [[Group Action#^category-of-G-sets]], [[Metric Space#^category-of-metric-spaces]], [[Covering Space#^category-of-covering-spaces]]
Constructions: [[Functor]], [[Universal Objects]], [[Natural Transformation]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Equivalence of Categories]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A <b>category</b> $C$ consists a collection $\Obj\l(C\r)$ of <b>objects</b> in $C$ and, 
* for any two objects $x,y\in\Obj\l(C\r)$, a collection $C\l(x,y\r)$ of <b>morphisms</b> in $C$,
* for any three objects $x,y,z\in\Obj\l(C\r)$, a <b>composition map</b> $C\l(y,z\r)\times C\l(x,y\r)\to C\l(x,z\r)$ mapping $\tpl{g,f}\mapsto g\circ f$,
* for any object $x$, an <b>identity</b> morphism $1_x\in C\l(x,x\r)$,

such that the family of $C\l(x,y\r)$’s is pairwise disjoint, $h\circ\l(g\circ f\r)=\l(h\circ g\r)\circ f$ for all composable morphisms, and $f\circ 1_x=f=f\circ1_y$ for all $f\in C\l(x,y\r)$.

```
^morphism

<b>Remark.</b> We abuse notation and write $C$ for $\Obj\l(C\r)$ instead. There are some foundational issues with this definition (what is a ‘collection’?) but we ignore it and mostly focus on <i>locally-small</i> categories: categories in which for every $x,y\in C$, the morphisms $C\l(x,y\r)$ is a set. A more restrictive notion is to require $\Obj\l(C\r)$ to be a set, in which case we say that $C$ is <i>small</i>.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A morphism $f\in C\l(x,y\r)$ is said to be:
* an <i>isomorphism</i> if there is a morphism $g\in C\l(y,x\r)$ such that $gf=1_x$ and $fg=1_y$, which is unique and referred to as the <i>inverse</i> of $f$;
* a <i>monomorphism</i> if $fg=fh\Rightarrow g=h$ for any $w\in C$ and any $g,h\in C\l(w,x\r)$, and an <i>epimorphism</i> if $gf=hf\Rightarrow g=h$ for any $z\in C$ and any $g,h\in C\l(y,z\r)$;
* a <i>section</i> if $gf=1_x$ for some $g\in C\l(y,x\r)$, and a <i>retract</i> if $fg=1_y$ for some $g\in C(y,x)$.

Note that sections (resp. retracts) are always monic (resp. epic), so they are also referred to as <i>split monomorphisms</i> (resp. <i>split epimorphisms</i>). It is easy to see that a monic $f:x\to y$ that is also split epic is in fact an isomorphism, and the same for epimorphisms that are also split monic.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> In the case that $C$ is locally small, every morphism $f\in C\l(x,y\r)$ induces morphisms in $\catset$ by <i>post-composition</i> $f_\ast:C\l(w,x\r)\to C\l(w,y\r)$ for every $w\in C$ and <i>pre-composition</i> $f^\ast:C\l(x,z\r)\to C\l(y,z\r)$ for every $z\in C$. It is easy to see that $f$ is an isomorphism iff every $f_\ast$ is a bijection $-$ dually iff every $f^\ast$ is a bijection $-$ and $f$ is monic (resp. epic) iff every $f_\ast$ (resp. $f^\ast$) is an injection.<span style="float:right;">$\blacklozenge$</span>
