<div class="topSpace"></div>

Date Created: 29/12/2022 21:53:42
Tags: #Type/Theorem #Topic/Real_Analysis

Proved by: [[Sequentially compact implies separable]], [[Separable implies Lindelof]], [[Sequentially compact implies countably compact]]
References: [[Compact Space#^compact-implies-limit-point-compact]]
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Theorem
title: Theorem (Characterizations of Compactness in Metric Spaces).

Let $\tpl{X,d}$ be a metric space and fix a subspace $K\subseteq X$. Then the following are equivalent.
1. $K$ is compact; that is, every open cover admits a finite subcover.
2. $K$ is limit point compact; that is, every infinite subset of $K$ has a cluster (limit) point in $K$.
3. $K$ is sequentially compact; that is, every sequence in $K$ has a subsequence converging to $K$.

```

<i>Proof.</i> Observe that $1\Rightarrow2$ holds in general topological spaces, so it remains to show that $2\Rightarrow3\Rightarrow1$.
* ($2\Rightarrow3$). Let $\tpl{p_n}$ be a sequence in $K$, so $\l\{p_n\r\}\coloneqq\im\tpl{p_n}\subseteq K$ is an infinite subset. Thus there exists some $p\in K$ such that $p\in\bar{\l\{p_n\r\}\comp\l\{p\r\}}$, so there exists a sequence $\tpl{p_{n_k}}$ in $\l\{p_n\r\}$ such that $p_n\to p$. Observe that $\tpl{p_{n_k}}$ is a subsequence of $\tpl{p_n}$, so we are done.

* ($3\Rightarrow1$). Let $\l\{U_\alpha\r\}_{\alpha\in\mc{A}}$ be an open cover for $K$. Since $K$ is sequentially compact, it is separable and hence it admits a countable subcover. But $K$ is countably compact, so the result follows.<span style="float:right;">$\blacksquare$</span>
