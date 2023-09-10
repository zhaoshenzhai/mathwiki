---
mathLink-blocks:
    category-of-metric-spaces: $\catmet$
---

<div class="topSpace"></div>

Date Created: 27/09/2022 18:49:17
Tags: #Type/Definition #Topic/Real_Analysis

Types: [[Complete Metric Space]]
Examples: <i>Not Applicable</i>
Constructions: [[Uniform Continuity]], [[Lipschitz Continuity]], [[Geodesic]]
Generalizations: <i>Not Applicable</i>

Properties: [[Characterizations of compactness (metric space)]], [[Characterizations of continuity (metric)]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $X$ be a set. A <b>metric on $X$</b> is a function $d:X\times X\to\R$ that is positive-definite, symmetric, and satisfies the Triangle inequality:
* (Positive-definiteness). $\fa x,y\in X:d\l(x,y\r)\geq0$; equality holds iff $x=y$.
* (Symmetry). $\fa x,y\in X:d\l(x,y\r)=d\l(y,x\r)$.
* (Triangle inequality). $\fa x,y,z\in X:d\l(x,z\r)\leq d\l(x,y\r)+d\l(y,z\r)$.

A set $X$, equipped with a metric $d:X\times X\to\R$, is said to be a <b>metric space</b>.

```

<b>Remark.</b> A metric on $X$ induces a <i>metric topology</i> on $X$ by the basis consisting of all <i>open balls</i> $B\l(x,\epsilon\r)\coloneqq\l\{y\in X\st d\l(x,y\r)<\epsilon\r\}$ for $x\in X$ and $\epsilon>0$.
* The collection of open balls clearly cover $X$. Take $p\in B\l(x_1,\epsilon_1\r)\cap B\l(x_2,\epsilon_2\r)$, so $d\l(p,x_i\r)<\epsilon_i$ for $i=1,2$. Set $\epsilon\coloneqq\min_i\l\{\epsilon_i-d\l(p,x_i\r)\r\}$; we claim that $B\l(p,\epsilon\r)$ lies in the intersection of $B\l(x_1,\epsilon_1\r)$ and $B\l(x_2,\epsilon_2\r)$. Indeed, for all $q\in B\l(p,\epsilon\r)$, we have $d\l(q,x_i\r)\leq d\l(p,q\r)+d\l(p,x_i\r)<\epsilon_i$ for $i=1,2$, as desired.

A topological space $\tpl{X,\mc{T}}$ is <i>metrizable</i> if there is a metric $d$ on $X$ that generates $\mc{T}$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> The <i>category of metric spaces</i> is the category $\catmet$ whose objects are metric spaces and whose morphisms are $1$-Lipschitz functions; that is, functions $f:X\to X'$ such that $d\l(f\l(x\r),f\l(y\r)\r)\leq d\l(x,y\r)$ for all $x,y\in X$. The isomorphisms in $\catmet$ are precisely the distance-preserving bijections, and the automorphisms on a metric space $X$ form the <i>isometry group</i> $\Isom\l(X\r)$.
^category-of-metric-spaces
* If $f:X\to X'$ is such that $d'\l(f\l(x\r),f\l(y\r)\r)=f\l(x,y\r)$ but is not necessarily surjective, then it is said to be an <i>isometric embedding</i>. Note that such maps are automatically injective.<span style="float:right;">$\blacklozenge$</span>
