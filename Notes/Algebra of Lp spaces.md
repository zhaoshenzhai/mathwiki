---
mathLink: auto
mathLink-blocks:
    holder: Hölder’s Inequality
---

<div class="topSpace"></div>

Date Created: 04/12/2023 14:54:59
References: #Ref/Fol07 #Ref/Anu23_564
Tags: #Type/Proposition #In_Progress/Analysis

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Algebra of $L^p$).

Let $\tpl{X,\mu}$ be a measure space and fix $0<p,q,r\leq\infty$. Then the following algebraic properties hold.
* (Hölder’s Inequality). Suppose that $\frac{1}{r}=\frac{1}{p}+\frac{1}{q}$. If $f\in L^p$ and $g\in L^q$, then $fg\in L^r$ and $\|fg\|_r\leq\|f\|_p\cdot\|g\|_q$. If $p,q<\infty$, then equality holds iff $\l\{\l|f\r|^p,\l|g\r|^q\r\}$ is linearly dependent; if $p=\infty$, then equality holds iff $\l|f\l(x\r)\r|=\|f\|_\infty$ for a.e. $x\in X$ such that $g\l(x\r)\neq0$; and similarly if $q=\infty$.
* For each $f\in L^p\cap L^\infty$ with $p<\infty$, we have $\lim_{q\to\infty}\|f\|_q=\|f\|_\infty$.
* If $0<p<q<r\leq\infty$, then $L^q\subseteq L^p+L^r$ and $L^p\cap L^r\subseteq L^q$.
* Suppose that $0<p<q\leq\infty$. If $\mu\l(X\r)<\infty$, then $L^q\subseteq L^p$ and in fact $\|f\|_p\leq\|f\|_q\cdot\mu\l(X\r)^{\frac{1}{p}-\frac{1}{q}}$.

```
^holder

<i>Proof (of Hölder).</i> If $p,q<\infty$, we may assume w.l.o.g. that $r=1$ by replacing $f,g$ with $f^r,g^r$ and $p,q$ with $p/r,q/r$. We may also assume that $\|f\|_p=\|g\|_q=1$ by normalizing, so it remains to show $\|fg\|_1\leq1$. To this end, note that $\l|fg\r|=\l|f\r|\l|g\r|=\l(\l|f\r|^p\r)^{1/p}\l(\l|g\r|^q\r)^{1/q}\leq\frac{1}{p}\l|f\r|^p+\frac{1}{q}\l|g\r|^q$ by the convexity of $x\mapsto e^x$, so we obtain
$$\begin{equation}
    \int\l|fg\r|\,\d\mu\leq\frac{1}{p}\int\l|f\r|^p\,\d\mu+\frac{1}{q}\int\l|g\r|^q\,\d\mu=\frac{1}{p}\|f\|_p^p+\frac{1}{q}\|g\|_q^q=\frac{1}{p}+\frac{1}{q}=1.
\end{equation}$$
The equality claim is clear. If $p=\infty$, then $\l|f\l(x\r)\r|\leq\|f\|_\infty$ for a.e. $x\in\R$. Multiplying by $\l|g\l(x\r)\r|$ and integrating gives the desired result. For the uniqueness claim, note that if $\|fg\|_q=\|f\|_\infty\cdot\|g\|_q$, then $\l|f\r|\cdot\l|g\r|=\l|fg\r|=\|f\|_\infty\cdot\l|g\r|$ a.e. Thus $\l|f\l(x\r)\r|=\|f\|_\infty$ for a.e. $x\in X$ where $g\l(x\r)\neq0$, as desired.<span style="float:right;">$\blacksquare$</span>

---

<i>Proof.</i> 
