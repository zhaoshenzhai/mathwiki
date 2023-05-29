<div class="topSpace"></div>

Date Created: 12/03/2022 14:02:26
Tags: #Type/Definition #Later/Category_Theory

Types: _Not Applicable_
Examples: [[Identity natural transformation is a natural isomorphism]]
Constructions: [[Left-invertible Functor]], [[Right-invertible Functor]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

Let $\cat{C}$ and $\cat{D}$ be categories and fix two functors $\ms{F},\ms{G}:\cat{C}\to\cat{D}$. A **natural isomorphism from $\ms{F}$ to $\ms{G}$** is a natural transformation

![[Images/2022-03-12_140320/image.svg|120]]

such that for all $X\in\Obj\l(\cat{C}\r)$, the components $\eta_X:\ms{F}\l(X\r)\to\ms{G}\l(X\r)$ are isomorphisms in $\cat{D}$.

```

**Remark.** If there exists a natural isomorphism $\eta:\ms{F}\Rightarrow\ms{G}$, then $\ms{F}$ and $\ms{G}$ are said to be **naturally isomorphic** and we write $\ms{F}\iso\ms{G}$.<span style="float:right;">$\blacklozenge$</span>
