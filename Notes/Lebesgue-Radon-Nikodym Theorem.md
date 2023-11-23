<div class="topSpace"></div>

Date Created: 22/11/2023 19:49:54
Tags: #Type/Theorem #In_Progress

Proved by: [[Pointwise-limits of measurable functions are measurable]], [[Monotone Convergence Theorem]], [[Hahn Decomposition Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Lebesgue-Radon-Nikodym).

Let $\mu$ and $\nu$ be two $\sigma$-finite measures on a measurable space $\tpl{X,\mc{B}}$. Then there is a partition $X=X_0\sqcup X_1$ with $X_i\in\mc{B}$ such that $\mu\perp\nu$ on $X_0$ and $\mu\abscont\nu$ on $X_1$. Moreover, there is a $\mc{B}$-measurable function $f:X\to\R_{\geq0}$ $-$ unique up to $\nu$-null sets $-$ such that $\mu\l(B\r)=\int_Bf\d\nu$ for all $B\subseteq X_1$ in $\mc{B}$.

```

<b>Remark.</b> If $\mu\abscont\nu$, the function $f$ as furnished above is well-defined $\nu$-a.e. and is denoted by $\!\d\mu/\d\nu$, called the <i>Radon-Nikodym derivative</i> of $\mu$ over $\nu$. We write the condition $\mu\l(B\r)=\int_Bf\d\nu$ for all $B\in\mc{B}$ as $\!\d\mu=f\d\nu$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> We may w.l.o.g. assume that both $\mu$ and $\nu$ are finite; the general $\sigma$-finite case follows by partitioning $X=\bigsqcup_nX^n$ with each $\mu\l(X^n\r)<\infty$ and applying the finite case to each $X^n$ to obtain a decomposition $X=\bigsqcup_n\l(X^n_0\sqcup X^n_1\r)=\l(\bigsqcup_nX_0^n\r)\sqcup\l(\bigsqcup_nX_1^n\r)$ and a function $f\coloneqq\sum_nf_n$. First, we prove the existence of $X=X_0\sqcup X_1$.
* Indeed, we argue by measure exhaustion by letting $Z_0^\nu$ be the $1/2$-$\mu$-largest $\nu$-null subset of $X$, i.e. let $\mu\l(Z_0^\nu\r)\geq\frac{1}{2}\sup\l\{\mu\l(B\r):B\subseteq X,\nu\l(B\r)=0\r\}$. Then $X\comp Z_0^\nu$ still has $\nu$-null sets of positive $\mu$-measure, so we repeat. If $\tpl{Z_n^\nu}_{n<k}$ is a disjoint sequence of $\nu$-null sets of positive $\mu$-measure, let $Z_k^\nu$ be the $1/2$-$\mu$-largest $\nu$-null subset of $X\comp\bigsqcup_{n<k}Z_n^\nu$. Let $X_0\coloneqq\bigsqcup_nZ_n^\nu$ and observe that $\nu\l(X_0\r)=\sum_n\nu\l(Z_n^\nu\r)=0$, so $\mu\perp\nu$ on $X_0$. Let $X_1\coloneqq X\comp X_0$ and note that $\mu\l(X_1\r)=\mu\l(X\r)-\sum_n\mu\l(Z_n^\nu\r)$ since $\mu$ is a finite measure. Also, $\sum_n\mu\l(Z_n^\nu\r)$ is summable, so in particular $\lim_n\mu\l(Z_n^\nu\r)=0$. Let $B\in\mc{B}$ be a $\nu$-null subset of $X_1$. If $\mu\l(B\r)>0$, then there is some $m\in\N$ such that $\mu\l(Z_m^\nu\r)<\mu\l(B\r)/2$, which contradicts the choice of $Z_0^\nu$ since $B\subseteq X_1\subseteq X_0\comp\bigsqcup_{n<m}Z_n^\nu$ and $\nu\l(B\r)=0$. Thus $\mu\l(B\r)=0$, so $\mu\abscont\nu$ on $X_1$ as desired.

Restricting to $X_1$, we now show the existence of a $\mc{B}$-measurable function $f:X\to\R_{\geq0}$ such that $\!\d\mu=f\d\nu$. To this end, consider the collection $\mc{F}$ of all such functions such that $\!\d\mu\geq f\d\nu$, which is non-empty since $0\in\mc{F}$. Note that $\mc{F}$ is closed under $\max$ since if $f,g\in\mc{F}$, then letting $A\coloneqq\l\{x\in X\st f\l(x\r)\geq g\l(x\r)\r\}$ gives us
$$\begin{equation}
    \int_B\max\l\{f,g\r\}\d\nu=\int_{B\cap A}f\d\nu+\int_{B\comp A}g\d\nu\leq\mu\l(B\cap A\r)+\mu\l(B\comp A\r)=\mu\l(B\r).
\end{equation}$$
Since $\int f\d\nu\leq\mu\l(X\r)$ for all $f\in\mc{F}$, there is a sequence $f_n\in\mc{F}$ such that $\lim_n\int f_n\d\nu=\sup_{f\in\mc{F}}\int f\d\nu\leq\mu\l(X\r)$. Replacing each $f_n$ by $\max\l\{f_0,\dots,f_n\r\}$, if necessary, we may assume that $f_n$ is increasing, so $f\coloneqq\lim_nf_n$ exists and we have by the MCT that $\int f\d\nu=\lim_n\int f_n\d\nu=\sup_{f\in\mc{F}}\int f\d\nu$. Since each $f_n\in\mc{F}$, we have $f\in\mc{F}$ too, and we claim that the $\mc{B}$-measurable function $f$ is as desired.
* Indeed, 
