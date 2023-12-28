---
mathLink-blocks:
    category-of-metric-spaces: $\catmet$
    metric-spaces-are-first-countable: Metric spaces are $1^\textrm{st}$-countable
---

<div class="topSpace"></div>

Date Created: 27/09/2022 18:49:17
Tags: #Type/Definition #Topic/Real_Analysis

Types: [[Complete Metric Space]], [[Geodesic Space]]
Examples: [[Isometries of model spaces]]
Constructions: [[Distance between subspaces]]
Generalizations: <i>Not Applicable</i>

Properties: [[Compactness in metric spaces]], [[Heine-Cantor Theorem]], [[Distance between subspaces#^epsilon-neighborhood-theorem]]
Sufficiencies: [[Continuous Extension Theorem]]
Equivalences: [[Normed Vector Space#^continuous-iff-lipschitz]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $X$ be a set. A <b>metric</b> on $X$ is a positive-definite symmetric function $d:X\times X\to\R$ such that $d\l(x,z\r)\leq d\l(x,y\r)+d\l(y,z\r)$ for all $x,y,z\in X$ <span style="color:gray">($\Delta$-inequality)</span>.
* A <b>$k$-Lipschitz</b> map between metric spaces $X$ and $Y$ is a function $f:X\to Y$ such that $d\l(f(x),f(x')\r)\leq k d\l(x,x'\r)$ for all $x,x'\in X$.
* The <b>category of metric spaces</b> is the category $\catmet$ whose objects are metric spaces and whose morphisms are $1$-Lipschitz maps.

```

<b>Remark.</b> A metric on $X$ induces a <i>metric topology</i> on $X$ by the basis consisting of all <i>open balls</i> $B\l(x,\epsilon\r)\coloneqq\l\{y\in X\st d\l(x,y\r)<\epsilon\r\}$ for $x\in X$ and $\epsilon>0$.
* The collection of open balls clearly cover $X$. Take $p\in B\l(x_1,\epsilon_1\r)\cap B\l(x_2,\epsilon_2\r)$, so $d\l(p,x_i\r)<\epsilon_i$ for $i=1,2$. Set $\epsilon\coloneqq\min_i\l\{\epsilon_i-d\l(p,x_i\r)\r\}$; we claim that $B\l(p,\epsilon\r)$ lies in the intersection of $B\l(x_1,\epsilon_1\r)$ and $B\l(x_2,\epsilon_2\r)$. Indeed, for all $q\in B\l(p,\epsilon\r)$, we have $d\l(q,x_i\r)\leq d\l(p,q\r)+d\l(p,x_i\r)<\epsilon_i$ for $i=1,2$, as desired.
* This topology is normal since for each pair of disjoint closed subsets $A,B\subseteq X$, there is a separation consisting of all $x\in X$ such that $d\l(x,A\r)<d\l(x,B\r)$ around $A$ and all $x\in X$ such that $d\l(x,B\r)<d\l(x,A\r)$ around $B$. It is clearly first-countable since $\l\{B\l(x,1/n\r)\r\}$ is a neighborhood basis around each $x\in X$. ^metric-spaces-are-first-countable

A topological space $\tpl{X,\tau}$ is <i>metrizable</i> if there is a metric $d$ on $X$ that generates $\tau$. This also makes $\catmet$ a subcategory of $\cattop$. There is also an intermediate category of uniform spaces, and for metric spaces the uniformly-continuous maps are maps where $\fa\epsilon>0,\ex\delta>0,\fa x,x'\in X\st d\l(x,x'\r)<\delta\Rightarrow d\l(f(x),f(x')\r)<\epsilon$. Note that $k$-Lipschitz maps are uniformly continuous, which are in turn continuous. <span style="color:pink">Rewrite this when uniform spaces are developed.</span><span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> The isomorphisms in $\catmet$ are precisely the distance-preserving bijections, and the automorphisms on a metric space $X$ form the <i>isometry group</i> $\Isom\l(X\r)$.
^category-of-metric-spaces
* If $f$ is a distance-preserving map but is not necessarily surjective, then it is said to be an <i>isometric embedding</i>; such maps are automatically injective.<span style="float:right;">$\blacklozenge$</span>