---
title: Topological Space
date: 2025-06-19
tags: [In_Progress]
---

# Definition

\begin{definition}

A _topology_ on a set $X$ is a family $\mc{T}\subeq\pow(X)$ of subsets of $X$ satisfying the following conditions.
1. (Non-trivial). $\e,X\in\mc{T}$.
2. (Unions). For any family $\mc{U}\subeq\mc{T}$, we have $\bigcup\mc{U}\in\mc{T}$.
3. (Intersections). For any $n\in\N$ and $U_1,\dots,U_n\in\mc{T}$, we have $\bigcap_{i\leq n}U_i\in\mc{T}$.

The elements in $\mc{T}$ are referred to as the _open sets in $X$_, and the pair $(X,\mc{T})$ is a _topological space_.

\end{definition}

\begin{definition_}

A function $f:X\to Y$ between topological spaces $(X,\mc{T}_X)$ and $(Y,\mc{T}_Y)$ is _continuous_ if $f^{-1}(V)\in\mc{T}_X$  for every $V\in\mc{T}_Y$. Topological spaces with continuous maps form the _\ref[category]{category} of topological spaces_, denoted $\cat{Top}$, whose isomorphisms are called _homeomorphisms_.

\end{definition_}

# Classes of Topological Spaces

## Countability Axioms

From the point of view of the topology of $X$, the following conditions can be thought of as 'topological-countability'. Being second-countable implies the rest, which are all incomparable.
* _(\ref[Second-countable]{second-countable_space})_ $X$ admits a countable basis.
* _(\ref[First-countable]{first-countable_space})_ Every point $x\in X$ admits a countable neighborhood basis.
* _(\ref[Separable]{separable_space})_. There is a countable dense subset of $X$.
* _(\ref[Lindelöf]{lindelof_space})_. Every open cover of $X$ admits a countable subcover.

## Separation Axioms

In decreasing order of generality, we can impose the following 'separation axioms' on a topological space $X$. Each condition also requires the preceding conditions.
* _(Kolmogorov)._ For every pair of distinct $x,y\in X$, there is an open set $x\in U\not\in y$, or vice versa.
* _(Accessible)._ For every pair of distinct $x,y\in X$, there is an open set $x\in U\not\in y$, and vice versa.
* _(\ref[Hausdorff]{hausdorff_space})_. For every pair of distinct $x,y\in X$, there are disjoint open sets $U\ni x$ and $V\ni y$.
* _(Regular)_. For every closed set $C\subeq X$ and $x\not\in C$, there are disjoint open sets $U\ni x$ and $V\supseteq C$.
* _(\ref[Normal]{normal_space})_. For every pair of disjoint closed sets $C,D\subeq X$, there are disjoint open sets $U\supseteq C$ and $V\supseteq D$.

## \ref[Metrizability]{metric_space}

A topological space $X$ is _metrizable_ if there is a compatible metric $d$ on $X$, in the sense that $U\subeq X$ is open iff for each $x\in X$, we have $x\in B_\epsilon(x)\subeq U$ for some $\epsilon>0$.

\begin{fact}[\ref[Urysohn Metrization Theorem]{urysohn_metrization_theorem}]

Every regular second-countable space is metrizable.

\end{fact}

## Compactness

A topological space $X$ is _compact_ if every open cover of $X$ admits a finite subcover.

## Connectivity

\TODO
