<div class="topSpace"></div>

Date Created: 22/02/2022 14:27:06
Tags: #Type/Definition #Later/Category_Theory

Types: [[Automorphism (Category Theory)]]
Examples: [[Bijection]], [[Group Isomorphism]], [[Ring Isomorphism]], [[Linear Isomorphism]], [[Module Isomorphism]], [[Identity Morphism]]
Constructions: [[Natural Isomorphism]]
Generalizations: _Not Applicable_

Properties: [[Left-invertible implies monomorphism]], [[Right-invertible implies epimorphism]], [[Isomorphism of objects is an equivalence relation]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Isomorphism of objects is an equivalence relation]]

``` ad-Definition
title: Definition.

Let $\cat{C}$ be a category and fix $X,Y\in\Obj\l(\cat{C}\r)$. A morphism $f:X\to Y$ is said to be **invertible** if there exists a morphism $g:Y\to X$ such that the diagram
![[Images/2022-02-09_222557/image.svg|150]]

commutes; that is, if $g$ is both a left and a right-inverse of $f$, in which case we write $g\coloneqq f^{-1}$ and call it the **inverse of $f$**. If such a morphism $f$ exists, then $X$ and $Y$ are said to be **$\cat{C}$-isomorphic**.

```

**Remark.** Since $\textrm{`}$is isomorphic to$\textrm{'}$ is an equivalence relation, we shall write $X\iso Y$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** We may relax the condition for $f$ to have both left and right inverses, since they coincide. Also, if $g,g':Y\to X$ are both inverses of $f$, then
$$\begin{equation}
    g=g\circ\id_Y=g\circ\l(f\circ g'\r)=\l(g\circ f\r)\circ g=\id_X\circ g=g'.
\end{equation}$$
Thus the inverse of a morphism is unique.<span style="float:right;">$\blacklozenge$</span>
