<div class="topSpace"></div>

Date Created: 18/11/2022 10:49:00
Tags: #Type/Proposition #Topic/Real_Analysis

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Sequential Criterion for Functional Limits).

Let $\tpl{X,d_X}$ and $\tpl{Y,d_Y}$ be metric spaces, fix a cluster point $p\in\Omega\subseteq X$, and let $L\in Y$. For a function $f:\Omega\to Y$,
$$\begin{equation}
    \lim\limits_{x \to p}f\l(x\r)=L\ \ \ \ \ \ \ \ \Leftrightarrow\ \ \ \ \ \ \ \ \fa\tpl{x_n}\subseteq\Omega\comp\l\{p\r\}:x_n\to p\Rightarrow f\l(x_n\r)\to L.
\end{equation}$$

```

<i>Proof.</i>
* ($\Rightarrow$): Suppose $\lim\limits_{x\to p}f\l(x\r)=L$ and take a sequence $\tpl{x_n}$ in $\Omega\comp\l\{p\r\}$ such that $x_n\to p$. Let $\epsilon>0$, so
$$\begin{equation}
    \ex\delta>0:\im_f\!\l(B_\delta\!\l(p\r)\cap\Omega\comp\l\{p\r\}\r)\subseteq B_\epsilon\!\l(L\r).
\end{equation}$$
But $x_n\to p$, so $\fa^\infty n\in\N:x_n\in B_\delta\!\l(p\r)$, and since $\tpl{x_n}$ is in $\Omega\comp\l\{p\r\}$, we see that $x_n\in B_\delta\!\l(p\r)\cap\Omega\comp\l\{p\r\}$ for all eventually $n\in\N$. Thus $f\l(x_n\r)\in B_\epsilon\!\l(L\r)$ eventually, so $f\l(x_n\r)\to L$.

* ($\Leftarrow$): We prove the contrapositive, so suppose that $\lim\limits_{x\to p}f\l(x\r)\neq L$. Thus
$$\begin{equation}
    \ex\epsilon>0,\fa\delta>0,\ex x_\delta\!\in B_\delta\!\l(p\r)\cap\Omega\comp\l\{p\r\}:f\l(x_\delta\r)\not\in B_\epsilon\!\l(L\r),
\end{equation}$$
so, taking $\delta\coloneqq1/n$ for all $n\in\N^+$, we obtain a sequence $\tpl{x_n}$ in $\Omega\comp\l\{p\r\}$ such that $d\l(x_n,p\r)<1/n$ despite $f\l(x_n\r)\not\in B_\epsilon\!\l(L\r)$. Thus $x_n\to p$ despite $f\l(x_n\r)\not\to L$.<span style="float:right;">$\blacksquare$</span>
