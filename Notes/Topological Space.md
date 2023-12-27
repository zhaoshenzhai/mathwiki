---
mathLink-blocks:
    category-of-topological-spaces: $\cattop$
    continuous-function: Continuous Function
    isomorphisms: Isomorphisms in $\cattop$
    product-space: Products in $\cattop$
    quotient: Quotients in $\cattop$
    subspace: Subobjects in $\cattop$
---

<div class="topSpace"></div>

Date Created: 23/01/2022 19:05:00
Tags: #Type/Definition #Topic/Topology

Types: [[k-Space]], [[Sequential Space]], [[First and Second Countable Spaces]], [[Hausdorff Space]], [[Metric Space]], [[Compact Space]], [[Separable Space]], [[Connected Space]]
Examples: [[Order Space]], [[Path]]
Constructions: [[Closure and Interior]], [[Boundary]], [[Sequential Limits]], [[Homotopy]], [[Covering Space]], [[Mapping Cylinder]]
Generalizations: <i>Not Applicable</i>

Properties: [[Top is complete]], [[Measurable Function#^continuous-implies-Borel]]
Sufficiencies: [[Basis and Subbasis]], [[An epsilon-trade for an easy life#^Luzin]]
Equivalences: <i>Not Applicable</i>
Justifications: [[Compact Space#^extreme-value-theorem]], [[Compact Space#^compact-hausdorff-implies-closed]]
^category-of-topological-spaces

``` ad-Definition
title: Definition.

Let $X$ be a set. A <b>topology</b> on $X$ is a family $\tau\subseteq\pow\l(X\r)$ of <b>open sets</b> containing $\em$ and $X$ and is closed under (arbitrary) unions and finite intersections.
* A function $f:X\to Y$ is said to be <b>continuous</b> if preimages of open sets are open.
* The <b>category of topological spaces</b> is the category $\cattop$ whose objects are topological spaces and whose morphisms are continuous functions.

```
^continuous-function

<b>Remark.</b> The isomorphisms in $\cattop$ are continuous bijections whose inverse is also continuous. The second condition is necessary; for instance, $\exp:\l[0,1\r)\to S^1$ is a continuous bijection whose inverse is <i>not</i> continuous. A sufficient condition for a continuous bijection $f:X\to Y$ to have a continuous inverse is that $X$ is compact and $Y$ is Hausdorff, in which case every closed set $F\subseteq X$ is compact, so $f\l(F\r)$ is compact and hence closed too.<span style="float:right;">$\blacklozenge$</span> ^isomorphisms
