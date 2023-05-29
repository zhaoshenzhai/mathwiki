<div class="topSpace"></div>

Date Created: 14/11/2022 21:13:19
Tags: #Type/Proposition #Topic/Ring_Theory

Proved by: [[Basic properties of groups]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $R$ be a ring. Then, for all $r,s\in R$, the following properties hold.
* $r0=0=0r$.
* $r\l(-s\r)=-\l(rs\r)=\l(-r\r)s$.
* $\l(-r\r)\l(-s\r)=rs$.

```

<i>Proof.</i> Take $r,s\in R$ and observe that
$$\begin{equation}
    \begin{gathered}
        r0=r\l(0+0\r)=r0+r0\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 0r=\l(0+0\r)r=0r+0r \\
        0=r0=r\l(s+\l(-s\r)\r)=rs+r\l(-s\r)\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 0=0s=\l(r+\l(-r\r)\r)s=rs+\l(-r\r)s \\
        \l(-r\r)\l(-s\r)=-\l(r\l(-s\r)\r)=-\l(-\l(rs\r)\r)=rs,
    \end{gathered}
\end{equation}$$
from which the first result follows by cancellation.<span style="float:right;">$\blacksquare$</span>
