<div class="topSpace"></div>

Date Created: 11/05/2023 14:46:49
References: #Ref/Alu09
Tags: #Type/Proposition #Topic/Group_Theory

Proved by: [[Orbit-Stabilizer Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Cauchy-Frobenius).

Let $G$ be a finite group acting on a finite set $X$. If $N$ denotes the number of orbits of the action on $X$ and $I\l(g\r)$ is the number of elements in $X$ fixed by $g$, then
$$\begin{equation}
    N=\frac{1}{\l|G\r|}\sum_{g\in G}I\l(g\r).
\end{equation}$$

```

<b>Remark.</b> Thus the number of orbits is the ‘average’ over $g\in G$ of the number of points $x\in X$ fixed by $g$.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Consider the function $f:G\times X\to\l\{0,1\r\}$ by $f\l(g,x\r)\coloneqq1$ if $gx=x$ and $0$ otherwise. Clearly $I\l(g\r)=\sum_{x\in X}f\l(g,x\r)$ for all $g\in G$, and $\l|G_x\r|=\sum_{g\in G}f\l(g,x\r)$ for all $x\in X$. Letting $x_1,\dots,x_N$ be representatives of distinct orbits of this action, we obtain the desired result by the computation
$$\begin{equation}
    \sum_{g\in G}I\l(g\r)=\sum_{g\in G}\sum_{x\in X}f\l(g,x\r)=\sum_{x\in X}\sum_{g\in G}f\l(g,x\r)=\sum_{x\in X}\l|G_x\r|=\sum_{x\in X}\l|G\r|/\l|Gx\r|=\sum_{i=1}^{N}\sum_{x\in Gx_i}\l|G\r|/\l|Gx\r|=\sum_{i=1}^{N}\sum_{x\in Gx_i}\l|G\r|/\l|Gx_i\r|=\sum_{i=1}^{r}\l|G\r|=N\l|G\r|.\qedin
\end{equation}$$
