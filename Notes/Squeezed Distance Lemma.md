<div class="topSpace"></div>

Date Created: 04/10/2022 13:36:05
Tags: #Type/Proposition #Topic/Real_Analysis

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition (Squeezed Distance Lemma).

Let $\tpl{X,d}$ be a metric space and consider a sequence $\tpl{x_n}_{n\in\N}$ in $X$. If there exist a sequence $\tpl{a_n}_{n\in\N}$ of positive reals that converges to $0$ such that
$$\begin{equation}
    \fa^\infty n\in\N:d\l(x_n,x\r)\leq ca_n
\end{equation}$$
for some $c\in\R^+$, then $\lim\limits_{n\to\infty}x_n=x$.

```

<i>Proof.</i> Let $\epsilon>0$. Then, since $\lim\limits_{n\to\infty}a_n=0$, we see that
$$\begin{equation}
    \ex N_1\in\N,\fa n\geq N_1:\l|a_n\r|<\epsilon/c.
\end{equation}$$
Furthermore, we have that
$$\begin{equation}
    \ex N_2\in\N,\fa n\geq N_2:d\l(x_n,x\r)\leq ca_n.
\end{equation}$$
But then for all $n\geq\max\l\{N_1,N_2\r\}$, we see that
$$\begin{equation}
    d\l(x_n,x\r)\leq ca_n\leq c\l|a_n\r|<c\epsilon/c=\epsilon
\end{equation}$$
and thus $\lim\limits_{n\to\infty}x_n=x$.<span style="float:right;">$\blacksquare$</span>
