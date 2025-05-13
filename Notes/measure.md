---
title: Measure
date: 2025-05-02
tags: [Measure_theory]
---

# Definition and Examples

The notion of a _measure_ generalizes volume in $\R^n$ and provides a systematic and uniform way to assign 'weights' to certain subsets of a set $X$.

\begin{definition}[\cite{Tse23}, \cite{Fol99}]

A _measure_ on a \ref[measurable space]{measurable_space} $(X,\mc{B})$ is a map $\mu:\mc{B}\to[0,\infty]$ such that $\mu(\e)=0$ and $\mu(\bigsqcup_nA_n)=\sum_n\mu(A_n)$ for any pairwise-disjoint countable family $(A_n)_{n<\omega}$ of sets in $\mc{B}$.

<br>

&emsp;&emsp;We call the triple $(X,\mc{B},\mu)$ a _measure space_.

\end{definition}

\begin{example}[Counting measure]

For any set $X$, its power set $\pow(X)$ is a $\sigma$-algebra, on which we can define the _counting measure_ as $\mu(A)\coloneqq|A|$ if $A$ is finite and $\mu(A)\coloneqq\infty$ otherwise.

\end{example}

\begin{example}[Dirac measures]

For any $x\in X$, the _Dirac measure concentrated at $x$_ is the (atomic) measure $\delta_x:\pow(X)\to\l\\{0,1\r\\}$ defined by $\delta_x(A)\coloneqq1$ iff $x\in A$, and $\delta_x(A)\coloneqq0$ otherwise.

\end{example}

\begin{example}[Lebesgue measure]

There is a unique (Borel) measure $\lambda:\mc{B}(\R)\to[0,\infty]$, called the _\ref[Lebesgue measure]{measures_on_reals#lebesgue_measure}_, such that $\lambda([a,b])=b-a$ for each $a,b\in\R$ with $a\leq b$; this measure is clearly invariant under $\Isom\R$.

\end{example}

\begin{example}[Bernoulli$(p)$ measures]

Let $p\in[0,1]$ and equip $2^\omega$ with the \ref[product topology]{product_topology}. There is a unique (Borel) measure $\mu_p:\mc{B}(2^\omega)\to[0,1]$, called the _\ref[Bernoulli$(p)$ measure]{bernoulli_p_measure}_, such that $\mu_p([w])=p^{n_1}(1-p)^{n_0}$ where $n_i$ is the number of occurrences of $i\in\l\\{0,1\r\\}$ in $w$ and $[w]$ is the set of all sequences in $2^\omega$ containing $w$ as a prefix.

\end{example}

## Measurability

Let $(X,\mc{B},\mu)$ be a measure space. A set $Z\subeq X$ is _$\mu$-null_ if $Z\subeq Z'$ for some $Z'\in\mc{B}$ with $\mu(Z')=0$. We let $\Null_\mu$ denote the \ref[$\sigma$-ideal]{boolean_sigma_algebra#ideal} of $\mu$-measurable sets.

\begin{definition}

A set $A\subeq X$ is _$\mu$-measurable_ if $A=B\cup Z$ for some $B\in\mc{B}$ and some $Z\in\Null_\mu$.

\end{definition}

We write $\Meas_\mu$ for the collection of all $\mu$-measurable sets in $X$, and say that $\mu$ is _complete_ if $\mc{B}=\Meas_\mu$.

\begin{fact}[\ref{complete_measure}]

For any measure space $(X,\mc{B},\mu)$, the collection $\Meas\_\mu$ is the $\sigma$-algebra \ref[generated]{measurable_space#generation} by $\mc{B}\cup\Null_\mu$. Moreover, $\mu$ admits a unique extension to a complete measure $\bar{\mu}$ on $\Meas_\mu$, defined by $\bar{\mu}(B\cup Z)\coloneqq\mu(B)$.

\end{fact}

&emsp;&emsp;A function $f:X\to Y$ between measure spaces $(X,\mc{B},\mu)$ and $(Y,\mc{C},\nu)$ is said to be _measure-preserving_ if it is a \ref[$(\mc{B},\mc{C})$-measurable map]{measurable_space#measurable-functions} such that, on a $\mu$-conull set $X_0\subeq X$, we have $\mu(\l.f\r|_{X_0}^{-1}(C))=\nu(C)$ for each $C\in\mc{C}$.

# Classes of Measures

## Finiteness conditions

A measure $\mu$ is said to be a _\ref[probability]{probability_space} measure_ if $\mu(X)=1$, _finite_ if $\mu(X)<\infty$, and _$\sigma$-finite_ if there is a partition $X=\bigsqcup_{n<\omega}X_n$ with each $\mu(X_n)<\infty$.

\begin{fact}[\ref[Carathéodory's Extension Theorem]{caratheodory_extension_theorem}]

Every premeasure $\mu_0:\mc{A}\to X$ on an algebra $\mc{A}$ extends to a measure $\mu:\l\langle\mc{A}\r\rangle_\sigma\to X$. If $\mu_0$ is $\sigma$-finite, then this extension is unique, and is also $\sigma$-finite.

\end{fact}

## \ref[Atomless]{atom_measure_theory} measures

A measurable set $A\in\mc{B}$ is said to be an _atom_ if for each measurable $B\subeq A$, either $\mu(B)=0$ or $\mu(B)=\mu(A)$. A measure $\mu$ is said to be _atomic_ if there is an atom, and _atomless_ otherwise.

\begin{fact}[\ref{atom_measure_theory}]

Let $\mu$ be $\sigma$-finite. If $\mc{B}$ is countably \ref[generated]{measurable_space#generation} and separates points, then
1. Every atom in $\mc{B}$ is a singleton, and there are countably many such atoms, say $\l\\{\l\\{x_n\r\\}\r\\}_{n<\omega}$.
2. There is a decomposition $\mu=\mu\_0+\sum\_{n<\omega}a\_n\delta\_{x\_n}$ for some atomless measure $\mu_0$ and some $a_n\in\R_{\geq0}$.

\end{fact}

\begin{fact}[\ref[Sierpinski's Theorem]{sierpinski}]

If $\mu$ is atomless, then $\mu$ attains every value in $[0,\mu(X)]$.

\end{fact}

## Borel measures

If $X$ is equipped with a topology $\mc{T}$, we usually define measures $\mu$ on the \ref[Borel $\sigma$-algebra]{measurable_space#borel-sigma-algebra} $\mc{B}(X)$ with respect to $\mc{T}$, in which case we say that $\mu$ is a _Borel measure_.

\begin{fact}[\ref[Regularity and Tightness]{regularity_and_tightness_of_Borel_measures}]

\TODO

\end{fact}

&emsp;&emsp;A _standard measure space_ is a $\sigma$-finite measure space $(X,\mc{B},\mu)$ such that $(X,\mc{B})$ is \ref[standard Borel space]{measurable_space#borel-sigma-algebra}.

\begin{fact}[\ref[Measure Isomorphism Theorem]{measure_isomorphism_theorem}]

Any two atomless standard probability spaces are isomorphic (via a measure-preserving isomorphism). In particular, they are all isomorphic to $([0,1],\lambda)$.

\end{fact}

# Properties of Measures

Throughout, let $(X,\mc{B},\mu)$ be a measure space.

\begin{fact}[\ref[Continuity]{continuity_of_measures}]

Let $(A_n)\_{n<\omega}$ be a sequence in $\mc{B}$.
1. If $(A_n)\_{n<\omega}$ is increasing, then $\mu(\bigcup_nA_n)=\lim_{n\to\infty}\mu(A_n)$.
2. If $(A_n)\_{n<\omega}$ is decreasing and $\mu(A_0)<\infty$, then $\mu(\bigcap_nA_n)=\lim_{n\to\infty}\mu(A_n)$.

\end{fact}

\begin{fact}[\ref[Borel-Cantelli]{borel_cantelli_lemmas}]

Let $(A_n)_{n<\omega}$ be a sequence of $\mu$-measurable sets.
1. If $\sum_n\mu(A_n)<\infty$, then $\mu$-almost every $x\in X$ lives in at-most finitely-many $A_n$'s.
2. If $\mu(X)<\infty$ and there exists $\epsilon>0$ such that $\mu(A_n)\geq\epsilon$ for all $n<\omega$, then at least an $\epsilon$-measure set of $x\in X$ lives in infinitely-many $A_n$'s.

\end{fact}

# Constructions on Measures

## The Lebesgue Integral

\TODO

## Products of measures

\TODO
