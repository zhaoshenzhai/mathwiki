---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 01/11/2022 01:28:24
Tags: #Type/Proposition #Topic/Real_Analysis

Proved by: [[Limit of geometric sequence]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{X,d}$ be a metric space and consider a sequence $\tpl{x_n}$ in $X$. If $\tpl{x_n}$ is contractive, then it is Cauchy.

```

<b>Remark.</b> Therefore, every contractive sequence in a complete metric space is convergent.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> First, note that there exists some $c\in\l(0,1\r)$ such that
$$\begin{equation}
    d\l(x_n,x_{n+1}\r)\leq cd\l(x_{n-1},x_n\r)\leq c^2d\l(x_{n-2},x_{n-1}\r)\leq\cdots\leq c^nd\l(x_0,x_1\r)
\end{equation}$$
for all $n\in\N$. Let $\epsilon>0$ and observe that
$$\begin{equation}
    \begin{aligned}
        d\l(x_n,x_{n+k}\r)&\leq d\l(x_n,x_{n+1}\r)+d\l(x_{n+1},x_{n+2}\r)+\cdots+d\l(x_{n+k-1},x_{n+k}\r) \\
        &\leq c^nd\l(x_0,x_1\r)+c^{n+1}d\l(x_0,x_1\r)+\cdots c^{n+k-1}d\l(x_0,x_1\r) \\
        &=c^nd\l(x_0,x_1\r)\l(1+c+\cdots+c^{k-1}\r) \\
        &=\frac{c^n\l(1-c^k\r)}{1-c}d\l(x_0,x_1\r) \\
        &\leq\frac{d\l(x_0,x_1\r)}{1-c}c^n
    \end{aligned}
\end{equation}$$
for all $n,k\in\N$. Since $c^n\to0$ as $n\to\infty$, we see that $d\l(x_n,x_{n+k}\r)<\epsilon$ for sufficiently large $n\in\N$, so $\tpl{x_n}$ is Cauchy.<span style="float:right;">$\blacksquare$</span>
