---
title: Measure
date: 2025-05-02
tags: [In_Progress]
---

# Definition and Properties

Let $\mc{A}$ be an {{< link file="sigma_algebra" display="$\sigma$-algebra" >}} on a set $X$ and let $\bar{\R}\coloneqq\R\cup\l\\{\infty\r\\}$ be the one-point compactification of $\R$. A map $\mu:\mc{A}\to\bar{\R}$ is said to be _countably-additive_ if $\mu(\bigsqcup_{n<\omega}A_n)=\sum_{n<\omega}\mu(A_n)$ for any pairwise-disjoint $A_1,A_2,\ldots\in\mc{A}$.

\begin{definition}

A _measurable space_ is a set $X$ equipped with a $\sigma$-algebra $\mc{A}\subeq\pow(X)$. A _measure_ on $(X,\mc{A})$ is a countably-additive map $\mu:\mc{A}\to\bar{\R}$ with $\mu(\em)=0$.

\end{definition}

## Basic properties

We state the basic 'pocket tools' of measure theory.

\begin{fact}[Monotone convergence]\ref{monotone_convergence_of_measures}

Let $(A_n)\_{n<\omega}$ be a sequence in $\mc{A}$.

* If $(A_n)\_{n<\omega}$ is increasing, then $\mu(\bigcup_{n<\omega}A_n)=\lim_{n\to\infty}\mu(A_n)$.
* If $(A_n)\_{n<\omega}$ is decreasing and each $\mu(A_n)<\infty$, then $\mu(\bigcap_{n<\omega}A_n)=\lim_{n\to\infty}\mu(A_n)$.

\end{fact}

\begin{fact}[Carathéodory's Extension Theorem]\ref{caratheodory_extension_theorem}

Every premeasure $\mu_0:\mc{A}\to X$ on an algebra $\mc{A}$ extends uniquely to a measure $\mu:\l\langle\mc{A}\r\rangle_\sigma\to X$.

\end{fact}
