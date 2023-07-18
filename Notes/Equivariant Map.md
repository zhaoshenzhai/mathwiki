<div class="topSpace"></div>

Date Created: 25/05/2023 16:00:50
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: [[Orbit-Stabilizer Theorem]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Quotients are equivariant iff subgroups are conjugate]]
Justifications: [[Isomorphism of objects is an equivalence relation]]

``` ad-Definition
title: Definition.

Let $G$ be a group acting on sets $X$ and $Y$ via $\phi$ and $\phi'$. A <b>$G$-equivariant map from $X$ to $Y$</b> is a function $f:X\to Y$ such that $f\l(\phi_g\!\l(x\r)\r)=\phi'_g\!\l(f\l(x\r)\r)$ for all $g\in G$ and $x\in X$.
![[Images/2023-05-10_194110/image.svg|175]]
* The <b>category of $G$-sets</b> is the category $\catgset[G]$ whose objects are $G$-sets and whose morphisms are $G$-equivariant maps/
* A <b>$G$-isomorphism</b> is an isomorphism in $\catgset[G]$; equivalently; it is a bijective $G$-equivariant map.
* Two $G$-sets $X$ and $Y$ are <b>$G$-isomorphic</b> if there exists a $G$-isomorphism $f:X\to Y$.

```

<b>Remark.</b> Suppressing notation, equivariant maps are functions $f:X\to Y$ such that $f\l(g\cdot x\r)=g\cdot f\l(x\r)$ for all $g\in G$ and $x\in X$.<span style="float:right;">$\blacklozenge$</span>
