<div class="topSpace"></div>

Date Created: 08/01/2023 22:16:24
Tags: #Proposition #Topics/Ring_Theory #Courses/MATH457

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $R$ be a commutative ring. The following are equivalent._
1. _Every ascending chain $I_1\subseteq I_2\subseteq\cdots$ of ideals in $R$ stabilizes._
2. _Every non-empty set $\mc{F}$ of ideals in $R$ has a $\subseteq$-maximal element._
3. _Every ideal $I$ in $R$ is finitely-generated._

```

_Proof_. We shall prove $1\Rightarrow2\Rightarrow3\Rightarrow1$.
* ($1\Rightarrow2$): Let $\mc{F}$ be a non-empty set of ideals in $R$ and suppose, for sake of contradiction, that it does not have a maximal element. Choose $I_1\in\mc{F}$, so there exists some $I_2\in\mc{F}$ such that $I_1\subset I_2$. By induction, we obtain a (properly) ascending chain $I_1\subset I_2\subset\cdots$ of ideals in $\mc{F}$, contradicting that it stabilizes.

* ($2\Rightarrow3$): Let $I$ be an ideal in $R$ and let $\mc{F}$ be the set of all finitely-generated ideals $J\subseteq I$. Since $\ideal{0}\in\mc{F}$, $\mc{F}\neq\em$ and hence has a maximal element $M\subseteq I$. We shall show that $I=M$ and hence $I$ is finitely-generated. Assume otherwise, so there exists some $x\in I\comp M$. Then $M+Rx=\ideal{x_1,\dots,x_k,x}\subseteq I$ is finitely-generated with $M\subset M+Rx$, contradicting the maximality of $M$ in $\mc{F}$.
* ($3\Rightarrow1$): Let $I_1\subseteq I_2\subseteq\cdots$ be an ascending chain of ideals in $R$, and set $I\coloneqq\bigcup_{m=1}^{\infty}I_m$. Then $I$ is an ideal of $R$, so there exist $x_1,\dots,x_k\in I$ such that $I=\ideal{x_1,\dots,x_k}$. Then each $x_i\in I_{n_i}$ for some $n_i\geq1$, so set $n\coloneqq\max\l\{n_1,\dots,n_k\r\}$ and observe that $x_1,\dots,x_k\in I_n$. Then, for all $m\geq n$, we have
$$\begin{equation}
    I_m\subseteq I=\ideal{x_1,\dots,x_k}\subseteq I_n\subseteq I_m,
\end{equation}$$
so $I_m=I_n=I$.<span style="float:right;">$\blacksquare$</span>
