---
mathLink-blocks:
    category-of-topological-spaces: $\cattop$
    continuous-function: Continuous Function
    isomorphisms: Isomorphisms in $\cattop$
    open-set-functor: Open Set Functor
    product-space: Products in $\cattop$
    quotient: Quotients in $\cattop$
    subspace: Subobjects in $\cattop$
---

<div class="topSpace"></div>

Date Created: 23/01/2022 19:05:00
References: #Ref/Mun00 #Ref/Eng89 #Ref/Mac10
Tags: #Type/Definition #Topic/Topology

Types: [[Compact Space]], [[Connected Space]], [[Metric Space]], [[Manifold]], [[Separation Axioms]], [[k-Space]], [[Sequential Space]], [[First and Second Countable Spaces]], [[Separable Space]]
Examples: [[Order Space]], [[Path]]
Constructions: [[Closure and Interior]], [[Convergence of Nets]], [[Homotopy]], [[Covering Space]], [[Mapping Cylinder]]
Generalizations: <i>Not Applicable</i>

Properties: [[Top is complete]], [[Measurable Function#^continuous-implies-Borel]]
Sufficiencies: [[Basis and Subbasis]], [[An epsilon-trade for an easy life#^Luzin]]
Equivalences: [[Characterizations of topology via nets]]
Justifications: [[Compact Space#^extreme-value-theorem]], [[Separation Axioms#^compact-hausdorff-implies-closed]]
^category-of-topological-spaces

``` ad-Definition
title: Definition.

Let $X$ be a set. A <b>topology</b> on $X$ is an inclusion poset $\tau\subseteq\pow\l(X\r)$ of <b>open sets</b> that contains $\em$ and $X$ and is closed under (arbitrary) joins and finite meets.
* A function $f:X\to Y$ is said to be <b>continuous</b> if preimages of open sets are open.
* The <b>category of topological spaces</b> is the category $\cattop$ whose objects are topological spaces and whose morphisms are continuous functions.

```
^continuous-function

<b>Remark.</b> The isomorphisms in $\cattop$ are continuous bijections whose inverse is also continuous. The second condition is necessary; for instance, $\exp:\l[0,1\r)\to S^1$ is a continuous bijection whose inverse is <i>not</i> continuous. A sufficient condition for a continuous bijection $f:X\to Y$ to have a continuous inverse is that $X$ is compact and $Y$ is Hausdorff, in which case every closed set $F\subseteq X$ is compact, so $f\l(F\r)$ is compact and hence closed too.<span style="float:right;">$\blacklozenge$</span> ^isomorphisms

---

<b>Remark.</b> There is a contravariant functor $\mc{O}:\cattop^\textrm{op}\to\catord$ mapping each topological space $\tpl{X,\tau}$ to the poset $\tau$ and each continuous function $f:\tpl{X,\tau}\to\tpl{Y,\rho}$ to the morphism $f^{-1}:\rho\to\tau$, which carries an open set $V\in\rho$ to its preimage $f^{-1}\!\l(V\r)\in\tau$. Similarly, we have $\mc{C}:\cattop^\textrm{op}\to\catord$ mapping $X$ to its poset of closed sets. ^open-set-functor
* Since taking complements commutes with taking preimages, we have a natural isomorphism $\mc{O}\to\mc{C}$ via $U\mapsto U^c$ for each $U\in\mc{O}\l(X\r)$.
* Regarding $\mc{O}:\cattop^\textrm{op}\to\catset$, we note that it is represented by the Sierpinski space $2$ via the natural isomorphism $\eta_X:U\mapsto\chi_U$ for each $U\in\mc{O}\l(X\r)$. Similarly for $\mc{C}$, which gives recovers the natural isomorphism between $\mc{O}$ and $\mc{C}$ above.<span style="float:right;">$\blacklozenge$</span>
