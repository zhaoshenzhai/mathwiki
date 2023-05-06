<div class="topSpace"></div>

Date Created: 09/01/2023 10:28:01
Tags: #Type/Definition #Topic/Ring_Theory

Types: _Not Applicable_
Examples: [[Characteristic Polynomial]], [[Minimal Polynomial]]
Constructions: [[Polynomial Ring]], [[Vector Space of Polynomials]], [[Content slash primitive polynomials]]
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $R$ be a ring and fix $n\in\N$. A **polynomial over $R$ with degree $n$ and indeterminant $x$** is an expression of the form_
$$\begin{equation}
    f\coloneqq a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0\ \ \ \ \ \ \ \ \textrm{\it{or}}\ \ \ \ \ \ \ \ f\coloneqq \sum_{i=0}^na_ix^i
\end{equation}$$
_where each $a_i\in R$ and $a_n\neq0$. We call $a_n$ the **leading coefficient of $f$**, and write $\deg f\coloneqq n$. If $a_n=1$, the polynomial $f$ is said to be **monic**._

```

**Remark.** Formally, a polynomial over $R$ with degree $n$ is an $n$-tuple $f\coloneqq\tpl{a_n,a_{n-1},\dots,a_1,a_0}$ where each $a_i\in R$ and $a_n\neq0$.
* The **zero polynomial** is the element $0\in R$; it is said to have degree $-\infty$.<span style="float:right;">$\blacklozenge$</span>
