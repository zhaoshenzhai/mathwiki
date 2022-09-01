<div class="topSpace"></div>

Date Created: 01/09/2022 15:41:10
Tags: #Definition

Types: _Not Applicable_
Examples: [[Geometric series converges (criteria)]]
Constructions: _Not Applicable_
Generalizations: _Not Applicable_

Properties: _Not Applicable_
Sufficiencies: _Not Applicable_
Equivalences: _Not Applicable_
Justifications: _Not Applicable_

``` ad-Definition
title: Definition.

_Let $I\subseteq\Z$ be infinite and bounded below, and set $n_0\coloneqq\min I$. Consider a sequence_ $\tpl{a_n}_{n\in I}$ _in either $\R$ or $\C$. We say that the_ **_infinite series of_ $\tpl{a_n}_{n\in I}$ _converges_** _if_
$$\begin{equation}
    \lim_{n\to\infty}\sum_{k=n_0}^na_k
\end{equation}$$
_exists, in which case we write_
$$\begin{equation}
    \sum_{k=n_0}^{\infty}a_k\coloneqq\lim_{n\to\infty}\sum_{k=n_0}^na_k.
\end{equation}$$
_Otherwise, we say that the_ **_infinite series of_ $\tpl{a_n}_{n\in I}$ _diverges_**.

```

**Remark.** Usually, $I=\N$ and so $n_0=0$.<span style="float:right;">$\blacklozenge$</span>

---

**Remark.** We will be informal and call $\sum_{k=n_0}^\infty a_k$ the infinite series of $\tpl{a_n}_{n\in I}$, even if it does not converge.<span style="float:right;">$\blacklozenge$</span>
