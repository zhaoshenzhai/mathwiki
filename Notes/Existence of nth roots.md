---
mathLink: Existence of $n^\textrm{th}$ roots
---

<div class="topSpace"></div>

Date Created: 20/09/2022 16:48:58
Tags: #Type/Proposition #Topic/Analysis

Proved by: [[Difference of powers (with estimate)]], [[Archimedean Property of R]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Fix $n\in\N^+$. For every $x\in\R^+$, there exists a unique $y\in\R^+$ such that $y^n=x$.

```

<b>Remark.</b> Thus we may write $\sqrt[n]{x}\coloneqq y$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Uniqueness follows immediately since $0<y_1<y_2$ implies $y_1^n<y_2^n$ and similarly for when $0<y_2<y_1$. The contrapositive then states that $y_1^n=y_2^n$ implies $y_1=y_2$. For existence, consider the set
$$\begin{equation}
    T\coloneqq\l\{t\in\R\mid t^n<x\r\}.
\end{equation}$$
Since $0\in T$, we see that $T\neq\em$. Also, $T$ is bounded above by $x+1$, so, since $\R$ is Dedekind-complete, $T$ admits a supremum $y\coloneqq\sup T$. We claim that $y^n=x$, for which we proceed by contradiction.
* ($y^n<x$): It suffices to find some $\epsilon>0$ such that $y+\epsilon\in T$, which will then contradict the fact that $y$ is an upper bound of $T$. In other words, we need $\epsilon>0$ such that $\l(y+\epsilon\r)^n<x$. Indeed, since $\l(y+\epsilon\r)^n-y^n$ is intuitively $\textrm{`}$small$\textrm{'}$, we consider the estimate
$$\begin{equation}
    \begin{aligned}
        \l(y+\epsilon\r)^n-y^n&\leq\epsilon n\l(y+\epsilon\r)^{n-1} && \textrm{Difference of powers} \\
        &<\epsilon n\l(y+m\r)^{n-1}
    \end{aligned}
\end{equation}$$
where $m>x$ is any natural number; it exists by Archimedeanity of $\R$. We are done if we can bound the expression by $x-y^n$, so set
$$\begin{equation}
    \epsilon\coloneqq\frac{x-y^n}{n\l(y+m\r)^{n-1}}.
\end{equation}$$

* ($y^n>x$): It suffices to fine some $\epsilon>0$ such that $y-\epsilon$ is an upper bound of $T$, which will then contradict the fact that $y$ is the least upper bound of $T$. In other words, we need $\epsilon>0$ such that $\l(y-\epsilon\r)^n\geq x$. Similarly, consider the estimate
$$\begin{equation}
    y^n-\l(y-\epsilon\r)^n\leq\epsilon ny^{n-1}.
\end{equation}$$
We are done if we can bound this expression by $y^n-x$, so set
$$\begin{equation}
    \epsilon\coloneqq\frac{y^n-x}{ny^{n-1}}.\qedin
\end{equation}$$
