<div class="topSpace"></div>

Date Created: 05/04/2023 10:33:06
Tags: #Definition #Topics/Linear_Algebra

Types: _Not Applicable_
Examples: _Not Applicable_
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: [[Basic properties of adjoint operators]]

``` ad-Definition
title: Definition.

_A linear operator $T:V\to V$ on an inner product space $V$ is said to be **positive** if there exists an operator $S:V\to V$ such that $T=SS^\adj$._
* _If such an $S$ is invertible, then $T$ is said to be **positive-definite**._

```

**Remark.** Positive operators are analogous to complex numbers $z\in\C$ such that $z=w\bar{w}=\l|w\r|^2\geq0$ for some $w\in\C$. Definiteness is when $w\neq0$, so $z>0$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Every positive operator is self-adjoint since $T^\adj=\l(SS^\adj\r)^\adj=S^{\adj\adj}S^\adj=SS^\adj=T$.<span style="float:right;">$\blacklozenge$</span>
