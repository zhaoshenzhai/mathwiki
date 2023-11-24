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

Properties: [[Homotopy Lifting Theorem]], [[Basic properties of covering spaces]], [[Independence of base point]]
Sufficiencies: [[Lifting Criterion]]
Equivalences: [[Galois Correspondence of Covering Spaces]]
Justifications: [[Path-connected Space#^locally-path-connected-connected-implies-path-connected]]

``` ad-Definition
title: Definition.

Let $X$ be a topological space. A <b>covering map of $X$</b> is a continuous map $p:E\to X$ from a connected and locally path-connected space $E$ such that for all $x\in X$, there exists a neighborhood $U$ of $x$ in $X$ where $p^{-1}\!\l(U\r)=\coprod_{i\in I}V_i$ for some disjoint open sets $V_i$ of $E$ and where each $\l.p\r|_{V_i}:V_i\to U$ is a homeomorphism.
* If $p:E\to X$ is a covering map, then $E$ is said to be a <b>covering space of $X$</b> and the neighborhood $U$ is said to be <b>evenly-covered</b> by the <b>sheets</b> $V_i\subseteq E$.
* The cardinality $n\coloneqq\l|p^{-1}\!\l(x\r)\r|$ is independent of $x$ and is said to be the <b>number of sheets of $p$</b>. We say that $p$ is an <b>$n$-sheeted covering</b>.
* The <b>monodromy action of $\pi_1\l(X,x\r)$ on fibers</b> is the action $\phi:\pi_1\l(X,x\r)\to\Aut\!\l(p^{-1}\!\l(x\r)\r)\!$ given by $\l[\gamma\r]\cdot\widetilde{x}\coloneqq\widetilde{\gamma}\l(0\r)$ where $\widetilde{\gamma}$ is the lift of $\gamma$ ending at $\widetilde{x}$.

```

<b>Remark.</b> Connectedness implies that the number of sheets of $p$ is well-defined. Indeed, consider the equivalence relation $\sim$ on $X$ defined by $x\sim x'$ iff the fibers over $x$ and $x'$ are equinumerous. Each equivalence class is open since for every $x\in X$, there is an open set $U\ni x$ evenly-covered by some sheets $V_j$. For any $x'\in U$, the set $p^{-1}\!\l(x'\r)\cap V_j$ is a singleton for all $j\in J$, so $\l|p^{-1}\!\l(x'\r)\r|=\l|J\r|$. In particular, since $x\in U$, we have $x\sim x'$ as desired.
* The locally path-connected hypothesis ensures that $E$ is also path-connected.

Note that every covering map $p:E\to X$ is a quotient map. Indeed, it suffices to show that $p$ is an open map, so let $V\subseteq E$ be open and let $x\in p\l(V\r)$. For an evenly-covered neighborhood $U\ni x$, let $e\in p^{-1}\!\l(x\r)\cap V$ and let $\widetilde{U}$ be the sheet above $U$ containing $e$; note that $\widetilde{U}\cap V$ is an open subset of $\widetilde{U}$ containing $e$. Since $\l.p\r|_{\widetilde{U}}:\widetilde{U}\to U$ is a homeomorphism, we see that $p\,(\widetilde{U}\cap V)$ is an open subset of $p\l(V\r)$ containing $x$, as desired.<span style="float:right;">$\blacklozenge$</span>
