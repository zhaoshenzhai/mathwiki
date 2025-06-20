---
title: Compact Space
date: 2025-06-20
tags: [In_Progress]
---

# Definition

\begin{definition}

A topological space $X$ is said to be _compact_ if every open cover of $X$ admits a finite subcover.

\end{definition}

# Properties of Compact Spaces

\begin{fact}

Compactness is preserved under the following operations:
1. (\ref[Images]{}). If $f:X\to Y$ is continuous and $X$ is compact, then so is $f(X)$.
2. (\ref[Products]{tychonoffs_theorem}). For any family $\l\\{X_\alpha\r\\}$ of compact spaces, their product $\prod_\alpha X_\alpha$ is compact.
3. (\ref[Quotients]{}). \TODO
3. (Closed subspaces). If $K\subeq X$ is a closed subset of a compact space $X$, then $K$ is compact.

\end{fact}

\begin{fact}[\ref{compact_implies_closed}]

Every compact subset of a Hausdorff space is closed.

\end{fact}

\begin{fact}[\ref{compact_implies_bounded}]

Every compact subset of a metric space is bounded.

\end{fact}

# Characterizations of Compactness

\begin{fact}[\ref{}]

A topological space $X$ is compact iff every FIP-family of closed sets has non-empty intersection; i.e., if $\mc{F}$ is family of closed subsets of $X$ such that $\bigcap\mc{F}_0\neq\e$ for every finite $\mc{F}_0\subeq\mc{F}$, then $\bigcap\mc{F}\neq\e$.

\end{fact}

\begin{fact}[\ref[Compactness in metric spaces]{characterization_of_compactness_in_metric_spaces}]

The following are equivalent for a metric space $X$.
1. $X$ is compact.
2. $X$ is sequentially-compact: every sequence in $X$ admits a convergent subsequence.
3. $X$ is complete and totally-bounded.

\end{fact}

\begin{fact}[\ref[Heine-Borel Theorem]{heine_borel_theorem}]

Fix $n\in\N$. A subset $K\subeq\R^n$ is compact iff $K$ is closed and bounded.

\end{fact}
