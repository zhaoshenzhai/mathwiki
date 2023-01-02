---
mathLink: Differentiable $\Rightarrow$ $\l[Df\l(\v{a}\r)\r]=Jf\l(\v{a}\r)$
---

<div class="topSpace"></div>

Date Created: 02/01/2023 15:25:20
Tags: #Proposition #Topics/Analysis #Courses/MATH358

Proved by: [[Differentiable implies existence of directional derivatives]], [[Right slash left multiplication by basis vector picks out column slash row]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Fix $m,n\in\N^+$, let $U\subseteq\R^n$ be open, and fix $\v{a}\in U$. For a function $f:U\to\R^m$, if $f$ is differentiable at $\v{a}$, then_
$$\begin{equation}
    \l[Df\l(\v{a}\r)\r]=Jf\l(\v{a}\r).
\end{equation}$$

```

_Proof_. Let $\l\{\v{e}_1,\dots,\v{e}_n\r\}$ and $\l\{\tilde{\v{e}}_1,\dots,\tilde{\v{e}}_m\r\}$ be the standard bases for $\R^n$ and $\R^m$, respectively. For all $j\in\l\{1,\dots,n\r\}$, observe that
$$\begin{equation}
    \l[Df\l(\v{a}\r)\r]\v{e}_j=D_jf\l(\v{a}\r)=\lim\limits_{t\to0}\frac{f\l(\v{a}+t\v{e}_j\r)-f\l(\v{a}\r)}{t}=\sum_{i=1}^{m}\lim\limits_{t\to0}\frac{f_i\l(\v{a}+t\v{e}_j\r)-f_i\l(\v{a}\r)}{t}\tilde{\v{e}}_i=\sum_{i=1}^{m}\l(D_jf_i\r)\l(\v{a}\r)\tilde{\v{e}}_i.
\end{equation}$$
Thus the $j^\textrm{th}$ column of $\l[Df\l(\v{a}\r)\r]$ is the vector $\sum_{i=1}^{m}\l(D_jf_i\r)\l(\v{a}\r)\tilde{\v{e}}_i$, so the result follows.<span style="float:right;">$\blacksquare$</span>
