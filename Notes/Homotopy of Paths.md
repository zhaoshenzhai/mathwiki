<div class="topSpace"></div>

Date Created: 17/05/2023 20:08:29
Tags: #Type/Definition #Topic/Algebraic_Topology

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

_Let $X$ be a topological space and let $\gamma_0,\gamma_1:\l[0,1\r]\to X$ be paths. A **homotopy from $\gamma_0$ to $\gamma_1$** is a continuous map $H:\l[0,1\r]\times\l[0,1\r]\to X$ such that:_
* _$\gamma_0=H\l(\slot,0\r)$ and $\gamma_1=H\l(\slot,1\r)$._
* _For all $t\in\l[0,1\r]$, the paths $\gamma_t\coloneqq H\l(\slot,t\r)$ have the same start and end points._

_If there exists a homotopy $H$ from $\gamma_0$ to $\gamma_1$, then $\gamma_0$ and $\gamma_1$ are said to be **homotopic** and we write $\gamma_0\sim\gamma_1$._

```

**Remark.** Homotopy of paths is an equivalence relation: it is clearly reflexive and symmetric, and, if $\gamma_0\sim\gamma_1$ and $\gamma_1\sim\gamma_2$ via the homotopies $H_1$ and $H_2$, respectively, then the function $H:\l[0,1\r]\times\l[0,1\r]\to X$ defined by
$$\begin{equation}
    H\l(s,t\r)\coloneqq
    \begin{dcases}
        H_1\l(s,2t\r) & \textrm{if}\ \ 0\leq t\leq1/2 \\
        H_2\l(s,1-2t\r) & \textrm{if}\ \ 1/2\leq t\leq1
    \end{dcases}
\end{equation}$$
is a homotopy from $\gamma_0$ to $\gamma_2$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Let $\gamma$ be a closed curve, say at $x_0$, and let $\epsilon$ be the constant curve at $x_0$. If $\gamma\sim x_0$, then $\gamma$ is said to be **null-homotopic**.<span style="float:right;">$\blacklozenge$</span>
