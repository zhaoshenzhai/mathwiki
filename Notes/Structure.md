---
mathLink-blocks:
    category-of-structures: $\cathom$
---

<div class="topSpace"></div>

Date Created: 14/12/2023 17:16:46
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\sigma\coloneqq\tpl{\mc{F},\mc{R},\mc{C}}$ be a signature. A <b>$\sigma$-structure</b> is a pair $\mc{A}\coloneqq\tpl{A,\sigma^\mc{A}}$ consisting of a set $A$, called the <b>universe</b>, and an <b>interpretation</b> of $\sigma$ that assigns
* a function $f^\mc{A}\!:A^n\to A$ to each function symbol $f\in\mc{F}_n$ of arity $n$,
* a relation $R^\mc{A}\subseteq A^n$ to each relation symbol $R\in\mc{R}_n$ of arity $n$, and
* an element $c^\mc{A}\in A$ to each constant symbol $c\in\mc{C}$.

The <b>category of $\sigma$-structures</b> is the category $\cathom$ whose objects are $\sigma$-structures and whose morphisms from $\mc{A}$ to $\mc{B}$ are functions $h:A\to B$ such that $h(c^\mc{A})=c^\mc{B}$ for each $c\in\mc{C}$, $h(f^\mc{A}(\vec{a}))=f^\mc{B}(h(\vec{a}))$ for each $f\in\mc{F}_n$ and $\vec{a}\in A^n$, and $R^\mc{A}(\vec{a})\Rightarrow R^\mc{B}(h(\vec{a}))$ for each $R\in\mc{R}_n$ and $\vec{a}\in A^n$.

```
^category-of-structures

<b>Remark.</b> A <i>weak $\sigma$-substructure</i> $\mc{A}$ of a $\sigma$-structure $\mc{B}$ is a subobject of $\mc{B}$ in $\cathom$; explicitly, this occurs iff there is a morphism $h:\mc{A}\to\mc{B}$ whose underlying function is injective. If we additionally require that $R^\mc{A}(\vec{a})\Leftrightarrow R^\mc{B}(h(\vec{a}))$ for all $R\in\mc{R}_n$ and $\vec{a}\in A^n$, then $h:\mc{A}\into\mc{B}$ is said to be a <i>$\sigma$-embedding</i>. The subcategory of $\cathom$ whose morphisms are $\sigma$-embeddings is denoted $\catemb$, whose subobjects are called <i>$\sigma$-substructures</i>.
* For any morphism $h:\mc{A}\to\mc{B}$ in $\cathom$, its image $h\l(A\r)$ is the universe of some $\sigma$-substructure $\mc{B}'$ of $\mc{B}$, and $h:\mc{A}\into\mc{B}$ iff $\mc{A}\iso\mc{B}'$.


