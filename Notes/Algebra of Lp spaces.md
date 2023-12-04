---
mathLink: auto
mathLink-blocks:
    holder: Hölder’s Inequality
---

<div class="topSpace"></div>

Date Created: 04/12/2023 14:54:59
Tags: #Type/Proposition #In_Progress

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{X,\mu}$ be a measure space and fix $0<p,q,r\leq\infty$. Then the following algebraic properties hold.
* (Hölder’s Inequality). Suppose that $\frac{1}{r}=\frac{1}{p}+\frac{1}{q}$. If $f\in L^p$ and $g\in L^q$, then $fg\in L^r$ and $\|fg\|_r\leq\|f\|_p\cdot\|g\|_q$. If $p,q<\infty$, then equality holds iff $\l\{\l|f\r|^p,\l|g\r|^q\r\}$ is linearly dependent, and if $p=\infty$, then equality holds iff $\l|f\l(x\r)\r|=\|f\|_\infty$ for a.e. $x\in X$ such that $g\l(x\r)\neq0$.
* For each $f\in L^p\cap L^\infty$ with $p<\infty$, we have $\lim_{q\to\infty}\|f\|_q=\|f\|_\infty$.

```
^holder

<i>Proof (of Hölder).</i> We may assume w.l.o.g. that $r=1$ by replacing $f,g$ with $f^r,g^r$ and $p,q$ with $p/r,q/r$. Normalizing by $\|f\|_p\cdot\|g\|_q$, we may further assume that $\|f\|_p=\|g\|_q=1$, so it remains to show $\|fg\|_1\leq1$. To this end, note that $\l|fg\r|=\l|f\r|\l|g\r|=\l(\l|f\r|^p\r)^{1/p}\l(\l|g\r|^q\r)^{1/q}\leq\frac{1}{p}\l|f\r|^p+\frac{1}{q}\l|g\r|^q$ by the convexity of $x\mapsto e^x$, so we obtain
$$\begin{equation}
    \int\l|fg\r|\d\mu\leq\frac{1}{p}\int\l|f\r|^p\d\mu+\frac{1}{q}\int\l|g\r|^q\d\mu=\frac{1}{p}\|f\|_p^p+\frac{1}{q}\|g\|_q^q=\frac{1}{p}+\frac{1}{q}=1.
\end{equation}$$
