<div class="topSpace"></div>

Date Created: 16/11/2022 14:09:23
Tags: #Type/Proposition #Topic/Ring_Theory

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $R$ be a commutative ring and fix $a\in R$. Then the set $\sring{a}\coloneqq\l\{ar\in R\mid r\in R\r\}$ is an ideal in $R$.

```

<i>Proof.</i> We use the Subring Test.
* The set $\sring{a}\subseteq R$ is a subgroup since $a0=0\in R$, and, for all $ar_1,ar_2\in\sring{a}$, we have that
$$\begin{equation}
    ar_1+ar_2=a\l(r_1+r_2\r)\in\sring{a}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ -\l(ar_1\r)=a\l(-r_1\r)\in\sring{a}.
\end{equation}$$
* Take $ar_1,ar_2\in\sring{a}$ and observe that $\l(ar_1\r)\l(ar_2\r)=a\l(r_1ar_2\r)\in\sring{a}$.

To show that $\sring{a}\subseteq R$ is an ideal, take $ar\in\sring{a}$ and $s\in R$. Observe then that
$$\begin{equation}
    s\l(ar\r)=\l(sa\r)r=\l(as\r)r=a\l(sr\r)\in\sring{a}\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ \l(ar\r)s=a\l(rs\r)\in\sring{a}.\qedin
\end{equation}$$
