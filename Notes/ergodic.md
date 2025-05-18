---
title: Ergodic Transformations
date: 2025-05-13
tags: [In_Progress]
---

# Motivation and Definition

Let $E$ be an equivalence relation on a \ref[measure space]{measure} $(X,\mu)$. A subset $A\subeq X$ is said to be $E$-invariant if $A$ is a union of $E$-classes.

\begin{definition}

An equivalence relation $E$ on $(X,\mu)$ is said to be _ergodic_ if every $E$-invariant $\mu$-measurable is either $\mu$-null or $\mu$-conull. A measure-preserving transformation $T:(X,\mu)\to(X,\mu)$ is _ergodic_ if $\E_T$ is.

\end{definition}

\begin{fact}[\ref{characterizations_of_ergodicity#basic-characterizations}]

A measure-preserving transformation $T:(X,\mu)\to(X,\mu)$ is ergodic iff any of the following hold.
1. (Functional). Every $T$-invariant measurable function $f:X\to Y$ to a \ref[standard Borel space]{measurable_space#borel-sigma-algebra} is constant a.e.
2. (Density). For every positively-measured subset $A\subeq X$, the saturation $[A]_{\E_T}$ is $\mu$-conull.

\end{fact}
