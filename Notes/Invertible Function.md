<div class="topSpace"></div>

Date Created: 26/01/2022 18:48:16
Tags: #Type/Definition #Topic/Set_Theory

Types: [[Linear Isomorphism]], [[Group Isomorphism]], [[Ring Isomorphism]], [[Module Isomorphism]]
Examples: [[Identity Function]]
Constructions: _Not Applicable_
Generalizations: [[Inverse (Relation)]], [[Invertible Morphism]]

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: [[Left-invertible iff injection]], [[Right-invertible iff surjection (Choice)]], [[Invertible iff bijective]]
Justifications: [[Isomorphism of sets is an equivalence relation]]

``` ad-Definition
title: Definition.

_Let $X$ and $Y$ be sets. A function $f:X\to Y$ is said to be **invertible** if there exists a function $g:Y\to X$ such that the diagram_
<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-02-09_222557/image.svg", width=150></center>

_commutes; that is, if $g$ is both a left and a right-inverse of $f$, in which case we write $g\coloneqq f^{-1}$ and call it the **inverse of $f$**. If such a function $f$ exists, then $X$ and $Y$ are said to be **isomorphic as sets**._

```

**Remark.** That is, invertible functions are isomorphisms in $\catset$. Since $\textrm{`}$is isomorphic to$\textrm{'}$ is an equivalence relation, we shall write $X\iso Y$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** We may relax the condition for $f$ to have both left and right inverses, since they coincide. Also, if $g,g':Y\to X$ are both inverses of $f$, then $g=g\circ\id_Y=g\circ\l(f\circ g'\r)=\l(g\circ f\r)\circ g=\id_X\circ g=g'$. Thus the inverse of a function is unique.<span style="float:right;">$\blacklozenge$</span>
