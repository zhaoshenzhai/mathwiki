---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 18/05/2023 00:45:42
Tags: #Type/Definition #Topic/Topology

Types: [[Universal Cover]]
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: [[Covering Homotopy Theorem]], [[Basic properties of covering maps]]
Sufficiencies: _Not Applicable_
Equivalences: [[Galois Correspondence of Covering Spaces]]
Justifications: [[Connected implies well-defined number of sheets]]

``` ad-Definition
title: Definition.

_Let $X$ be a topological space. A **covering map of $X$** is a continuous map $p:\widetilde{X}\to X$ from a topological space $\widetilde{X}$ such that for all $x_0\in X$, there exists a neighborhood $U$ of $x_0$ in $X$ where_ $p^{-1}\!\l(U\r)=\coprod_{i\in I}V_i$ _for some disjoint open sets $V_i$ of $\widetilde{X}$ and where each_ $\l.p\r|_{V_i}:V_i\to U$ _is a homeomorphism._
* _If $p:\widetilde{X}\to X$ is a covering map, then $\widetilde{X}$ is said to be a **covering space of $X$**, the neighborhood $U$ is said to be **evenly-covered** by the **sheets** $V_i\subseteq\widetilde{X}$._
* _The cardinality $\l|p^{-1}\!\l(x_0\r)\r|$ is said to be the **number of sheets of $p$ over $U$**. If $X$ is connected, then $\l|p^{-1}\!\l(x_0\r)\r|$ is constant for all $x_0\in X$ and so defines the **number of sheets of $p$**. If $n\coloneqq\l|p^{-1}\!\l(x_0\r)\r|$, we say that $p$ is an **$n$-sheeted covering**._

```

**Remark.** Covering maps are stronger than fibrations in the sense that the lifting is unique. We have the following unique lifting properties.
* For each path $\gamma:I\to X$ starting at some point $x_0\in X$ and each $\widetilde{x}_0\in p^{-1}\!\l(x_0\r)$ there exists a unique path $\widetilde{\gamma}:I\to\widetilde{E}$ starting at $\widetilde{x}_0$ lifting $\gamma$.
* For each homotopy $\gamma_t:I\to X$ of paths and each lift $\widetilde{\gamma}_0:I\to\widetilde{X}$ of $\gamma_0$, there exists a unique homotopy $\widetilde{\gamma}_t:I\to\widetilde{X}$ of paths lifting $\gamma_t$.

The resulting homotopy $\widetilde{\gamma}_t$ is a homotopy _of paths_ since as $t$ varies, the endpoints $\widetilde{\gamma}_t\!\l(0\r)\in p^{-1}\!\l(\gamma_t\!\l(0\r)\r)$ and $\widetilde{\gamma}_t\!\l(1\r)\in p^{-1}\!\l(\gamma_t\!\l(1\r)\r)$ are constant since $\gamma_t\!\l(0\r)$ and $\gamma_t\!\l(1\r)$ are.<span style="float:right;">$\blacklozenge$</span>
