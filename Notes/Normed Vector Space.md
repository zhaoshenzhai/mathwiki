<div class="topSpace"></div>

Date Created: 24/06/2022 21:36:42
Tags: #Type/Definition #Topic/Functional_Analysis

Types: [[Banach Space]]
Examples: [[Space of Continuous Functions]], [[lp Space]], [[Operator Norm]]
Constructions: [[Bounded Linear Map]]
Generalizations: <i>Not Applicable</i>

Properties: [[Norms on finite-dimensional spaces are equivalent]]
Sufficiencies: [[Cauchy-Schwarz Inequality#^inner-product-space-induces-a-norm]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $k$ denote either $\R$ or $\C$ and let $V$ be a $k$-vector space. A <b>norm on $V$</b> is a function $\|\slot\|:V\to\R$ such that
* (Positive-definiteness). $\fa v\in V:\|v\|\geq0$; equality holds iff $v=0$.
* (Triangle inequality). $\fa v,w\in V:\|v+w\|\leq\|v\|+\|w\|$.
* (Absolute homogeneity). $\fa v\in V,\fa\alpha\in k:\|\alpha v\|=\l|\alpha\r|\|v\|$.

A vector space $V$, equipped with a norm $\|\slot\|:V\to\R$, is said to be a <b>normed vector space over $k$</b>.

```
