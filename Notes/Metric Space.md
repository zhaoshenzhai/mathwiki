<div class="topSpace"></div>

Date Created: 27/09/2022 18:49:17
Tags: #Type/Definition #Topic/Analysis

Types: [[Compact Metric Space]], [[Complete Metric Space]], [[Bounded Space]]
Examples: _Not Applicable_
Constructions: [[Epsilon-ball]], [[Diameter]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[Norm induces a metric]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

Let $X$ be a set. A **metric on $X$** is a function $d:X\times X\to\R$ such that
* (Positive-definiteness): $\fa x,y\in X:d\l(x,y\r)\geq0$; equality holds iff $x=y$.
* (Symmetry): $\fa x,y\in X:d\l(x,y\r)=d\l(y,x\r)$.
* (Triangle-inequality): $\fa x,y,z\in X:d\l(x,z\r)\leq d\l(x,y\r)+d\l(y,z\r)$.

A set $X$, equipped with a metric $d:X\times X\to\R$, is said to be a **metric space**.

```
