<div class="topSpace"></div>

Date Created: 23/06/2022 08:01:27
References:
Tags: #Type/Definition #Topic/Functional_Analysis

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Orthogonality]], [[Adjoint Map]]
Generalizations: <i>Not Applicable</i>

Properties: [[Cauchy-Schwarz Inequality]], [[Pythagorean Theorem]]
Sufficiencies: [[Orthogonal Decomposition]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $k$ denote either $\R$ or $\C$  and let $V$ be a $k$-vector space. An <b>inner product on $V$</b> is a positive-definite Hermitian form on $V$; that is, it is a function $\inprod{\slot}{\slot}:V\times V\to k$ such that:
* (Positive-definiteness). $\fa v\in V:\inprod{v}{v}\geq0$; equality holds iff $v=0$.
* (Linearity in the first slot). $\fa v_1,v_2,w\in V,\fa\alpha\in\C:\inprod{\alpha v_1+v_2}{w}=\alpha\inprod{v_1}{w}+\inprod{v_2}{w}$.
* (Conjugate-symmetry). $\fa v_1,v_2\in V:\inprod{v_1}{v_2}=\bar{\inprod{v_2}{v_1}}$.

A vector space $V$, equipped with an inner product $\inprod{\slot}{\slot}:V\times V\to k$, is said to be an <b>inner product space over $k$</b>.

```

<b>Remark.</b> When $k=\R$, an inner product reduces to a positive-definite symmetric bilinear form.<span style="float:right;">$\blacklozenge$</span>
