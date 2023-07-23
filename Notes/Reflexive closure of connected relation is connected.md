<div class="topSpace"></div>

Date Created: 01/02/2022 11:15:43
Tags: #Type/Proposition #Topic/Set_Theory/Later

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $X$ be a set and let $R$ be a binary relation on $X$. If $R$ is connected on $X$, then so is $\rfcl R$.

```

<i>Proof.</i> Take $x_1,x_2\in X$, so, since $R$ is connected on $X$, we see that either $x_1Rx_2$, $x_2Rx_1$, or $x_1=x_2$. In the former cases, we have that
$$\begin{equation}
    \tpl{x_1,x_2}\in R\subseteq R\cup\id_X=\rfcl R\ \ \ \ \textrm{or}\ \ \ \ \tpl{x_2,x_1}\in R\subseteq R\cup\id_X=\rfcl R
\end{equation}$$
and thus $x_1\l(\rfcl R\r)x_2$ or $x_2\l(\rfcl R\r)x_1$. Otherwise, we have $x_1=x_2$.<span style="float:right;">$\blacksquare$</span>
