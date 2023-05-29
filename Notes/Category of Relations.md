---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 25/02/2022 12:02:58
Tags: #Type/Definition #Topic/Category_Theory

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

The **category of relations** is the (locally-small) category $\catrel$ defined by the following data:
* The objects are pairs $\tpl{X,\rho}$ where $X$ is a set and $\rho$ is a (binary) relation on $X$.
* The morphisms are **relation-preserving maps**; that is, maps $f:X\to X'$ such that $\tpl{x_1,x_2}\in\rho$ implies $\tpl{f\l(x_1\r),f\l(x_2\r)}\in\rho'$ for all $x_1,x_2\in X$.

```

**Remark.** That $\catrel$ is a category follows from the fact that identities and compositions of relation-preserving maps are also relation-preserving.<span style="float:right;">$\blacklozenge$</span>
