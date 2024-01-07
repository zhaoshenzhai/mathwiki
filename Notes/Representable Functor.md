---
mathLink-blocks:
    currying-in-set: Currying in $\catset$
---

<div class="topSpace"></div>

Date Created: 07/01/2024 16:54:27
References: #Ref/Rei16 #Ref/Mac10
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: [[Representable Functor#^currying-in-set]], [[Topological Space#^open-set-functor]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Fix a locally-small category $C$. A functor $F:C\to\catset$ is said to be <b>representable</b> if there is an object $c\in C$ such that $F\natiso C\l(c,\slot\r)$, where $C\l(c,\slot\r):C\to\catset$ is the <b>covariant $\Hom$-functor</b> that maps $x\mapsto C\l(c,x\r)$ and a morphism $f:x\to y$ to the post-composition $g\mapsto f\circ g$. We say that $c$ <b>represents</b> the functor $F$.
* Similarly for a contravariant functor $F:C^\textrm{op}\to\catset$, in which case we require that $F\natiso C\l(\slot,c\r)$ instead.

```

<b>Remark.</b> For $C\coloneqq\catset$, the functor $C\l(\slot\times A,B\r):\catset^\textrm{op}\to\catset$ is representable by $B^A\in\catset$ via the natural isomorphism $C\l(X\times A,B\r)\natiso C\l(X,B^A\r)$, which maps $f:X\times A\to B$ to the function $X\to B^A:x\mapsto\l(a\mapsto f\l(x,a\r)\r)$ and, conversely, maps $g:X\to B^A$ to the function $X\times A\to B:\tpl{x,a}\to g\l(x\r)\l(a\r)$.<span style="float:right;">$\blacklozenge$</span> ^currying-in-set

---

<b>Remark.</b> The two $\Hom$-functors $C\l(c,\slot\r)$ and $C\l(\slot,d\r)$ can be combined to form the $\Hom$-bifunctor $\Hom:C^\textrm{op}\times C\to\catset$. <span style="color:pink">justify why (see MacLane)</span>.<span style="float:right;">$\blacklozenge$</span>
