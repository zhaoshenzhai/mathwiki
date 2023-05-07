<div class="topSpace"></div>

Date Created: 14/11/2022 21:13:19
Tags: #Type/Proposition #Topic/Ring_Theory

Proved by: [[Basic properties of groups]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ be a ring. Then, for all $r,s\in R$, the following properties hold._
* _$r0=0=0r$._
* _$r\l(-s\r)=-\l(rs\r)=\l(-r\r)s$._
* _$\l(-r\r)\l(-s\r)=rs$._

```

_Proof_. Take $r,s\in R$ and observe that
$$\begin{equation}
    \begin{gathered}
        r0=r\l(0+0\r)=r0+r0\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 0r=\l(0+0\r)r=0r+0r \\
        0=r0=r\l(s+\l(-s\r)\r)=rs+r\l(-s\r)\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 0=0s=\l(r+\l(-r\r)\r)s=rs+\l(-r\r)s \\
        \l(-r\r)\l(-s\r)=-\l(r\l(-s\r)\r)=-\l(-\l(rs\r)\r)=rs,
    \end{gathered}
\end{equation}$$
from which the first result follows by cancellation.<span style="float:right;">$\blacksquare$</span>
