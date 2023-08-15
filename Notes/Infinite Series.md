<div class="topSpace"></div>

Date Created: 01/09/2022 15:41:10
Tags: #Type/Definition #Topic/Real_Analysis

Types: <i>Not Applicable</i>
Examples: [[Geometric Sequence]], [[p series converges iff p greater than 1]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: [[Comparison Tests (Series)]], [[Dirichlet's Test]], [[Abel's Test]], [[Ratio Tests (Series)]], [[Root Test (Series)]]
Equivalences: [[Cauchy's Condensation Test]]
Justifications: [[Riemann's Rearrangement Theorem]], [[Absolute convergence implies rearrangements coincide]]

``` ad-Definition
title: Definition.

Consider a sequence $\tpl{a_k}_{k\in\N}$ in either $\R$ or $\C$ and let $s_n\coloneqq\sum_{k=0}^{n}a_k$ be its sequence of <b>partial sums</b>. We say that the <b>infinite series of $\tpl{a_k}_{k\in\N}$ converges</b> if $\tpl{s_n}$ converges, in which case we write $\sum_{k=0}^{\infty}a_k$ as the limit.
* Otherwise, we say that $\sum_{k=0}^{\infty}a_k$ <b>diverges</b>.

A stronger condition than convergence is that $\sum_{k=0}^{\infty}\l|a_k\r|$ converges too, in which case we say that the series <b>converges absolutely</b>. We say that the series converges <b>conditionally</b> if it converges but does not converge absolutely.

```

<b>Remark.</b> Some elementary conditions for convergence.
* (Necessary Condition for Convergence). If $\sum_{k=0}^{\infty}a_k$ converges, then $\lim_{k\to\infty}a_k=0$. Indeed, since $a_k=s_k-s_{k-1}$, taking the limit yields the result.
* (Cauchy Criterion for Convergence). Since $\R$ is complete, we see that $\sum_{k=0}^{\infty}a_k$ converges iff for every $\epsilon>0$, $\l|s_m-s_n\r|<\epsilon$ for all eventually $m,n\in\N$.<span style="float:right;">$\blacklozenge$</span>

If $a_k\geq0$ for all eventually $k\in\N$, then $s_n$ is a monotone sequence and hence converges iff it is bounded, in which case $\sum_{k=0}^{\infty}a_k=\lim_{n\to\infty}s_n=\sup_{n\in\N}s_n$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A <i>rearrangement</i> of $\sum_{k=0}^{\infty}a_k$ is a series of the form $\sum_{k=0}^{\infty}a_{\sigma\l(k\r)}$ where $\sigma\in\Aut\l(\N\r)$ is a permutation. If $\sum_{k=0}^{\infty}a_k$ converges conditionally, then there is a rearrangement thereof that converges to <i>any</i> $\alpha\in\bar{\R}$. Otherwise, if it converges absolutely, then any rearrangement thereof converges to the same value.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> One can similarly define infinite series where the ‘base point’ starts at some $n_0\neq0$. We will be informal and call $\sum_{k=0}^\infty a_k$ the infinite series of $\tpl{a_k}_{k\in\N}$, even if it does not converge.<span style="float:right;">$\blacklozenge$</span>
