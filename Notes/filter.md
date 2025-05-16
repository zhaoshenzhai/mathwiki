---
title: Filters and Ultrafilters
date: 2025-05-16
tags: [In_Progress]
---

# Motivation and Definition

Let $X$ be a set. A point $x\in X$ can, equivalently, be viewed as a map $\l\\{\ast\r\\}\to X$ sending $\ast\mapsto x$, which induces a map $\chi_x:2^X\to2^{\l\\{\ast\r\\}}\iso2$, with $\chi_x(A)\coloneqq1$ iff $x\in A$. Thus, we can view maps $2^X\to2$ as 'generalized points'.

<br>

&emsp;&emsp;We say that a generalized point $\chi:2^X\to2$ is a _filter_ if it is a morphism of bounded meet \ref[semilattices]{semilattice}, i.e., $\chi(X)=1$ and $\chi(A\cap B)=\chi(A)\chi(B)$. Note that $\chi:2^X\to2$ can be viewed as a collection $F\subeq2^X$ of subsets of $X$ by $F\coloneqq\chi^{-1}(1)$, so in this language, we deduce the following properties, which in fact characterizes such maps.
1. (Non-empty). $X\in F$, so in particular, $F\neq\e$.
2. (Closed under intersections). $A\cap B\in F$ whenever $A,B\in F$.
3. (Upward-closure). $B\in F$ if $A\in F$ and $A\subeq B$, since $\chi_F(B)=\chi_F(A)\chi_F(B)=\chi_F(A\cap B)=\chi_F(A)=1$.

Abstracting this definition to an arbitrary \ref[poset]{poset}, we obtain the following definition.

\begin{definition}

Let $(P,\leq)$ be a poset. A _filter_ on $P$ is a non-empty subset $F\subeq P$ such that
1. (Compatibility). If $x,y\in F$, then there exists some $z\leq x,y$ such that $z\in F$.
2. (Upward-closure). If $x\in F$ and $x\leq y$, then $y\in F$.

\end{definition}

\begin{example}[Fréchet filter]

If $X$ is an infinite set, the _Fréchet filter_ $F\coloneqq\l\\{A\subeq X\st|X\comp A|<\aleph_0\r\\}$ is the filter $F\subeq2^X$ consisting of cofinite sets.

\end{example}

&emsp;&emsp;Pushing the 'generalized points' analogy further, one can ask for maps $\chi:2^X\to2$ that, in addition to being morphism of meet semilattices, is also a morphism of Boolean algebras, i.e., that $\chi(\e)=0$ and that it preserves unions. Viewing $\chi$ as a subcollection $F\subeq2^X$, we see that $F\neq2^X$ is _proper_ and that for any $A\subeq X$, (exactly) one of $A$ and $A^c$ is in $F$ since $1=\chi_F(X)=\chi_F(A\cup A^c)=\chi_F(A)+\chi_F(A^c)$. Thus these morphisms $\chi:2^X\to2$ of Boolean algebras can be thought of as maximal filters:

\begin{definition}

A proper filter $F\subeq P$ is an _ultrafilter_ if $F$ is maximal amongst all proper filters on $P$.

\end{definition}

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
