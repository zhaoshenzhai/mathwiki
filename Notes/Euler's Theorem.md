---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 13/10/2022 12:18:15
Tags: #Type/Theorem #Topic/Group_Theory

Proved by: [[Lagrange's Theorem]], [[Basic properties of order]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Euler’s Theorem).

Let $n\in\N^+$ and let $\l[a\r]\in\Z_n^\times$. Then $a^{\phi\l(n\r)}\mod{n}1$.

```

<i>Proof.</i> By Lagrange’s Theorem, we see that $\ord{\l[a\r]}$ divides $\ord{\l(\Z_n\r)^\times}=\phi\l(n\r)$. Hence $\l[a\r]^{\phi\l(n\r)}=\l[1\r]$, and since
$$\begin{equation}
    \l[a^{\phi\l(n\r)}\r]=\l[a\r]^{\phi\l(n\r)}=\l[1\r],
\end{equation}$$
the result follows.<span style="float:right;">$\blacksquare$</span>
