<div class="topSpace"></div>

Date Created: 25/11/2022 10:27:10
Tags: #Type/Theorem #Topic/Real_Analysis

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Heine-Cantor).

Let $X$ and $Y$ be metric spaces. If $X$ is compact, then any continuous function $f:X\to Y$ is uniformly continuous.

```

<i>Proof.</i> Take $\epsilon>0$. Since $f$ is continuous, we see that $\fa p\in X,\ex\delta_p>0,\fa q\in X:d\l(p,q\r)<\delta_p\Rightarrow d\l(f\l(p\r)-f\l(q\r)\r)<\epsilon/2$. Observe that $\l\{B\l(p,\delta_p/2\r)\r\}_{p\in X}$ is an open cover of $X$, so compactness of $X$ furnishes $p_1,\ldots,p_n\in X$ such that $X\subseteq\bigcup_{i=1}^{n}B\l(p_i,\delta_{p_i}/2\r)$. Set $\delta\coloneqq\frac{1}{2}\min\l\{\delta_{p_1},\ldots,\delta_{p_n}\r\}>0$ and take $p,q\in X$ with $d\l(p,q\r)<\delta$. Then there exists $j\in\l\{1,\dots,n\r\}$ such that $p\in B\l(p_j,\delta_{p_j}/2\r)$, so $d\l(p-p_j\r)<\delta_{p_j}/2$. Observe then that $d\l(q-p_j\r)\leq d\l(p,q\r)+d\l(p-p_j\r)<\delta+\frac{\delta_{p_j}}{2}\leq\delta_{p_j}$, so continuity of $f$ gives us
$$\begin{equation*}
    d\l(f\l(p\r)-f\l(q\r)\r)\leq d\l(f\l(p\r)-f\l(p_j\r)\r)+d\l(f\l(q\r)-f\l(p_j\r)\r)<\frac{\epsilon}{2}+\frac{\epsilon}{2}=\epsilon.\qedin
\end{equation*}$$
