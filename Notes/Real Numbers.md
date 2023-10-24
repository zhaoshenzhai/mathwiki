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
Constructions: [[Lebesgue-Stieltjes Measure]], [[Complex Numbers]], [[Differentiable Function and Derivative in R]], [[Model Spaces]]
Generalizations: [[Cantor's Intersection Theorem]]

Properties: [[Convergence Criteria in R]], [[Mean Value Theorems]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Compact Space#^compact-hausdorff-implies-closed]], [[Compact Space#^compact-implies-bounded]], [[Compactness in metric spaces]], [[Compact Space#^extreme-value-theorem]], [[Connected Space#^intermediate-value-theorem]]

``` ad-Example
title: Example.

We construct the <b>real numbers</b> $\R$ as the completion of $\Q$ with the absolute value metric, giving us $\R$ as a complete metric space.
* (Nested Intervals Theorem). If $I_1\supseteq I_2\supseteq\cdots$ is a descending chain of non-empty intervals in $\R$ such that $\diam I_n\to0$, then $\bigcap_{n>1}I_n$ is a singleton.
* (Bolzano-Weierstrass Theorem). Every bounded sequence $\tpl{x_n}$ in $\R^d$ admits a convergent subsequence.
* (Heine-Borel Theorem). A subset $K\subseteq\R^d$ is compact iff it is closed and bounded.

```
^rationals-dense-in-reals

<b>Remark.</b> Alternatively, $\R$ is characterized as the unique Dedekind-complete ordered field. Using Dedekind-completeness, we establish some fundamental theorems.
* (<i>Nested Intervals Theorem</i>). Let $I_n\coloneqq\l[a_n,b_n\r]$ for all $n>1$ and note that $\l\{a_n\r\}$ is bounded above by every $b_n$. Thus $\alpha\coloneqq\sup a_n$ and similarly $\beta\coloneqq\inf b_n$ exist. It follows then that $\l[\alpha,\beta\r]\subseteq\bigcap_{n>1}I_n$. But $\diam I_n\to0$ forces $\alpha=\beta$, as desired. ^nested-intervals
* (<i>Bolzano-Weierstrass Theorem</i>). Since $\tpl{x_n}$ is bounded, it is contained in some $I_0\coloneqq\l[a,b\r]$. Split $\l[a,b\r]$ into two closed intervals of equal length and let $I_1$ be the interval in which infinitely-many $x_n\in I_1$. Continuing gives us a descending chain $I_0\supseteq I_1\supseteq\cdots$ of intervals with $\diam I_n=\l(b-a\r)/2^n$ for all $n\in\N$. By the Nested Intervals Theorem, there is some $x\in\R$ such that $\bigcap_{n\in\N}I_n=\l\{x\r\}$. We now find a subsequence $\tpl{x_{n_k}}$ of $\tpl{x_n}$ that converges to $x$. Choose $n_0\coloneqq0$ and suppose that $n_0,\dots,n_k$ are chosen. Since $\ex^\infty n\in\N:x_n\in I_{k+1}$, choose $n_{k+1}$ as any such index with $n_{k+1}>n_k$. It is clear then that $x_{n_k}\to x$, as desired. ^bolzano-weierstrass
* (<i>Heine-Borel Theorem</i>). The forward direction is true in general Hausdorff spaces, so let $\tpl{x_n}$ be a sequence in $K$. It is bounded, so by Bolzano-Weierstrass it admits a subsequence converging to some $x\in\R^d$. But $K$ is closed, so $x\in K$. Thus $K$ is sequentially compact, and hence compact.<span style="float:right;">$\blacklozenge$</span> ^heine-borel

---

<b>Remark.</b> We derive the classical <i>Extreme/Intermediate Value Theorems</i>.
* If $f:X\to\R$ is a continuous function on a compact space $X$, then if admits both global extrema. Indeed, by the Extreme Value Theorem, the image $f\l(X\r)$ is compact and hence closed and bounded. Being bounded, the Dedekind-completeness of $\R$ furnishes a supremum $\alpha\coloneqq\sup f\l(X\r)\in\R$. Thus for each $n\in\N^+$, there exist some $y_n\in f\l(X\r)$ such that $\alpha-1/n<y_n<\alpha$, so $y_n\to\alpha$. But $f\l(X\r)$ is closed, so it contains the limit of all converging sequences in $f\l(X\r)$. Hence $\alpha\in f\l(X\r)$, showing that $f$ admits a global maximum. Similarly, $f$ admits $\beta\coloneqq\inf f\l(X\r)$ as its global minimum.
* If $f:X\to\R$ is a continuous function on a connected space $X$, then for any two $x,y\in X$ and any $r\in\l(f\l(x\r),f\l(y\r)\r)$, there exists some $z\in X$ such that $f\l(z\r)=r$. Indeed, the sets $A\coloneqq f\l(X\r)\cap\l(-\infty,r\r)$ and $B\coloneqq f\l(X\r)\cap\l(r,\infty\r)$ are disjoint non-empty open subsets of $f\l(X\r)$. If there is no $z\in X$ such that $f\l(z\r)=r$, then $f\l(X\r)=A\cup B$, which contradicts the Intermediate Value Theorem.<span style="float:right;">$\blacklozenge$</span>
