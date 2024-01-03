---
mathLink-blocks:
    contractive-implies-cauchy: Contractive $\Rightarrow$ Cauchy
---

<div class="topSpace"></div>

Date Created: 04/02/2023 21:08:59
References:
Tags: #Type/Definition #Topic/Real_Analysis

Types: [[Polish Space]], [[Banach Space]]
Examples: [[Model Spaces]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Banach Fixed Point Theorem]]
Sufficiencies: [[Characterizations of compactness]]
Equivalences: [[Cantor's Theorem]], [[Banach Space#^characterization-of-completeness]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A sequence $\tpl{x_n}$ in a metric space $X$ is <b>Cauchy</b> if $\fa\epsilon>0,\fa^\infty m,n\in\N\st d\l(x_n,x_m\r)<\epsilon$. We say that $X$ is <b>complete</b> if every Cauchy sequence converges.

```

<b>Remark.</b> We list some important properties regarding Cauchy sequences here.
* (Convergent $\Rightarrow$ Cauchy). If $x_n\to x$, then $x_n$ is Cauchy since $d\l(x_n,x_m\r)\leq d\l(x_n,x\r)+d\l(x_m,x\r)\to0$ as $n,m\to\infty$.
* (Dragging friends along). If $x_n$ is Cauchy and $x_{n_k}\to x$, then $x_n\to x$ since $d\l(x_k,x\r)\leq d\l(x_k,x_{n_k}\r)+d\l(x_{n_k},x\r)\to0$ as $k\to\infty$.

In light of the second property, any Cauchy sequence can be ‘sped up’ by passing to a subsequence so that $d\l(x_n,x_{n+m}\r)\leq 2^{-n}$ for all $n,m\in\N$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A useful class of Cauchy sequences are the <i>contractive</i> ones, i.e. sequences $\tpl{x_n}$ such that $d\l(x_{n+1},x_{n+2}\r)\leq cd\l(x_n,x_{n+1}\r)$ for every $n\in\N$ and some uniform $c\in\l(0,1\r)$, called the <i>contractive constant</i>. Indeed, it can be shown that $d\l(x_n,x_{n+k}\r)\leq\frac{d\l(x_0,x_1\r)}{1-c}c^n\to0$ for every $n,k\in\N$, so $\tpl{x_n}$ is Cauchy.<span style="float:right;">$\blacklozenge$</span> ^contractive-implies-cauchy
