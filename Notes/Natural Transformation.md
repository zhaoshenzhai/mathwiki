<div class="topSpace"></div>

Date Created: 12/03/2022 12:53:12
Tags: #Type/Definition #Topic/Category_Theory/Later

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Equivalence of Categories]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $F,G:\cat{C}\to\cat{D}$ be functors of the same variance. A <b>natural transformation</b> $\eta:F\to G$ is a collection $\eta\coloneqq\l\{\eta_A\r\}_{A\in\Obj\l(\cat{C}\r)}$ of morphisms $\eta_A:\Hom_\cat{D}\!\l(FA,GA\r)$ such that for all $f\in\Hom_\cat{C}\!\l(A,B\r)$, the diagrams
![[Images/2022-03-12_130843/image.svg|375]]commute in the covariance and contravariance cases, respectively.

```

<b>Remark.</b> If $\eta:F\to G$ is a natural transformation such that each $\eta_A$ is an isomorphism, then $\eta$ is a <i>natural isomorphism</i>. We say that $F$ is <i>naturally isomorphic</i> to $G$ and write $F\iso G$.<span style="float:right;">$\blacklozenge$</span>
