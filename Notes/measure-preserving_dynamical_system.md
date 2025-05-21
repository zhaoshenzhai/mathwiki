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

## Orbits and recurrence

Throughout, let $(X,\mu,T)$ be a measure-preserving dynamical system.

<br>

&emsp;&emsp;The _orbit equivalence relation_ of $T$ is the equivalence relation $\E_T\subeq X^2$ given by $x\E_Ty$ iff $T^n(x)=T^m(y)$ for some $n,m\in\N$. The _forward orbit_ of a point $x\in X$ is the set $\l\\{T^n(x)\r\\}_{n\in\N}$. A subset $A\subeq X$ is said to be _$T$-forward recurrent_ if for each $x\in X$, we have $T^n(x)\in A$ for some $n\geq1$.

\begin{fact}[\ref[Poincaré Recurrence]{poincare_recurrence_theorem}]\label{poincare_recurrence_theorem}

Every measurable set $A\subeq X$ is $T$-forward recurrent on a conull set $A_0\subeq_\mu A$.

\end{fact}

&emsp;&emsp;Let $E\subeq X^2$ be an \ref[equivalence relation]{equivalence_relation}. A set $A\subeq X$ is said to be _$E$-invariant_ if $A$ is a union of $E$-classes, and the _$E$-saturation_ of $A$ is $[A]\_E\coloneqq\bigcup\_{x\in A}[x]\_E$; clearly, $A$ is $E$-invariant iff $A=[A]\_E$. A function $f:X\to Y$ is said to be _$E$-invariant_ if $f$ is constant on each $E$-class.

<br>

&emsp;&emsp;For a pmp transformation $T$, we say that $A$ (resp. $f$) is _$T$-invariant_ if $A$ is $\E\_T$-invariant. The _$T$-saturation_ of $A$ is $[A]\_T\coloneqq[A]\_{\E\_T}=\bigcup_{n,m\in\Z}T^{-n}(T^{-m})(A)$, which is not _a priori_ measurable \TODO[it is?]. However,

\begin{corollary}[of Fact \iref{poincare_recurrence_theorem}]

For each measurable $A\subeq X$, there exists $A_0\subeq_\mu A$ such that $[A_0]_T=\bigcup_nT^{-n}(A_0)$.

\end{corollary}

# Ergodic transformations

The measure-theoretic analogue for transitivity of group actions of sets is _ergodicity_:

\begin{definition}

A system $(X,\mu,T)$ is _ergodic_ if each $\E_T$-invariant measurable set $A\subeq X$ is either null or conull.

\end{definition}

\begin{fact}[\ref{characterizations_of_ergodicity#basic-characterizations}]

A pmp transformation $T:(X,\mu)\to(X,\mu)$ is ergodic iff any of the following hold.
1. (Functional). Every $T$-invariant measurable function $f:X\to Y$ to a \ref[standard Borel space]{measurable_space#borel-sigma-algebra} is constant a.e.
2. (Density). For every positively-measured subset $A\subeq X$, the saturation $[A]_{\E_T}$ is $\mu$-conull.

\end{fact}

\begin{example}[\ref[Irrational rotations]{irrational_rotation}]

On the circle $S^1\coloneqq\R/\Z$ equipped with its \ref[Haar measure]{haar_measure} (given by \ref[pushing forward]{push_forward_measure} the \ref[Lebesgue measure]{measures_on_reals#lebesgue_measure} under the \ref[exponential map]{exponential_map}), the _irrational rotation_ $R_\alpha:x\mapsto x+\alpha$ (mod $1$) is an ergodic pmp transformation.

\end{example}

\begin{example}[Bernoulli shifts]

On $2^\omega$ equipped with the Bernoulli$\_{1/2}$ measure, the _shift map_ $s:(x\_n)\mapsto(x\_{n+1})$ is \ref[mixing]{mixing_transformation}, hence ergodic.

\end{example}
