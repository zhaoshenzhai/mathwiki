---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 03/12/2023 09:00:06
Tags: #Type/Definition #In_Progress

Types: <i>Not Applicable</i>
Examples: [[Little lp Space]]
Constructions: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

Properties: [[Basic properties of Lp spaces#^minkowski]]
Sufficiencies: [[Basic properties of Lp spaces#^simple-functions-dense-in-Lp]]
Equivalences: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

``` ad-Definition
title: Definition.

Let $\tpl{X,\mu}$ be a measure space and fix $1\leq p<\infty$. The space $L^p\!\l(X,\mu\r)$ is the Banach space of all $\mu$-measurable functions $f:X\to\R$ with $\int\l|f\r|^p\d\mu<\infty$, equipped with the <b>$p$-norm</b> given by $\|f\|_p\coloneqq\l(\int\l|f\r|^p\d\mu\r)^{1/p}$ for all $f\in L^p\!\l(X,\mu\r)$.
* We let $L^\infty\!\l(X,\mu\r)$ be the Banach space of all $\mu$-measurable functions with $\|f\|_\infty<\infty$, where $\|f\|_\infty\coloneqq\inf\l\{c\geq0\st\l|f\r|\leq c\ \mu\textrm{-a.e.}\r\}$ is the <b>$\esssup$-norm</b>.

```

<b>Remark.</b> If $f\in L^\infty\!\l(X,\mu\r)$, then there is a function $\widetilde{f}=f$ a.e. such that $\|\widetilde{f}\|_\infty=\sup_{x\in X}|\widetilde{f}\l(x\r)|=\|f\|_\infty$ is the actual $\sup$-norm. It is clear that this is the norm of a.e. uniform convergence; that is, $\|f_n-f\|_\infty\to0$ iff there is a $\mu$-conull set $X'\subseteq X$ such that $f_n\to f$ uniformly on $X'$.<span style="float:right;">$\blacklozenge$</span>

---

For Hölder’s Inequality, we may assume w.l.o.g. that $r=1$ by replacing $f,g$ with $f^r,g^r$ and $p,q$ with $p/r,q/r$. Normalizing by $\|f\|_p\cdot\|g\|_q$, we may further assume that $\|f\|_p=\|g\|_q=1$, so it remains to show $\|fg\|_1\leq1$. To this end, note that $\l|fg\r|=\l|f\r|\l|g\r|=\l(\l|f\r|^p\r)^{1/p}\l(\l|g\r|^q\r)^{1/q}\leq\frac{1}{p}\l|f\r|^p+\frac{1}{q}\l|g\r|^q$ by the convexity of $x\mapsto e^x$, so we obtain
$$\begin{equation}
    \int\l|fg\r|\d\mu\leq\frac{1}{p}\int\l|f\r|^p\d\mu+\frac{1}{q}\int\l|g\r|^q\d\mu=\frac{1}{p}\|f\|_p^p+\frac{1}{q}\|g\|_q^q=\frac{1}{p}+\frac{1}{q}=1.\qedin
\end{equation}$$
* (Hölder’s Inequality). If $f\in L^p$ and $g\in L^q$, then $fg\in L^r$ where $\frac{1}{r}=\frac{1}{p}+\frac{1}{q}$; in fact, $\|fg\|_r\leq\|f\|_p\cdot\|g\|_q$.
* For each $f\in L^p\cap L^\infty$ with $p<\infty$, we have $\lim_{q\to\infty}\|f\|_q=\|f\|_\infty$.
