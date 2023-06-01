<div class="topSpace"></div>

Date Created: 26/01/2022 18:48:16
Tags: #Type/Definition #Topic/Set_Theory

Types: [[Linear Isomorphism]], [[Group Isomorphism]], [[Ring Isomorphism]], [[Module Isomorphism]]
Examples: [[Identity Function]]
Constructions: <i>Not Applicable</i>
Generalizations: [[Inverse (Relation)]], [[Invertible Morphism]]

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Left-invertible iff injection]], [[Right-invertible iff surjection (Choice)]], [[Invertible iff bijective]]
Justifications: [[Isomorphism of sets is an equivalence relation]]

``` ad-Definition
title: Definition.

Let $X$ and $Y$ be sets. A function $f:X\to Y$ is said to be <b>invertible</b> if there exists a function $g:Y\to X$ such that the diagram
![[Images/2022-02-09_222557/image.svg|150]]

commutes; that is, if $g$ is both a left and a right-inverse of $f$, in which case we write $g\coloneqq f^{-1}$ and call it the <b>inverse of $f$</b>. If such a function $f$ exists, then $X$ and $Y$ are said to be <b>isomorphic as sets</b>.

```

<b>Remark.</b> That is, invertible functions are isomorphisms in $\catset$. Since ‘is isomorphic to’ is an equivalence relation, we shall write $X\iso Y$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> We may relax the condition for $f$ to have both left and right inverses, since they coincide. Also, if $g,g':Y\to X$ are both inverses of $f$, then $g=g\circ\id_Y=g\circ\l(f\circ g'\r)=\l(g\circ f\r)\circ g=\id_X\circ g=g'$. Thus the inverse of a function is unique.<span style="float:right;">$\blacklozenge$</span>
