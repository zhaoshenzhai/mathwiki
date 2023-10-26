---
mathLink-blocks:
    Fatous-lemma: Fatou’s Lemma
---

<div class="topSpace"></div>

Date Created: 24/10/2023 21:06:35
Tags: #Type/Theorem #Topic/Real_Analysis

Proved by: [[Measure Space#^monotone-convergence-of-sets]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Monotone Convergence Theorem).

Let $\tpl{X,\mu}$ be a measure space and $f_n,f\in L^+$. If $f_n\incto f$, then $\int f_n\d\mu\incto\int f\d\mu$ and in fact $f_n\to_{L^1}\!f$.
* (Fatou’s Lemma). For any $f_n\in L^+$ we have $\int\liminf_nf_n\d\mu\leq\liminf_n\int f_n\d\mu$.

```
^Fatous-lemma

<b>Remark.</b> Since every $f\in L^1$ admits a sequence of simple functions $s_n\incto f$, this allows us to calculate $\int f\d\mu$ as $\lim_n\int s_n\d\mu$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Note that $\int f_n\d\mu\leq\int f\d\mu$ for all $n$ and hence $\lim_n\int f_n\d\mu\leq\int f\d\mu$. Conversely, we fix a simple function $s$ and show that $\lim_n\int f_n\d\mu\geq\int s\d\mu$, from which the result follows. Indeed, it suffices to show that $\lim_n\int f_n\d\mu\geq\l(1-\epsilon\r)\int s\d\mu=\int\l(1-\epsilon\r)s\d\mu$ for all $\epsilon>0$. To this end, let $X_n\coloneqq\l\{x\in X\st f_n\!\l(x\r)\geq\l(1-\epsilon\r)s\r\}$ for each $n$, so $X=\bigcup_nX_n$. Note that $\int f_n\d\mu\geq\int_{X_n}f_n\d\mu\geq\int_{X_n}\l(1-\epsilon\r)s\d\mu$ for all $n$. By monotone convergence of $\mu_{\l(1-\epsilon\r)s}$, we see that
$$\begin{equation}
    \int\l(1-\epsilon\r)s\d\mu=\mu_{\l(1-\epsilon\r)s}\!\l(X\r)=\sup_n\mu_{\l(1-\epsilon\r)s}\!\l(X_n\r)=\sup_n\int_{X_n}\l(1-\epsilon\r)s\d\mu
\end{equation}$$
and hence $\int f_n\d\mu\geq\int\l(1-\epsilon\r)s\d\mu$. This holds for all $n$, so $\lim_n\int f_n\d\mu\geq\int\l(1-\epsilon\r)s\d\mu$ as desired. Note that $\lim_n\int\l(f-f_n\r)\d\mu=0$, so $f_n\to_{L^1}\!f$ too.

For Fatou’s Lemma, let $f_n\in L^+$ and observe that the sequence $\inf_{n\geq N}f_n$ increases. By the MCT and the monotonicity of $\int$, we obtained the desired result as
$$\begin{equation}
    \int\liminf_nf_n\d\mu=\int\lim_N\inf_{n\geq N}f_n\d\mu=\lim_N\int\inf_{n\geq N}f_n\d\mu\leq\lim_N\inf_{n\geq N}\int f_n\d\mu=\liminf_n\int f_n\d\mu.\qedin
\end{equation}$$

---

<b>Remark.</b> Note that Fatou’s Lemma can be used to prove the MCT, so they are equivalent. Indeed, if $f_n\incto f$, then $\int f\d\mu\leq\liminf_n\int f_n\d\mu$. But since $f_n\leq f$ for all $n$, we have that $\limsup_n\int f_n\d\mu\leq\int f\d\mu$ too, so $\int f\d\mu=\lim_n\int f_n\d\mu$ as desired.<span style="float:right;">$\blacklozenge$</span>
