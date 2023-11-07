---
mathLink: auto
mathLink-blocks:
    L-1-implies-measure-convergence: $L_1$-convergence $\Rightarrow$ $\mu$-convergence
---

<div class="topSpace"></div>

Date Created: 25/10/2023 16:30:23
Tags: #Type/Proposition #Topic/Real_Analysis

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
* The support $A\coloneqq\l\{x\in X\st f\l(x\r)\neq0\r\}$ is $\sigma$-finite. Indeed, note that $A=\bigcup_nA_{1/n}$ with each $\mu\l(A_{1/n}\r)\leq n\|f\|_1<\infty$.

This also shows that $L_1$-convergence implies $\mu$-convergence. Indeed, if $f_n\to_{L^1}\!f$, then $\delta_\alpha\!\l(f_n,f\r)\leq\|f-f_n\|_1/\alpha\to0$ for any $\alpha>0$.<span style="float:right;">$\blacklozenge$</span> ^L-1-implies-measure-convergence

---

<i>Proof.</i> We have $\|f\|_1=\int\l|f\r|\d\mu\geq\int_{A_\alpha}\l|f\r|\d\mu\geq\int_{A_\alpha}\alpha\d\mu=\alpha\mu\l(A_\alpha\r)$, as desired.<span style="float:right;">$\blacksquare$</span>
