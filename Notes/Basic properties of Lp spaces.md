---
mathLink: auto
mathLink-blocks:
    holder: Hölder’s Inequality
    simple-functions-dense-in-Lp: Simple functions dense in $L^p$
---

<div class="topSpace"></div>

Date Created: 03/12/2023 09:22:57
Tags: #Type/Proposition #In_Progress
^holder

Proved by: [[Basic properties of integration]], [[Banach Space#^characterization-of-completeness]], [[Convergence Theorems]], [[Chebyshev's Inequality]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{X,\mu}$ be a measure space and fix $1\leq p\leq\infty$. Then $L^p\coloneqq L^p\!\l(X,\mu\r)$ is a Banach space and admits the simple functions as a dense subset.
* (Hölder’s Inequality). If $f\in L^p$ and $g\in L^q$, then $fg\in L^r$ where $\frac{1}{r}=\frac{1}{p}+\frac{1}{q}$; in fact, $\|fg\|_r\leq\|f\|_p\cdot\|g\|_q$.

```
^simple-functions-dense-in-Lp

<i>Proof (when $p<\infty$).</i> That $L^p$ is closed under $+$ follows since $\l|f+g\r|^p\leq\l(2\max\l\{\l|f\r|,\l|g\r|\r\}\r)^p=2^p\max\l\{\l|f\r|,\l|g\r|\r\}^p\leq2^p\l(\l|f\r|^p+\l|g\r|^p\r)$ for all $f,g\in L^p$, so
$$\begin{equation}
    \int\l|f+g\r|^p\d\mu\leq\int2^p\l(\l|f\r|^p+\l|g\r|^p\r)\d\mu=2^p\int\l|f\r|^p\d\mu+2^p\int\l|g\r|^p\d\mu<\infty.
\end{equation}$$
Scalar multiplication is even easier since $\int\l|\alpha f\r|^p\d\mu=\l|\alpha\r|^p\int\l|f\r|^p\d\mu<\infty$ if $f\in L^p$. It is also clear that $\|\slot\|_p$ is positive-definite (mod $\mu$-null) and homogeneous, so it remains to verify the triangle inequality, that $\|f+g\|_p\leq\|f\|_p+\|g\|_p$ for all $f,g\in L^p$. Here, the assumption that $p\geq1$ is used.
* <i>(Minkowski’s Inequality)</i>. If either $f=0$ or $g=0$, then there is nothing to show. Normalizing by $\|f\|_p+\|g\|_p$, we may assume w.l.o.g. that $\|f\|_p+\|g\|_p=1$ since the general case follows as $\|f+g\|_p\leq\|\l|f\r|+\l|g\r|\|_p=\l(\|f\|_p+\|g\|_p\r)\cdot\l\|\frac{\l|f\r|+\l|g\r|}{\|f\|_p+\|g\|_p}\r\|_p\leq\|f\|_p+\|g\|_p$. To this end, we show that $\int\l(f+g\r)^p\d\mu\leq1$. Set $\alpha\coloneqq\|f\|_p$, so $\|g\|_p=1-\alpha$, and let $F\coloneqq f/\alpha$ and $G\coloneqq g/\l(1-\alpha\r)$ be normalized. Since the function $x\mapsto x^p$ is convex when $p\geq1$, we see that
    $$\begin{equation}
        \l(f+g\r)^p=\l(\alpha F+\l(1-\alpha\r)G\r)^p\leq\alpha F^p+\l(1-\alpha\r)G^p,
    \end{equation}$$
    so integrating gives us $\int\l(f+g\r)^p\d\mu\leq\alpha\int F^p\d\mu+\l(1-\alpha\r)\int G^p\d\mu=\alpha\|F\|_p^p+\l(1-\alpha\r)\|G\|_p^p=1$.

To show that $L^p$ is complete, it suffices to show that every absolutely convergent series $S\coloneqq\sum_i\|f_i\|_p<\infty$ converges. Set $g_n\coloneqq\sum_{i<n}\l|f_i\r|$ and $g\coloneqq\sum_i\l|f_i\r|$, which are all in $L^p$ since $\|g_n\|_p=\|\sum_{i<n}\l|f_i\r|\|_p\leq\sum_{i<n}\|f_i\|_p\leq S<\infty$ by Minkowski’s inequality, so each $g_n\in L^p$, and letting $n\to\infty$ and using the MCT gives $g\in L^p$ too. Note that $g<\infty$ a.e. by Chebyshev’s Inequality, so the series $\sum_if_i\!\l(x\r)$ converges absolutely a.e. to some $f\l(x\r)$. Since $\l|f-\sum_{i<n}f_i\r|^p\leq\l(\l|f\r|+\sum_{i<n}\l|f_i\r|\r)^p\leq\l(2g\r)^p\in L^1$, we have by the DCT that $\|f-\sum_{i<n}f_i\|_p^p=\int\l|f-\sum_{i<n}f_i\r|^p\d\mu\to0$ as $n\to\infty$, as desired.
* To see that the simple functions are dense in $L^p$, let $s_n\to f$ be a sequence of simple functions with $\l|s_n\r|\leq\l|f\r|$. Then $s_n^p\to f^p$, and since $\l|f-s_n\r|^p\leq2^p\l|f\r|^p\in L^1$, we have by the DCT that $\|f-s_n\|_p\to0$.

For Hölder’s Inequality, we may assume w.l.o.g. that $r=1$ by replacing $f,g$ with $f^r,g^r$ and $p,q$ with $p/r,q/r$. Normalizing by $\|f\|_p\cdot\|g\|_q$, we may further assume that $\|f\|_p=\|g\|_q=1$, so it remains to show $\|fg\|_1\leq1$. To this end, note that $\l|fg\r|=\l|f\r|\l|g\r|=\l(\l|f\r|^p\r)^{1/p}\l(\l|g\r|^q\r)^{1/q}\leq\frac{1}{p}\l|f\r|^p+\frac{1}{q}\l|g\r|^q$ by the convexity of $x\mapsto e^x$, so we obtain
$$\begin{equation}
    \int\l|fg\r|\d\mu\leq\frac{1}{p}\int\l|f\r|^p\d\mu+\frac{1}{q}\int\l|g\r|^q\d\mu=\frac{1}{p}\|f\|_p^p+\frac{1}{q}\|g\|_q^q=\frac{1}{p}+\frac{1}{q}=1.\qedin
\end{equation}$$

---

<i>Proof (when $p=\infty$).</i> 
