<div class="topSpace"></div>

Date Created: 24/06/2022 21:36:42
Tags: #Type/Definition #Topic/Analysis

Types: [[Banach Space]]
Examples: [[Space of Continuous Functions]], [[lp Space]], [[Operator Norm]]
Constructions: [[Norm induces a metric]], [[Bounded Linear Map]], [[Frechet Differentiability slash Derivative]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[Inner product induces a norm]]
Equivalences: [[Equivalent Norms]]
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

Let $K$ denote either $\R$ or $\C$ and let $V$ be a vector space over $K$. A **norm on $V$** is a function $\|\slot\|:V\to\R$ such that
* (Positive-definiteness): $\fa v\in V:\|v\|\geq0$; equality holds iff $v=0$.
* (Triangle inequality): $\fa v,w\in V:\|v+w\|\leq\|v\|+\|w\|$.
* (Absolute homogeneity): $\fa v\in V,\fa\alpha\in K:\|\alpha v\|=\l|\alpha\r|\|v\|$.

A vector space $V$, equipped with a norm $\|\slot\|:V\to\R$, is said to be a **normed vector space over $K$**.

```
