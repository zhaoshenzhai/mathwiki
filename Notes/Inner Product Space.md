<div class="topSpace"></div>

Date Created: 23/06/2022 08:01:27
Tags: #Type/Definition #Topic/Linear_Algebra

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: [[Orthogonality]], [[Inner product induces a norm]]
Generalizations: _Not Applicable_

Properties: [[Cauchy-Schwarz Inequality]], [[Pythagorean Theorem]]
Sufficiencies: [[Orthogonal Decomposition]]
Equivalences: _Not Applicable_
Justifications: [[Hermitian forms are sesquilinear]]

``` ad-Definition
title: Definition.

Let $K$ denote either $\R$ or $\C$  and let $V$ be a vector space over $K$. An **inner product on $V$** is a positive-definite Hermitian form on $V$; that is, it is a function $\inprod{\slot}{\slot}:V\times V\to K$ such that:
* (Positive-definiteness): $\fa v\in V:\inprod{v}{v}\geq0$; equality holds iff $v=0$.
* (Linearity in the first slot): $\fa v_1,v_2,w\in V,\fa\alpha\in\C:\inprod{\alpha v_1+v_2}{w}=\alpha\inprod{v_1}{w}+\inprod{v_2}{w}$.
* (Conjugate-symmetry): $\fa v_1,v_2\in V:\inprod{v_1}{v_2}=\bar{\inprod{v_2}{v_1}}$.

A vector space $V$, equipped with an inner product $\inprod{\slot}{\slot}:V\times V\to K$, is said to be an **inner product space over $K$**.

```

**Remark.** When $K=\R$, an inner product reduces to a positive-definite symmetric bilinear form.<span style="float:right;">$\blacklozenge$</span>
