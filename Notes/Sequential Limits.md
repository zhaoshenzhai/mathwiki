---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 29/08/2022 16:59:28
Tags: #Type/Definition #Topic/Analysis #Topic/Topology/Later

Types: <i>Not Applicable</i>
Examples: [[Sequential Limits in a Metric Space]]
Constructions: [[Sequentially Compact Space]]
Generalizations: <i>Not Applicable</i>

Properties: [[Subsequences converge to the same limit]]
Sufficiencies: <i>Not Applicable</i>
Equivalences: <i>Not Applicable</i>
Justifications: [[Hausdorff implies limits are unique]]

``` ad-Definition
title: Definition.

Let $\tpl{X,\mc{T}}$ be a topological space and fix $x\in X$. A sequence $\tpl{x_n}_{n\in\N}$ in $X$ is said to <b>converge to $x$ w.r.t. $\mc{T}$</b>, and $x$ is said to be a <b>limit of $\tpl{x_n}$ w.r.t. $\mc{T}$</b>, if
$$\begin{equation}
    \fa U\in\mc{U}_x,\fa^\infty n\in\N:x_n\in U,
\end{equation}$$
where $\mc{U}_x$ is the set of all neighborhoods of $x$. If $\tpl{X,\mc{T}}$ is Hausdorff, then $x$ is unique and we write $\lim\limits_{n\to\infty}x_n\coloneqq x$ or $x_n\to x$ as $n\to\infty$.

```

<b>Remark.</b> Since convergence is a ‘tail property’ of the sequence, the sequence $\tpl{x_n}_{n\in\N}$ converges iff $\tpl{x_n}_{n\geq n_0}$ converges for any $n_0\in\N$. Similarly, if $\tpl{x_n'}_{n\in\N}$ is a sequence such that $\fa^\infty n\in\N:x_n'=x_n$, then $\tpl{x_n}_{n\in\N}$ converges iff $\tpl{x'_n}_{n\in\N}$ converges.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> Convergence to $x$ can be visualized as:
![[Images/2022-08-29_171208/image.svg|100]]

Each dot represents some $x_n$, and the neighborhoods around $x$ are represented by circles for simplicity.<span style="float:right;">$\blacklozenge$</span>
