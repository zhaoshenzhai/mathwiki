---
mathLink-blocks:
    morphism: Morphism (Category Theory)
---

<div class="topSpace"></div>

Date Created: 12/03/2022 17:41:32
Tags: #Type/Definition #Topic/Category_Theory

Types: [[Groupoid]]
Examples: [[Function#^category-of-sets]], [[Group#^category-of-groups]], [[Module#^category-of-modules]], [[Ring#^category-of-rings]], [[Representation (Group)#^category-of-representations]], [[Group Action#^category-of-G-sets]], [[Metric Space#^category-of-metric-spaces]], [[Covering Space#^category-of-covering-spaces]]
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

<b>Remark.</b> We abuse notation and write $C$ for $\Obj\l(C\r)$ instead. There are some foundational issues with this definition (what is a ‘collection’?) but we ignore it and mostly focus on <i>locally-small</i> categories: categories in which for every $x,y\in C$, the morphisms $C\l(x,y\r)$ is a set. A more restrictive notion is to require $\Obj\l(C\r)$ to be a set, in which case we say that $C$ is <i>small</i>.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A morphism $f\in C\l(x,y\r)$ is an <i>isomorphism</i> if there is a morphism $g\in C\l(y,x\r)$ such that $gf=1_x$ and $fg=1_y$. Such a $g$ is said to be the <i>inverse</i> of $f$, which is unique since $g=g\l(fg'\r)=\l(gf\r)g'=g'$ if $g'$ is another inverse of $f$.
* If $C$ is locally small, then a morphism $f\in C\l(x,y\r)$ is an isomorphism iff for every $w\in C$, the <i>post-composition</i> $f_\ast:C\l(w,x\r)\to C\l(w,y\r)$ mapping $g\mapsto fg$ is a bijection. Dually, this occurs iff for every $z\in C$, the <i>pre-composition</i> $f^\ast:C\l(x,z\r)\to C\l(y,z\r)$ mapping $g\mapsto gf$ is a bijection.

A morphism $f\in C\l(x,y\r)$ is a <i>monomorphism</i> (or is <i>monic</i>) if for any $w\in C$ and any $g,h\in C\l(w,x\r)$, $fg=fh\Rightarrow g=h$. If $C$ is locally-small, this occurs iff $f_\ast$ is an injection. Dually, $f$ is an <i>epimorphism</i> (or is <i>epic</i>) if for any $z\in C$ and any $g,h\in C\l(y,z\r)$, $gf=hf\Rightarrow g=h$; if $C$ is locally small, this occurs iff $f^\ast$ is an injection.
* If $x\overset{s}{\to}y\overset{r}{\to}x$ are morphisms such that $rs=1_x$, then $s$ is a <i>section</i> and $r$ is a <i>retract</i>. Note that sections (resp. retracts) are always monic (resp. epic), so they are also referred to as <i>split monomorphisms</i> (resp. <i>split epimorphisms</i>). It is easy to see that a monic $f:x\to y$ that is also split epic is in fact an isomorphism, and the same for epimorphisms that are also split monic.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> For all $x\in C$, the identity $1_x\in C\l(x,x\r)$ is unique. Indeed, if $1_x'\in C\l(x,x\r)$ is another identity, then $1_x=1_x1_x'=1_x'$.<span style="float:right;">$\blacklozenge$</span>
