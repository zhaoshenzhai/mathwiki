<div class="topSpace"></div>

Date Created: 23/06/2022 14:26:40
Tags: #Type/Definition #Topic/Linear_Algebra

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Hermitian forms are sesquilinear]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $V$ be a complex vector space. A <b>sesquilinear form on $V$</b> is a function $\inprod{\slot}{\slot}:V\times V\to\C$ such that
* (Linearity in the first slot): $\fa v_1,v_2,w\in V,\fa\alpha\in\C:\inprod{\alpha v_1+v_2}{w}=\alpha\inprod{v_1}{w}+\inprod{v_2}{w}$.
* (Conjugate-linearity in the second slot): $\fa v,w_1,w_2\in V,\fa\beta\in\C:\inprod{v}{\beta w_1+w_2}=\bar{\beta}\inprod{v}{w_1}+\inprod{v}{w_2}$.

```

<b>Remark.</b> This reduces to a bilinear form for when $V$ is a real vector space.<span style="float:right;">$\blacklozenge$</span>
