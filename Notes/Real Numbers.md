---
mathLink-blocks:
    rationals-dense-in-reals: $\Q$ is dense in $\R$
    bolzano-weierstrass: Bolzano-Weierstrass Theorem
    heine-borel: Heine-Borel Theorem
---

<div class="topSpace"></div>

Date Created: 19/09/2022 19:36:44
Tags: #Type/Example #Topic/Real_Analysis

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Complex Numbers]], [[Differentiable Function and Derivative in R]]
Generalizations: <i>Not Applicable</i>

Properties: [[Convergence Criteria in R]], [[Mean Value Theorems]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Cantor's Intersection Theorem]], [[Compact Space#^compact-hausdorff-implies-closed]], [[Compact Space#^compact-implies-bounded]], [[Characterizations of compactness (metric space)]], [[Compact Space#^extreme-value-theorem]]

``` ad-Example
title: Example.

We construct the <b>real numbers</b> $\R$ as the completion of $\Q$ with the absolute value metric, giving us $\R$ as a complete metric space.
* The reals numbers is, up to an order-isomorphism, the unique Dedekind-complete ordered field.
* The topology that the open balls generate is the order topology on $\R$, which coincides with its metric topology.
* Since $\R$ admits $\Q$ as a dense subset, it is separable, hence Polish.

All topological properties of $\R$ extend to $\R^d$.

```
^rationals-dense-in-reals

<b>Remark.</b> An alternative construction of $\R$ is using <i>Dedekind-cuts</i>, which gives $\R$ as a Dedekind-complete ordered field, and one must then show that it is metric-complete. Those two constructions are equivalent. Using Dedekind-completeness, we establish the fundamental <i>Bolzano-Weierstrass Theorem</i>, which states that every bounded sequence $\tpl{x_n}$ in $\R$ admits a convergent subsequence.
^bolzano-weierstrass
* Choose a monotone subsequence $\tpl{x_{n_k}}$ of $\tpl{x_n}$, which we w.l.o.g. assume to be increasing. The subsequence is also bounded, so by Dedekind-completeness it admits a supremum $\alpha\coloneqq\sup_{k\in\N}x_{n_k}$. Take $\epsilon>0$, so there is some $K\in\N$ such that $x_{n_K}>\alpha-\epsilon$. Since $\tpl{x_{n_k}}$ is increasing, we see that $x_{n_k}\geq x_{n_K}>\alpha-\epsilon$ for all $k>K$, so $-\epsilon<x_{n_k}-\alpha$ for all $k>K$. Clearly $x_{n_k}-\alpha<0<\epsilon$, so $\l|x_{n_k}-\alpha\r|<\epsilon$ and hence $x_{n_k}\to\alpha$.
* We give an alternative proof that does not rely on the existence of a monotone subsequence. Since $\tpl{x_n}$ is bounded, it is contained in some $I_0\coloneqq\l[a,b\r]$. Split $\l[a,b\r]$ into two closed intervals of equal length and let $I_1$ be the interval in which infinitely-many $x_n\in I_1$. Continuing gives us a descending chain $I_0\supset I_1\supset\cdots$ of intervals with $\diam I_n=\l(b-a\r)/2^n$ for all $n\in\N$. By Cantor’s Intersection Theorem, there is some $x\in\bigcap_{n\in\N}I_n$, and in fact $\bigcap_{n\in\N}I_n=\l\{x\r\}$. We now find a subsequence $\tpl{x_{n_k}}$ of $\tpl{x_n}$ that converges to $x$. Choose $n_0\coloneqq0$ and suppose that $n_0,\dots,n_k$ are chosen. Since $\ex^\infty n\in\N:x_n\in I_{k+1}$, choose $n_{k+1}$ as any such index with $n_{k+1}>n_k$. It is clear then that $x_{n_k}\to x$, as desired.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> We prove the <i>Heine-Borel Theorem</i>, which states that a subset $K\subseteq\R$ is compact iff it is closed and bounded. The forward direction is true in general Hausdorff spaces, so let $\tpl{x_n}$ be a sequence in $K$. It is bounded, so by Bolzano-Weierstrass it admits a subsequence converging to some $x\in\R^d$. But $K$ is closed, so $x\in K$. Thus $K$ is sequentially compact, and hence compact.
^heine-borel
* Another result regarding compactness is that every continuous function $f:X\to\R$ on a compact space $X$ admits both global extrema. Indeed, $f\l(X\r)$ is compact by the Extreme Value Theorem, so it is closed and bounded. Being bounded, the Dedekind-completeness of $\R$ furnishes a supremum $\alpha\coloneqq\sup f\l(X\r)\in\R$. Thus for each $n\in\N^+$, there exist some $y_n\in f\l(X\r)$ such that $\alpha-1/n<y_n<\alpha$, so $y_n\to\alpha$ by the Squeeze Theorem. But $f\l(X\r)$ is closed, so it contains the limit of all converging sequences in $f\l(X\r)$. Hence $\alpha\in f\l(X\r)$, showing that $f$ admits a global maximum. Similarly, $f$ admits $\beta\coloneqq\inf f\l(X\r)$ as its global minimum.<span style="float:right;">$\blacklozenge$</span>
