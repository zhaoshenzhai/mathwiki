<div class="topSpace"></div>

Date Created: 26/01/2022 18:48:16
Tags: #Definition #Topics/Set_Theory

Types: [[Linear Isomorphism]], [[Group Isomorphism]], [[Ring Isomorphism]], [[Module Isomorphism]]
Examples: [[Identity Function]], [[Elementary Matrices and Operations]]
Constructions: [[Isomorphic Sets]]
Generalizations: [[Inverse (Relation)]], [[Invertible Morphism]]

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: [[Left-invertible iff injection]], [[Right-invertible iff surjection (Choice)]], [[Invertible iff bijective]]
Justifications: [[Inverse of function is unique]], [[Left and right inverses coincide (function)]]

``` ad-Definition
title: Definition.

_Let $X$ and $Y$ be sets and consider a function $f:X\to Y$._
* _If there exists a function $g:Y\to X$ such that $g\circ f=\id_X$, then $f$ is said to be **left-invertible** and $g$ is called a **left-inverse of $f$**._
* _If there exists a function $h:Y\to X$ such that $f\circ h=\id_Y$, then $f$ is said to be **right-invertible** and $h$ is called a **right-inverse of $f$**._

_If $f$ has both a left and right inverse, then $f$ is said to be **invertible** and $f^{-1}\coloneqq g=h$ is called the **inverse of $f$**._

```

**Remark.** This relationship can also be expressed by stating that the diagram

<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-02-26_120126/image.svg", width=150></center>

commutes.<span style="float:right;">$\blacklozenge$</span>
