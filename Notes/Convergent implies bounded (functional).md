---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 19/11/2022 19:45:40
Tags: #Type/Proposition #Topic/Real_Analysis

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{X,d_X}$ and $\tpl{Y,d_Y}$ be metric spaces, fix a cluster point $p\in\Omega\subseteq X$, and consider a function $f:\Omega\to Y$. If $\lim\limits_{x\to p}f\l(x\r)$ exists, then $f$ is bounded on a neighborhood of $p$.

```

<b>Remark.</b> Thus if a function is not bounded on a neighborhood of $p$, then $\lim\limits_{x\to p}f\l(x\r)$ does not exist.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Let $L\coloneqq\lim\limits_{x\to p}f\l(x\r)$, so there exists $\delta>0$ such that $\im_f\!\l(B_\delta\!\l(p\r)\cap\Omega\comp\l\{p\r\}\r)\subseteq B_1\!\l(L\r)$. Also, if $p\in\Omega$, then $f\l(p\r)\in B_{f\l(p\r)-L}\!\l(L\r)$, so take $r\coloneqq\max\l\{1,f\l(p\r)-L\r\}$. It follows then that
$$\begin{equation}
    \im_f\!\l(B_\delta\!\l(p\r)\cap\Omega\r)\subseteq B_r\!\l(L\r),
\end{equation}$$
so $f$ is bounded on $B_\delta\!\l(p\r)$.<span style="float:right;">$\blacksquare$</span>
