---
mathLink-blocks:
    hausdorff-implies-unique-limit: Hausdorff $\Rightarrow$ limits are unique
---

<div class="topSpace"></div>

Date Created: 10/09/2023 15:09:23
Tags: #Type/Definition #Topic/Topology

Types: <i>Not Applicable</i>
Examples: [[Metric Space]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Compact Space#^compact-hausdorff-implies-closed]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A topological space $X$ is said to be <b>Hausdorff</b> if every distinct pair of points $x,y\in X$ admit disjoint neighborhoods.

```

<b>Remark.</b> Every sequence $\tpl{x_n}$ in a Hausdorff space $X$ converges to at most one point. Indeed, suppose that $x_n\to x$. For any other $x\neq x'\in X$, let $U\ni x$ and $U'\ni x$ be disjoint neighborhoods thereof. Then $\fa^\infty n\in\N:x_n\in U$, so in particular we have $\fa^\infty n\in\N:x_n\not\in U'$. Thus $x_n\not\to x'$, as desired.<span style="float:right;">$\blacklozenge$</span>
^hausdorff-implies-unique-limit
