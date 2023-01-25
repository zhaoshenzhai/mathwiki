<div class="topSpace"></div>

Date Created: 23/01/2023 17:51:43
Tags: #Proposition #Topics/Module_Theory

Proved by: [[Basic properties of groups]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ be a ring and let $M$ be a left $R$-module. Then, for all $r\in R$ and $m\in M$, the following properties hold._
* _(Absorbing element of $\cdot$): $r0_M=0_M=0_Rm$._
* _(Compatibility of additive inverse and $\cdot$): $\l(-r\r)m=-\l(rm\r)=r\l(-m\r)$._

```

_Proof_. Take $r\in R$ and $m\in M$.
* Observe that
$$\begin{equation}
    r0_M=r\l(0_M+0_M\r)=r0_M+r0_M\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 0_Rm=\l(0_R+0_R\r)m=0_Rm+0_Rm,
\end{equation}$$
from which the result follows from cancellation in $\tpl{M,+}$.

* Observe that
$$\begin{equation}
    0_M=r0_M=r\l(m+\l(-m\r)\r)=rm+r\l(-m\r)\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ 0_M=0_Rm=\l(r+\l(-r\r)\r)m=rm+\l(-r\r)m,
\end{equation}$$
from which the result follows.<span style="float:right;">$\blacksquare$</span>
