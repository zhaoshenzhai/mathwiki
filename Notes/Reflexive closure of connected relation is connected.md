<div class="topSpace"></div>

Date Created: 01/02/2022 11:15:43
Tags: #Proposition #Later/Set_Theory

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $X$ be a set and let $R$ be a binary relation on $X$. If $R$ is connected on $X$, then so is $\rfcl R$._

```

_Proof_. Take $x_1,x_2\in X$, so, since $R$ is connected on $X$, we see that either $x_1Rx_2$, $x_2Rx_1$, or $x_1=x_2$. In the former cases, we have that
$$\begin{equation}
    \tpl{x_1,x_2}\in R\subseteq R\cup\id_X=\rfcl R\ \ \ \ \textrm{or}\ \ \ \ \tpl{x_2,x_1}\in R\subseteq R\cup\id_X=\rfcl R
\end{equation}$$
and thus $x_1\l(\rfcl R\r)x_2$ or $x_2\l(\rfcl R\r)x_1$. Otherwise, we have $x_1=x_2$.<span style="float:right;">$\blacksquare$</span>
