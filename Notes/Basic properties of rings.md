<div class="topSpace"></div>

Date Created: 14/11/2022 21:13:19
Tags: #Proposition #Courses/MATH235

Proved by: [[Basic properties of groups]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $\tpl{R,+,\cdot,0}$ be a ring. Then, for all $r,s\in R$, the following properties hold._
* _(Absorbing element of $\cdot$): $r\cdot0=0=0\cdot r$._
* _(Compatibility of additive inverse and $\cdot$): $r\cdot\l(-s\r)=-\l(r\cdot s\r)=\l(-r\r)\cdot s$._
* _(Cancellation of additive inverses): $\l(-r\r)\cdot\l(-s\r)=r\cdot s$._

```

_Proof_. Take $r,s\in R$.
* (Absorbing element of $\cdot$): Observe that
$$\begin{equation}
    r\cdot0=r\cdot\l(0+0\r)=\l(r\cdot0\r)+\l(r\cdot0\r) \ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 0\cdot r=\l(0+0\r)\cdot r=\l(0\cdot r\r)+\l(0\cdot r\r),
\end{equation}$$
so the result follows by cancellation.

* (Compatibility of additive inverse and $\cdot$): Observe that
$$\begin{equation}
    0=r\cdot0=r\cdot\l(s+\l(-s\r)\r)=\l(r\cdot s\r)+\l(r\cdot\l(-s\r)\r)\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 0=0\cdot s=\l(r+\l(-r\r)\r)\cdot s=\l(r\cdot s\r)+\l(\l(-r\r)\cdot s\r),
\end{equation}$$
from which the result follows.
* (Cancellation of additive inverses): Observe that
$$\begin{equation}
    \l(-r\r)\cdot\l(-s\r)=-\l(r\cdot\l(-s\r)\r)=-\l(-\l(r\cdot s\r)\r)=r\cdot s.\qedin
\end{equation}$$
