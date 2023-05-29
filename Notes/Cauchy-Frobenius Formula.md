<div class="topSpace"></div>

Date Created: 11/05/2023 14:46:49
Tags: #Type/Theorem #In_Progress

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Cauchy-Frobenius).

Let $G$ be a finite group acting on a finite set $X$. If $N$ denotes the number of orbits of the action on $S$ and $I\l(g\r)$ is the number of elements in $X$ fixed by $g$, then
$$\begin{equation}
    N=\frac{1}{\l|G\r|}\sum_{g\in G}I\l(g\r).
\end{equation}$$

```

<b>Remark.</b> Thus the number of orbits is the $\textrm{`}$average$\textrm{'}$ over $g\in G$ of the number of points $x\in X$ fixed by $g$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Consider the function $f:G\times X\to\l\{0,1\r\}$ by $f\l(g,x\r)\coloneqq1$ if $gx=x$ and $0$ otherwise. Clearly $I\l(g\r)=\sum_{x\in X}f\l(g,x\r)$ for all $g\in G$, and $\l|G_x\r|=\sum_{g\in G}f\l(g,x\r)$ for all $x\in X$. Letting $x_1,\dots,x_N$ be representatives of distinct orbits of the action, we see that
$$\begin{equation}
    \begin{aligned}
        \sum_{g\in G}I\l(g\r)&=\sum_{g\in G}\sum_{x\in X}f\l(g,x\r)=\sum_{x\in X}\sum_{g\in G}f\l(g,x\r)=\sum_{x\in X}\l|G_x\r|=\sum_{x\in X}\l|G\r|/\l|Gx\r|=
    \end{aligned}
\end{equation}$$
