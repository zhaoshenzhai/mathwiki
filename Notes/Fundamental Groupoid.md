---
mathLink-blocks:
    fundamental-group: Fundamental Group
    path-connected-isomorphic-fundamental-group: Path-connected $\Rightarrow$ $\pi_1\!\l(X,x_0\r)\iso\pi_1\!\l(X,x_0'\r)$
---

<div class="topSpace"></div>

Date Created: 16/10/2023 20:00:58
Tags: #Type/Definition #Topic/Topology

Types: <i>Not Applicable</i>
Examples: [[Fundamental group of the circle]]
Constructions: [[Simply-connected Space]], [[Lifting Criterion]]
Generalizations: <i>Not Applicable</i>

Properties: [[Basic properties of fundamental group]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Galois Correspondence of Covering Spaces]]
Justifications: [[Basic properties of homotopies of paths]], [[Independence of base point]]

``` ad-Definition
title: Definition.

Let $X$ be a topological space. The <b>fundamental groupoid</b> of $X$ is the groupoid $\Pi_1\!\l(X\r)$ over $X$ whose morphisms $x\to y$ are homotopy classes of paths $\gamma:x\pathto y$.
* The <b>fundamental group</b> of $X$ at some fixed $x_0\in X$ is the isotropy group of $\Pi_1\!\l(X\r)$ at $x_0$, denoted $\pi_1\!\l(X,x_0\r)$.

```
^fundamental-group

<b>Remark.</b> The association $\pi_1:\catptop\to\catgrp$ is a functor by mapping each $f:\tpl{X,x_0}\to\tpl{Y,y_0}$ to the morphism $f_\ast:\pi_1\!\l(X,x_0\r)\to\pi_1\!\l(Y,y_0\r)$ mapping $\l[\gamma\r]\mapsto\l[f\circ\gamma\r]$.
* Since functors preserve isomorphisms, we see that homeomorphic pointed spaces have isomorphic fundamental groups. In fact, even homotopy equivalent pointed spaces induce isomorphic fundamental groups. Indeed, if $f:\tpl{X,x_0}\htopeq\tpl{Y,y_0}$, has homotopy inverse $g$, then $f_\ast\!:\pi_1\!\l(X,x_0\r)\to\pi_1\!\l(Y,y_0\r)$ is an isomorphism.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Two points $x_0,x_0'\in X$ are in the same orbit of $\Pi_1\!\l(X\r)$ iff there is a path $\gamma:x_0\pathto x_0'$, so the orbits of $\Pi_1\!\l(X\r)$ are precisely the <i>path components</i> $\pi_0\!\l(X\r)$ of $X$. Thus, if $X$ is path-connected, then $\beta_\gamma:\pi_1\!\l(X,x_0\r)\iso\pi_1\!\l(X,x_0'\r)$ via the conjugation $\beta_\gamma\!\l[\tau\r]\coloneqq\l[\gamma^-\ast\tau\ast\gamma\r]$. In particular, if $f:X\to Y$ is a homeomorphism between path-connected spaces, then $\pi_1\!\l(X\r)\iso\pi_1\!\l(Y\r)$. We abuse notation and write $\pi_1\!\l(X\r)$ for $\pi_1\!\l(X,x_0\r)$. ^path-connected-isomorphic-fundamental-group
* If $f:X\to Y$ is a homotopy equivalence, then, even if $X$ and $Y$ are not path-connected, $f$ induces an isomorphism $f_\ast:\pi_1\!\l(X,x_0\r)\iso\pi_1\!\l(Y,f\l(x_0\r)\r)$ for any $x_0\in X$. Indeed, if $\phi_t:X\to Y$ is any homotopy, then there is a path $\gamma:\phi_0\!\l(x_0\r)\pathto\phi_1\!\l(x_0\r)$ defined by $t\mapsto\phi_t\!\l(x_0\r)$. Letting $\beta_\gamma\!\l[\eta\r]\coloneqq\l[\gamma\ast\eta\ast\gamma^-\r]$, we claim that
![[Images/2023-05-21_113729/image.svg|230]] commutes. To this end, let $\tau$ be a loop at $x_0$. We establish a homotopy $\phi_0\circ\tau\htopeq\beta_\gamma\circ\phi_1\circ\tau$ as follows. Let $\gamma_t\!\l(s\r)\coloneqq\gamma\l(st\r)$ for each $t\in I$. Since $\gamma_t\!\l(1\r)=\l(\phi_t\circ\tau\r)\l(0\r)$, we see that $\gamma_t\ast\l(\phi_t\circ\tau\r)\ast\gamma_t^-$ is a well-defined loop at $\phi_0\!\l(x_0\r)$. Varying $t$ continuous gives us a homotopy from $\phi_0\circ\tau$ to $\beta_\gamma\circ\phi_1\circ\tau$, as desired. We now apply this lemma to the homotopies $f\circ g\htopeq\id_Y$ and $g\circ f\htopeq\id_X$ as follows. Consider the sequence
$$\begin{equation}
    \pi_1\!\l(X,x_0\r)\overset{f_\ast}{\longrightarrow}\pi_1\!\l(X,f\l(x_0\r)\r)\overset{g_\ast}{\longrightarrow}\pi_1\!\l(X,gf\l(x_0\r)\r)\overset{f_\ast}{\longrightarrow}\pi_1\!\l(X,fgf\l(x_0\r)\r).
\end{equation}$$
Since $f\circ g\htopeq\id_Y$, there is some path $\gamma$ such that 
