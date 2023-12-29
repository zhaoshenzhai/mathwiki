---
mathLink-blocks:
    characterization-of-completeness: Characterization of Completeness (NVS)
---

<div class="topSpace"></div>

Date Created: 16/02/2023 11:14:46
Tags: #Type/Definition #Topic/Functional_Analysis

Types: <i>Not Applicable</i>
Examples: [[Lp Space]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: <i>Not Applicable</i>
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

A normed vector space $X$ is a <b>Banach space</b> if its induced metric $d:X\times X\to\R$ is complete.

```

<b>Remark.</b> Let $X$ and $Y$ be normed vector spaces. If $Y$ is a Banach space, then so is $L\l(X,Y\r)$. Indeed, let $\tpl{T_n}\subset L\l(X,Y\r)$ be a Cauchy sequence and take $\epsilon>0$, so $\l\|T_n-T_m\r\|<\epsilon$ for all eventually $n,m\in\N$. Then $\l\|T_nx-T_mx\r\|\leq\l\|T_n-T_m\r\|\|x\|<\epsilon\|x\|$ for all $x\in X$, so the sequence $\tpl{T_nx}$ is Cauchy in $Y$ and hence converges to some $Tx\in Y$. The function $T:X\to Y$ defined this way is in $L\l(X,Y\r)$, and $T_n\to T$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> A useful characterization for when a normed vector space $X$ is Banach is that every absolutely-convergent series converges. Indeed, if $X$ is Banach, then the sequence of partial sums for any $\sum_i\|x_i\|<\infty$ is Cauchy since for all $n,m\in\N$, we have $\l\|\sum_{i\leq n+m}x_i-\sum_{i<n}x_i\r\|=\l\|\sum_{i=n}^{n+m}x_n\r\|\leq\sum_{i=n}^{n+m}\|x_i\|\leq\sum_{i\geq n}\|x_i\|\to0$ as $n\to\infty$. Conversely, let $x_n\in X$ be Cauchy. Passing to a subsequence if necessary, we may assume w.l.o.g. that $\|x_i-x_{i+1}\|\leq2^{-i}$ for all $i\in\N$. Consider the sequence $y_n\coloneqq x_n-x_{n-1}$ with $y_0\coloneqq0$, where $\sum_{i\leq n}y_i=x_n$. Note that $\lim_nx_n=\sum_iy_i$, which converges since ^characterization-of-completeness
$$\begin{equation}
    \sum_i\|y_i\|=\sum_i\|x_i-x_{i-1}\|=\|x_0\|+\sum_{i\geq1}\|x_i-x_{i-1}\|\leq\|x_0\|+\sum_{i\geq1}2^{-i}<\infty.\exqedin
\end{equation}$$
