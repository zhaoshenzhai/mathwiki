---
title: Heine-Borel Theorem
date: 2025-06-19
tags: [In_Progress]
---

# Statement and proof

Every compact subset $K\subeq X$ of a metric space $X$ is closed and bounded. Indeed:

\begin{fact}[\ref[Compact $\Rightarrow$ closed]{compact_implies_closed}]\label{closed}

Every compact set in a Hausdorff space is closed.

\end{fact}

\begin{fact}[\ref[Compact $\Rightarrow$ bounded]{}]\label{bounded}

Every compact set in a metric space is bounded.

\end{fact}

The converse fails in general (see Example \iref{converse_fail}), but holds in the space case when $X=\R^n$ for some $n\in\N$.

\begin{theorem}[Heine-Borel]\label{heine-borel}

A subset $K\subeq\R^n$ is compact iff $K$ is closed and bounded.

\end{theorem}

To prove the Heine-Borel Theorem, we will use the following useful characterization of compactness.

\begin{fact}[\ref[Characterization of compactness]{characterization_of_compactness_in_metric_spaces}]\label{char}

A metric space is compact iff it is complete and totally-bounded.

\end{fact}

<div class="space"></div>

\begin{proof}[of Theorem \iref{heine-borel}]

Since closed subsets of complete spaces are complete, it suffices by Fact \iref{char} to show that bounded subsets of $\R^n$ are totally-bounded. As every bounded subset of $\R^n$ is contained in some cube $C\coloneqq[-L,L]^n$, it suffices to show that $C$ is totally-bounded.

<br>

&emsp;&emsp;Indeed, let $\epsilon>0$ and fix $k\in\N$ large enough. Divide $C$ into $k^n$-many congruent sub cubes, each of side length $2L/k$ and hence diameter $\sqrt{n}(2R/k)<2\epsilon$, so that they are contained in balls of radii $\epsilon$ at their centers.<span style="float:right;">$\blacksquare$</span>

\end{proof}

\begin{example}\label{converse_fail}

The Heine-Borel Theorem fails for general metric spaces. Indeed, \TODO

\end{example}
