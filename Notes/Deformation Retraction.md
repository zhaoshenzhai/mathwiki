<div class="topSpace"></div>

Date Created: 20/05/2023 19:46:38
Tags: #Type/Definition #Topic/Topology

Types: _Not Applicable_
Examples: [[Punctured space deformation retracts to a sphere]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

Let $X$ be a topological space. A **deformation retraction** is a homotopy from $\id_X$ to a retraction $r:X\to X$.
* If the deformation retraction is relative to $\im r$, then it is said to be **strong**.
* A subspace $S\subseteq X$ is a **(strong) deformation retract of $X$** if there exists a (strong) deformation retraction $r$ with $\im r=S$.

```

**Remark.** Equivalently, $S\subseteq X$ is a deformation retract of $X$ if there exists a continuous map $r:X\to S$ such that $r\circ\iota=\id_S$ and $\iota\circ r\htopeq\id_X$ where $\iota:S\to X$ is the inclusion. Thus deformation retracts of $X$ are homotopic equivalent to $X$.<span style="float:right;">$\blacklozenge$</span>
