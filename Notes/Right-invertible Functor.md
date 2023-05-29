<div class="topSpace"></div>

Date Created: 09/03/2022 14:55:15
Tags: #Type/Definition #Later/Category_Theory

Types: [[Invertible Functor]]
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

Let $\cat{C}$ and $\cat{D}$ be categories. A functor $\ms{F}:\cat{C}\to\cat{D}$ is said to be **(weakly) right-invertible** if there exists a functor $\ms{H}:\cat{D}\to\cat{C}$ such that $\ms{F}\circ\ms{H}$ is naturally isomorphic to $\Id_\cat{D}$, in which case $\ms{H}$ is called a **(weak) right-inverse of $\ms{F}$**.

```

**Remark.** If equality holds; that is, if $\ms{F}\circ\ms{H}=\Id_\cat{D}$, then $\ms{F}$ is strictly right-invertible and $\ms{H}$ is called a **strict right-inverse of $\ms{F}$**.<span style="float:right;">$\blacklozenge$</span>
