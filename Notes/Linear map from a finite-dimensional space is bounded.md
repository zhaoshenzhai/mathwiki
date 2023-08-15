---
mathLink: $T:V\to W$ with $\dim V<\infty$ $\Rightarrow$ $T$ bounded
---

<div class="topSpace"></div>

Date Created: 27/02/2023 21:42:09
Tags: #Type/Proposition #Topic/Real_Analysis

Proved by: [[Norms on finite-dimensional spaces are equivalent]]
References: [[Bounded iff Lipschitz iff continuous]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $V$ and $W$ be normed vector spaces. If $V$ is finite-dimensional, then any linear map $T:V\to W$ is bounded.

```

<b>Remark.</b> Since boundedness is equivalent to continuity, we see that any linear map $T:V\to W$ with $V$ finite-dimensional is continuous.<span style="float:right;">$\blacklozenge$</span>

---

<i>Proof.</i> Take $v\in V$ and let $\l\{e_1,\dots,e_n\r\}$ be a basis for $V$, so $v=\sum_{i=1}^{n}\alpha_ie_i$ for some $\alpha_i\in\C$. Then
$$\begin{equation}
    \|Tv\|=\l\|T\l(\sum_{i=1}^{n}\alpha_ie_i\r)\r\|=\l\|\sum_{i=1}^{n}\alpha_iTe_i\r\|\leq\sum_{i=1}^{n}\l|\alpha_i\r|\|Te_i\|\leq\l(\underset{1\leq i\leq n}{\max}\l|\alpha_i\r|\r)\sum_{i=1}^{n}\|Te_i\|.
\end{equation}$$
Note that the function $v\mapsto\underset{1\leq i\leq n}{\max}\l|\alpha_i\r|$ is a norm on $V$, so it is equivalent to $\|\slot\|$ and hence $\underset{1\leq i\leq n}{\max}\l|\alpha_i\r|\leq C_1\|v\|$ for some $C_1>0$. But then
$$\begin{equation}
    \|Tv\|\leq\underbrace{\l(C_1\sum_{i=1}^{n}\|Te_i\|\r)}_{\mathclap{C\coloneqq}}\|v\|,
\end{equation}$$
so $T$ is bounded.<span style="float:right;">$\blacksquare$</span>
