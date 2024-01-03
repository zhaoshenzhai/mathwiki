---
mathLink: Measurability of $f_n\to f$
---

<div class="topSpace"></div>

Date Created: 21/10/2023 15:32:51
References:
Tags: #Type/Proposition #Topic/Real_Analysis

Proved by: [[Metric Space#^metric-spaces-are-normal]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{X,\mu}$ be a measure space and let $Y$ be a separable metric space. If $f_n:X\to Y$ are $\mu$-measurable functions and $f_n\to f$ pointwise, then $f$ is $\mu$-measurable.

```

<i>Proof.</i> Consider the $\sigma$-algebra $\mc{C}\coloneqq\l\{B\in\mc{B}\l(Y\r)\st f^{-1}\!\l(B\r)\in\Meas_\mu\r\}$. It suffices to show that $\mc{C}$ contains all open sets of $Y$, for then $\mc{C}=\mc{B}\l(Y\r)$ and we are done. Indeed, let $U\subseteq Y$ be open. Write $U=\bigcup_iB_i$ where each $\bar{B_i}\subseteq U$; this can be done by separability and Hausdorffness of $Y$. We claim that $f^{-1}\!\l(U\r)=\bigcup_i\liminf f_n^{-1}\!\big(\bar{B_i}\big)$, from which the result follows since $\liminf f_n^{-1}\big(\bar{B_i}\big)=\bigcup_N\bigcap_{n\geq N}f_n^{-1}\big(\bar{B_i}\big)$, which is $\mu$-measurable since each $f_n^{-1}\big(\bar{B_i}\big)$ is.
* Indeed, if $f\l(x\r)\in U$, then $\fa^\infty n:f_n\!\l(x\r)\in B_i\subseteq\bar{B_i}$ for some $i$. Conversely, if there is some $i$ such that $\fa^\infty n:f_n\!\l(x\r)\in\bar{B_i}$, then $f\l(x\r)=\lim f_n\!\l(x\r)\in\bar{B}_i$.<span style="float:right;">$\blacksquare$</span>
