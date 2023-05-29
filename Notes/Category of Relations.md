---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 25/02/2022 12:02:58
Tags: #Type/Definition #Topic/Category_Theory

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

The **category of relations** is the (locally-small) category $\catrel$ defined by the following data:
* The objects are pairs $\tpl{X,\rho}$ where $X$ is a set and $\rho$ is a (binary) relation on $X$.
* The morphisms are **relation-preserving maps**; that is, maps $f:X\to X'$ such that $\tpl{x_1,x_2}\in\rho$ implies $\tpl{f\l(x_1\r),f\l(x_2\r)}\in\rho'$ for all $x_1,x_2\in X$.

```

<b>Remark.</b> That $\catrel$ is a category follows from the fact that identities and compositions of relation-preserving maps are also relation-preserving.<span style="float:right;">$\blacklozenge$</span>
