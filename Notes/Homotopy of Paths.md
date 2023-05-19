<div class="topSpace"></div>

Date Created: 17/05/2023 20:08:29
Tags: #Type/Definition #Topic/Topology

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Fundamental Group]]
Generalizations: _Not Applicable_

Properties: [[Basic properties of homotopies of paths]]
Sufficiencies: _Not Applicable_
Equivalences: [[Simply-connected iff homotopic paths]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $X$ be a topological space and let $\gamma_0,\gamma_1:I\to X$ be paths. A **homotopy from $\gamma_0$ to $\gamma_1$** is a family_ $\l\{\gamma_t\r\}_{t\in I}$ _of paths such that:_
* _For all $t\in I$, the paths $\gamma_t$ have the same start and end points._
* _The map $H:I\times I\to X$ by $H\l(s,t\r)\coloneqq\gamma_t\!\l(s\r)$ is continuous._

_If there exists a homotopy from $\gamma_0$ to $\gamma_1$, then $\gamma_0$ and $\gamma_1$ are said to be **homotopic** and we write $\gamma_0\htopeq\gamma_1$._

```

**Remark.** Equivalently, we can define a homotopy from $\gamma_0$ to $\gamma_1$ as the function $H:I\times I\to X$. The family $\gamma_t$ is then recovered by $\gamma_t\!\l(s\r)\coloneqq H\l(s,t\r)$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Homotopy of paths is an equivalence relation: it is clearly reflexive and symmetric, and, if $\gamma_0\htopeq\gamma_1$ and $\gamma_1\htopeq\gamma_2$ via the homotopies $H_1$ and $H_2$, respectively, then the function $H:I\times I\to X$ defined by $H\l(s,t\r)\coloneqq H_1\!\l(s,2t\r)$ for $0\leq t\leq1/2$ and $H\l(s,t\r)\coloneqq H_2\!\l(s,1-2t\r)$ for $1/2\leq t\leq1$ is a homotopy from $\gamma_0$ to $\gamma_2$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Let $\gamma$ be a closed curve, say at $x_0$, and let $\epsilon$ be the constant curve at $x_0$. If $\gamma\htopeq\epsilon$, then $\gamma$ is said to be **null-homotopic**.<span style="float:right;">$\blacklozenge$</span>
