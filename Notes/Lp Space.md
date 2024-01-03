---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 03/12/2023 09:00:06
References:
Tags: #Type/Definition #Topic/Functional_Analysis

Types: <i>Not Applicable</i>
Examples: [[Little lp Space]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Basic properties of Lp spaces#^minkowski]], [[Algebra of Lp spaces]]
Sufficiencies: [[Basic properties of Lp spaces#^simple-functions-dense-in-Lp]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\tpl{X,\mu}$ be a measure space and fix $1\leq p<\infty$. The space $L^p\!\l(X,\mu\r)$ is the Banach space of all $\mu$-measurable functions $f:X\to\R$ with $\int\l|f\r|^p\d\mu<\infty$, equipped with the <b>$p$-norm</b> given by $\|f\|_p\coloneqq\l(\int\l|f\r|^p\d\mu\r)^{1/p}$ for all $f\in L^p\!\l(X,\mu\r)$.
* We let $L^\infty\!\l(X,\mu\r)$ be the Banach space of all $\mu$-measurable functions with $\|f\|_\infty<\infty$, where $\|f\|_\infty\coloneqq\inf\l\{c\geq0\st\l|f\r|\leq c\ \mu\textrm{-a.e.}\r\}$ is the <b>$\esssup$-norm</b>.

```

<b>Remark.</b> If $f\in L^\infty\!\l(X,\mu\r)$, then there is a function $\widetilde{f}=f$ a.e. such that $\|\widetilde{f}\|_\infty=\sup_{x\in X}|\widetilde{f}\l(x\r)|=\|f\|_\infty$ is the actual $\sup$-norm. It is clear that this is the norm of a.e. uniform convergence; that is, $\|f_n-f\|_\infty\to0$ iff there is a $\mu$-conull set $X'\subseteq X$ such that $f_n\to f$ uniformly on $X'$.<span style="float:right;">$\blacklozenge$</span>
