<div class="topSpace"></div>

Date Created: 19/08/2022 21:28:38
Tags: #Definition #Later/Classical_Mechanics

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Basic properties of orthogonal projections]], [[Projection maps are surjections]]

``` ad-Definition
title: Definition.

_Fix $n\in\N^\ast$. The **Galilean $n$-coordinate space** is the Galilean space $\tpl{\R\times\R^n,\R\times\R^n,+,t,\bilform{\slot}{\slot}}$ consisting of_

* _the Euclidean $n$-coordinate space_ $\tpl{\R^n,\bilform{\slot}{\slot}}$_,_

* _the component-wise addition on $\R\times\R^n$; that is $+:\tpl{\tpl{\tau_1,\v{x}_1},\tpl{\tau_2,\v{x}_2}}\mapsto\l(\tau_1+\tau_2,\v{x}_1+\v{x}_2\r)$, and_
* _the linear map_ $t\coloneqq\proj_\R\!:\R\times\R^n\to\R$_; that is, the projection onto the $\textrm{`}$time axis$\textrm{'}$._

```

**Remark.** Note that $\tpl{t,\bilform{\slot}{\slot}}$ is indeed a Galilean structure since
* $t=\proj_\R$ is non-zero and surjective, and
* $\ker t=\ker\proj_\R=\l(\R\times\R^n\r)^\perp=\R^n$, so indeed $\bilform{\slot}{\slot}:\ker t\times\ker t\to\R$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Usually, we have $n\in\l\{1,2,3\r\}$.<span style="float:right;">$\blacklozenge$</span>
