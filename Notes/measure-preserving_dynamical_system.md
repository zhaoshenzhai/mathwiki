---
title: Measure-preserving Dynamical System
date: 2025-05-17
tags: [In_Progress]
---

# Motivation and Definition

Broadly speaking, a _dynamical system_ is a group action of a group $G$ on some space $X$. Here, we study the case when $X=(X,\mu)$ is a \ref[standard measure space]{standard_measure_space} and $G\act(X,\mu)$ by measure-preserving actions.

\begin{definition}

Let $\phi:G\act(X,\mu)$ be an action of a group on a standard probability space. We say that $\phi$ is a _probability-measure-preserving (pmp)_ if
1. (Borel). for each $g\in G$, the map $x\mapsto gx$ is Borel; and
2. (Measure-preserving). for each $g\in G$ and Borel $B\subeq X$, we have $\mu(gB)=\mu(B)$.

\end{definition}
