---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 30/12/2022 16:03:34
Tags: #Type/Proposition #Topic/Analysis

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $X$ and $Y$ be normed vector spaces and let $U\subseteq X$ be open. Fix $p\in U$. For a function $f:U\to Y$, if there exist bounded linear maps $T_1,T_2:X\to Y$ such that
$$\begin{equation}
    \lim\limits_{h\to0}\frac{\l\|f\l(p+h\r)-f\l(p\r)-T_1h\r\|}{\|h\|}=0\ \ \ \ \ \ \ \ \textrm{\it{and}}\ \ \ \ \ \ \ \ \lim\limits_{h\to0}\frac{\l\|f\l(p+h\r)-f\l(p\r)-T_2h\r\|}{\|h\|}=0,
\end{equation}$$
then $T_1=T_2$.

```

<i>Proof.</i> Take $\epsilon>0$, so there exist $\delta_1,\delta_2>0$ such that
$$\begin{equation*}
    \frac{\l\|F\l(p+h\r)-F\l(p\r)-T_1h\r\|}{\l\|h\r\|}<\frac{\epsilon}{2}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \frac{\l\|F\l(p+h\r)-F\l(p\r)-T_2h\r\|}{\l\|h\r\|}<\frac{\epsilon}{2}
\end{equation*}$$
for all $h\in B^*\!\l(0,\delta_1\r)$ and $h\in B^*\!\l(0,\delta_2\r)$, respectively. Taking $\delta\coloneqq\min\l\{\delta_1,\delta_2\r\}$ and using the triangle inequality, we have that
$$\begin{equation*}
    \frac{\l\|\l(T_1-T_2\r)\l(h\r)\r\|}{\l\|h\r\|}=\frac{\l\|T_1h-T_2h\r\|}{\l\|h\r\|}\leq\frac{\l\|F\l(p+h\r)-F\l(p\r)-T_1h\r\|}{\l\|h\r\|}+\frac{\l\|F\l(p+h\r)-F\l(p\r)-T_2h\r\|}{\l\|h\r\|}<\frac{\epsilon}{2}+\frac{\epsilon}{2}=\epsilon
\end{equation*}$$
for all $h\in B^*\!\l(0,\delta\r)$. Thus $\l\|\l(T_1-T_2\r)\l(h\r)\r\|<\epsilon\l\|h\r\|$ for all $h\in B^*\!\l(0,\delta\r)$. We now show that this holds for _all_ non-zero $h\in X$, for since $T_1-T_2$ is also bounded, we can define its operator norm and see that $\l\|T_1-T_2\r\|_\textrm{op}<\epsilon$ for all $\epsilon>0$ by taking the supremum over all $h\neq0$. Then $\l\|T_1-T_2\r\|_\textrm{op}=0$, so $T_1=T_2$.

Take $0\neq h\in X$ and set $h_0\coloneqq\frac{\delta}{2\l\|h\r\|}h$. Then $\l\|h_0\r\|=\delta/2<\delta$ and thus $\l\|\l(T_1-T_2\r)\l(h_0\r)\r\|<\epsilon\l\|h_0\r\|$ by our result above. By linearity of $T_1$ and $T_2$, and hence of $T_1-T_2$, we see that
$$\begin{equation*}
    \l(T_1-T_2\r)\l(h\r)=\l(T_1-T_2\r)\l(\frac{2\l\|h\r\|}{\delta}h_0\r)=\frac{2\l\|h\r\|}{\delta}\l(T_1-T_2\r)\l(h_0\r),
\end{equation*}$$
so
$$\begin{equation*}
    \l\|\l(T_1-T_2\r)\l(h\r)\r\|=\frac{2\l\|h\r\|}{\delta}\l\|\l(T_1-T_2\r)\l(h_0\r)\r\|<\l(\frac{2}{\delta}\l\|h_0\r\|\r)\epsilon\l\|h\r\|=\epsilon\l\|h\r\|,
\end{equation*}$$
as desired.<span style="float:right;">$\blacksquare$</span>
