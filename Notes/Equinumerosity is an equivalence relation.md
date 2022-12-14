<div class="topSpace"></div>

Date Created: 13/09/2022 15:14:32
Tags: #Proposition

Proved by: [[Identity function is a bijection]], [[Inverse of bijection is a bijection]], [[Composition of bijections is a bijection]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_The relation $\eqnum$ of equinumerosity on any collection of sets is an equivalence relation._

```

_Proof_. Let $X,Y,Z$ be sets.
* (Reflexivity): Since $\id_X:X\to X$ is a bijection, we see that $X\eqnum X$.

* (Symmetry): Assume that $X\eqnum Y$, so there exists a bijection $f:X\to Y$. But then $f^{-1}:Y\to X$ is also a bijection, so $Y\eqnum X$.
* (Transitivity): Assume that $X\eqnum Y$ and $Y\eqnum Z$, so there exist bijections $f:X\to Y$ and $g:Y\to Z$. But then $g\circ f:X\to Z$ is also a bijection, so $X\eqnum Z$.<span style="float:right;">$\blacksquare$</span>
