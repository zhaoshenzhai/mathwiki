---
mathLink-blocks:
    integrable-function: Integrable Function
    simple-functions-dense-in-integrable: Simple functions are dense in $L^1$
---

<div class="topSpace"></div>

Date Created: 24/10/2023 19:46:55
Tags: #Type/Definition #Topic/Real_Analysis

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Monotone Convergence Theorem]], [[Dominated Convergence Theorem]], [[Chebyshev's Inequality]], [[An epsilon-trade for an easy life]]
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

<b>Remark.</b> Let $L^1\!\l(X,\mu\r)$ and $L^+\!\l(X,\mu\r)$ denote the collection of $\mu$-integrable and all non-negative $\mu$-measurable functions. We have a pseudo-norm $\|f\|_1\coloneqq\int\l|f\r|\d\mu$ on $L^1$, which we may quotient by null sets to obtain an actual norm. Thus we may talk about <i>convergence in $L^1$</i> as $\|f_n-f\|\to0$, in which case we write $f_n\to_{L_1}\!f$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> For any $A\in\Meas_\mu$ and any $f\in L^1$, let $\int_Af\d\mu\coloneqq\int\l(f\cdot\cchi_A\r)\d\mu$. If $f\in L^+$, then $\mu_f:A\mapsto\int_Af\d\mu$ is a measure on $\Meas_\mu$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Simple functions are dense in $L^1$. Indeed, it suffices to find a sequence $s_n$ of $\mu$-measurable simple functions such that $\l|s_n\r|\incto\l|f\r|$ and $s_n\to f$, for then since $\l|s_n-f\r|\leq2\l|f\r|$, the DCT gives us that $s_n\to_{L^1}\!f$. To this end, let $f\in L^+$; the general case $f\in L^+$ follows by decomposing $f=f^+-f^-$. ^simple-functions-dense-in-integrable
* For each $n\in\N$, partition $\l[0,2^n\r]$ into intervals each of length $2^{-n}$ to obtain $k_n\coloneqq2^n/2^{-n}=2^{2n}$ intervals. For each $1\leq k\leq k_n$, set $B_k\coloneqq f^{-1}\!\l[k2^{-n},\infty\r]$. Note that the sequence $B_k$ decreases, so the functions $s_n\coloneqq\sum_{k=1}^{k_n}2^{-n}\cchi_{B_k}$ increase. A computation shows that $0\leq f-s_n\leq2^{-n}$ wherever $f\leq2^n$, so taking $n\to\infty$ gives the desired result.<span style="float:right;">$\blacklozenge$</span>
