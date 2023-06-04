<div class="topSpace"></div>

Date Created: 01/04/2022 18:16:33
Tags: #Type/Definition #Topic/Linear_Algebra

Types: [[Linear Isomorphism]], [[Linear Operator]], [[Bounded Linear Map]]
Examples: <i>Not Applicable</i>
Constructions: [[Kernel slash Nullity]], [[Image slash Rank]], [[Dual Map]], [[Adjoint Map]], [[Vector Space of Linear Maps]], [[Category of Vector Spaces]]
Generalizations: [[Antilinear Map]], [[Multilinear Map]], [[Module Homomorphism]]

Properties: [[Linear map between vector spaces of same dimension is injective iff surjective]], [[Restriction on complement of kernel is injective]], [[Linear map from a finite-dimensional space is bounded]], [[Change of basis for linear maps]], [[Basic properties of linear maps]]
Sufficiencies: [[Existence of unique linear map via action on basis vectors]]
Equivalences: [[Action of linear map repr under basis left-multiplication of matrix representation]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $V$ and $W$ be $K$-vector spaces. A <b>linear map from $V$ to $W$</b> is a function $T:V\to W$ such that $T\l(\alpha v+w\r)=\alpha T\l(v\r)+T\l(w\r)$ for all $\alpha\in K$ and $v,w\in V$.

```

<b>Remark.</b> Let $V$ and $W$ are finite-dimensional and fix bases for $V$ and $W$, say with $n\coloneqq\dim V$ and $m\coloneqq\dim W$. Then any linear map can be represented by an $m\times n$ matrix $A\in\mat{m\times n}{K}$, and if we define _matrix multiplication_ as composition of linear maps, the action of $T$ on $v$ is given by left multiplication of $A$ on the coordinate representation of $v$.<span style="float:right;">$\blacklozenge$</span>
