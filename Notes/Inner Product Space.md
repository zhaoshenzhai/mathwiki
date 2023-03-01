<div class="topSpace"></div>

Date Created: 23/06/2022 08:01:27
Tags: #Definition #Later/Linear_Algebra

Types: _Not Applicable_
Examples: [[Euclidean Coordinate Space]]
Constructions: [[Orthogonality]], [[Inner product induces a norm]]
Generalizations: _Not Applicable_

Properties: [[Pythagorean Theorem]], [[Cauchy-Schwarz Inequality]]
Sufficiencies: [[Orthogonal Decomposition]]
Equivalences: _Not Applicable_
Justifications: [[Hermitian forms are sesquilinear]]

``` ad-Definition
title: Definition.

_Let $K$ denote either $\R$ or $\C$  and let $V$ be a vector space over $K$. An **inner product on $V$** is a positive-definite Hermitian form on $V$; that is, it is a function $\bilform{\slot}{\slot}:V\times V\to K$ such that:_
* _(Positive-definiteness): $\fa v\in V:\bilform{v}{v}\geq0$; equality holds iff $v=0$._
* _(Linearity in the first slot): $\fa v_1,v_2,w\in V,\fa\alpha\in\C:\bilform{\alpha v_1+v_2}{w}=\alpha\bilform{v_1}{w}+\bilform{v_2}{w}$._
* _(Conjugate-symmetry): $\fa v_1,v_2\in V:\bilform{v_1}{v_2}=\bar{\bilform{v_2}{v_1}}$._

_A vector space $V$, equipped with an inner product $\bilform{\slot}{\slot}:V\times V\to K$, is said to be an **inner product space over $K$**._

```

**Remark.** When $K=\R$, an inner product reduces to a positive-definite symmetric bilinear form.<span style="float:right;">$\blacklozenge$</span>
