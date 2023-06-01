<div class="topSpace"></div>

Date Created: 09/01/2023 10:28:01
Tags: #Type/Definition #Topic/Ring_Theory

Types: <i>Not Applicable</i>
Examples: [[Characteristic Polynomial]], [[Minimal Polynomial]]
Constructions: [[Polynomial Ring]], [[Vector Space of Polynomials]], [[Content slash primitive polynomials]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $R$ be a ring and fix $n\in\N$. A <b>polynomial over $R$ with degree $n$ and indeterminant $x$</b> is an expression of the form
$$\begin{equation}
    f\coloneqq a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0\ \ \ \ \ \ \ \ \textrm{\it{or}}\ \ \ \ \ \ \ \ f\coloneqq \sum_{i=0}^na_ix^i
\end{equation}$$
where each $a_i\in R$ and $a_n\neq0$. We call $a_n$ the <b>leading coefficient of $f$</b>, and write $\deg f\coloneqq n$. If $a_n=1$, the polynomial $f$ is said to be <b>monic</b>.

```

<b>Remark.</b> Formally, a polynomial over $R$ with degree $n$ is an $n$-tuple $f\coloneqq\tpl{a_n,a_{n-1},\dots,a_1,a_0}$ where each $a_i\in R$ and $a_n\neq0$.
* The <b>zero polynomial</b> is the element $0\in R$; it is said to have degree $-\infty$.<span style="float:right;">$\blacklozenge$</span>
