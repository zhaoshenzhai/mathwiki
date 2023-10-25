---
mathLink-blocks:
    integrable-function: Integrable Function
---

<div class="topSpace"></div>

Date Created: 24/10/2023 19:46:55
Tags: #Type/Definition #Topic/Real_Analysis

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Monotone Convergence Theorem]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Basic properties of integration]]

``` ad-Definition
title: Definition.

Let $\tpl{X,\mu}$ be a measure space. We define the <b>integral</b> for suitable $\mu$-measurable functions $f:X\to\bar{\R}$ as follows.
* For a $\mu$-measurable simple function $s:X\to\R$, say $s=\sum_{i<n}a_i\cchi_{A_i}$ for some $a_i\in\R$ and some $A_i\in\Meas_\mu$, set $\int s\d\mu\coloneqq\sum_{i<n}a_i\mu\l(A_i\r)$.
* For a $\mu$-measurable non-negative function $f_0:X\to\bar{\R}_{\geq0}$, set $\int f_0\d\mu\coloneqq\sup_{s\leq f_0}\int s\d\mu$ where $s\leq f_0$ is any $\mu$-measurable simple function.

Write $f=f^+-f^-$, where $f^{\pm}\coloneqq\max\l\{\pm f,0\r\}$. If $\int f^+\d\mu<\infty$ and $\int f^-\d\mu<\infty$, then $f$ is said to be <b>$\mu$-integrable</b> and we set $\int f\d\mu\coloneqq\int f^+\d\mu-\int f^-\d\mu$.

```
^integrable-function

<b>Remark.</b> Let $L^+\!\l(X,\mu\r)$ and $L^1\!\l(X,\mu\r)$ respectively denote the collection of non-negative and all $\mu$-measurable functions. We have a pseudo-norm $\|f\|_1\coloneqq\int\l|f\r|\d\mu$ on $L^1$, which we may then quotient by null sets to obtain an actual norm. Thus we may talk about <i>convergence in $L^1$</i> as $\|f_n-f\|\to0$, in which case we write $f_n\to_{L_1}\!f$. Note that simple functions are dense in $L^1$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> For any $A\in\Meas_\mu$ and any $f\in L^1$, let $\int_Af\d\mu\coloneqq\int\l(f\cdot\cchi_A\r)\d\mu$. If $f\in L^+$, then $\mu_f:A\mapsto\int_Af\d\mu$ is a measure on $\Meas_\mu$.<span style="float:right;">$\blacklozenge$</span>
