---
title: Filters and Ultrafilters
date: 2025-05-16
tags: [In_Progress]
---

# Definition and Examples

\begin{definition}

Let $(P,\leq)$ be a \ref[poset]{poset}. A _filter_ on $P$ is a non-empty subset $F\subeq P$ such that
1. (Compatibility). If $x,y\in F$, then there exists some $z\leq x,y$ such that $z\in F$.
2. (Upward-closure). If $x\in F$ and $x\leq y$, then $y\in F$.

A proper filter $F\subeq P$ is an _ultrafilter_ if $F$ is maximal amongst all proper filters on $P$.

\end{definition}

\begin{example}[Fréchet filter]

If $X$ is an infinite set, the _Fréchet filter_ $F\coloneqq\l\\{A\subeq X\st|X\comp A|<\aleph_0\r\\}$ is the filter $F\subeq2^X$ consisting of cofinite sets.

\end{example}

\begin{example}[Principal filters]

Let $X$ be a set and fix $x\in X$. The filter $p_x\coloneqq\l\\{A\subeq X\st A\ni x\r\\}$ is called the _principal filter at $x$_, which is clearly an ultrafilter.

\end{example}

## (Ultra)filters on Boolean algebras

Let $(B,\cup,\cap,0,1)$ be a Boolean algebra, which is a poset with $a\leq b$ iff $a\cap b=a$. Thus, we can define filters and ultrafilters on $B$.

\begin{fact}[\ref{}]

A subset $F\subeq B$ is a filter iff $\chi_F:B\to2$ is a morphism of bounded meet semilattices.

\end{fact}

\begin{fact}[\ref{}]

The following are equivalent for a proper filter $U\sub B$ on a Boolean algebra $B$.
1. (Maximality). $U$ is an ultrafilter.
2. (Morphism). The map $\chi_U:B\to2$ is a morphism of Boolean algebras.
3. (Dichotomy). For each $a\in B$, either $a\in U$ or $a^c\in U$.
4. (Prime). For each $a_1,a_2\in B$, we have $a_1+a_2\in B$ iff either $a_1\in U$ or $a_2\in U$.

\end{fact}

# Convergence of Filters
