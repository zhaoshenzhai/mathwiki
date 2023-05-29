---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 24/11/2022 14:20:17
Tags: #Type/Theorem #Topic/Analysis

Proved by: [[Continuous iff continuous at each point]], [[Sequential Criterion for Functional Limits]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Sequential$\textbf{/}$functional limit characterizations of continuity).

Let $\tpl{X,d_X}$ and $\tpl{Y,d_Y}$ be metric spaces and fix $\Omega\subseteq X$. For a function $f:\Omega\to Y$, the following are equivalent:
1. $f$ is continuous.
2. $\lim\limits_{x\to p}f\l(x\r)=f\l(p\r)$ for all cluster points $p$ of $\Omega$.
3. For all $p\in\Omega$ and all sequences $\tpl{x_n}$ in $\Omega$ such that $x_n\to p$, we have $f\l(x_n\r)\to f\l(p\r)$.

```

<i>Proof.</i> We shall prove that $1\Rightarrow2\Rightarrow3\Rightarrow1$.
* ($1\Rightarrow2$): Let $p$ be a cluster point of $\Omega$. Then, since $f$ is continuous, it is continuous at $p$ and hence
$$\begin{equation}
    \fa B_\epsilon\!\l(f\l(p\r)\r),\ex B_\delta\!\l(p\r):\im_f\l(B_\delta\!\l(p\r)\cap\Omega\r)\subseteq B_\epsilon\!\l(f\l(p\r)\r).
\end{equation}$$
Thus $\im_f\l(B_\delta\!\l(p\r)\cap\Omega\comp\l\{p\r\}\r)\subseteq B_\epsilon\!\l(f\l(p\r)\r)$ too, so $\lim\limits_{x\to p}f\l(x\r)=f\l(p\r)$.

* ($2\Rightarrow3$): Take a cluster point $p\in\Omega$ and consider a sequence $\tpl{x_n}$ in $\Omega$ such that $x_n\to p$. If $x_n=p$ for all eventually $n\in\N$, then $f\l(x_n\r)=f\l(p\r)$ for all eventually $n\in\N$ and hence $f\l(x_n\r)\to f\l(p\r)$. Otherwise, $\ex^\infty n\in\N:x_n\neq p$, so consider the subsequence $\tpl{\widetilde{x}_n}$ of $\tpl{x_n}$ such that $\widetilde{x}_n\neq p$ for all $n\in\N$ and $x_n=p$ for all $x_n\not\in\im\tpl{\widetilde{x}_n}$. Then $\tpl{\widetilde{x}_n}$ is a sequence in $\Omega\comp\l\{p\r\}$, so, since $\lim\limits_{x\to p}f\l(x\r)=f\l(p\r)$, we see that $f\l(\widetilde{x}_n\r)\to f\l(p\r)$. But then $f\l(x_n\r)\to f\l(p\r)$ since every other term is identically $f\l(p\r)$, so we are done.
* ($3\Rightarrow1$): Take $p\in\Omega$. If $p$ is a cluster point of $\Omega$, there exists a sequence $\tpl{x_n}$ in $\Omega\comp\l\{p\r\}$ such that $\tpl{x_n}\to p$. Then $f\l(x_n\r)\to f\l(p\r)$, so $\lim\limits_{x\to p}f\l(x\r)=f\l(p\r)$ and hence
$$\begin{equation}
    \fa B_\epsilon\!\l(f\l(p\r)\r),\ex B_\delta\!\l(p\r):\im_f\l(B_\delta\!\l(p\r)\cap\Omega\comp\l\{p\r\}\r)\subseteq B_\epsilon\!\l(f\l(p\r)\r).
\end{equation}$$
But we also have that $f\l(p\r)\in B_\epsilon\!\l(f\l(p\r)\r)$, so $\im_f\l(B_\delta\!\l(p\r)\cap\Omega\r)\subseteq B_\epsilon\!\l(f\l(p\r)\r)$, which shows that $f$ is continuous at $p$. Now, if $p$ is not a cluster point of $\Omega$, then $p\not\in\bar{\Omega\comp\l\{p\r\}}$ and hence there exists a neighborhood $B_\delta\!\l(p\r)$ such that $B_\delta\!\l(p\r)\cap\l(\Omega\comp\l\{p\r\}\r)=\em$. Equivalently, we have that $B_\delta\!\l(p\r)\cap\Omega=\l\{p\r\}$, so
$$\begin{equation}
    \im_f\!\l(B_\delta\!\l(p\r)\cap\Omega\r)=\l\{f\l(p\r)\r\}\subseteq B_\epsilon\!\l(f\l(p\r)\r).\qedin
\end{equation}$$
