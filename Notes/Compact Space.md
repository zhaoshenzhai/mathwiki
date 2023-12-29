---
mathLink-blocks:
    extreme-value-theorem: Extreme Value Theorem
---

<div class="topSpace"></div>

Date Created: 28/12/2022 18:12:46
Tags: #Type/Definition #Topic/Topology

Types: <i>Not Applicable</i>
Examples: [[Cantor Space]]
Constructions: [[k-Space]]
Generalizations: <i>Not Applicable</i>

Properties: [[Compact implies complete]], [[Sequentially compact implies countably compact]], [[Sequentially compact implies separable]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Characterizations of compactness]], [[Limitations of Size]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A topological space $X$ is said to be <b>compact</b> if every open cover has a finite subcover.

```
^sequential-compactness

<b>Remark.</b> For a cardinal $\kappa$, we say that $X$ is <i>$\kappa$-Lindelöf</i> if every open cover of $X$ admits a subcover of cardinality $\leq\kappa$; for $\kappa\coloneqq\aleph_0$, we say that $X$ is <i>Lindelöf</i>. This is not to be confused with <i>countably compact</i> spaces, where every countable open cover admits a finite subcover.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> The most important property of a compact space $X$ is the <i>Extreme Value Theorem</i>: for a continuous function $f:X\to Y$, if $X$ is compact, then so is $f\l(X\r)$. ^extreme-value-theorem
* Indeed, let $\l\{V_\alpha\r\}$ be a collection of open sets of $Y$ that covers $f\l(X\r)$. Since $f$ is continuous, each $f^{-1}\!\l(V_\alpha\r)$ is open and hence $\l\{f^{-1}\!\l(V_\alpha\r)\r\}$ is an open cover of $X$. But $X$ is compact, so there exist finitely-many indices $\alpha_1,\dots,\alpha_k$ such that $X=\bigcup_{i=1}^kf^{-1}\!\l(V_{\alpha_i}\r)$. Observe then that $f\l(X\r)\subseteq\bigcup_{i=1}^k V_{\alpha_i}$, so $f\l(X\r)$ is compact as desired.<span style="float:right;">$\blacklozenge$</span>
