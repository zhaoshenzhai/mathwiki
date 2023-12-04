---
mathLink-blocks:
    integrable-function: Integrable Function
    integral-measure-abs-cont-measure: $\mu_f\abscont\mu$
---

<div class="topSpace"></div>

Date Created: 24/10/2023 19:46:55
Tags: #Type/Definition #Topic/Real_Analysis

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Lp Space]]
Generalizations: <i>Not Applicable</i>

Properties: [[Convergence Theorems]], [[Fubini-Tonelli Theorem]], [[Chebyshev's Inequality]], [[An epsilon-trade for an easy life#^99-boundedness]]
Sufficiencies: [[Convergence Theorems#^simple-function-dense-in-L1]]
Equivalences: <i>Not Applicable</i>
Justifications: [[Basic properties of integration]], [[Absolute Continuity#^characterization-of-absolute-continuity]]

``` ad-Definition
title: Definition.

Let $\tpl{X,\mu}$ be a measure space. We define the <b>integral</b> for suitable $\mu$-measurable functions $f:X\to\bar{\R}$ as follows.
* For a $\mu$-measurable simple function $s:X\to\R$, say $s=\sum_{i<n}a_i\cchi_{A_i}$ for some $a_i\in\R$ and some $A_i\in\Meas_\mu$, set $\int s\d\mu\coloneqq\sum_{i<n}a_i\mu\l(A_i\r)$.
* For a $\mu$-measurable non-negative function $f_0:X\to\bar{\R}_{\geq0}$, set $\int f_0\d\mu\coloneqq\sup_{s\leq f_0}\int s\d\mu$ where $s\leq f_0$ is any $\mu$-measurable simple function.

Write $f=f^+-f^-$, where $f^{\pm}\coloneqq\max\l\{\pm f,0\r\}$. If $\int f^+\d\mu<\infty$ and $\int f^-\d\mu<\infty$, then $f$ is said to be <b>$\mu$-integrable</b> and we set $\int f\d\mu\coloneqq\int f^+\d\mu-\int f^-\d\mu$.

```
^integrable-function

<b>Remark.</b> Let $L^1\!\l(X,\mu\r)$ and $L^+\!\l(X,\mu\r)$ denote the collection of $\mu$-integrable and all non-negative $\mu$-measurable functions. We have a pseudo-norm $\|f\|_1\coloneqq\int\l|f\r|\d\mu$ on $L^1$, which we may quotient by null sets to obtain an actual norm. Thus we may talk about <i>convergence in $L^1$</i> as $\|f_n-f\|_1\to0$, in which case we write $f_n\to_{L_1}\!f$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> For any $A\in\Meas_\mu$ and any $f\in L^1$, let $\int_Af\d\mu\coloneqq\int\l(f\cdot\cchi_A\r)\d\mu$. If $f\in L^+$, then $\mu_f:A\mapsto\int_Af\d\mu$ is a measure on $\Meas_\mu$. ^integral-measure-abs-cont-measure
* Note that $\mu_f\!\l(Z\r)=0$ whenever $\mu\l(Z\r)=0$, so $\mu_f\abscont\mu$. If $f\in L^1$, then $\mu_f<\infty$ and hence for every $\epsilon>0$, there is some $\delta>0$ such that for every $\mu$-measurable set $B$, we have $\int_B\l|f\r|\d\mu<\epsilon$ whenever $\mu\l(B\r)<\delta$ holds.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A function $f:X\to\bar{\R}$ on a topological space with Borel measure $\mu$ is said to be <i>locally-integrable</i> if $f\cdot\cchi_K\in L^1\!\l(X,\mu\r)$ for all compacts $K\subseteq X$. Denote the collection of all such functions by $L^1_\textrm{loc}\!\l(X,\mu\r)$.<span style="float:right;">$\blacklozenge$</span>
