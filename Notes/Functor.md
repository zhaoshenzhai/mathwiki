<div class="topSpace"></div>

Date Created: 06/03/2022 15:11:37
Tags: #Type/Definition #Topic/Category_Theory

Types: <i>Not Applicable</i>
Examples: [[Hom Functor]], [[Path#^path-components]], [[Fundamental Group]], [[Cone]], [[Abelianization]], [[Dual Space]]
Constructions: [[Natural Transformation]], [[Equivalence of Categories]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\cat{C}$ and $\cat{D}$ be categories. A <b>(covariant) functor</b> from $\cat{C}$ to $\cat{D}$ is an assignment $F:\cat{C}\to\cat{D}$ of each object $A\in\Obj\l(\cat{C}\r)$ to an object $FA\in\Obj\l(\cat{D}\r)$ and each morphism $f:A\to B$ to a morphism $Ff:FA\to FB$, such that $F1_A=1_{FA}$ for all $A\in\Obj\l(\cat{C}\r)$ and $F\l(g\circ f\r)=Fg\circ Ff$ for all $A\overset{f}{\rightarrow}B\overset{g}{\rightarrow}C$.
* A <b>contravariant</b> functor from $\cat{C}$ to $\cat{D}$ is similarly defined, except that $Ff:FB\to FA$ and $F\l(g\circ f\r)=Ff\circ Fg$ for all $A\overset{f}{\rightarrow}B\overset{g}{\rightarrow}C$ instead.

```

<b>Remark.</b> A functor $F:\cat{C}\to\cat{D}$ is <i>full</i> (resp. <i>faithful</i>) if $F:\Hom_\cat{C}\!\l(A,B\r)\to\Hom_\cat{D}\!\l(FA,FB\r)$ is surjective (resp. injective). It is <i>essentially surjective</i> if for any object $B\in\Obj\l(\cat{D}\r)$, there is an object $A\in\Obj\l(\cat{C}\r)$ such that $FA\iso B$.<span style="float:right;">$\blacklozenge$</span>
