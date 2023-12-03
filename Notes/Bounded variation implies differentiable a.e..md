---
mathLink: $\BV\Rightarrow$ differentiable $\lambda$-a.e.
---

<div class="topSpace"></div>

Date Created: 03/12/2023 04:13:25
Tags: #Type/Proposition #Topic/Real_Analysis

Proved by: [[Calculus on the Real Line#^jordan-decomposition]], [[Real Numbers#^rationals-dense-in-reals]], [[Borel Measures on the Real Line]], [[Lebesgue Differentiation Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Consider the Lebesgue measure $\lambda$ on $\R$ and let $f:\R\to\R$ be a function. If $f\in\BV$, then it is continuous on a cocountable set and $f'$ exists a.e.

```

<i>Proof.</i> In light of the Jordan Decomposition $f=\frac{1}{2}\l(T_f+f\r)-\frac{1}{2}\l(T_f-f\r)$, it suffices to prove this for increasing functions.
* For the first claim, let $D$ be the set of discontinuities of $f$ and note that $x\in D$ iff $\bar{f}\l(x\r)\neq\uline{f}\l(x\r)$, where $\bar{f}\l(x\r)\coloneqq\lim_{t\to x^+}f\l(t\r)$ and $\uline{f}\l(x\r)\coloneqq\lim_{t\to x^-}f\l(t\r)$. Thus every $x\in D$ admits some $q_x\in\Q$ such that $\uline{f}\l(x\r)<q_x<\bar{f}\l(x\r)$, and since $D\into\Q$ via $x\mapsto q_x$, we see that $D$ is countable.

To show that $f'$ exists a.e., we note that $\bar{f}$ is an increasing right-continuous function and hence induces a (unique) locally-finite Borel measure $\mu$ on $\R$. For a fixed $x\in\R$, the families $\l\{\l(x,x+r\r]\r\}_{r>0}$ and $\l\{\l(x-r,x\r]\r\}_{r>0}$ both shrink-nicely to $x$, so for a.e. $x\in\R$, we have by the Lebesgue Differentiation Theorem that
$$\begin{equation}
    \lim_{r\to0^+}\frac{\bar{f}\l(x+r\r)-\bar{f}\l(x\r)}{r}=\lim_{r\to0^+}\frac{\mu\l(x,x+r\r]}{\lambda\l(x,x+r\r]}=\frac{\d\mu_\abscont}{\d\lambda}=\lim_{r\to0^+}\frac{\mu\l(x-r,x\r]}{\lambda\l(x-r,x\r]}=\lim_{r\to0^+}\frac{\bar{f}\l(x\r)-\bar{f}\l(x-r\r)}{r}.
\end{equation}$$
Thus $\bar{f}$ is differentiable a.e. Set $h\coloneqq\bar{f}-f$, so $h\l(x\r)\neq0$ implies that $x\in D$; we claim that $h'=0$ a.e., so $f'=\bar{f}'$ a.e. and we are done. To this end, consider the Dirac measure $\delta\coloneqq\sum_{x\in\R}h\l(x\r)\delta_x$, which is a countable sum since $D$ is countable. Note that $\delta$ is locally-finite since the intervals $(f\l(x\r),\bar{f}\l(x\r))$ are all disjoint, so
$$\begin{equation}
    \sum_{\l|x\r|\leq N}h\l(x\r)=\sum_{\l|x\r|\leq N}\bar{f}\l(x\r)-f\l(x\r)\leq f\l(N\r)-f\l(-N\r)<\infty
\end{equation}$$
for all $N\in\N$. Thus, again by the Lebesgue Differentiation Theorem with $\delta\perp\lambda$, we see that $\lim_{r\to0}\frac{\delta\l[x-r,x+r\r]}{\lambda\l[x-r,x+r\r]}=0$ and hence
$$\begin{equation}
    \l|\frac{h\l(x+r\r)-h\l(x\r)}{r}\r|\leq\frac{h\l(x+r\r)-h\l(x\r)}{\l|r\r|}\leq2\cdot\frac{\delta\l[x-r,x+r\r]}{\lambda\l[x-r,x+r\r]}\to0.\qedin
\end{equation}$$
