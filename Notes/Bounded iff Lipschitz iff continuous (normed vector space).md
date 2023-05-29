---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 27/02/2023 21:06:03
Tags: #Type/Theorem #Topic/Analysis

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem.

Let $V$ and $W$ be normed vector spaces and consider a linear map $T:V\to W$. Then the following are equivalent.
1. $T$ is bounded.
2. $T$ is Lipschitz.
3. $T$ is continuous at some $v\in V$.
4. $T$ is continuous at $0$.

```

<i>Proof.</i> It is clear that if $T$ is bounded, then it is Lipschitz, for $\|T\l(w\r)-T\l(v\r)\|=\|T\l(w-v\r)\|\leq C\|w-v\|$ for some $C>0$. Also, the fact $T$ is Lipschitz implies that it is continuous at some $v\in V$ is obvious.
* ($3\Rightarrow4$): Since $T$ is continuous at some $v\in V$, there exists some $\delta_1>0$ such that $\|T\l(w\r)-T\l(v\r)\|\leq1$ for all $w\in\bar{B}\l(v,\delta_1\r)$. Take $\epsilon>0$, set $\delta\coloneqq\delta_1\epsilon$, and take $w\in\bar{B}\l(0,\delta\r)$. If $w=0$, the fact that $\|T\l(w\r)-T\l(0\r)\|<\epsilon$ is clear. Otherwise, consider $u\coloneqq v+\delta_1w/\|w\|$. Then $\|u-v\|=\|\delta_1w/\|w\|\|=\delta_1$, so $u\in\bar{B}\l(v,\delta_1\r)$ and hence
    $$\begin{equation}
        \|T\l(u\r)-T\l(v\r)\|=\|T\l(u-v\r)\|=\l\|T\l(\frac{\delta_1w}{\|w\|}\r)\r\|\leq1.
    \end{equation}$$
    The result follows since
    $$\begin{equation}
        \|T\l(w\r)-T\l(0\r)\|=\|T\l(w\r)\|=\frac{\|w\|}{\delta_1}\l\|T\l(\frac{\delta_1w}{\|w\|}\r)\r\|\leq\frac{\|w\|}{\delta_1}\leq\frac{\delta}{\delta_1}=\frac{\delta_1\epsilon}{\delta_1}=\epsilon.
    \end{equation}$$

* ($4\Rightarrow1$): Since $T$ is continuous at $0$, there exists some $\delta>0$ such that $\|T\l(v\r)\|\leq1$ for all $\|v\|\leq\delta$. Take $v\in V$. If $v=0$, then $\|T\l(v\r)\|=0\leq\|v\|$. Otherwise, let $u\coloneqq \delta v/\|v\|$ and observe that $\|u-0\|=\|u\|=\delta$. Then $\|T\l(u\r)\|\leq1$, so
    $$\begin{equation}
        \|T\l(v\r)\|=\frac{\|v\|}{\delta}\l\|T\l(\frac{\delta v}{\|v\|}\r)\r\|\leq\frac{1}{\delta}\|v\|.
    \end{equation}$$
    Thus $T$ is bounded with $C\coloneqq1/\delta$.<span style="float:right;">$\blacksquare$</span>
