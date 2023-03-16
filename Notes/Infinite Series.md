<div class="topSpace"></div>

Date Created: 01/09/2022 15:41:10
Tags: #Definition #Topics/Analysis

Types: [[Absolutely Convergent Series]]
Examples: [[Geometric series converes iff r<1]], [[Harmonic series diverges]], [[p series converges iff p>1]]
Constructions: [[Regrouping of Series]], [[Power Series]]
Generalizations: _Not Applicable_

Properties: [[Basic properties of infinite series]]
Sufficiencies: [[Comparison Tests (Series)]], [[Alternating Series Test]]
Equivalences: [[Integral Test]]
Justifications: [[Monotone Convergence Theorem]], [[Metric-completeness of R]]

``` ad-Definition
title: Definition.

_Consider a sequence_ $\tpl{a_k}_{k\in\N}$ _in either $\R$ or $\C$ and let_ $s_n\coloneqq\sum_{k=0}^{n}a_k$ _be its sequence of **partial sums**. We say that the_ **_infinite series of_ $\tpl{a_k}_{k\in\N}$ _converges_** _if_ $\lim_{n\to\infty}s_n$ _exists, in which case we write_
$$\begin{equation}
    \sum_{k=0}^{\infty}a_k\coloneqq\lim_{n\to\infty}s_n=\lim\limits_{n\to\infty}\sum_{k=0}^{n}a_k.
\end{equation}$$
_Otherwise, we say that the_ **_infinite series of_ $\tpl{a_k}_{k\in\N}$ _diverges_**_._

```

**Remark.** Two elementary conditions for convergence.
* (Necessary Condition for Convergence): If $\sum_{k=0}^{\infty}a_k$ converges, then $\lim\limits_{k\to\infty}a_k=0$. Indeed, since $a_k=s_k-s_{k-1}$, taking the limit yields the result.
* (Cauchy Criterion for Convergence): Since $\R$ is complete, we see that $\sum_{k=0}^{\infty}a_k$ converges iff for every $\epsilon>0$, $\l|s_m-s_n\r|<\epsilon$ for all eventually $m,n\in\N$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** If $a_k\geq0$ for all eventually $k\in\N$, then $s_n$ is a monotone sequence and hence converges iff it is bounded, in which case
$$\begin{equation}
    \sum_{k=0}^{\infty}a_k=\lim\limits_{n\to\infty}s_n=\sup\limits_{n\in\N}s_n.\exqedin
\end{equation}$$

---

**Remark.** One can similarly define infinite series where the $\textrm{`}$base point$\textrm{'}$ starts at some $n_0\neq0$. We will be informal and call $\sum_{k=0}^\infty a_k$ the infinite series of $\tpl{a_k}_{k\in\N}$, even if it does not converge.<span style="float:right;">$\blacklozenge$</span>
