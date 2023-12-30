---
mathLink-blocks:
    rationals-dense-in-reals: $\Q$ is dense in $\R$
    nested-intervals: Nested Intervals Theorem
    bolzano-weierstrass: Bolzano-Weierstrass Theorem
    heine-borel: Heine-Borel Theorem
---

<div class="topSpace"></div>

Date Created: 19/09/2022 19:36:44
Tags: #Type/Example #Topic/Real_Analysis

Types: <i>Not Applicable</i>
Examples: <i>Not Applicable</i>
Constructions: [[Borel Measures on the Real Line]], [[Complex Numbers]], [[Model Spaces]]
Generalizations: [[Little lp Space]]

Properties: [[Calculus on the Real Line]], [[Convergence of Sequences in R]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Cantor's Theorem]], [[Characterizations of compactness#^compactness-in-metric-spaces]], [[Separation Axioms#^compact-hausdorff-implies-closed]], [[Compact Space#^extreme-value-theorem]], [[Connected Space#^intermediate-value-theorem]]

``` ad-Example
title: Example (Real numbers).

We define the <b>real numbers</b> $\R$ as the any Dedekind-complete ordered field, which is unique up to order-isomorphism. <span style="color:pink">why?</span>
* (Completeness). If $\tpl{F_n}$ is a descending sequence of non-empty closed subsets of $\R$ such that $\diam F_n\to0$, then $\bigcap_nF_n$ is a singleton.
* (Bolzano-Weierstrass). Every bounded sequence $\tpl{x_n}$ in $\R^d$ admits a convergent subsequence.
* (Heine-Borel). A subset $K\subseteq\R^d$ is compact iff it is closed and bounded.

```
^rationals-dense-in-reals

<b>Remark.</b> We equip $\R$ with the absolute value metric $d\l(x,y\r)\coloneqq\l|x-y\r|$. Using Dedekind-completeness, we establish some fundamental theorems.
* (<i>Completeness</i>). We may w.l.o.g. assume that each $F_n\coloneqq\l[a_n,b_n\r]$ is an interval. Dedekind-completeness furnishes $\alpha\coloneqq\sup a_n$ and $\beta\coloneqq\inf b_n$, so $\l[\alpha,\beta\r]\subseteq\bigcap_{n>1}I_n$, and since $\diam I_n\to0$, we have $\alpha=\beta$ as desired. ^nested-intervals
* (<i>Bolzano-Weierstrass</i>). Since $\tpl{x_n}$ is bounded, it is contained in some $I_0\coloneqq\l[a,b\r]$. Split $\l[a,b\r]$ into two closed intervals of equal length and let $I_1$ be the interval in which infinitely-many $x_n\in I_1$. Continuing gives us a descending chain $\tpl{I_n}$ of intervals with $\diam I_n=\l(b-a\r)/2^n$ for all $n\in\N$, so there is some $x\in\R$ such that $\bigcap_nI_n=\l\{x\r\}$. We now inductively construct a subsequence $\tpl{x_{n_k}}$ of $\tpl{x_n}$ such that $x_{n_k}\to x$, with $n_0\coloneqq0$. If $n_0,\dots,n_k$ are chosen, note that $\ex^\infty n\in\N:x_n\in I_{k+1}$, so let $n_{k+1}>n_k$ be any such index. It is clear then that $x_{n_k}\to x$, as desired. ^bolzano-weierstrass
* (<i>Heine-Borel</i>). The forward direction is true in general Hausdorff spaces. Conversely, it suffices to show that $K$ is sequentially compact, so let $\tpl{x_n}$ be a sequence in $K$. It is bounded, so Bolzano-Weierstrass furnishes a subsequence converging to some $x\in\R^d$. But $K$ is closed, so $x\in K$, as desired.<span style="float:right;">$\blacklozenge$</span> ^heine-borel

---

<b>Remark.</b> We derive the classical <i>Extreme/Intermediate Value Theorems</i>.
* If $f:X\to\R$ is a continuous function on a compact space $X$, then if admits both global extrema. Indeed, by the Extreme Value Theorem, the image $f\l(X\r)$ is compact and hence closed and bounded. Being bounded, the Dedekind-completeness of $\R$ furnishes a supremum $\alpha\coloneqq\sup f\l(X\r)\in\R$. Thus for each $n\in\N^+$, there exist some $y_n\in f\l(X\r)$ such that $\alpha-1/n<y_n<\alpha$, so $y_n\to\alpha$. But $f\l(X\r)$ is closed, so it contains the limit of all converging sequences in $f\l(X\r)$. Hence $\alpha\in f\l(X\r)$, showing that $f$ admits a global maximum. Similarly, $f$ admits $\beta\coloneqq\inf f\l(X\r)$ as its global minimum.
* If $f:X\to\R$ is a continuous function on a connected space $X$, then for any two $x,y\in X$ and any $r\in\l(f\l(x\r),f\l(y\r)\r)$, there exists some $z\in X$ such that $f\l(z\r)=r$. Indeed, the sets $A\coloneqq f\l(X\r)\cap\l(-\infty,r\r)$ and $B\coloneqq f\l(X\r)\cap\l(r,\infty\r)$ are disjoint non-empty open subsets of $f\l(X\r)$. If there is no $z\in X$ such that $f\l(z\r)=r$, then $f\l(X\r)=A\cup B$, which contradicts the Intermediate Value Theorem.<span style="float:right;">$\blacklozenge$</span>
