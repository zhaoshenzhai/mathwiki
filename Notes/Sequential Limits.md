---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 29/08/2022 16:59:28
Tags: #Definition #Courses/MATH254 #Later/Topology

Types: _Not Applicable_
Examples: [[Sequential Limits in R]]
Constructions: [[Sequential Criterion for Functional Limits]]
Generalizations: [[Sequential Limits to Infinity]]

Properties: [[Convergent implies bounded (sequential)]], [[Convergent implies Cauchy]], [[Subsequences converge to the same limit]]
Sufficiencies: [[Monotone Convergence Theorem]], [[Squeezed Distance Lemma]]
Equivalences: _Not Applicable_
Justifications: [[Hausdorff implies limits are unique]]

``` ad-Definition
title: Definition.

_Let $\tpl{X,\mc{T}}$ be a topological space and fix $x\in X$. A sequence_ $\tpl{x_n}_{n\in\N}$ _in $X$ is said to **converge to $x$ w.r.t. $\mc{T}$**, and $x$ is said to be a **limit of $\tpl{x_n}$ w.r.t. $\mc{T}$**, if_
$$\begin{equation}
    \fa U\in\mc{U}_x,\fa^\infty n\in\N:x_n\in U,
\end{equation}$$
_where $\mc{U}_x$ is the set of all neighborhoods of $x$. If $\tpl{X,\mc{T}}$ is Hausdorff, then we write_ $\lim\limits_{n\to\infty}x_n=x$ _or $x_n\to x$ as $n\to\infty$._

```

**Remark.** Since convergence is a $\textrm{`}$tail property$\textrm{'}$ of the sequence, the sequence $\tpl{x_n}_{n\in\N}$ converges iff $\tpl{x_n}_{n\geq n_0}$ converges for any $n_0\in\N$. Similarly, if $\tpl{x_n'}_{n\in\N}$ is a sequence such that $\fa^\infty n\in\N:x_n'=x_n$, then $\tpl{x_n}_{n\in\N}$ converges iff $\tpl{x'_n}_{n\in\N}$ converges.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** Convergence to $x$ can be visualized as:
<center><img src="app://local/home/zhao/Dropbox/MathWiki/Images/2022-08-29_171208/image.svg", width=100></center>

Each dot represents some $x_n$, and the neighborhoods around $x$ are represented by circles for simplicity.<span style="float:right;">$\blacklozenge$</span>
