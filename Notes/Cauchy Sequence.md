<div class="topSpace"></div>

Date Created: 01/11/2022 00:44:38
Tags: #Type/Definition #Topic/Real_Analysis

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Complete Metric Space]]
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Contractive implies Cauchy]], [[Uniform continuity preserve Cauchy sequences]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\tpl{X,d}$ be a metric space. A sequence $\tpl{x_n}$ in $X$ is said to be <b>Cauchy</b> if $\fa\epsilon>0,\fa^\infty m,n\in\N:d\l(x_m,x_n\r)<\epsilon$.

```

<b>Remark.</b> We list some important properties regarding Cauchy sequences here.
* (Convergent $\Rightarrow$ Cauchy). If $x_n\to x$, then $x_n$ is Cauchy since $d\l(x_n,x_m\r)\leq d\l(x_n,x\r)+d\l(x_m,x\r)\to0$ as $n,m\to\infty$.
* (Dragging friends along). If $x_n$ is Cauchy and $x_{n_k}\to x$, then $x_n\to x$ since $d\l(x_k,x\r)\leq d\l(x_k,x_{n_k}\r)+d\l(x_{n_k},x\r)\to0$ as $k\to\infty$.

In light of the second property, any Cauchy sequence can be ‘sped up’ by passing to a subsequence so that $d\l(x_n,x_{n+m}\r)\leq 2^{-n}$ for all $n,m\in\N$.<span style="float:right;">$\blacklozenge$</span>
