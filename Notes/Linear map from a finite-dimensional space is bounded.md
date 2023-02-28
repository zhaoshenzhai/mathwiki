---
mathLink: $T:V\to W$ with $\dim V<\infty$ $\Rightarrow$ $T$ bounded
---

<div class="topSpace"></div>

Date Created: 27/02/2023 21:42:09
Tags: #Proposition #Topics/Analysis

Proved by: [[Norms on finite-dimensional spaces are equivalent]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $V$ and $W$ be normed vector spaces. If $V$ is finite-dimensional, then any linear map $T:V\to W$ is bounded._

```

_Proof_. Take $v\in V$ and let $\l\{e_1,\dots,e_n\r\}$ be a basis for $V$, so $v=\sum_{i=1}^{n}\alpha_ie_i$ for some $\alpha_i\in\C$. Then
$$\begin{equation}
    \|T\l(v\r)\|=\l\|T\l(\sum_{i=1}^{n}\alpha_ie_i\r)\r\|=\l\|\sum_{i=1}^{n}\alpha_iT\l(e_i\r)\r\|\leq\sum_{i=1}^{n}\l|\alpha_i\r|\|T\l(e_i\r)\|\leq\l(\underset{1\leq i\leq n}{\max}\l|\alpha_i\r|\r)\sum_{i=1}^{n}\|T\l(e_i\r)\|.
\end{equation}$$
Note that the function $\|\slot\|':V\to\R:v\mapsto\underset{1\leq i\leq n}{\max}\l|\alpha_i\r|$ is a norm on $V$, so it is equivalent to $\|\slot\|$ and hence $\underset{1\leq i\leq n}{\max}\l|\alpha_i\r|\leq C_1\|v\|$ for some $C_1>0$. But then
$$\begin{equation}
    \|T\l(v\r)\|\leq\underbrace{\l(C_1\sum_{i=1}^{n}\|T\l(e_i\r)\|\r)}_{\mathclap{C\coloneqq}}\|v\|,
\end{equation}$$
so $T$ is bounded.<span style="float:right;">$\blacksquare$</span>
