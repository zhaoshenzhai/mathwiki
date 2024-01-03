<div class="topSpace"></div>

Date Created: 22/11/2023 19:49:54
References:
Tags: #Type/Theorem #Topic/Real_Analysis

Proved by: [[Pointwise-limits of measurable functions are measurable]], [[Convergence Theorems]], [[Hahn Decomposition Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: [[Lebesgue Differentiation Theorem#^differentiation]]
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Lebesgue-Radon-Nikodym).

Let $\mu$ and $\nu$ be two $\sigma$-finite measures on a measurable space $\tpl{X,\mc{B}}$. Then there is a partition $X=X_0\sqcup X_1$ with $X_i\in\mc{B}$ such that $\mu\perp\nu$ on $X_0$ and $\mu\abscont\nu$ on $X_1$. Moreover, there is a $\mc{B}$-measurable function $f:X\to\R_{\geq0}$ $-$ unique up to $\nu$-null sets $-$ such that $\mu\l(B\r)=\int_Bf\d\nu$ for all $B\subseteq X_1$ in $\mc{B}$.

```

<b>Remark.</b> If $\mu\abscont\nu$, the function $f$ as furnished above is well-defined $\nu$-a.e. and is denoted by $\!\d\mu/\d\nu$, called the <i>Radon-Nikodym derivative</i> of $\mu$ over $\nu$. We write the condition $\mu\l(B\r)=\int_Bf\d\nu$ for all $B\in\mc{B}$ as $\!\d\mu=f\d\nu$. By $\nu$-a.e. uniqueness, it is easily seen that ‘$\!\d/\d\nu$’ is linear and satisfies the Chain Rule.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> We may w.l.o.g. assume that both $\mu$ and $\nu$ are finite; the general $\sigma$-finite case follows by partitioning $X=\bigsqcup_nX^n$ with each $\mu\l(X^n\r)<\infty$ and applying the finite case to each $X^n$ to obtain a decomposition $X=\bigsqcup_n\l(X^n_0\sqcup X^n_1\r)=\l(\bigsqcup_nX_0^n\r)\sqcup\l(\bigsqcup_nX_1^n\r)$ and a function $f\coloneqq\sum_nf_n$. For $\mu,\nu<\infty$, consider the collection $\mc{F}$ of all functions $f:X\to\R_{\geq0}$ with $\!\d\mu\geq f\d\nu$, which is non-empty since $0\in\mc{F}$. It is closed under $\max$ since if $f,g\in\mc{F}$, then letting $A\coloneqq\l\{x\in X\st f\l(x\r)\geq g\l(x\r)\r\}$ gives us
$$\begin{equation}
    \int_B\max\l\{f,g\r\}\d\nu=\int_{B\cap A}f\d\nu+\int_{B\comp A}g\d\nu\leq\mu\l(B\cap A\r)+\mu\l(B\comp A\r)=\mu\l(B\r).
\end{equation}$$
Since $\int f\d\nu\leq\mu\l(X\r)$ for all $f\in\mc{F}$, there is a sequence $f_n\in\mc{F}$ such that $\lim_n\int f_n\d\nu=\sup_{f\in\mc{F}}\int f\d\nu\leq\mu\l(X\r)$. Replacing each $f_n$ by $\max\l\{f_0,\dots,f_n\r\}$, if necessary, we may assume that $f_n$ is increasing, so $f\coloneqq\lim_nf_n$ exists and we have by the MCT that $\int f\d\nu=\lim_n\int f_n\d\nu=\sup_{f\in\mc{F}}\int f\d\nu$. Since each $f_n\in\mc{F}$, we have $f\in\mc{F}$ too, and we claim that the $\mc{B}$-measurable function $f$ is as desired. To this end, set $\mu_0\coloneqq\mu-\nu_f$, which is a measure since $f\in\mc{F}$. We claim that $\mu_0\perp\nu$, for then there is a partition $X=X_0\sqcup X_1$ such that $\l(\mu-\nu_f\r)\l(X_1\r)=0$ and $\nu\l(X_0\r)=0$, whence $\mu\perp\nu$ on $X_0$ and $\!\d\mu=f\d\nu$ on $X_1$ (and hence $\mu\abscont\nu$ on $X_1$) as desired.
* Indeed, let $\epsilon_n\coloneqq1/n$ and let $P_n\sqcup N_n$ be the Hahn decomposition of the signed measure $\mu_0-\epsilon_n\nu$. Let $P\coloneqq\bigcup_nP_n$ and $N\coloneqq X\comp P$. Note that $\l(\mu_0-\epsilon_n\nu\r)\l(N\r)\leq0$ for all $n$, so $0\leq\mu_0\!\l(N\r)\leq\epsilon_n\nu\l(N\r)\to0$ and hence $\mu_0\!\l(N\r)=0$. If $\nu\l(P\r)=0$, then $X=P\sqcup N$ witnesses $\mu_0\perp\nu$ and we are done. Otherwise, we have $\nu\l(P_n\r)>0$ for some $n$. Also note that $\l(\mu_0-\epsilon_n\nu\r)\l(P_n\r)\geq0$, so $\mu\l(P_n\r)\geq\nu_f\!\l(P_n\r)+\epsilon_n\nu\l(P_n\r)$. But then $\int_{P_n}\!\l(f+\epsilon_n\cchi_{P_n}\r)\d\nu\leq\mu\l(P_n\r)$, which contradicts the maximality of $f$.

Finally, if $f,g:X\to\R_{\geq0}$ are both $\mc{B}$-measurable functions such that $f\d\nu=\d\mu=g\d\nu$, then considering the set $B\coloneqq\l\{x\in X\st f\l(x\r)\geq g\l(x\r)\r\}$ gives us $\int_Bf\d\nu=\int_Bg\d\nu$ and hence $\int_B\l(f-g\r)\d\nu=0$. Since $f-g\geq0$ on $B$, we have $\l.f\r|_B=\l.g\r|_B$ $\nu$-a.e. Similarly consider $B'\coloneqq\l\{x\in X\st g\l(x\r)\geq f\l(x\r)\r\}$ gives the desired uniqueness result.<span style="float:right;">$\blacksquare$</span>
