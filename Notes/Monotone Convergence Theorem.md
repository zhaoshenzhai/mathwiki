<div class="topSpace"></div>

Date Created: 24/10/2023 21:06:35
Tags: #Type/Theorem #In_Progress

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Monotone Convergence Theorem).

Let $\tpl{X,\mu}$ be a measure space and $f_n,f\in L^+$. If $f_n\incto f$, then $\int f_n\d\mu\to\int f\d\mu$. Furthermore, there is a sequence $s_n$ of simple functions such that $s_n\incto f$.
* (Fatou’s Lemma). For any $f_n\in L^+$ we have $\int\liminf_nf_n\d\mu\leq\liminf_n\int f_n\d\mu$.
* (Dominated Convergence Theorem). Let $f_n\in L^1$ and suppose that $f_n\to f$ a.e. If there is some $g\in L^1$ such that $\l|f_n\r|\leq g$ for all $n$, then $\int f_n\d\mu\to\int f\d\mu$.

```

<i>Proof.</i> Note that $\int f_n\d\mu\leq\int f\d\mu$ for all $n$ and hence $\lim_n\int f_n\d\mu\leq\int f\d\mu$. Conversely, we fix a simple function $s$ and show that $\lim_n\int f_n\d\mu\geq\int s\d\mu$, from which the result follows. Indeed, it suffices to show that $\lim_n\int f_n\d\mu\geq\l(1-\epsilon\r)\int s\d\mu=\int\l(1-\epsilon\r)s\d\mu$ for all $\epsilon>0$. To this end, let $X_n\coloneqq\l\{x\in X\st f_n\!\l(x\r)\geq\l(1-\epsilon\r)s\r\}$ for each $n$, so $X=\bigcup_nX_n$ and thus
