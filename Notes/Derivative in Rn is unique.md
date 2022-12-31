---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 30/12/2022 16:03:34
Tags: #Proposition #Topics/Analysis #Courses/MATH358

Proved by: [[Criteria for equality of linear maps via spanning set]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Fix $m,n\in\N^+$ and let $U\subseteq\R^n$ be open. For all $\v{a}\in U$, if there exists linear maps $L_1,L_2:\R^n\to\R^m$ such that_
$$\begin{equation}
    \lim\limits_{\v{h}\to\v{0}}\frac{\l\|f\l(\v{a}+\v{h}\r)-f\l(\v{a}\r)-L_1\l(\v{h}\r)\r\|_m}{\l\|\v{h}\r\|_n}=0\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \lim\limits_{\v{h}\to\v{0}}\frac{\l\|f\l(\v{a}+\v{h}\r)-f\l(\v{a}\r)-L_2\l(\v{h}\r)\r\|_m}{\l\|\v{h}\r\|_n}=0,
\end{equation}$$
_then $L_1=L_2$._

```

_Proof_. Let $A_1\coloneqq\l[L_1\r]$ and $A_2\coloneqq\l[L_2\r]$ w.r.t the standard bases. Subtracting, we see that
$$\begin{equation}
    \lim\limits_{\v{h}\to\v{0}}\frac{\l\|L_1\l(\v{h}\r)-L_2\l(\v{h}\r)\r\|_m}{\l\|\v{h}\r\|_n}=\lim\limits_{\v{h}\to\v{0}}\frac{\l\|\l(A_1-A_2\r)\v{h}\r\|_m}{\l\|\v{h}\r\|_n}=0.
\end{equation}$$
Fix any $\v{u}\in\R^n\comp\l\{0\r\}$ and set $\v{h}\coloneqq t\v{u}$ for some $t\in\R$. Then $\v{h}\to\v{0}$ iff $t\to0$, so
$$\begin{equation}
    \lim\limits_{t\to0}\frac{\l\|\l(A_1-A_2\r)t\v{u}\r\|_m}{\l\|t\v{u}\r\|_n}=\lim\limits_{t\to0}\frac{\l\|\l(A_1-A_2\r)\v{u}\r\|_m}{\|\v{u}\|_n}=0.
\end{equation}$$
But then $\lim\limits_{t\to0}\l\|\l(A_1-A_2\r)\v{u}\r\|_m=0$, so $\l\|\l(A_1-A_2\r)\v{u}\r\|_m=0$ and hence $\l(A_1-A_2\r)\v{u}=\v{0}$. This holds for all $\v{u}\in\R^n$, so $A_1=A_2$ and hence $L_1=L_2$.<span style="float:right;">$\blacksquare$</span>
