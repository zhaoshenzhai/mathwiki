<div class="topSpace"></div>

Date Created: 16/11/2022 14:32:10
Tags: #Type/Proposition #Topic/Ring_Theory

Proved by: [[Basic properties of cosets]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $I\subseteq R$ be an ideal of a ring $R$ and consider the quotient group $\tpl{R/I,+}$ of $R$ over $I$. Then the binary operation
$$\begin{equation}
    \cdot:R/I\times R/I\to R/I\ \ \ \ \ \ \ \ \textrm{\it{mapping}}\ \ \ \ \ \ \ \ \tpl{r_1+I,r_2+I}\mapsto r_1r_2+I
\end{equation}$$
is well-defined and makes $\tpl{R/I,+,\cdot}$ into a ring. Furthermore, if $R$ is commutative, then $R/I$ is commutative too.

```

<i>Proof.</i> It suffices to show that $\cdot$ is well-defined; the fact that it is associative is trivial. Indeed, if $r_1+I=r_1'+I$ and $r_2+I=r_2'+I$ for some $r_1,r_1',r_2,r_2'\in R$, then $r_1'=r_1+\alpha$ and $r_2'=r_2+\beta$ for some $\alpha,\beta\in I$. Observe then that
$$\begin{equation}
    r_1'r_2'=\l(r_1+\alpha\r)\l(r_2+\beta\r)=r_1r_2+\underbrace{r_1\beta+r_2\alpha+\alpha\beta}_{\mathclap{\in I}},
\end{equation}$$
so $r_1'r_2'\in r_1r_2+I$. Thus $r_1r_2+I=r_1'r_2'+I$, so we are done.

Now, if $R$ is commutative, then
$$\begin{equation}
    \l(r_1+I\r)\cdot\l(r_2+I\r)=r_1r_2+I=r_2r_1+I=\l(r_2+I\r)\cdot\l(r_1+I\r)
\end{equation}$$
for all $r_1,r_2\in R$, so $R/I$ is commutative too.<span style="float:right;">$\blacksquare$</span>
