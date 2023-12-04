---
mathLink-blocks:
    Fatous-lemma: Fatou’s Lemma
    simple-function-dense-in-L1: Simple functions dense in $L^1$
---

<div class="topSpace"></div>

Date Created: 24/10/2023 21:06:35
Tags: #Type/Theorem #Topic/Real_Analysis

Proved by: [[Basic properties of measures#^monotone-convergence-of-sets]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Convergence Theorems).

Let $\tpl{X,\mu}$ be a measure space and let $f_n\in L^1$ be a sequence converging pointwise to some $f$ a.e.
* (Monotone Convergence Theorem). If $f_n,f\in L^+$ and $f_n\incto f$ a.e., then $\int f_n\d\mu\incto\int f\d\mu$. In fact, $f_n\to_{L^1}\!f$.
* (Fatou’s Lemma). For any $f_n\in L^+$, we have $\int\liminf_nf_n\d\mu\leq\liminf_n\int f_n\d\mu$.
* (Dominated Convergence Theorem). If $\l|f_n\r|\leq g$ for some $g\in L^1$, then $f\in L^1$ and $\int f_n\d\mu\to\int f\d\mu$. In fact, $f_n\to_{L^1}\!f$.

```
^Fatous-lemma

<b>Remark.</b> We claim that every $f\in L^1$ admits a sequence of simple functions $s_n\to f$ such that $\l|s_n\r|\incto\l|f\r|$, so $s_n\to_{L^1}\!f$ by the DCT. In particular, this shows that simple functions are dense in $L^1$. Writing $f=f^+-f^-$, we may w.l.o.g. assume $f\in L^+$. ^simple-function-dense-in-L1
* For each $n\in\N$, partition $\l[0,2^n\r]$ into intervals each of length $2^{-n}$ to obtain $k_n\coloneqq2^n/2^{-n}=2^{2n}$ intervals. For each $1\leq k\leq k_n$, set $B_k\coloneqq f^{-1}\!\l[k2^{-n},\infty\r]$. Note that the sequence $B_k$ decreases, so the functions $s_n\coloneqq\sum_{k=1}^{k_n}2^{-n}\cchi_{B_k}$ increase. A computation shows that $0\leq f-s_n\leq2^{-n}$ wherever $f\leq2^n$, so take $n\to\infty$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof (of the MCT).</i> It is clear that $\lim_n\int f_n\d\mu\leq\int f\d\mu$. Conversely, we fix a simple function $s$ and show that $\lim_n\int f_n\d\mu\geq\int s\d\mu$, from which the result follows. Indeed, it suffices to show that $\lim_n\int f_n\d\mu\geq\l(1-\epsilon\r)\int s\d\mu=\int\l(1-\epsilon\r)s\d\mu$ for all $\epsilon>0$. To this end, let $X_n\coloneqq\l\{x\in X\st f_n\!\l(x\r)\geq\l(1-\epsilon\r)s\r\}$ for each $n$, so $X=\bigcup_nX_n$. Note that $\int f_n\d\mu\geq\int_{X_n}f_n\d\mu\geq\int_{X_n}\l(1-\epsilon\r)s\d\mu$ for all $n$. By monotone convergence of $\mu_{\l(1-\epsilon\r)s}$, we see that
$$\begin{equation}
    \int\l(1-\epsilon\r)s\d\mu=\mu_{\l(1-\epsilon\r)s}\!\l(X\r)=\sup_n\mu_{\l(1-\epsilon\r)s}\!\l(X_n\r)=\sup_n\int_{X_n}\l(1-\epsilon\r)s\d\mu
\end{equation}$$
and hence $\int f_n\d\mu\geq\int\l(1-\epsilon\r)s\d\mu$. This holds for all $n$, so $\lim_n\int f_n\d\mu\geq\int\l(1-\epsilon\r)s\d\mu$ as desired. Note that $\lim_n\int\l(f-f_n\r)\d\mu=0$, so $f_n\to_{L^1}\!f$ too.<span style="float:right;">$\blacksquare$</span>

---

<i>Proof (of Fatou’s Lemma).</i> let $f_n\in L^+$ and observe that the sequence $\inf_{n\geq N}f_n$ increases. By the MCT and the monotonicity of $\int$, we obtained the desired result as
$$\begin{equation}
    \int\liminf_nf_n\d\mu=\int\lim_N\inf_{n\geq N}f_n\d\mu=\lim_N\int\inf_{n\geq N}f_n\d\mu\leq\lim_N\inf_{n\geq N}\int f_n\d\mu=\liminf_n\int f_n\d\mu.\qedin
\end{equation}$$

---

<i>Proof (of the DCT).</i> Note that $\l|f\r|\leq g$ a.e., so $\|f\|_1\leq\|g\|_1<\infty$ and hence $f\in L^1$. Since the functions $g\pm f_n\in L^+$ are non-negative, we have by Fatou’s Lemma that
$$\begin{equation}
    \begin{gathered}
        \int g\d\mu-\int f\d\mu=\int\l(g-f\r)\d\mu=\int\lim_n\l(g-f_n\r)\d\mu\leq\liminf_n\int\l(g-f_n\r)\d\mu=\int g\d\mu-\limsup_n\int f_n\d\mu \\
        \int g\d\mu+\int f\d\mu=\int\l(g+f\r)\d\mu=\int\lim_n\l(g+f_n\r)\d\mu\leq\liminf_n\int\l(g+f_n\r)\d\mu=\int g\d\mu+\liminf_n\int f_n\d\mu,
    \end{gathered}
\end{equation}$$
so $\limsup_n\int f_n\d\mu\leq\int f\d\mu\leq\liminf_n\int f_n\d\mu$. Thus $\lim\int f_n\d\mu=\int f\d\mu$, as desired. For the $L^1$-convergence, note that $\l|f_n-f\r|\leq\l|f_n\r|+\l|f\r|\leq2g$ and $\l|f_n-f\r|\to0$, so we have by the above that $\int\l|f_n-f\r|\d\mu\to\int0\d\mu=0$. Thus $\|f_n-f\|_1\to_{L^1}\!0$, as desired.<span style="float:right;">$\blacksquare$</span>

---

<b>Remark.</b> Note that Fatou’s Lemma can be used to prove the MCT, so they are equivalent. Indeed, if $f_n\incto f$, then $\int f\d\mu\leq\liminf_n\int f_n\d\mu$. But since $f_n\leq f$ for all $n$, we have that $\limsup_n\int f_n\d\mu\leq\int f\d\mu$ too, so $\int f\d\mu=\lim_n\int f_n\d\mu$ as desired.<span style="float:right;">$\blacklozenge$</span>
