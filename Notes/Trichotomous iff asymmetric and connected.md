---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 03/02/2022 18:24:55
Tags: #Type/Proposition #Later/Set_Theory

Proved by: [[Asymmetry implies irreflexivity]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $X$ be a set and let $R$ be a binary relation. Then $R$ is trichotomous on $X$ iff it is asymmetric and connected on $X$.

```

<i>Proof.</i> ($\Rightarrow$): If exactly one of $xRy$, $yRx$, or $x=y$ holds, then at least one of them hold and $\lnot\l(xRy\land yRx\r)$. Thus $<$ is asymmetric and connected on $X$.

($\Leftarrow$): We shall prove that if one of $xRy$, $yRx$, or $x=y$ holds, then the other two doesn't.
* If $xRy$, then, since $R$ is asymmetric on $X$, we have $y\not Rx$. If $x=y$, then $xRx$ which is contradictory since asymmetric relations are irreflexive. Similarly for if $yRx$.
* If $x=y$, then, if either $xRy$ or $yRx$, we see that $xRx$ which is a contradiction since asymmetric relations are irreflexive.<span style="float:right;">$\blacksquare$</span>
