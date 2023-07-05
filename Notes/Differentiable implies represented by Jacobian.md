---
mathLink: Differentiable $\Rightarrow$ $\l[Df\l(\vec{a}\r)\r]=Jf\l(\vec{a}\r)$
---

<div class="topSpace"></div>

Date Created: 02/01/2023 15:25:20
Tags: #Type/Proposition #Topic/Analysis #Courses/MATH358

Proved by: [[Differentiable implies existence of directional derivatives]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Fix $m,n\in\N^+$, let $U\subseteq\R^n$ be open, and fix $\vec{a}\in U$. For a function $f:U\to\R^m$, if $f$ is differentiable at $\vec{a}$, then $\l[Df\l(\vec{a}\r)\r]=Jf\l(\vec{a}\r)$.

```

<i>Proof.</i> Let $\l\{\vec{e}_1,\dots,\vec{e}_n\r\}$ and $\l\{\widetilde{\vec{e}}_1,\dots,\widetilde{\vec{e}}_m\r\}$ be the standard bases for $\R^n$ and $\R^m$, respectively. For all $j\in\l\{1,\dots,n\r\}$, observe that
$$\begin{equation}
    \l[Df\l(\vec{a}\r)\r]\vec{e}_j=D_jf\l(\vec{a}\r)=\lim\limits_{t\to0}\frac{f\l(\vec{a}+t\vec{e}_j\r)-f\l(\vec{a}\r)}{t}=\sum_{i=1}^{m}\lim\limits_{t\to0}\frac{f_i\l(\vec{a}+t\vec{e}_j\r)-f_i\l(\vec{a}\r)}{t}\widetilde{\vec{e}}_i=\sum_{i=1}^{m}\l(D_jf_i\r)\l(\vec{a}\r)\widetilde{\vec{e}}_i.
\end{equation}$$
Thus the $j^\textrm{th}$ column of $\l[Df\l(\vec{a}\r)\r]$ is the vector $\sum_{i=1}^{m}\l(D_jf_i\r)\l(\vec{a}\r)\widetilde{\vec{e}}_i$, so the result follows.<span style="float:right;">$\blacksquare$</span>
