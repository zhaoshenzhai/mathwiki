---
title: Preservation of Separability
date: 2025-06-20
tags: [In_Progress]
---

We give several instances where \ref[separability]{separable_space} is preserved (or not) under set-theoretical operations.

# Statements and Proofs

## Images

\begin{theorem}

If $f:X\to Y$ is a continuous map and $X$ is separable, then $f(X)$ is separable too.

\end{theorem}

\begin{proof}

Since $f$ is continuous, we have $\bar{f(D)}\supseteq f(\bar{D})=f(X)$ for any countable dense set $D\subeq X$.<span style="float:right;">$\blacksquare$</span>

\end{proof}

## Subspaces

Clearly, any open subset of a separable space is separable. The general fails as Example \iref{subset} shows, but we have the following useful special case.

\begin{theorem}

Let $X$ be a metrizable space. If $X$ is separable, then any subset of $X$ is separable too.

\end{theorem}

\begin{fact}[\ref{limitation_of_size_metric_space}]\label{metric_char}

A metrizable space is separable iff it is second-countable.

\end{fact}

\begin{proof}

Let $Y\subeq X$ be a subset of a separable space $X$. By Fact \iref{metric_char}, $X$ is second-countable, and hence $Y\subeq X$ is second-countable too. Clearly $Y$ is metrizable, so again by Fact \iref{metric_char}, $Y$ is separable.<span style="float:right;">$\blacksquare$</span>

\end{proof}

## Products

The situation with products is more subtle and depends precisely on the number of factors.

\begin{theorem}

Let $\l\\{X\_\alpha\r\\}\_{\alpha\leq\mf{c}}$ be a family of continuum-many separable spaces. Then $\prod\_{\alpha\leq\mf{c}}X\_\alpha$ is separable too.

\end{theorem}

\begin{proof}

\TODO

\end{proof}

# Counterexamples

\begin{example}\label{subset}

\TODO

\end{example}

