---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 25/10/2023 16:30:23
Tags: #Type/Proposition #In_Progress

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Chebyshev).

Let $\tpl{X,\mu}$ be a measure space. For all $f\in L^1$ and $\alpha\in\l(0,\infty\r]$, we have $\mu\l(A_\alpha\r)\leq\|f\|_1/\alpha$ where $A_\alpha\coloneqq\l\{x\in X\st\l|f\l(x\r)\r|\geq\alpha\r\}$.

```

<b>Remark.</b> We list some immediate corollaries for a function $f:X\to\bar{\R}$ in $L^1$.
* $\l|f\r|<\infty$ a.e. Indeed, we have $\infty\cdot\mu\l(A_\infty\r)\leq\|f\|_1$, which occurs only when $\mu\l(A_\infty\r)=0$.
* The support $A\coloneqq\l\{x\in X\st f\l(x\r)\neq0\r\}$ is $\sigma$-finite. Indeed, note that $A=\bigcup_nA_{1/n}$ with each $\mu\l(A_{1/n}\r)\leq n\|f\|_1<\infty$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> We have $\|f\|_1=\int\l|f\r|\d\mu\geq\int_{A_\alpha}\l|f\r|\d\mu\geq\int_{A_\alpha}\alpha\d\mu=\alpha\mu\l(A_\alpha\r)$, as desired.<span style="float:right;">$\blacksquare$</span>
