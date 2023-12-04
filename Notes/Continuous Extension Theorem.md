<div class="topSpace"></div>

Date Created: 25/11/2022 19:29:46
Tags: #Type/Theorem #Topic/Real_Analysis

Proved by: [[Uniform continuity preserve Cauchy sequences]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Continuous Extension Theorem).

Let $\Omega\subseteq X$ be a subset of a metric space $X$. If $f:\Omega\to\R$ is uniformly continuous, then it admits a unique continuous extension to $\bar{\Omega}$.

```

<i>Proof.</i> If $f$ has a continuous extension, then it is unique; for suppose $\bar{f}_1$ and $\bar{f}_2$ are both continuous extensions for $f$ to $\bar{\Omega}$, and let $x\in\bar{\Omega}$. Then there exists a sequence $\tpl{x_n}$ in $\Omega$ such that $x_n\to x$, so
$$\begin{equation}
    \bar{f}_1\!\l(x\r)=\lim\limits_{n\to\infty}\bar{f}_1\!\l(x_n\r)=\lim\limits_{n\to\infty}f\l(x_n\r)=\lim\limits_{n\to\infty}\bar{f}_2\!\l(x_n\r)=\bar{f}_2\!\l(x\r)
\end{equation}$$
and hence $\bar{f}_1=\bar{f}_2$. We now define a function $\bar{f}:\bar{\Omega}\to\R$ and then show that it is continuous on $\bar{\Omega}$. For all $x\in\Omega$, define $\bar{f}\l(x\r)\coloneqq f\l(x\r)$. Otherwise, if $x\in\bar{\Omega}\comp\Omega$, there exists a sequence $\tpl{x_n}$ in $\Omega$ such that $x_n\to x$; define $\bar{f}\l(x\r)\coloneqq\lim\limits_{n\to\infty}f\l(x_n\r)$.
* Indeed, the sequence $\tpl{f\l(x_n\r)}$ converges since $\tpl{x_n}$ is Cauchy, $f$ is uniformly continuous (hence $\tpl{f\l(x_n\r)}$ is also Cauchy), and $\R$ is metric-complete.
* Furthermore, it is well-defined since if there exists some other sequence $\tpl{x'_n}$ in $\Omega$ such that $x'_n\to x$, then $d\l(x_n,x'_n\r)\leq d\l(x_n,x\r)+d\l(x'_n,x\r)\to0+0=0$. Take $\epsilon>0$. Now, uniform continuity of $f$ furnishes some $\delta>0$ such that $d\l(f\l(x\r),f\l(x'\r)\r)<\epsilon$ for all $x,x'\in\Omega$ with $d\l(x,x'\r)<\delta$. But $\fa^\infty n\in\N:d\l(x_n,x'_n\r)<\delta$, so $d\l(f\l(x_n\r),f\l(x'_n\r)\r)<\epsilon$ for all eventually $n\in\N$. Thus $\lim\limits_{n\to\infty}f\l(x_n\r)=\lim\limits_{n\to\infty}f\l(x'_n\r)$, so we are done.

It remains to check that $\bar{f}$ is continuous on $\bar{\Omega}$. Indeed, we shall show that it is uniformly continuous on $\bar{\Omega}$, so take $\epsilon>0$. Again, uniform continuity of $f$ furnishes some $\delta>0$ such that $d\l(f\l(x\r),f\l(x'\r)\r)<\epsilon$ for all $x,x'\in\Omega$ with $d\l(x,x'\r)<\delta$. We show that the same is true for $\bar{f}$. Indeed, take $x,x'\in\bar{\Omega}$ with $d\l(x,x'\r)<\delta/3$. Then there exist sequences $\tpl{x_n}$ and $\tpl{x'_n}$ in $\Omega$ such that $x_n\to x$ and $x'_n\to x'$. Then, for all eventually $n\in\N$, we have that
$$\begin{equation}
    d\l(x_n,x'_n\r)\leq d\l(x_n,x\r)+d\l(x'_n,x'\r)+d\l(x,x'\r)<\frac{\delta}{3}+\frac{\delta}{3}+\frac{\delta}{3}=\delta
\end{equation}$$
and hence $d\l(f\l(x_n\r),f\l(x'_n\r)\r)<\epsilon$. Observe then that
$$\begin{equation}
    d\l(\bar{f}\l(x\r),\bar{f}\l(x'\r)\r)=d\l(\lim\limits_{n\to\infty}f\l(x_n\r),\lim\limits_{n\to\infty}f\l(x'_n\r)\r)=\lim\limits_{n\to\infty}d\l(f\l(x_n\r),f\l(x'_n\r)\r)\leq\lim\limits_{n\to\infty}\epsilon=\epsilon,
\end{equation}$$
so $\bar{f}$ is uniformly continuous on $\Omega$.<span style="float:right;">$\blacksquare$</span>
