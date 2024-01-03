---
mathLink: auto
mathLink-blocks:
    category-of-covering-spaces: $\catcov$
    universal-cover: Universal Cover
    pi-injectivity-and-loops: Lifts of $p_\ast\pi_1\!\l(E,e_0\r)\substructeq\pi_1\!\l(X,x_0\r)$ are loops
    isomorphic-covering-conjugate: Characterization of equivalent coverings
    covering-space-action-free: $\Cov\l(E/X\r)\act E$ freely
---

<div class="topSpace"></div>

Date Created: 18/05/2023 00:45:42
References:
Tags: #Type/Definition #Topic/Topology
^universal-cover

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Homotopy Lifting Theorem]], [[Covering Automorphisms and Monodromy]]
Sufficiencies: [[Lifting Criterion]], [[Existence of universal covers]], [[Covering Space Action]]
Equivalences: [[Galois Correspondence of Covering Spaces]]
Justifications: [[Path-connected Space#^locally-path-connected-connected-implies-path-connected]], [[Regular Action#^equivariant-quotients-iff-conjugate-subgroups]]

``` ad-Definition
title: Definition.

Let $X$ be a topological space. A <b>covering space of $X$</b> is a surjection $p:E\to X$ from a connected and locally path-connected space $E$ such that for all $x\in X$, there exists a neighborhood $U$ of $x$ in $X$ where $p^{-1}\!\l(U\r)=\coprod_{i\in I}V_i$ for some disjoint open sets $V_i$ of $E$ and where each $\l.p\r|_{V_i}:V_i\to U$ is a homeomorphism.
* The neighborhood $U$ is said to be <b>evenly-covered</b> by the <b>sheets</b> $V_i\subseteq E$. The cardinality $n\coloneqq\l|p^{-1}\!\l(x\r)\r|$ is independent of $x$ and is said to be the <b>number of sheets of $p$</b>. We say that $p$ is an <b>$n$-sheeted covering</b>.
* The <b>category of covering spaces</b> over $X$ is the category $\catcov$ whose objects are covering maps $p:E\to X$ and whose morphisms are continuous maps $f:\tpl{E_1,p_1}\to\tpl{E_2,p_2}$ such that $p_1=p_2\circ f$. A <b>universal cover</b> of $X$ is any simply-connected cover $p:\widetilde{X}\to X$.

```
^category-of-covering-spaces

<b>Remark.</b> Connectedness implies that the number of sheets of $p$ is well-defined. Indeed, consider the equivalence relation $\sim$ on $X$ defined by $x\sim x'$ iff the fibers over $x$ and $x'$ are equinumerous. Each equivalence class is open since for every $x\in X$, there is an open set $U\ni x$ evenly-covered by some sheets $V_i$. For any $x'\in U$, the set $p^{-1}\!\l(x'\r)\cap V_i$ is a singleton for all $i\in I$, so $\l|p^{-1}\!\l(x'\r)\r|=\l|I\r|$. In particular, since $x\in U$, we have $x\sim x'$ as desired.
* Every covering map $p:E\to X$ is an open map and hence also a quotient map. Indeed, let $V\subseteq E$ be open and let $x\in p\l(V\r)$. For an evenly-covered neighborhood $U\ni x$, let $e\in p^{-1}\!\l(x\r)\cap V$ and let $\widetilde{U}$ be the sheet above $U$ containing $e$. Since $\l.p\r|_{\widetilde{U}}$ is a homeomorphism, we see that $x\in p\,(\widetilde{U}\cap V)\subseteq p\l(V\r)$ is open, as desired.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> For a fixed covering $p:E\to X$, the <i>deck transformations</i> of $p$ is the automorphism group $\Cov\l(E/X\r)\coloneqq\Aut\l(E,p\r)$ in $\catcov$. By the uniqueness of liftings, any deck transformation fixing a point is the identity, so the action $\Cov\l(E/X\r)\act E$ is free. ^covering-space-action-free
* By the Lifting Criterion, two coverings $p_i:\tpl{E_i,e_i}\to\tpl{X,x_0}$ are isomorphic iff $p_{1\ast}\pi_1\!\l(E_1,e_1\r)=p_{2\ast}\pi_1\!\l(E_2,e_2\r)$. In the unpointed category, they are isomorphic iff the subgroups $p_{1\ast}\pi_1\!\l(E_1,e_1\r)$ and $p_{2\ast}\pi_1\!\l(E_2,e_2\r)$ are conjugate, which occurs iff $p_1^{-1}\!\l(x_0\r)$ and $p_2^{-1}\!\l(x_0\r)$ are $\pi_1\!\l(X,x_0\r)$-equivariant under the Monodromy action. ^isomorphic-covering-conjugate
* More generally, there exists a covering homeomorphism $f:\tpl{E_1,e_1}\to\tpl{E_2,e_2}$ iff $p_{1\ast}\pi_1\!\l(E_1,e_1\r)\subseteq p_{2\ast}\pi_1\!\l(E_2,e_2\r)$. This is always the case if $E_1$ is universal.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Fix $x_0\in X$. The Homotopy Lifting Theorem shows that $p_\ast:\pi_1\!\l(E,e_0\r)\into\pi_1\!\l(X,x_0\r)$ and that the image $p_\ast\pi_1\!\l(E,e_0\r)\substructeq\pi_1\!\l(X,x_0\r)$ consists of loops in $X$ whose lifts to $E$ are loops at $e_0$. Indeed, if $p_\ast\widetilde{\gamma}$ vanishes, then the homotopy to the constant loop at $x_0$ lifts to a homotopy from $\widetilde{\gamma}$ to the constant loop at $e_0$. Thus $\widetilde{\gamma}$ vanishes in $\pi_1(E,e_0)$ as desired. Finally, every $\gamma\in p_\ast\pi_1(E,e_0)$ lifts to a path $\widetilde{\gamma}\in\pi_1\!\l(E,e_0\r)$, which is a loop at $e_0$.<span style="float:right;">$\blacklozenge$</span> ^pi-injectivity-and-loops
