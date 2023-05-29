<div class="topSpace"></div>

Date Created: 20/05/2023 19:45:21
Tags: #Type/Definition #Topic/Topology

Types: [[Deformation Retraction]]
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $X$ be a topological space. A continuous map $r:X\to X$ is said to be a **retraction** if $r^2=r$.
* A subspace $S\subseteq X$ is a **retract of $X$** if there exists a retraction $r$ with $\im r=S$.

```

<b>Remark.</b> Since $r\l(r\l(x\r)\r)=r\l(x\r)$ for all $x\in X$, we see that retractions act as $\id$ on its image $S\coloneqq\im r$. Thus, equivalently, a retraction is a continuous map $r:X\to S$ such that $r\circ\iota=\id_S$ where $\iota:S\into X$ is the inclusion.<span style="float:right;">$\blacklozenge$</span>
