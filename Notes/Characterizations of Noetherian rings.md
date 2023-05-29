<div class="topSpace"></div>

Date Created: 08/01/2023 22:16:24
Tags: #Type/Proposition #Topic/Ring_Theory #Courses/MATH457

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $R$ be a commutative ring. The following are equivalent.
1. Every ascending chain $I_1\subseteq I_2\subseteq\cdots$ of ideals in $R$ stabilizes.
2. Every non-empty set $\mc{F}$ of ideals in $R$ has a $\subseteq$-maximal element.
3. Every ideal $I$ in $R$ is finitely-generated.

```

<i>Proof.</i> We shall prove $1\Rightarrow2\Rightarrow3\Rightarrow1$.
* ($1\Rightarrow2$): Let $\mc{F}$ be a non-empty set of ideals in $R$ and suppose, for sake of contradiction, that it does not have a maximal element. Choose $I_1\in\mc{F}$, so there exists some $I_2\in\mc{F}$ such that $I_1\subset I_2$. By induction, we obtain a (properly) ascending chain $I_1\subset I_2\subset\cdots$ of ideals in $\mc{F}$, contradicting that it stabilizes.

* ($2\Rightarrow3$): Let $I$ be an ideal in $R$ and let $\mc{F}$ be the set of all finitely-generated ideals $J\subseteq I$. Since $\sring{0}\in\mc{F}$, $\mc{F}\neq\em$ and hence has a maximal element $M\subseteq I$. We shall show that $I=M$ and hence $I$ is finitely-generated. Assume otherwise, so there exists some $x\in I\comp M$. Then $M+Rx=\sring{x_1,\dots,x_k,x}\subseteq I$ is finitely-generated with $M\subset M+Rx$, contradicting the maximality of $M$ in $\mc{F}$.
* ($3\Rightarrow1$): Let $I_1\subseteq I_2\subseteq\cdots$ be an ascending chain of ideals in $R$, and set $I\coloneqq\bigcup_{m=1}^{\infty}I_m$. Then $I$ is an ideal of $R$, so there exist $x_1,\dots,x_k\in I$ such that $I=\sring{x_1,\dots,x_k}$. Then each $x_i\in I_{n_i}$ for some $n_i\geq1$, so set $n\coloneqq\max\l\{n_1,\dots,n_k\r\}$ and observe that $x_1,\dots,x_k\in I_n$. Then, for all $m\geq n$, we have
$$\begin{equation}
    I_m\subseteq I=\sring{x_1,\dots,x_k}\subseteq I_n\subseteq I_m,
\end{equation}$$
so $I_m=I_n=I$.<span style="float:right;">$\blacksquare$</span>
