---
mathLink-blocks:
    continuous-iff-lipschitz: Continuous $\Leftrightarrow$ Lipschitz (linear map)
---

<div class="topSpace"></div>

Date Created: 24/06/2022 21:36:42
Tags: #Type/Definition #Topic/Functional_Analysis

Types: [[Banach Space]]
Examples: [[Space of Continuous Functions]], [[lp Space]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Norms on finite-dimensional spaces are equivalent]]
Sufficiencies: [[Cauchy-Schwarz Inequality#^inner-product-space-induces-a-norm]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $k$ denote either $\R$ or $\C$. A <b>normed $k$-vector space</b> is a $k$-vector space $X$ equipped with a function $\|\slot\|:X\to\R$, called a <b>norm</b>, which satisfies:
* (Positive-definiteness). $\fa x\in X:\|x\|\geq0$; equality holds iff $x=0$.
* (Triangle inequality). $\fa x,w\in X:\|x+w\|\leq\|x\|+\|w\|$.
* (Absolute homogeneity). $\fa x\in X,\fa\alpha\in k:\|\alpha x\|=\l|\alpha\r|\|x\|$.

The <b>category of normed spaces</b> is the category whose objects are normed spaces and whose morphisms are continuous linear maps.

```

<b>Remark.</b> The morphisms $L\l(X,Y\r)$ is itself a normed space under the <i>operator norm</i> $\|T\|\coloneqq\sup_{x\neq0}\|Tx\|/\|x\|$. In fact, $L\l(X,X\r)$ is a normed algebra. ^continuous-iff-lipschitz
* Continuity of the morphisms $T\in L\l(X,Y\r)$ $-$ which is a relatively weak regularity condition $-$ gets booted to Lipschitz-continuity under the linear structure. Indeed, a linear map $T:X\to Y$ is continuous at $0$ iff it is continuous, iff it is Lipschitz. For the only non-trivial implication, let $\delta>0$ witness continuity of $T$ at $0$ with $\epsilon\coloneqq1$, so $\|Tx\|<1$ whenever $\|x\|<\delta$. Thus $\|Tx\|=\frac{\|x\|}{\delta}\l\|T\l(\frac{\delta x}{\|x\|}\r)\r\|\leq\|x\|/\delta$, so $T$ is Lipschitz as desired.

Morphisms $T\in L\l(X,Y\r)$ being Lipschitz allows one to reformulate $\|T\|$ as the infimum of all its Lipschitz constants $C\in\R$ such that $\|Tx\|\leq C\|x\|$ for all $x\in X$. It is due to this characterization that morphisms $T\in L\l(X,Y\r)$ are called <i>bounded operators</i>.<span style="float:right;">$\blacklozenge$</span>
