---
title: Metric Space
date: 2025-06-20
tags: [In_Progress]
---

# Definition

\begin{definition}

A _metric_ on a set $X$ is a function $d:X\times X\to\R$ satisfying the following conditions.
1. (Positive-definiteness). For all $x,y\in X$, we have $d(x,y)\geq0$, and equality holds iff $x=y$.
2. (Symmetry). For all $x,y\in X$, we have $d(x,y)=d(y,x)$.
3. (Triangle-inequality). For all $x,y,z\in X$, we have $d(x,z)\leq d(x,y)+d(y,z)$.

The pair $(X,d)$ is called a _metric space_.

\end{definition}

## Topology

For each $x\in X$ and $\epsilon>0$, the _$\epsilon$-ball around $x$_ is $B_\epsilon(x)\coloneqq\l\\{y\in X\st d(x,y)<\epsilon\r\\}$. The collection of all balls $\mc{B}\coloneqq\l\\{B_\epsilon(x)\st x\in X,\epsilon>0\r\\}$ is a \ref[basis]{basis_topology} for a \ref[topology]{topological_space} on $X$, which we say is _compatible_ with $d$.
> Indeed, clearly $\mc{B}$ covers $X$. If $B_{\epsilon_1}(x_1),B_{\epsilon_2}(x_2)\in\mc{B}$ and $x\in B_{\epsilon_1}(x_1)\cap B_{\epsilon_2}(x_2)$, then $x\in B_\epsilon(x)\subeq B_{\epsilon_1}(x_1)\cap B_{\epsilon_2}(x_2)$ for any $\epsilon<\min\l\\{\epsilon_i-d(x,x_i)\r\\}$, since if $d(x,y)<\epsilon$, then $d(x_i,y)\leq d(x_i,x)+d(x,y)<\epsilon_i$.

Thus every metric space $X$ can naturally be viewed as a topological space, where $U\subeq X$ is open iff for each $x\in U$, there exists $\epsilon>0$ such that $x\in B_\epsilon(x)\subeq U$.

# Properties of Metric Spaces

## Topological properties

A topological space $X$ is _metrizable_ if there is a compatible metric $d$ on $X$.

\begin{fact}[\ref[Limitations of size]{limitation_of_size_metric_space}]

Fix an infinite cardinal $\kappa$. The following are equivalent for a metrizable space $X$.
1. ($\kappa$-\ref[second-countable]{second_countable_space}). $X$ admits a basis of cardinality $\leq\kappa$.
2. ($\kappa$-\ref[Lindelöf]{lindelof_space}). Every open cover of $X$ admits a subcover of cardinality $\leq\kappa$.
4. ($\kappa$-\ref[chain-condition]{chain_conditions}). Every family of pairwise disjoint non-empty open subsets of $X$ has cardinality $\leq\kappa$.
3. ($\kappa$-\ref[separable]{separable_space}). $X$ admits a dense subset of cardinality $\leq\kappa$.

\end{fact}

For sufficient conditions for a topological space $X$ to be metrizable.

# Classes of Metric Spaces

A metric space $X$ is _complete_ if every Cauchy sequence $(x_n)$ in $X$ converges.
