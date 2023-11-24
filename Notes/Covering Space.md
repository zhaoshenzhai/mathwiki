---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 18/05/2023 00:45:42
Tags: #Type/Definition #Topic/Topology

Types: [[Universal Cover]], [[Normal Cover]]
Examples: <i>Not Applicable</i>
Constructions: [[Monodromy Action]], [[Covering Space Isomorphism]], [[Category of Covering Maps]]
Generalizations: <i>Not Applicable</i>

Properties: [[Homotopy Lifting Theorem]], [[Monodromy Action]], [[Independence of base point]]
Sufficiencies: [[Lifting Criterion]]
Equivalences: [[Galois Correspondence of Covering Spaces]]
Justifications: [[Path-connected Space#^locally-path-connected-connected-implies-path-connected]]

``` ad-Definition
title: Definition.

Let $X$ be a topological space. A <b>covering map of $X$</b> is a continuous map $p:E\to X$ from a connected and locally path-connected space $E$ such that for all $x\in X$, there exists a neighborhood $U$ of $x$ in $X$ where $p^{-1}\!\l(U\r)=\coprod_{i\in I}V_i$ for some disjoint open sets $V_i$ of $E$ and where each $\l.p\r|_{V_i}:V_i\to U$ is a homeomorphism.
* If $p:E\to X$ is a covering map, then $E$ is said to be a <b>covering space of $X$</b> and the neighborhood $U$ is said to be <b>evenly-covered</b> by the <b>sheets</b> $V_i\subseteq E$.
* The cardinality $n\coloneqq\l|p^{-1}\!\l(x\r)\r|$ is independent of $x$ and is said to be the <b>number of sheets of $p$</b>. We say that $p$ is an <b>$n$-sheeted covering</b>.

```

<b>Remark.</b> Connectedness implies that the number of sheets of $p$ is well-defined. Indeed, consider the equivalence relation $\sim$ on $X$ defined by $x\sim x'$ iff the fibers over $x$ and $x'$ are equinumerous. Each equivalence class is open since for every $x\in X$, there is an open set $U\ni x$ evenly-covered by some sheets $V_j$. For any $x'\in U$, the set $p^{-1}\!\l(x'\r)\cap V_j$ is a singleton for all $j\in J$, so $\l|p^{-1}\!\l(x'\r)\r|=\l|J\r|$. In particular, since $x\in U$, we have $x\sim x'$ as desired.
* Every covering map $p:E\to X$ is an open map and hence also a quotient map. Indeed, let $V\subseteq E$ be open and let $x\in p\l(V\r)$. For an evenly-covered neighborhood $U\ni x$, let $e\in p^{-1}\!\l(x\r)\cap V$ and let $\widetilde{U}$ be the sheet above $U$ containing $e$. Since $\l.p\r|_{\widetilde{U}}$ is a homeomorphism, we see that $x\in p\,(\widetilde{U}\cap V)\subseteq p\l(V\r)$ is open, as desired.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Fix $x_0\in X$. The Homotopy Lifting Theorem shows that $p_\ast:\pi_1\!\l(E,e_0\r)\into\pi_1\!\l(X,x_0\r)$ and that the image $p_\ast\pi_1\!\l(E,e_0\r)\subgrpeq\pi_1\!\l(X,x_0\r)$ consists of loops in $X$ whose lifts to $E$ are loops at $e_0$. Indeed, if $p_\ast\widetilde{\gamma}$ vanishes, then the homotopy to the constant loop at $x_0$ lifts to a homotopy from $\widetilde{\gamma}$ to the constant loop at $e_0$. Thus $\widetilde{\gamma}$ vanishes in $\pi_1(E,e_0)$ as desired. Finally, every $\gamma\in p_\ast\pi_1(E,e_0)$ lifts to a path $\widetilde{\gamma}\in\pi_1\!\l(E,e_0\r)$, which is a loop at $e_0$.<span style="float:right;">$\blacklozenge$</span>
