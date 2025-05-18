---
title: Measure-preserving Dynamical System
date: 2025-05-17
tags: [In_Progress]
---

# Motivation and Definition

Broadly speaking, a _dynamical system_ is a (semi-)group action of a (semi-)group $G$ on some space $X$. Here, we study the case when $X=(X,\mu)$ is a \ref[standard probability space]{standard_probability_space} and $T:X\to X$ is a measure-preserving action.

\begin{definition}

Let $(X,\mu)$ be a standard probability space. A function $T:X\to X$ is said to be _probability-measure-preserving (pmp)_ if $T$ is \ref[Borel]{measurable_space#measurable-functions} and for each Borel set $B\subeq X$, we have $\mu(T^{-1}(B))=\mu(B)$.

<br>

&emsp;&emsp;The triple $(X,\mu,T)$ is called a _measure-preserving dynamical system_.

\end{definition}

## Ergodic transformations
