<div class="topSpace"></div>

Date Created: 23/01/2023 17:51:43
Tags: #Type/Proposition #Topic/Module_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $R$ be a ring and let $M$ be a left $R$-module. Then, for all $r\in R$ and $m\in M$, the following properties hold.
* (Absorbing element of $\cdot$): $r0_M=0_M=0_Rm$.
* (Compatibility of additive inverse and $\cdot$): $\l(-r\r)m=-\l(rm\r)=r\l(-m\r)$.

```

<i>Proof.</i> Take $r\in R$ and $m\in M$.
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
