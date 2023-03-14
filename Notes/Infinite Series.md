---
mathLink: Convergent/Divergent Series
---

<div class="topSpace"></div>

Date Created: 01/09/2022 15:41:10
Tags: #Definition #Topics/Analysis

Types: [[Absolutely Convergent Series]]
Examples: [[Geometric series converges (criteria)]], [[Harmonic series diverges]], [[Alternating Series Test]]
Constructions: [[Power Series]]
Generalizations: _Not Applicable_

Properties: [[Basic properties of infinite series]]
Sufficiencies: [[Divergence Test (Series)]], [[Comparison Test (Series)]], [[Ratio Test (Series)]], [[Root Test (Series)]]
Equivalences: [[Integral Test]]
Justifications: [[Monotone Convergence Theorem]]

``` ad-Definition
title: Definition.

_Consider a sequence_ $\tpl{a_i}_{i\in\N}$ _in either $\R$ or $\C$ and let_ $s_n\coloneqq\sum_{i=0}^{n}a_i$ _be its sequence of **partial sums**. We say that the_ **_infinite series of_ $\tpl{a_i}_{i\in\N}$ _converges_** _if_ $\lim_{n\to\infty}s_n$ _exists, in which case we write_
$$\begin{equation}
    \sum_{i=0}^{\infty}a_i\coloneqq\lim_{n\to\infty}s_n=\lim\limits_{n\to\infty}\sum_{i=0}^{n}a_i.
\end{equation}$$
_Otherwise, we say that the_ **_infinite series of_ $\tpl{a_i}_{i\in\N}$ _diverges_**_._

```

**Remark.** If $a_i\geq0$ for all eventually $i\in\N$, then $s_n$ is a monotone sequence and hence converges iff it is bounded, in which case
$$\begin{equation}
    \sum_{i=0}^{\infty}a_i=\lim\limits_{n\to\infty}s_n=\sup\limits_{n\in\N}s_n.\exqedin
\end{equation}$$

---

**Remark.** One can similarly define infinite series where the $\textrm{`}$base point$\textrm{'}$ starts at some $n_0\neq0$. We will be informal and call $\sum_{i=0}^\infty a_i$ the infinite series of $\tpl{a_i}_{i\in\N}$, even if it does not converge.<span style="float:right;">$\blacklozenge$</span>
