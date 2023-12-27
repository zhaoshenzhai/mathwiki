---
mathLink-blocks:
    path-connected-isomorphic-fundamental-group: Path-connected $\Rightarrow$ $\pi_1\!\l(X,x_0\r)\iso\pi_1\!\l(X,x_0'\r)$
---

<div class="topSpace"></div>

Date Created: 26/12/2023 21:04:18
Tags: #Type/Definition #Topic/Topology

Types: <i>Not Applicable</i>
Examples: [[Fundamental group of the circle]]
Constructions: [[Lifting Criterion]], [[Simply-connected Space]], [[Covering Automorphisms and Monodromy#^monodromy-action]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Galois Correspondence of Covering Spaces]], [[Covering Automorphisms and Monodromy#^covering-automorphism-universal-fundamental-group]]
Justifications: [[Basic properties of homotopies of paths]], [[Independence of base point]]

``` ad-Definition
title: Definition.

Let $\tpl{X,x_0}$ be a pointed space. The <b>fundamental group</b> of $X$ at $x_0$ is the isotropy group of $\Pi_1\!\l(X\r)$ at $x_0$, denoted $\pi_1\!\l(X,x_0\r)$.

```

<b>Remark.</b> The association $\pi_1:\catptop\to\catgrp$ is a functor by mapping each $f:\tpl{X,x_0}\to\tpl{Y,y_0}$ to the morphism $f_\ast:\pi_1\!\l(X,x_0\r)\to\pi_1\!\l(Y,y_0\r)$ mapping $\l[\gamma\r]\mapsto\l[f\circ\gamma\r]$.
* Moreover, $\pi_1$ preserves homotopy and hence descends into a functor $\pi_1:\catphtop\to\catgrp$. It follows then that if $\tpl{X,x_0}\htopeq\tpl{Y,y_0}$, then $\pi_1\!\l(X,x_0\r)\iso\pi_1\!\l(Y,y_0\r)$.

Since homotopy classes of paths $\gamma:\tpl{I,0}\to\tpl{X,x_0}$ correspond to homotopy classes of maps $f:\tpl{S^1,1}\to\tpl{X,x_0}$, we have a bijection $\pi_1\!\l(X,x_0\r)\iso\l[\tpl{S^1,1},\tpl{X,x_0}\r]$. In other words, we think of $\pi_1$ as the $\Hom$-functor $\Hom\l(\tpl{S^1,1},\slot\r):\catphtop\to\catgrp$, where we define the multiplication in $\l[\tpl{S^1,1},\tpl{X,x_0}\r]$ by $\l[f\r]\l[g\r]\coloneqq\l[f\ast g\r]$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> If $X$ is path-connected, then $\beta_\gamma:\pi_1\!\l(X,x_0\r)\iso\pi_1\!\l(X,x_0'\r)$ via the conjugation $\beta_\gamma\!\l[\tau\r]\coloneqq\l[\gamma^-\ast\tau\ast\gamma\r]$. In particular, if $f:X\to Y$ is a homeomorphism between path-connected spaces, then $\pi_1\!\l(X\r)\iso\pi_1\!\l(Y\r)$, where we abuse notation and write $\pi_1\!\l(X\r)$ for $\pi_1\!\l(X,x_0\r)$. The same holds if $f:X\to Y$ is only a homotopy equivalence, but the proof is more involved since the homotopies need not preserve basepoints.<span style="float:right;">$\blacklozenge$</span>
