---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 29/10/2022 18:32:31
Tags: #Type/Theorem #Topic/Real_Analysis

Proved by: [[Real Numbers#^bolzano-weierstrass]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Convergence Criteria in $\R$).

Let $\tpl{x_n}$ be a sequence in $\R$. Then $\tpl{x_n}$ converges iff it is bounded and admits only on subsequential limit.

```

<b>Remark.</b> In terms of limit superior and inferior, a bounded sequence $\tpl{x_n}$ converges iff $\liminf\limits_{n\to\infty}x_n=\limsup\limits_{n\to\infty}x_n$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> The forward direction is easy to see and we prove the contrapositive of the backwards direction. Suppose that $\tpl{x_n}$ diverges. If it is unbounded, we are done. Otherwise, Bolzano-Weierstrass furnishes a convergent subsequence $\tpl{x_{n_k}}$ of $\tpl{x_n}$ with some limit $l\in\R$. Since $\tpl{x_n}$ diverges, we have that
$$\begin{equation}
    \ex\epsilon>0,\ex^\infty n\in\N:x_n\not\in\l(l-\epsilon,l+\epsilon\r).
\end{equation}$$
Again, by Bolzano-Weierstrass, let $\tpl{x_{m_k}}$ be a convergent subsequence of $\tpl{x_n}$ consisting of those members of the sequence outside of $\l(l-\epsilon,l+\epsilon\r)$. Let $l'\coloneqq\lim\limits_{k\to\infty}x_{m_k}$. Then $d\l(l,l'\r)\geq\epsilon$, so $l\neq l'$.<span style="float:right;">$\blacksquare$</span>
