---
mathLink-blocks:
    lebesgue-decomposition: Lebesgue Decomposition Theorem
    radon-nikodym: Radon-Nikodym Derivative Theorem
---

<div class="topSpace"></div>

Date Created: 22/11/2023 19:49:54
Tags: #Type/Theorem #In_Progress

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Lebesgue-Radon-Nikodym).

Let $\mu$ and $\nu$ be two $\sigma$-finite measures on a measurable space $\tpl{X,\mc{B}}$. Then there is a partition $X=X_0\sqcup X_1$ with $X_i\in\mc{B}$ such that $\mu\perp\nu$ on $X_0$ and $\mu\abscont\nu$ on $X_1$. Moreover, there is a $\mc{B}$-measurable function $f:X\to\l(0,\infty\r)$ $-$ unique up to $\nu$-null sets $-$ such that $\mu\l(B\r)=\int_Bf\d\nu$ for all $B\subseteq X_1$ in $\mc{B}$.

```
^radon-nikodym

<i>Proof.</i> 

---

<i>Proof (Lebesgue Decomposition).</i> Here, we give a simpler proof of the <i>Lebesgue Decomposition Theorem</i>, which only gives the partition $X=X_0\sqcup X_1$ on which $\mu\perp\nu$ and $\mu\abscont\nu$ respectively. Assume that both $\mu$ and $\nu$ are finite; the general $\sigma$-finite case follows by partitioning $X=\bigsqcup_nX^n$ with each $\mu\l(X^n\r)<\infty$ and applying the finite case to each $X^n$ to obtain a decomposition $X=\bigsqcup_n\l(X^n_0\sqcup X^n_1\r)=\l(\bigsqcup_nX_0^n\r)\sqcup\l(\bigsqcup_nX_1^n\r)$. Indeed, we argue by measure exhaustion by letting $Z_0^\nu$ be the $1/2$-$\mu$-largest $\nu$-null subset of $X$, i.e. let $Z_0^\nu\subseteq X$ be such that $\mu\l(Z_0^\nu\r)\geq\frac{1}{2}\sup\l\{\mu\l(B\r):B\subseteq X,\nu\l(B\r)=0\r\}$. Then $X\comp Z_0^\nu$ still has $\nu$-null sets of positive $\mu$-measure, so we repeat. If $\tpl{Z_n^\nu}_{n<k}$ is a disjoint sequence of $\nu$-null sets of positive $\mu$-measure, let $Z_k^\nu$ be the $1/2$-$\mu$-largest $\nu$-null subset of $X\comp\bigsqcup_{n<k}Z_n^\nu$. Let $X_0\coloneqq\bigsqcup_nZ_n^\nu$ and observe that $\nu\l(X_0\r)=\sum_n\nu\l(Z_n^\nu\r)=0$, so $\mu\perp\nu$ on $X_0$. Let $X_1\coloneqq X\comp X_0$ and note that $\mu\l(X_1\r)=\mu\l(X\r)-\sum_n\mu\l(Z_n^\nu\r)$ since $\mu$ is a finite measure. Also, $\sum_n\mu\l(Z_n^\nu\r)$ is summable, so in particular $\lim_n\mu\l(Z_n^\nu\r)=0$. Let $B\in\mc{B}$ be a $\nu$-null subset of $X_1$. If $\mu\l(B\r)>0$, then there is some $m\in\N$ such that $\mu\l(Z_m^\nu\r)<\mu\l(B\r)/2$, which contradicts the choice of $Z_0^\nu$ since $B\subseteq X_1\subseteq X_0\comp\bigsqcup_{n<m}Z_n^\nu$ and $\nu\l(B\r)=0$. Thus $\mu\l(B\r)=0$, so $\mu\abscont\nu$ on $X_1$ as desired.<span style="float:right;">$\blacksquare$</span> ^lebesgue-decomposition
