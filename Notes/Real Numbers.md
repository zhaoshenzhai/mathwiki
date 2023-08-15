---
mathLink-blocks:
    rationals-dense-in-reals: $\Q$ is dense in $\R$
    bolzano-weierstrass: Bolzano-Weierstrass Theorem
    heine-borel: Heine-Borel Theorem
---

<div class="topSpace"></div>

Date Created: 19/09/2022 19:36:44
Tags: #Type/Example #Topic/Real_Analysis

Abstractions: <i>Not Applicable</i>
Constructions: [[Complex Numbers]], [[Differentiable Function and Derivative in R]]

Properties: [[Convergence Criteria in R]], [[Mean Value Theorems]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Compact implies closed (Hausdorff)]], [[Characterizations of compactness (metric space)]]

``` ad-Example
title: Example.

We construct the <b>real numbers</b> $\R$ as the completion of $\Q$ with the absolute value metric, giving us $\R$ as a complete metric space.
* The reals numbers is, up to an order-isomorphism, the unique Dedekind-complete ordered field.
* The topology that the open balls generate is the order topology on $\R$, which coincides with its metric topology.
* Since $\R$ admits $\Q$ as a dense subset, it is separable.

```
^rationals-dense-in-reals

<b>Remark.</b> An alternative construction of $\R$ is using <i>Dedekind-cuts</i>, which gives $\R$ as a Dedekind-complete ordered field, and one must then show that it is metric-complete. Those two constructions are equivalent. Using Dedekind-completeness, we establish the fundamental <i>Bolzano-Weierstrass Theorem</i>, which states that every bounded sequence $\tpl{x_n}$ in $\R$ admits a convergent subsequence.
^bolzano-weierstrass
* Choose a monotone subsequence $\tpl{x_{n_k}}$ of $\tpl{x_n}$, which we w.l.o.g. assume to be increasing. The subsequence is also bounded, so by Dedekind-completeness it admits a supremum $\alpha\coloneqq\sup_{k\in\N}x_{n_k}$. Take $\epsilon>0$, so there is some $K\in\N$ such that $x_{n_K}>\alpha-\epsilon$. Since $\tpl{x_{n_k}}$ is increasing, we see that $x_{n_k}\geq x_{n_K}>\alpha-\epsilon$ for all $k>K$, so $-\epsilon<x_{n_k}-\alpha$ for all $k>K$. Clearly $x_{n_k}-\alpha<0<\epsilon$, so $\l|x_{n_k}-\alpha\r|<\epsilon$ and hence $x_{n_k}\to\alpha$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> We prove the <i>Heine-Borel Theorem</i>, which states that a subset $K\subseteq\R$ is compact iff it is closed and bounded. The forward direction is true in general Hausdorff spaces, so let $\tpl{x_n}$ be a sequence in $K$. It is bounded, so by Bolzano-Weierstrass it admits a subsequence converging to some $x\in\R^d$. But $K$ is closed, so $x\in K$. Thus $K$ is sequentially compact, and hence compact.<span style="float:right;">$\blacksquare$</span>
^heine-borel
