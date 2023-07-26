<div class="topSpace"></div>

Date Created: 23/10/2022 16:18:55
Tags: #Type/Proposition #Topic/Real_Analysis

Proved by: <i>Not Applicable</i>
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $\tpl{X,\mc{T}}$ be a topological space and let $\tpl{x_n}$ be a sequence in $X$. If $x_n\to x$ for some $x\in X$, then $x_{n_k}\to x$ for all subsequences $\tpl{x_{n_k}}$ of $\tpl{x_n}$.

```

<i>Proof.</i> For all $U\in\mc{U}_x$, $x_n\to x$ implies that $\fa^\infty n\in\N:x_n\in U$. But since $n_{k+1}>n_k$ for all $k\in\N$, we see that $\fa^\infty k\in\N:x_{n_k}\in U$ and thus $x_{n_k}\to x$.<span style="float:right;">$\blacksquare$</span>
