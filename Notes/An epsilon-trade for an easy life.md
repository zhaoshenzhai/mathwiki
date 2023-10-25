---
mathLink: An $\epsilon$-trade for an easy life
---

<div class="topSpace"></div>

Date Created: 25/10/2023 17:20:28
Tags: #Type/Theorem #In_Progress

Proved by: [[Measure Space#^monotone-convergence-of-sets]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (An $\epsilon$-trade for an easy life).

For a finite measure space $\tpl{X,\mu}$ and an increasing sequence $P_n$ of $\mu$-measurable sets, if $\fa_\mu^\textrm{a.e.}x\in X,\ex n\in\N:P_n\!\l(x\r)$, then $\ex n\in\N,\fa_\mu^{99\%}x\in X:P_n\!\l(x\r)$.
* (99\% boundedness). Let $\tpl{X,\mu}$ be a measure space and let $f:X\to\bar{\R}$ be $\mu$-integrable. For each $\epsilon>0$, there is a $\mu$-measurable $X'\subseteq X$ with $\mu\l(X\comp X'\r)\leq\epsilon$ and $\mu_{\l|f\r|}\!\l(X\comp X'\r)\leq\epsilon$ such that $\l.f\r|_{X'}$ is bounded.
* (99\% uniform convergence/Egorov). Let $\tpl{X,\mu}$ be a finite measure space and let $f_n,f:X\to\R$ be $\mu$-measurable. If $f_n\to f$ pointwise, then for each $\epsilon>0$, there is a $\mu$-measurable $X'\subseteq X$ with $\mu\l(X\comp X'\r)\leq\epsilon$ on which $f_n\to f$ uniformly.

```

<b>Remark.</b> The $\ex n\in\N,\fa_\mu^{99\%}x\in X$ is a joke. More precisely, we mean that for every $\epsilon>0$, there is some $n\in\N$ such that $\l\{x\in X\st\lnot P_n\!\l(x\r)\r\}$ has measure $\leq\epsilon$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Observe that $X'\coloneqq\bigcup_nP_n$ is $\mu$-conull, so $\mu\l(P_n\r)\to\mu\l(X'\r)=\mu\l(X\r)<\infty$ and hence $\mu\l(X\comp P_n\r)\to0$. Thus, for every $\epsilon>0$, there is some $n\in\N$ such that $X\comp P_n$ has measure $\leq\epsilon$, as desired.
