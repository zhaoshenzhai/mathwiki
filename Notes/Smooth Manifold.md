<div class="topSpace"></div>

Date Created: 08/01/2024 11:20:27
References: #Ref/Lee12
Tags: #Type/Definition #In_Progress/Topology

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Tangent Space]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition (Smooth Manifold).

Let $M$ be a manifold. A <b>smooth structure</b> on $M$ is a maximal smooth atlas $\mc{A}$ on $M$, and the pair $\tpl{M,\mc{A}}$ is called a <b>smooth manifold</b>.
* A map $F:M\to N$ is <b>smooth</b> if every $p\in M$ admits smooth charts $\tpl{U,\phi}\ni p$ and $\tpl{V,\psi}\ni F\l(p\r)$ with $F\l(U\r)\subseteq V$ such that $\psi\circ F\circ\phi^{-1}$ is smooth.
* The <b>category of smooth manifolds</b> is the category $\catman$ whose objects are smooth manifolds and whose morphisms are smooth maps.

```

<b>Remark.</b> An atlas $\mc{A}$ is said to be <i>smooth</i> if the transition map $\phi_2\circ\phi_1^{-1}$ between any two charts $\tpl{U_i,\phi_i}\in\mc{A}$ with $U_1\cap U_2\neq\em$ is smooth. Note that every smooth atlas $\mc{A}$ is contained in a unique maximal smooth atlas (the atlas $\mc{A}^\ast$ consisting of <i>all</i> charts compatible with $\mc{A}$), and that two smooth atlases on $M$ determine the same smooth structure iff their union is also a smooth atlas on $M$.
* More generally, for any symbol $k\in\N\cup\l\{\infty,\omega\r\}$, a <i>$C^k$-manifold</i> is a manifold equipped with a maximal $C^k$-atlas where we require that all transition maps are $C^k$ instead. Note that smooth manifolds are just $C^\infty$-manifolds, and we call the $C^\omega$-manifolds <i>analytic</i>. Similarly for maps and the categories $\catman[k]$.

Restricting to $C^k$-atlases ensures that the definition of smooth maps is well-defined, for if $\tpl{U',\phi'}\ni p$ and $\tpl{V',\psi'}\ni F\l(p\r)$ are any two other charts with $F\l(U'\r)\subseteq V'$, then $\psi'\circ F\circ\phi'^{-1}=\l(\psi'\circ\psi^{-1}\r)\circ\l(\psi\circ F\circ\phi^{-1}\r)\circ\l(\phi'\circ\phi^{-1}\r)^{-1}$. Hence $\psi\circ F\circ\phi^{-1}\in C^k$ iff $\psi'\circ F\circ\phi'^{-1}\in C^k$, so $F\in C^k\!\l(M,N\r)$ is well defined.<span style="float:right;">$\blacklozenge$</span>
