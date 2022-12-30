<div class="topSpace"></div>

Date Created: 29/12/2022 21:53:42
Tags: #Theorem #Later/Topology

Proved by: [[Sequential characterization of closure (metric)]]
References: [[Compact implies limit point compact]]
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Theorem
title: Theorem (Characterizations of Compactness in Metric Spaces).

_Let $\tpl{X,d}$ be a metric space and fix a subspace $S\subseteq X$. Then the following are equivalent._
1. _$S$ is compact._
2. _$S$ is limit point compact; that is, every infinite subset of $S$ has a cluster (limit) point in $S$._
3. _$S$ is sequentially compact; that is, every sequence in $S$ has a subsequence converging to $S$._

```

_Proof_. Observe that $1\Rightarrow2$ holds in general topological spaces, so it remains to show that $2\Rightarrow3\Rightarrow1$.
* ($2\Rightarrow3$): Let $\tpl{x_n}$ be a sequence in $S$, so $\l\{x_n\r\}\subseteq S$ is an infinite subset. Thus there exists some $x\in S$ such that $x\in\bar{\l\{x_n\r\}\comp\l\{x\r\}}$, so there exists a sequence $\tpl{x_{n_k}}$ in $\l\{x_n\r\}$ such that $x_n\to x$. Observe that $\tpl{x_{n_k}}$ is a subsequence of $\tpl{x_n}$, so we are done.
