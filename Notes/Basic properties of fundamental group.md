---
mathLink: Basic properties of $\pi_1$
---

<div class="topSpace"></div>

Date Created: 21/05/2023 11:31:25
Tags: #Type/Proposition #Topic/Topology

Proved by: [[Basic properties of homotopies of paths]]
References: _Not Applicable_
Justifications: [[Independence of base point]]

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Consider the functor $\pi_1:\catptop\to\catgrp$ mapping each pointed topological space $\tpl{X,x_0}$ to $\pi_1\l(X,x_0\r)$ and each morphism $f:\tpl{X,x_0}\to\tpl{Y,y_0}$ to the morphism_ $f_\ast:\pi_1\l(X,x_0\r)\to\pi_1\l(Y,y_0\r):\l[\gamma\r]\mapsto\l[f\circ\gamma\r]$_. Then the following properties hold._
* _If $\tpl{X,x_0}$ and $\tpl{Y,y_0}$ are pointed topological spaces, then $\pi_1\l(X\times Y,\tpl{x_0,y_0}\r)\iso\pi_1\l(X,x_0\r)\times\pi_1\l(Y,y_0\r)$._
* _If $f_t:X\to Y$ is a homotopy, $x_0\in X$, and $\sigma:I\to Y:t\mapsto f_t\!\l(x_0\r)$ is the path traced by $x_0$, then the following diagram commutes._
![[Images/2023-05-21_113729/image.svg|230]] _Here,_ $\beta_\sigma\!\l[\gamma\r]\coloneqq\l[\sigma\ast\gamma\ast\sigma^-\r]$ _for all loops $\gamma$ at $f_1\!\l(x_0\r)$ is an isomorphism _
* _If $f:X\to Y$ is a homotopy equivalence, then_ $f_\ast:\pi_1\l(X,x_0\r)\to\pi_1\l(Y,f\l(x_0\r)\r)$ _is an isomorphism for all $x_0\in X$._

```

_Proof_. The map $f_\ast$ is well-defined since if $\gamma_0\htopeq\gamma_1$, then $f\circ\gamma_0\htopeq f\circ\gamma_1$, and it is a homomorphism since the loops $f\circ\l(\gamma\ast\delta\r)$ and $\l(f\circ\gamma\r)\ast\l(f\circ\delta\r)$ are both given by $\l(f\circ\gamma\r)\l(2s\r)$ for $0\leq s\leq1/2$ and $\l(f\circ\delta\r)\l(2s-1\r)$ for $1/2\leq s\leq1$. To see that $\pi_1$ is a functor, let $\tpl{X,x_0}\overset{f}{\rightarrow}\tpl{Y,y_0}\overset{g}{\rightarrow}\tpl{Z,z_0}$. For all loops $\gamma:I\to X$ at $x_0$, we have,
$$\begin{equation}
    \l(f\circ g\r)_\ast\l[\gamma\r]=\l[\l(f\circ g\r)\circ\gamma\r]=\l[f\circ\l(g\circ\gamma\r)\r]=f_\ast\l[g\circ\gamma\r]=\l(f_\ast\circ g_\ast\r)\l[\gamma\r].
\end{equation}$$
We also trivially have that $\id_\ast=\id$, so $\pi_1$ is indeed a functor.
* Let $p:\tpl{X\times Y,\tpl{x_0,y_0}}\to\tpl{X,x_0}$ and $q:\tpl{X\times Y,\tpl{x_0,y_0}}\to\tpl{Y,y_0}$ be the projections and consider the homomorphism $\tpl{p_\ast,q_\ast}\l[\delta\r]\coloneqq\tpl{\l[p\circ\delta\r],\l[q\circ\delta\r]}$. We claim that the inverse $\theta\l(\l[\delta\r],\l[\sigma\r]\r)\coloneqq\l[\gamma\r]$, where $\gamma\l(s\r)\coloneqq\tpl{\delta\l(s\r),\sigma\l(s\r)}$, is well-defined. Indeed, if $\delta_t:I\to X$ and $\sigma_t:I\to Y$ are homotopies, then $\gamma_t:I\to X\times Y$ defined by $\gamma_t\!\l(s\r)\coloneqq\tpl{\delta_t\!\l(s\r),\sigma_t\!\l(s\r)}$ is also a homotopy.
* Let $\gamma:I\to X$ be a loop based at $x_0$; it suffices to show that $\l[f_0\circ\gamma\r]=\beta_\sigma\!\l(\l[f_1\circ\gamma\r]\r)=\l[\sigma\ast\l(f_1\circ\gamma\r)\ast\sigma^-\r]$. For all $t\in I$, let $\sigma_t:I\to Y$ be a reparametrization of $\l.\sigma\r|_{\l[0,t\r]}$, say $\sigma_t\!\l(s\r)\coloneqq\sigma\l(st\r)$. Since $\sigma_t\!\l(1\r)=\sigma\l(t\r)=f_t\!\l(x_0\r)$ is the starting point of $f_t\circ\gamma$, the path $\sigma_t\ast\l(f_t\circ\gamma\r)\ast\sigma_t^-$ is a well-defined loop at $f_0\!\l(x_0\r)$. Varying $t$ gives us a homotopy from $f_0\circ\gamma$ to $\sigma\ast\l(f_1\circ\gamma\r)\ast\sigma^-$, as desired.
* Let $g:Y\to X$ be a homotopy inverse of $f$, so in particular $g\circ f\htopeq\id_X$. Then $g_\ast\circ f_\ast=\l(g\circ f\r)_\ast=\beta_\sigma$ for some path $\sigma$ and is hence an isomorphism. In particular, $f_\ast$ is injective. Similarly, since $f\circ g\htopeq\id_Y$, we see that $f_\ast$ is surjective, as desired.<span style="float:right;">$\blacksquare$</span>
