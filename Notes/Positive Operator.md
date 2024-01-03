<div class="topSpace"></div>

Date Created: 05/04/2023 10:33:06
References:
Tags: #Type/Definition #Topic/Functional_Analysis

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Basic properties of adjoint operators]]

``` ad-Definition
title: Definition.

A linear operator $T:V\to V$ on an inner product space $V$ is said to be <b>positive</b> if there exists an operator $S:V\to V$ such that $T=SS^\adj$.
* If such an $S$ is invertible, then $T$ is said to be <b>positive-definite</b>.

```

<b>Remark.</b> Positive operators are analogous to complex numbers $z\in\C$ such that $z=w\bar{w}=\l|w\r|^2\geq0$ for some $w\in\C$. Definiteness is when $w\neq0$, so $z>0$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Every positive operator is self-adjoint since $T^\adj=\l(SS^\adj\r)^\adj=S^{\adj\adj}S^\adj=SS^\adj=T$.<span style="float:right;">$\blacklozenge$</span>
