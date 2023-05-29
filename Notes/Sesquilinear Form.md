<div class="topSpace"></div>

Date Created: 23/06/2022 14:26:40
Tags: #Type/Definition #Topic/Linear_Algebra

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: [[Hermitian forms are sesquilinear]]
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

Let $V$ be a complex vector space. A **sesquilinear form on $V$** is a function $\inprod{\slot}{\slot}:V\times V\to\C$ such that
* (Linearity in the first slot): $\fa v_1,v_2,w\in V,\fa\alpha\in\C:\inprod{\alpha v_1+v_2}{w}=\alpha\inprod{v_1}{w}+\inprod{v_2}{w}$.
* (Conjugate-linearity in the second slot): $\fa v,w_1,w_2\in V,\fa\beta\in\C:\inprod{v}{\beta w_1+w_2}=\bar{\beta}\inprod{v}{w_1}+\inprod{v}{w_2}$.

```

**Remark.** This reduces to a bilinear form for when $V$ is a real vector space.<span style="float:right;">$\blacklozenge$</span>
