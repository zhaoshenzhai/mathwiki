<div class="topSpace"></div>

Date Created: 21/02/2023 10:19:11
Tags: #Type/Theorem #Topic/Analysis

Proved by: [[Heine-Borel Theorem]], [[Extreme Value Theorem]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem.

Let $V$ be a finite-dimensional normed vector space. Then any two norms $\|\slot\|_1$ and $\|\slot\|_2$ on $V$ are equivalent.

```

<i>Proof.</i> Since $V$ is finite-dimensional, it admits a basis $\l\{e_1,\dots,e_n\r\}$ for some $n\in\N^+$. To show that all norms on $V$ are equivalent, it suffices to take any norm $\|\slot\|$ on $V$ and show that it is equivalent to the sup norm defined by
$$\begin{equation}
    \|v\|_\infty\coloneqq\underset{1\leq i\leq n}{\max}\l|\alpha_i\r|
\end{equation}$$
for all $v\in V$ where $\alpha_i\in\C$ are the unique scalars such that $v=\sum_{i=1}^{n}\alpha_ie_i$. Indeed, for all $v\in V$, we have that
$$\begin{equation}
    \|v\|=\l\|\sum_{i=1}^{n}\alpha_ie_i\r\|\leq\sum_{i=1}^{n}\l|\alpha_i\r|\|e_i\|\leq\l(N\underset{1\leq i\leq n}{\max}\|e_i\|\r)\underset{1\leq i\leq n}{\max}\l|\alpha_i\r|=\underbrace{\l(N\underset{1\leq i\leq n}{\max}\|e_i\|\r)}_{c_1\coloneqq}\|v\|_\infty.
\end{equation}$$
Conversely, we need to find some $c_2>0$ such that $\|v\|_\infty\leq c_2\|v\|$ for all $v\in V$. First note that $\|v-w\|\geq\l|\|v\|-\|w\|\r|$ for all $v,w\in V$, which shows that the function $f:V\to\R:v\mapsto\|v\|$ is Lipschitz w.r.t. the $\|\slot\|_\infty$ norm; indeed, for all $v,w\in V$, we have that
$$\begin{equation}
    \l|f\l(v\r)-f\l(w\r)\r|=\l|\|v\|-\|w\|\r|\leq\|v-w\|\leq c_1\|v-w\|_\infty.
\end{equation}$$
Letting $\vec{v}\coloneqq\tpl{\alpha_1,\dots,\alpha_n}$ be the coordinate representation of $v$, consider the unit sphere $S\coloneqq\l\{\vec{v}\in\C^n\st\|v\|_\infty=1\r\}$. It is clearly closed and bounded w.r.t $\|\slot\|_\infty$, and since the norms $\|\slot\|_\infty$ and $\|\slot\|_2$ are equivalent, Heine-Borel shows that $S$ is compact in $\|\slot\|_\infty$. By the Extreme Value Theorem, $\l.f\r|_S$ attains its minimum at some $\vec{v}_0\in S$. Pulling $\vec{v}_0$ back to $v_0\in V$, let
$$\begin{equation}
    c_2\coloneqq\frac{1}{\|v_0\|}>0.
\end{equation}$$
Finally, take $v\in V\comp\l\{0\r\}$; if $v=0$, then $\|v\|_\infty\leq c_2\|v\|$ trivially. Setting $w\coloneqq v/\|v\|_\infty$, we see that $\|w\|_\infty=1$ and hence $\vec{w}\in S$. But then $\|w\|\geq\|v_0\|$, so
$$\begin{equation}
    \|v\|_\infty=\|v\|/\|w\|\leq\|v\|/\|v_0\|=c_2\|v\|.\qedin
\end{equation}$$
