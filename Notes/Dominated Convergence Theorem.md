<div class="topSpace"></div>

Date Created: 25/10/2023 14:25:48
Tags: #Type/Theorem #Topic/Real_Analysis

Proved by: [[Monotone Convergence Theorem#^Fatous-lemma]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Dominated Convergence Theorem).

Let $\tpl{X,\mu}$ be a measure space and $f_n\in L^1$. If $\l|f_n\r|\leq g$ for some $g\in L^1$ and $f_n\to f$ a.e., then $f\in L^1$ and $\int f_n\d\mu\to\int f\d\mu$. In fact, $f_n\to_{L^1}\!f$.

```

<i>Proof.</i> Note that $\l|f\r|\leq g$ a.e., so $\|f\|_1\leq\|g\|_1<\infty$ and hence $f\in L^1$. Since the functions $g\pm f_n\in L^+$ are non-negative, we have by Fatou’s Lemma that
$$\begin{equation}
    \begin{gathered}
        \int g\d\mu-\int f\d\mu=\int\l(g-f\r)\d\mu=\int\lim_n\l(g-f_n\r)\d\mu\leq\liminf_n\int\l(g-f_n\r)\d\mu=\int g\d\mu-\limsup_n\int f_n\d\mu \\
        \int g\d\mu+\int f\d\mu=\int\l(g+f\r)\d\mu=\int\lim_n\l(g+f_n\r)\d\mu\leq\liminf_n\int\l(g+f_n\r)\d\mu=\int g\d\mu+\liminf_n\int f_n\d\mu,
    \end{gathered}
\end{equation}$$
so $\limsup_n\int f_n\d\mu\leq\int f\d\mu\leq\liminf_n\int f_n\d\mu$. Thus $\lim\int f_n\d\mu=\int f\d\mu$, as desired. For the $L^1$-convergence, note that $\l|f_n-f\r|\leq\l|f_n\r|+\l|f\r|\leq2g$ and $\l|f_n-f\r|\to0$, so we have by the above that $\int\l|f_n-f\r|\d\mu\to\int0\d\mu=0$. Thus $\|f_n-f\|_1\to_{L^1}\!0$, as desired.<span style="float:right;">$\blacksquare$</span>
