<div class="topSpace"></div>

Date Created: 23/06/2022 14:26:40
Tags: #Definition #Closed

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

_Let $V$ be a complex vector space. A **sesquilinear form on $V$** is a function_
$$\begin{equation}
    \bilform{\slot}{\slot}:V\times V\to\C
\end{equation}$$
* _(Linearity in the first slot): $\fa v_1,v_2,w\in V,\fa\alpha\in\C:\bilform{\alpha v_1+v_2}{w}=\alpha\bilform{v_1}{w}+\bilform{v_2}{w}$._

* _(Conjugate-linearity in the second slot): $\fa v,w_1,w_2\in V,\fa\beta\in\C:\bilform{v}{\beta w_1+w_2}=\bar{\beta}\bilform{v}{w_1}+\bilform{v}{w_2}$._

```

**Remark.** This reduces to a bilinear form for when $V$ is a real vector space.<span style="float:right;">$\blacklozenge$</span>
