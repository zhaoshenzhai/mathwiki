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

## \ref[Hausdorff]{hausdorff_space} space

A topological space $X$ is said to be _Hausdorff_ if for each distinct pair of points $x,y\in X$, there exist disjoint open sets $U,V\subeq X$ such that $x\in U$ and $y\in V$.

## \ref[Connected]{connected_space} space

## \ref[Compact]{compact_space} space
