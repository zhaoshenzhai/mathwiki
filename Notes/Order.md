<div class="topSpace"></div>

Date Created: 19/09/2022 11:55:03
Tags: #Type/Definition #Topic/Group_Theory

Types: <i>Not Applicable</i>
Examples: [[Euler's Totient Function]]
Constructions: <i>Not Applicable</i>
Generalizations: [[Annihilator]]

Properties: [[Basic properties of order]]
Sufficiencies: [[Cauchy's Theorem]]
Equivalences: <i>Not Applicable</i>
Justifications: [[Universal Property of Free Groups]], [[Integers|Division Algorithm]], [[Lagrange's Theorem]]

``` ad-Definition
title: Definition.

Let $G$ be a group and take $x\in G$. Consider the unique homomorphism $\phi:\Z\to G:n\mapsto x^n$ extending $1\mapsto x$. The <b>order of $x$</b> is $\ord{x}\coloneqq\l|\im\phi\r|$.

```

<b>Remark.</b> In other words, $\ord{x}=\infty$ if $\ker\phi$ vanishes, and $\ord x$ is the smallest positive integer $m\in\ker\phi$ otherwise. Indeed, if $\ker\phi$ vanishes, then $\im\phi\iso\Z$ has infinite cardinality. Otherwise, $\im\phi\iso\Z/m\Z$ has cardinality $m$, where $\ker\phi=m\Z$ follows from the division algorithm.
* If $G=\gen{x}$ is cyclic, then the two cases correspond exactly to when $G\iso\Z/m\Z$ and $G\iso\Z$.
* Observe that $n\in\ker\phi$ iff $\ord g$ divides $n$. Indeed, $\ker\phi=m\Z$ and so $n\in\ker\phi$ iff $n=mk$ for some $k\in\Z$.
* We define the <b>order of $G$</b> to be its cardinality $\l|G\r|$. By Lagrange’s Theorem, we see that $\ord x$ divides $\l|G\r|$, so $g^{\l|G\r|}=e$.<span style="float:right;">$\blacklozenge$</span>
