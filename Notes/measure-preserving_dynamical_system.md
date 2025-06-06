---
title: Measure-preserving Dynamical System
date: 2025-05-17
tags: [In_Progress]
---

# Motivation and Definition

Broadly speaking, a _dynamical system_ is a (semi-)group action of a (semi-)group $G$ on some space $X$. Here, we study the case when $X=(X,\mu)$ is a \ref[standard probability space]{standard_probability_space} and $T:X\to X$ is a measure-preserving action.

\begin{definition}

Let $(X,\mu)$ be a standard probability space. A map $T:X\to X$ is said to be _probability-measure-preserving (pmp)_ if $T$ is \ref[Borel]{measurable_space#measurable-functions} and, on a $\mu$-conull set $X_0\subeq X$, we $\mu(\l.T\r|_{X_0}^{-1}(B))=\mu(B)$ for each Borel $B\subeq X$.

<br>

&emsp;&emsp;The triple $(X,\mu,T)$ is called a _measure-preserving dynamical system_.

\end{definition}

Throughout, let $(X,\mu,T)$ be a measure-preserving dynamical system.
* The _orbit \ref[equivalence relation]{equivalence_relation}_ $\E_T\subeq X^2$ of $T$ is given by $x\E_Ty$ iff $T^n(x)=T^m(y)$ for some $n,m\in\N$.
* The _forward orbit_ of a point $x\in X$ is $\l\\{T^n(x)\r\\}\_{n<\omega}$. The _saturation_ of $A\subeq X$ is $[A]\_{\E\_T}\coloneqq\bigcup_{x\in A}[x]\_{\E\_T}$.
* A subset $A\subeq X$ is said to be _$T$-forward recurrent_ if for each $x\in X$, we have $T^n(x)\in A$ for some $n\geq1$.

## Ergodic transformations

The measure-theoretic analogue for transitivity of group actions is _ergodicity_:

\begin{definition}

A system $(X,\mu,T)$ is _ergodic_ if each $\E_T$-invariant measurable set $A\subeq X$ is either null or conull.

\end{definition}

\begin{example}[\ref[Irrational rotations]{irrational_rotation}]

On the circle $S^1\coloneqq\R/\Z$ equipped with its \ref[Haar measure]{haar_measure} (given by \ref[pushing forward]{push_forward_measure} the \ref[Lebesgue measure]{measures_on_reals#lebesgue_measure} under the \ref[exponential map]{exponential_map}), the _irrational rotation_ $R_\alpha:x\mapsto x+\alpha$ (mod $1$) is an ergodic pmp transformation.

\end{example}

\begin{example}[Bernoulli shifts]

On $2^\N$ equipped with the Bernoulli$\_{1/2}$ measure $\mu$, the _shift map_ $\sigma(x\_n)\coloneqq(x\_{n+1})$ is \ref[mixing]{mixing_transformation}, hence ergodic. \TODO[link to Baker's map]

\end{example}

# Properties

\begin{fact}[\ref[Poincaré Recurrence]{poincares_recurrence_theorem}]\label{poincares_recurrence_theorem}

Every measurable set $A\subeq X$ is $T$-forward recurrent on a conull set $A_0\subeq_\mu A$.

\end{fact}

\begin{fact}[Characterizations of ergodicity]

The following are equivalent for a pmp transformation $T:X\to X$.
1. $T$ is ergodic: every $T$-invariant measurable set $A\subeq X$ is either null or conull.
2. (\ref[Functional]{ergodic_characterization_functional}). Every $T$-invariant measurable function $f:X\to Y$ to a \ref[standard Borel space]{measurable_space#borel-sigma-algebra} is constant a.e.
3. (\ref[Density]{ergodic_characterization_density}). For every positively-measured subset $A\subeq X$, the saturation $[A]_{\E_T}$ is $\mu$-conull.
4. (\ref[Pointwise Ergodic Theorem]{pointwise_ergodic_theorem}). For all $f\in L^1(X,\mu)$, we have $\lim_n\frac{1}{n}\sum_{i<n}f(T^i(x))=\int f\\,\d\mu$ for a.e. $x\in X$.

\end{fact}
