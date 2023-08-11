---
mathLink: Closure $\textrm{\it{et al.}}$
---

<div class="topSpace"></div>

Date Created: 11/08/2023 15:18:02
Tags: #Type/Definition #Topic/Topology

Types: [[Condensation Point or aleph1-accumulation Point]]
Examples: <i>Not Applicable</i>
Constructions: [[Dense Set]], [[Perfect Set]], [[Limit-point Compact Space]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: [[Neighborhood characterization of cluster points (metric)]], [[Sequential characterization of closure (metric)]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $A\subseteq X$ be a subset of a topological space $X$. The <b>closure</b> of $A$ is the intersection $\bar{A}$ of all closed sets containing $A$, and similarly the <b>interior</b> of $A$ is the union $A^\circ$ of all open sets contained in $A$.

* The <b>boundary</b> of $A$ is the difference $\del A\coloneqq\bar{A}\comp A^\circ$, where $x\in\del A$ iff every neighborhood of $x$ intersects both $A$ and $A^c$.
* A point $x\in X$ is a <b>cluster point</b> of $A$ if $x\in\bar{A\comp\l\{x\r\}}$. Denote the set of all cluster points of $A$ as $A'$.

```

<b>Remark.</b> The operations $\l(\slot\r)^\circ$ and $\bar{\l(\slot\r)}$ are ‘dual’ in the sense that $\l(A^\circ\r)^c=\bar{A^c}$ and $(\bar{A})^c=\l(A^c\r)^\circ$.
* Note that $x\in\bar{A}$ iff every neighborhood of $x$ intersects $A$. Indeed, if $x\not\in\bar{A}$, then there is a closed set $F\supseteq A$ such that $x\not\in F$. Then $x\in U\coloneqq F^c$, which is open, and $U\cap A\subseteq U\cap F=\em$. Conversely, if $U$ is a neighborhood of $x$ disjoint from $A$, then $x\not\in F\coloneqq U^c$, which is closed and contains $A$. Thus $x\not\in\bar{A}$.


Note that $\bar{A}=A\cup\del A=A\cup A'$.<span style="float:right;">$\blacklozenge$</span>
