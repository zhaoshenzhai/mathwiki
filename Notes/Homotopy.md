<div class="topSpace"></div>

Date Created: 19/05/2023 13:01:16
Tags: #Type/Definition #Topic/Topology

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Fundamental Group]], [[Homotopy Equivalence]]
Generalizations: <i>Not Applicable</i>

Properties: [[Basic properties of homotopies of paths]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Simply-connected iff homotopic paths]]
Justifications: [[Homotopy is a congruence in category of topological space]]

``` ad-Definition
title: Definition.

Let $f_0,f_1:X\to Y$ be continuous maps between topological spaces $X$ and $Y$. A <b>homotopy</b> from $f_0$ to $f_1$ is a continuous map $F:X\times I\to Y$ with $F\l(\slot,0\r)=f_0$ and $F\l(\slot,1\r)=f_1$, written $F:f_0\htopeq f_1$. A map $f:X\to Y$ is an <b>homotopy equivalence</b> if there is some map $g:Y\to X$ such that $f\circ g\htopeq\id_Y$ and $g\circ f\htopeq\id_X$.
* If there exists a homotopy $F$ from $f_0$ to $f_1$, then $f_0$ and $f_1$ are said to be <b>homotopic</b>.
* If there exists a homotopy equivalence $f:X\to Y$, then $X$ and $Y$ are said to be <b>homotopy equivalent</b> and we write $X\htopeq Y$.

For a subset $S\subseteq X$, a homotopy $F:X\times I\to Y$ is said to be <b>relative to $S$</b> if $F\l(s,t\r)=s$ for all $s\in S$ and $t\in I$.

```

<b>Remark.</b> A homotopy $F:X\times I\to Y$ induces a family of <i>deformations</i> $f_t\coloneqq F\l(\slot,t\r):X\to Y$ for $t\in I$. A function $f:X\to Y$ is <i>null-homotopic</i> if there is a constant function $c$ such that $f\htopeq c$, and a space $X$ is <i>contractible</i> if it is homotopy equivalent to a point.

A special case is when $Y\eqqcolon S\subseteq X$ and $f\eqqcolon r:X\to S$ is a <i>retraction</i>, i.e. $r^2=r$. In this case, a homotopy $F:\id_X\htopeq r$ is called a <i>deformation retraction</i> of $X$ into $S$. If furthermore $F:\id_X\htopeq r\rel S$, then $F$ is said to be a <i>strong</i> deformation retraction. That $X\htopeq S$ is equivalent to requiring that $r\circ\iota=\id_S$ (for $r$ to be a retraction) and $\iota\circ r\htopeq\id_X$ (for $r$ to be a homotopy equivalence).<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> If $\gamma_0,\gamma_1:I\to Y$ are paths, then $\gamma_0\htopeq\gamma_1$ will always mean that they are homotopic rel $\del I$. In a path-connected space, the contractibility of $I$ shows that all paths $\gamma:I\to Y$ are freely homotopic, so no confusion shall arise.<span style="float:right;">$\blacklozenge$</span>
