<div class="topSpace"></div>

Date Created: 04/02/2023 22:08:01
Tags: #Type/Proposition #Topic/Real_Analysis/Later

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{X,d}$ be a metric space and consider a sequence $\tpl{p_n}$ in $X$. Then the set $S$ of all subsequential limits of $\tpl{p_n}$ is closed.

```

<i>Proof.</i> The set $S$ is closed iff $\bar{S}\subseteq S$, so it suffices to take $s\in\bar{S}$ and show that $s\in S$. Take $s\in\bar{S}$, so there exists a sequence $\tpl{s_k}$ in $S$ such that $s_k\to s$ as $k\to\infty$. We now construct a subsequence $\tpl{p_{n_k}}$ of $\tpl{p_n}$ that converges to $s$ as follows:
* Since $s_0\in S$, there exists some $n_0\in\N$ such that $d\l(p_{n_0},s_0\r)<1$.

Suppose now that the indices $n_0,n_1,\dots,n_{k-1}$ are defined for some $k\in\N^+$. Then, since $s_k\in S$, we see that $d\l(p_{n_l},s_k\r)<\frac{1}{k+1}$ for infinitely-many $n_l\in\N$. Since there are infinitely-many such indices, choose any $n_k>n_{k-1}$ such that $d\l(p_{n_k},s_k\r)<\frac{1}{k+1}$. Thus we obtain a subsequence $\tpl{p_{n_k}}$ of $p_n$ such that $d\l(p_{n_k},s_k\r)<\frac{1}{k+1}$ for all $k\in\N$. To show that $p_{n_k}\to s$, take $\epsilon>0$. Then, since $s_k\to s$, we see that eventually $d\l(s_k,s\r)<\epsilon$. Thus, for large enough $k$, we have
$$\begin{equation*}
    d\l(p_{n_k},s\r)\leq d\l(p_{n_k},s_k\r)+d\l(s_k,s\r)<\frac{1}{k+1}+\epsilon.
\end{equation*}$$
Since $\frac{1}{k+1}\to0$ as $k\to\infty$, the result follows.<span style="float:right;">$\blacksquare$</span>
