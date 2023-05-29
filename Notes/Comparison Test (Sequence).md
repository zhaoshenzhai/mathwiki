<div class="topSpace"></div>

Date Created: 21/10/2022 09:54:30
Tags: #Type/Proposition #Topic/Analysis

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition (Comparison Test).

Let $\tpl{X,\mc{T}}$ be an ordered topological space and consider two sequences $\tpl{a_n}$ and $\tpl{b_n}$ in $X$ such that $\fa^\infty n\in\N:a_n\leq b_n$. Then
$$\begin{equation}
    \lim\limits_{n\to\infty}a_n=+\infty\ \ \ \ \ \ \ \ \Rightarrow\ \ \ \ \ \ \ \ \lim\limits_{n\to\infty}b_n=+\infty
\end{equation}$$
and
$$\begin{equation}
    \lim\limits_{n\to\infty}b_n=-\infty\ \ \ \ \ \ \ \ \Rightarrow\ \ \ \ \ \ \ \ \lim\limits_{n\to\infty}a_n=-\infty.
\end{equation}$$

```

_Proof_. By definition, $\fa^\infty n\in\N:a_n\leq b_n$ means that there exists some $N\in\N$ such that for all $n\geq N$, we have $a_n\leq b_n$.
* The assumption $\lim\limits_{n\to\infty}a_n=+\infty$ means that for all $A\in X$, there exists some $M_1\in\N$ such that for all $n\geq M_1$, $a_n>A$. Set $N_1\coloneqq\max\l\{N,M_1\r\}$ so that for all $n\geq N_1$, we have $A<a_n\leq b_n$ and hence $b_n>A$. Thus $\lim\limits_{n\to\infty}b_n=+\infty$.

* Similarly, $\lim\limits_{n\to\infty}b_n=-\infty$ means that for all $B\in X$, there exists some $M_2\in\N$ such that for all $n\geq M_2$, $b_n<B$. Set $N_2\coloneqq\max\l\{N,M_2\r\}$ so that for all $n\geq N_2$, we have $a_n\leq b_n<B$ and hence $a_n<B$. Thus $\lim\limits_{n\to\infty}a_n=-\infty$.<span style="float:right;">$\blacksquare$</span>
