<div class="topSpace"></div>

Date Created: 01/09/2022 15:41:10
Tags: #Type/Definition #Topic/Real_Analysis

Types: [[Absolutely Convergent Series]]
Examples: [[Geometric Sequence]], [[p series converges iff p greater than 1]]
Constructions: [[Regrouping of Series]], [[Rearrangement of Series]]
Generalizations: <i>Not Applicable</i>

Properties: [[Riemann's Rearrangement Theorem]]
Sufficiencies: [[Comparison Tests (Series)]], [[Dirichlet's Test]], [[Abel's Test]]
Equivalences: [[Cauchy's Condensation Test]]
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Consider a sequence $\tpl{a_k}_{k\in\N}$ in either $\R$ or $\C$ and let $s_n\coloneqq\sum_{k=0}^{n}a_k$ be its sequence of <b>partial sums</b>. We say that the <b>infinite series of $\tpl{a_k}_{k\in\N}$ converges</b> if $\lim_{n\to\infty}s_n$ exists, in which case we write
$$\begin{equation}
    \sum_{k=0}^{\infty}a_k\coloneqq\lim_{n\to\infty}s_n=\lim\limits_{n\to\infty}\sum_{k=0}^{n}a_k.
\end{equation}$$
Otherwise, we say that the <b>infinite series of $\tpl{a_k}_{k\in\N}$ diverges</b>.

```

<b>Remark.</b> Two elementary conditions for convergence.
* (Necessary Condition for Convergence): If $\sum_{k=0}^{\infty}a_k$ converges, then $\lim\limits_{k\to\infty}a_k=0$. Indeed, since $a_k=s_k-s_{k-1}$, taking the limit yields the result.
* (Cauchy Criterion for Convergence): Since $\R$ is complete, we see that $\sum_{k=0}^{\infty}a_k$ converges iff for every $\epsilon>0$, $\l|s_m-s_n\r|<\epsilon$ for all eventually $m,n\in\N$.<span style="float:right;">$\blacklozenge$</span>

---

<b>Remark.</b> If $a_k\geq0$ for all eventually $k\in\N$, then $s_n$ is a monotone sequence and hence converges iff it is bounded, in which case
$$\begin{equation}
    \sum_{k=0}^{\infty}a_k=\lim\limits_{n\to\infty}s_n=\sup\limits_{n\in\N}s_n.\exqedin
\end{equation}$$

---

<b>Remark.</b> One can similarly define infinite series where the ‘base point’ starts at some $n_0\neq0$. We will be informal and call $\sum_{k=0}^\infty a_k$ the infinite series of $\tpl{a_k}_{k\in\N}$, even if it does not converge.<span style="float:right;">$\blacklozenge$</span>
