---
title: Normal Space
date: 2025-06-20
tags: [In_Progress]
---

# Definition

\begin{definition}

A topological space $X$ is _normal_ if for every pair of disjoint closed sets $A,B\subeq X$, there are disjoint open sets $U\supseteq A$ and $V\supseteq B$.

\end{definition}

# Properties of Normal Spaces

\begin{fact}[\ref[Tietze Extension Theorem]{tietze_extension_theorem}]

Let $X$ be a normal space. If $A\subeq X$ is closed, then every continuous map $f:A\to\R$ admits a continuous extension $\widehat{f}:X\to\R$ such that $\sup_{x\in A}|f(x)|=\sup_{x\in X}|\widehat{f}(x)|$.

\end{fact}

# Characterizations of Normal Spaces

\begin{fact}[\ref[Urysohn's Lemma]{urysohns_lemma}]

A topological space $X$ is normal iff for every pair of disjoint closed sets of $X$ is separated by a continuous function, i.e., if $A,B\subeq X$ are disjoint closed sets, then there is a continuous function $f:X\to[0,1]$ such that $A\subeq f^{-1}(0)$ and $B\subeq f^{-1}(1)$.

\end{fact}
