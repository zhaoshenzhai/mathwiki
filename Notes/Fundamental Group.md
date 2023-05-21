<div class="topSpace"></div>

Date Created: 17/05/2023 20:22:08
Tags: #Type/Definition #Topic/Topology

Types: _Not Applicable_
Examples: [[Fundamental group of the circle]]
Constructions: [[Simply-connected Space]]
Generalizations: _Not Applicable_

Properties: [[Fundamental group respect products]]
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Basic properties of homotopies of paths]], [[Independence of base point]]

``` ad-Definition
title: Definition.

_Let $X$ be a topological space and fix $x_0\in X$. The **fundamental group of $X$ based at $x_0$** is the group $\pi_1\!\l(X,x_0\r)$ of homotopy classes of loops at $x_0$ under concatenation._
* _If $X$ is path-connected, then the **fundamental group of $X$** is $\pi_1\!\l(X\r)\coloneqq\pi_1\!\l(X,x_0\r)$, independent of the base point._

_This induces a functor $\pi_1:\catptop\to\catgrp$ by mapping each morphism $f:\tpl{X,x_0}\to\tpl{Y,y_0}$ to the morphism_ $f_\ast:\pi_1\l(X,x_0\r)\to\pi_1\l(Y,y_0\r):\l[\gamma\r]\mapsto\l[f\circ\gamma\r]$_._

```

**Remark.** The map $f_\ast$ is well-defined since if $\gamma_0\htopeq\gamma_1$, then $f\circ\gamma_0\htopeq f\circ\gamma_1$, and it is a homomorphism since the loops $f\circ\l(\gamma\ast\delta\r)$ and $\l(f\circ\gamma\r)\ast\l(f\circ\delta\r)$ are both given by $\l(f\circ\gamma\r)\l(2s\r)$ for $0\leq s\leq1/2$ and $\l(f\circ\delta\r)\l(2s-1\r)$ for $1/2\leq s\leq1$. To see that $\pi_1$ is a functor, let $\tpl{X,x_0}\overset{f}{\rightarrow}\tpl{Y,y_0}\overset{g}{\rightarrow}\tpl{Z,z_0}$. For all loops $\gamma:I\to X$ at $x_0$, we have
$$\begin{equation}
    \l(f\circ g\r)_\ast\l[\gamma\r]=\l[\l(f\circ g\r)\circ\gamma\r]=\l[f\circ\l(g\circ\gamma\r)\r]=f_\ast\l[g\circ\gamma\r]=\l(f_\ast\circ g_\ast\r)\l[\gamma\r].
\end{equation}$$
We also trivially have that $\id_\ast=\id$, so we are done.<span style="float:right;">$\blacklozenge$</span>
