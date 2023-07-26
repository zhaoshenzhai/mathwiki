---
mathLink: Differentiable $\Rightarrow$ $D_\vec{u}f\l(\vec{a}\r)=\l[Df\l(\vec{a}\r)\r]\vec{u}$
---

<div class="topSpace"></div>

Date Created: 30/12/2022 17:42:40
Tags: #Type/Proposition #Topic/Real_Analysis #Courses/MATH358

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Fix $m,n\in\N^+$, let $U\subseteq\R^n$ be open, and fix $\vec{a},\vec{u}\in\R^n$ with $\vec{u}\neq\vec{0}$. For a function $f:U\to\R^m$ differentiable at $\vec{a}$, its directional derivative $D_\vec{u}f\l(\vec{a}\r)$ exists and
$$\begin{equation}
    D_\vec{u}f\l(\vec{a}\r)=\l[Df\l(\vec{a}\r)\r]\vec{u}.
\end{equation}$$

```

<i>Proof.</i> Let $A\coloneqq\l[Df\l(\vec{a}\r)\r]$ w.r.t the standard bases. Since $f$ is differentiable at $\vec{a}$, we see that
$$\begin{equation}
    \lim\limits_{\vec{h}\to\vec{0}}\frac{\l\|f\l(\vec{a}+\vec{h}\r)-f\l(\vec{a}\r)-A\vec{h}\r\|_m}{\l\|\vec{h}\r\|_n}=0.
\end{equation}$$
Set $\vec{h}\coloneqq t\vec{u}$ for some $t\in\R$. Then $\vec{h}\to\vec{0}$ iff $t\to0$, so
$$\begin{equation}
    \lim\limits_{t\to0}\frac{\l\|f\l(\vec{a}+t\vec{u}\r)-f\l(\vec{a}\r)-At\vec{u}\r\|_m}{\l|t\r|\|\vec{u}\|_n}=0\ \ \ \ \ \ \ \ \textrm{and thus}\ \ \ \ \ \ \ \ \lim\limits_{t\to0}\l\|\frac{f\l(\vec{a}+t\vec{u}\r)-f\l(\vec{a}\r)-At\vec{u}}{t}\r\|_m=0.
\end{equation}$$
It follows then that
$$\begin{equation}
    D_\vec{u}f\l(\vec{a}\r)=\lim\limits_{t\to0}\frac{f\l(\vec{a}+t\vec{u}\r)-f\l(\vec{a}\r)}{t}=A\vec{u}=\l[Df\l(\vec{a}\r)\r]\vec{u}.\qedin
\end{equation}$$
