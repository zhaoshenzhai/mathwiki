---
mathLink: Differentiable $\Rightarrow$ $D_\v{u}f\l(\v{a}\r)=\l[Df\l(\v{a}\r)\r]\v{u}$
---

<div class="topSpace"></div>

Date Created: 30/12/2022 17:42:40
Tags: #Type/Proposition #Topic/Analysis #Courses/MATH358

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Fix $m,n\in\N^+$, let $U\subseteq\R^n$ be open, and fix $\v{a},\v{u}\in\R^n$ with $\v{u}\neq\v{0}$. For a function $f:U\to\R^m$ differentiable at $\v{a}$, its directional derivative $D_\v{u}f\l(\v{a}\r)$ exists and
$$\begin{equation}
    D_\v{u}f\l(\v{a}\r)=\l[Df\l(\v{a}\r)\r]\v{u}.
\end{equation}$$

```

<i>Proof.</i> Let $A\coloneqq\l[Df\l(\v{a}\r)\r]$ w.r.t the standard bases. Since $f$ is differentiable at $\v{a}$, we see that
$$\begin{equation}
    \lim\limits_{\v{h}\to\v{0}}\frac{\l\|f\l(\v{a}+\v{h}\r)-f\l(\v{a}\r)-A\v{h}\r\|_m}{\l\|\v{h}\r\|_n}=0.
\end{equation}$$
Set $\v{h}\coloneqq t\v{u}$ for some $t\in\R$. Then $\v{h}\to\v{0}$ iff $t\to0$, so
$$\begin{equation}
    \lim\limits_{t\to0}\frac{\l\|f\l(\v{a}+t\v{u}\r)-f\l(\v{a}\r)-At\v{u}\r\|_m}{\l|t\r|\|\v{u}\|_n}=0\ \ \ \ \ \ \ \ \textrm{and thus}\ \ \ \ \ \ \ \ \lim\limits_{t\to0}\l\|\frac{f\l(\v{a}+t\v{u}\r)-f\l(\v{a}\r)-At\v{u}}{t}\r\|_m=0.
\end{equation}$$
It follows then that
$$\begin{equation}
    D_\v{u}f\l(\v{a}\r)=\lim\limits_{t\to0}\frac{f\l(\v{a}+t\v{u}\r)-f\l(\v{a}\r)}{t}=A\v{u}=\l[Df\l(\v{a}\r)\r]\v{u}.\qedin
\end{equation}$$
