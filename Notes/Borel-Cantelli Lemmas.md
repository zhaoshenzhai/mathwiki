<div class="topSpace"></div>

Date Created: 18/10/2023 20:03:11
Tags: #Type/Theorem #Topic/Real_Analysis

Proved by: [[Basic properties of measures#^monotone-convergence-of-sets]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Borel-Cantelli).

Let $\tpl{X,\mu}$ be a measure space and let $A_n$ be a sequence of measurable sets. If $\sum_n\mu\l(A_n\r)<\infty$, then $\mu\l(\limsup_nA_n\r)=0$.
* Furthermore, if $\mu\l(X\r)<\infty$ and if there is some $\epsilon>0$ such that $\mu\l(A_n\r)\geq\epsilon$ for all $n$, then $\mu\l(\limsup_nA_n\r)\geq\epsilon$.

```

<b>Remark.</b> Rephrasing, we see that $\sum_n\mu\l(A_n\r)<\infty$ implies that almost every $x\in X$ lies in at most finitely-many $A_n$. The second part is a ‘measure compactness’ statement: if $\mu\l(A_n\r)\geq\epsilon$ for all $n$ and your space has finite measure, then at least $\epsilon$-measure of $x\in X$ lies in infinitely-many $A_n$’s. We give some applications.
* (Vanishing sequence). Let $\tpl{X,\mu}$ be a measure space. If $\mc{C}$ is a collection of measurable sets closed under countable unions and contains sets of arbitrarily small measure, then there is an almost-vanishing sequence in $\mc{C}$, i.e. a decreasing sequence $B_n$ such that $\bigcap_nB_n$ is null. Indeed, for each $n\in\N$, choose $A_n\in\mc{C}$ with $\mu\l(A_n\r)<2^{-n}$. Set $B_n\coloneqq\bigcup_{k\geq n}A_k\in\mc{C}$. Since $\sum_n\mu\l(A_n\r)=\sum_n2^{-n}<\infty$, we see that $\mu\l(\bigcap_nB_n\r)=0$, as desired.
* (No uncountable disjoint). This is an result analogous to measure compactness, which prevents you from ‘stuffing too much’ into $X$. More precisely, for a $\sigma$-finite measure $\mu$, there is no uncountable almost-disjoint collection $\mc{C}$ of measurable non-null sets. Indeed, partition $X=\bigsqcup_{k\in\N}X_k$ with each $\mu\l(X_k\r)<\infty$. For each $k\in\N$ and $n>0$, set $\mc{C}_{n,k}\coloneqq\l\{C\in\mc{C}\st\mu\l(X_k\cap C\r)\geq1/n\r\}$. Observe that $\mc{C}=\bigcup_{n,k}\mc{C}_{n,k}$, so it suffices to show that each $\mc{C}_{n,k}$ is at-most countable; in fact, we'll show that it is finite. Indeed, let $C_1,\dots,C_M\in\mc{C}_{n,k}$ be distinct. Since $\mc{C}_{n,k}$ is a collection of almost disjoint sets, we see that
$$\begin{equation}
    \mu\l(X_k\r)\geq\mu\l(X_k\cap\bigcup_{m\geq M}C_m\r)=\mu\l(\bigcup_{m\leq M}\l(X_k\cap C_m\r)\r)\overset{!}{=}\sum_{m\leq M}\mu\l(X_k\cap C_m\r)\geq\frac{M}{n},
\end{equation}$$
so $M\leq n\mu\l(X_k\r)$. The latter is a finite constant, so $\l|\mc{C}_{n,k}\r|<\infty$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Set $B\coloneqq\limsup_nA_n=\bigcap_n\bigcup_{k\geq n}A_k$ and write $B_n\coloneqq\bigcup_{k\geq n}A_k$. Then $B_n\decto B$, so in particular $\mu\l(B\r)\leq\mu\l(B_n\r)$. Since $\mu\l(B_n\r)=\mu\l(\bigcup_{k\geq n}A_k\r)\leq\sum_{k\geq n}\mu\l(A_n\r)\to0$, we have $\mu\l(B\r)=0$ as desired. For the second claim, let $\epsilon>0$ be such that $\mu\l(A_n\r)\geq\epsilon$ for all $n$. Note that $\mu\l(B_n\r)\to\mu\l(B\r)$ as $n\to\infty$, so we obtain the desired result as $\mu\l(B_n\r)=\mu\l(\bigcup_{k\geq n}A_k\r)\geq\mu\l(A_n\r)\geq\epsilon$.<span style="float:right;">$\blacksquare$</span>
