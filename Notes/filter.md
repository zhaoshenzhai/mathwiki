---
title: Filter
date: 2025-05-16
tags: [In_Progress]
---

# Motivation and Definition

Let $X$ be a set. A point $x\in X$ can, equivalently, be viewed as a map $\l\\{\ast\r\\}\to X$ sending $\ast\mapsto p$, which induces a map $p_x:2^X\to2^{\l\\{\ast\r\\}}\iso2$, with $p_x(A)\coloneqq1$ iff $x\in A$. Thus, we can view maps $2^X\to2$ as 'generalized points'.

<br>

&emsp;&emsp;We say that a generalized point $F:2^X\to2$ is a _filter_ if $F$ is a meet semilattice, so that $F(X)=1$ and $F(A\cap B)=F(A)F(B)$. Note that $F:2^X\to2$ can be viewed as a collection $F\subeq2^X$ of subsets of $X$, so in this language, we deduce the following properties, which in fact characterizes such maps.
1. (Non-empty). $X\in F$, so $F\neq\e$.
2. (Closed under intersections). $A\cap B\in F$ whenever $A,B\in F$.
3. (Upward-closure). If $A\in F$ and $A\subeq B$, then $B\in F$, since $F(B)=F(A)F(B)=F(A\cap B)=F(A)=1$.

Abstracting this definition to an arbitrary poset, we obtain the following definition.

\begin{definition}

Let $(P,\leq)$ be a poset. A _filter_ on $P$ is a non-empty subset $F\subeq P$ such that
1. (Compatibility). If $x,y\in F$, then there exists some $z\leq x,y$ such that $z\in F$.
2. (Upward-closure). If $x\in F$ and $x\leq y$, then $y\in F$.

\end{definition}

\begin{remark}

When $P$ is a Boolean algebra, we can replace compatibility with closure under intersections.

\end{remark}

# Convergence
