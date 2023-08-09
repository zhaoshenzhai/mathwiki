<div class="topSpace"></div>

Date Created: 22/02/2022 14:27:06
Tags: #Type/Definition #Topic/Category_Theory/Later

Types: [[Automorphism (Category Theory)]]
Examples: [[Bijection]]
Constructions: [[Natural Isomorphism]]
Generalizations: <i>Not Applicable</i>

Properties: [[Left-invertible implies monomorphism]], [[Right-invertible implies epimorphism]], [[Isomorphism of objects is an equivalence relation]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Isomorphism of objects is an equivalence relation]]

``` ad-Definition
title: Definition.

Let $\cat{C}$ be a category and fix $X,Y\in\Obj\l(\cat{C}\r)$. A morphism $f:X\to Y$ is said to be <b>invertible</b> if there exists a morphism $g:Y\to X$ such that the diagram
![[Images/2022-02-09_222557/image.svg|150]]

commutes; that is, if $g$ is both a left and a right-inverse of $f$, in which case we write $g\coloneqq f^{-1}$ and call it the <b>inverse of $f$</b>. If such a morphism $f$ exists, then $X$ and $Y$ are said to be <b>$\cat{C}$-isomorphic</b>.

```

<b>Remark.</b> Since ‘is isomorphic to’ is an equivalence relation, we shall write $X\iso Y$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> We may relax the condition for $f$ to have both left and right inverses, since they coincide. Also, if $g,g':Y\to X$ are both inverses of $f$, then
$$\begin{equation}
    g=g\circ\id_Y=g\circ\l(f\circ g'\r)=\l(g\circ f\r)\circ g=\id_X\circ g=g'.
\end{equation}$$
Thus the inverse of a morphism is unique.<span style="float:right;">$\blacklozenge$</span>
