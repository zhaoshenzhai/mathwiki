<div class="topSpace"></div>

Date Created: 24/06/2022 11:21:53
Tags: #Type/Definition #Topic/Linear_Algebra

Types: [[Inner Product Space]]
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Hermitian forms are sesquilinear]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $V$ be a complex vector space. A **Hermitian form on $V$** is a function $\inprod{\slot}{\slot}:V\times V\to\C$ such that:
* (Linearity in the first slot): $\fa v_1,v_2,w\in V,\fa\alpha\in\C:\inprod{\alpha v_1+v_2}{w}=\alpha\inprod{v_1}{w}+\inprod{v_2}{w}$.
* (Conjugate-symmetry): $\fa v,w\in V:\inprod{v}{w}=\bar{\inprod{w}{v}}$.

```

<b>Remark.</b> Since all Hermitian forms are sesquilinear, they reduce to bilinear forms for when $V$ is a real vector space.<span style="float:right;">$\blacklozenge$</span>
