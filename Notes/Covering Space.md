---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 18/05/2023 00:45:42
Tags: #Type/Definition #Topic/Topology

Types: [[Universal Cover]], [[Normal Cover]]
Examples: <i>Not Applicable</i>
Constructions: [[Covering Space Isomorphism]], [[Category of Covering Maps]]
Generalizations: <i>Not Applicable</i>

Properties: [[Covering Homotopy Theorem]], [[Basic properties of covering spaces]], [[Independence of base point]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Galois Correspondence of Covering Spaces]]
Justifications: [[Connected implies well-defined number of sheets]]

``` ad-Definition
title: Definition.

Let $X$ be a topological space. A <b>covering map of $X$</b> is a continuous map $p:E\to X$ from a connected and locally path-connected space $E$ such that for all $x\in X$, there exists a neighborhood $U$ of $x$ in $X$ where $p^{-1}\!\l(U\r)=\coprod_{i\in I}V_i$ for some disjoint open sets $V_i$ of $E$ and where each $\l.p\r|_{V_i}:V_i\to U$ is a homeomorphism.
* If $p:E\to X$ is a covering map, then $E$ is said to be a <b>covering space of $X$</b> and the neighborhood $U$ is said to be <b>evenly-covered</b> by the <b>sheets</b> $V_i\subseteq E$.
* The cardinality $n\coloneqq\l|p^{-1}\!\l(x\r)\r|$ is independent of $x$ and is said to be the <b>number of sheets of $p$</b>. We say that $p$ is an <b>$n$-sheeted covering</b>.
* The <b>monodromy action of $\pi_1\l(X,x\r)$ on fibers</b> is the action $\phi:\pi_1\l(X,x\r)\to\Aut\!\l(p^{-1}\!\l(x\r)\r)\!$ given by $\l[\gamma\r]\cdot\widetilde{x}\coloneqq\widetilde{\gamma}\l(0\r)$ where $\widetilde{\gamma}$ is the lift of $\gamma$ ending at $\widetilde{x}$.

```

<b>Remark.</b> Covering maps are stronger than fibrations in the sense that the lifting is unique. We have the following unique lifting properties.
* For each path $\gamma:I\to X$ starting at some point $x\in X$ and each $\widetilde{x}_0\in p^{-1}\!\l(x\r)$ there exists a unique path $\widetilde{\gamma}:I\to\widetilde{E}$ starting at $\widetilde{x}_0$ lifting $\gamma$.
* For each homotopy $\gamma_t:I\to X$ of paths and each lift $\widetilde{\gamma}_0:I\to E$ of $\gamma_0$, there exists a unique homotopy $\widetilde{\gamma}_t:I\to E$ of paths starting at $\widetilde{\gamma}_0$ lifting $\gamma_t$.

The resulting homotopy $\widetilde{\gamma}_t$ is a homotopy _of paths_ since as $t$ varies, the endpoints $\widetilde{\gamma}_t\!\l(0\r)$ and $\widetilde{\gamma}_t\!\l(1\r)$ are curves in $E$ that lift the constant curves at $\gamma_t\!\l(0\r)$ and $\gamma_t\!\l(1\r)$, respectively. By uniqueness of liftings of paths, we see that $\widetilde{\gamma}_t\!\l(0\r)$ and $\widetilde{\gamma}_t\!\l(1\r)$ are constant curves at the lifts of $\gamma_t\!\l(0\r)$ and $\gamma_t\!\l(1\r)$, respectively, as desired.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> We define covering spaces to be path-connected. If not, we can always restrict to path-components. This implies that $X$ is path-connected too. Also, note that any local property of $X$ is inherited by $E$. In particular, if $X$ is locally path-connected, then so is $E$.<span style="float:right;">$\blacklozenge$</span>
