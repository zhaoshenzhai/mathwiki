---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 29/10/2022 18:32:31
Tags: #Theorem #Analysis #Courses/MATH254

Proved by: [[Bolzano-Weierstrass Theorem]]
References: [[Convergent implies bounded (sequential)]], [[Subsequences converge to the same limit]]
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Convergence Criteria in $\R$).

_Let $\tpl{x_n}$ be a sequence in $\R$. Then $\tpl{x_n}$ diverges iff either it is unbounded or it admits two subsequential limits._

```

**Remark.** In other words, a sequence $\tpl{x_n}$ converges iff it is bounded and admits only one subsequential limit. In terms of limit superior and inferior, a bounded sequence $\tpl{x_n}$ converges iff
$$\begin{equation}
    \liminf\limits_{n\to\infty}x_n=\limsup\limits_{n\to\infty}x_n.\exqedin
\end{equation}$$

---

_Proof_. The backwards direction follows from its contrapositive, stating that if $\tpl{x_n}$ converges, then all subsequences thereof converge to the same limit. Suppose now that $\tpl{x_n}$ diverges. If it is unbounded, we are done. Otherwise, Bolzano-Weierstrass furnishes a convergent subsequence $\tpl{x_{n_k}}$ of $\tpl{x_n}$ with some limit $l\in\R$. Since $\tpl{x_n}$ diverges, we have that
$$\begin{equation}
    \ex\epsilon>0,\ex^\infty n\in\N:x_n\not\in\l(l-\epsilon,l+\epsilon\r).
\end{equation}$$
Again, by Bolzano-Weierstrass, let $\tpl{x_{m_k}}$ be a convergent subsequence of $\tpl{x_n}$ consisting of those members of the sequence outside of $\l(l-\epsilon,l+\epsilon\r)$. Let $l'\coloneqq\lim\limits_{k\to\infty}x_{m_k}$. Then $d\l(l,l'\r)\geq\epsilon$, so $l\neq l'$.<span style="float:right;">$\blacksquare$</span>
