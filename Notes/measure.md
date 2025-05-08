---
title: Measure
date: 2025-05-02
tags: [Measure_theory]
---

# Motivation and Definition

We would like a map $\mu:\pow(\R^n)\to[0,\infty]$, called a _measure_, that assigns to each $A\subeq\R^n$ its 'volume' that is invariant under the \ref[action]{group_action} of $\Isom\R^n$. This turns out to be impossible (for good reason; see \ref[non-measurable sets of $\R$]{measures_on_reals#non-measurability}), so we instead restrict to special subsets of $\R^n$ which are in some sense 'constructible'.

<br>

&emsp;&emsp;If anything, \ref[open]{topology} sets in $\R^n$ (or for convenience, in $[0,1]$) must be measurable, and hence so must their complements and (finite) unions. We can strengthen this by requiring that countable unions of measurable sets remain measurable, for then we can take limits.

<br>

&emsp;&emsp;This is precisely the notion of a \ref[$\sigma$-algebra]{sigma_algebra}, so we define a _measurable space_ to be a set $X$ equipped with a $\sigma$-algebra $\mc{B}\subeq\pow(X)$.

\begin{definition}

A _measure_ on a measurable space $(X,\mc{B})$ is a map $\mu:\mc{B}\to[0,\infty]$ such that $\mu(\em)=0$ and $\mu(\bigsqcup_nA_n)=\sum_n\mu(A_n)$ for any pairwise-disjoint countable family $(A_n)_{n<\omega}$ of sets in $\mc{B}$. We call the triple $(X,\mc{B},\mu)$ a _measure space_.

\end{definition}

&emsp;&emsp;If $X$ is topologized, we usually define measures $\mu$ on the \ref[Borel $\sigma$-algebra]{sigma_algebra#borel-sigma-algebra} $\mc{B}(X)$ with respect to the given topology, in which case we say that $\mu$ is a _Borel measure_.

\begin{example}[Lebesgue measure]

There is a unique measure $\lambda:\mc{B}(\R)\to[0,\infty]$, called the _\ref[Lebesgue measure]{measures_on_reals#lebesgue_measure}_, such that $\lambda([a,b])=b-a$ for each $a,b\in\R$ with $a\leq b$; this measure is clearly invariant under $\Isom\R$. All \ref[Borel measures on $\R$]{measures_on_reals#borel_measures} can be classified.

\end{example}

\begin{example}[Bernoulli$(p)$ measures]

Let $p\in[0,1]$ and equip $2^\omega$ with the \ref[product topology]{product_topology}. There is a unique measure $\mu_p:\mc{B}(2^\omega)\to[0,1]$, called the _\ref[Bernoulli$(p)$ measure]{bernoulli_p_measure}_, such that $\mu_p([w])=p^{n_1}(1-p)^{n_0}$ where $n_i$ is the number of occurrences of $i\in\l\\{0,1\r\\}$ in $w$ and $[w]$ is the set of all sequences in $2^\omega$ containing $w$ as a prefix. Intuitively, $\mu_p$ measures the probability of $p$-weighted coin tosses, repeated countably-many times.

\end{example}

## Finiteness conditions

A measure $\mu$ is said to be a _probability measure_ if $\mu(X)=1$, _finite_ if $\mu(X)<\infty$, and _$\sigma$-finite_ if there is a partition $X=\bigsqcup_nX_n$ where each $\mu(X_n)<\infty$.

>Every finite measure can be normalized to a probability measure, and since $\sigma$-finite measures are built out of finite ones, proving results about $\sigma$-finite measures reduce, in principle, to the case of probability measures.

These finiteness conditions can be extended to _\ref[premeasures]{caratheodory_extension_theorem#premeasure}_, i.e., countably additive maps $\mu_0:\mc{A}\to[0,\infty]$ such that $\mu_0(\em)=0$, defined on an algebra $\mc{A}$, which allow us to define measures on \ref[$\l\langle\mc{A}\r\rangle_\sigma$]{sigma_algebra#generation} using the following theorem; this is how $\lambda$ and $\mu_p$ are defined.

\begin{fact}[\ref[Carathéodory's Extension Theorem]{caratheodory_extension_theorem}]

Every premeasure $\mu_0:\mc{A}\to X$ on an algebra $\mc{A}$ extends to a measure $\mu:\l\langle\mc{A}\r\rangle_\sigma\to X$. If $\mu_0$ is $\sigma$-finite, then this extension is unique, and is also $\sigma$-finite.

\end{fact}

## Measurability

A subset $Z\subeq X$ is said to be _$\mu$-null_ if $Z\subeq Z'$ for some $Z'\in\mc{B}$ such that $\mu(Z')=0$. We write $\Null_\mu$ for the collection of all $\mu$-null sets in $X$.

\begin{definition}

A subset $A\subeq X$ is said to be _$\mu$-measurable_ if $A=B\cup Z$ for some $B\in\mc{B}$ and some $Z\in\Null_\mu$. We write $\Meas_\mu$ for the collection of all $\mu$-measurable sets.

\end{definition}

\begin{fact}[\ref{complete_measure}]

For any measure $\mu$, we have $\Meas\_\mu=\l\langle\mc{B}\cup\Null\_\mu\r\rangle\_\sigma$.

\end{fact}

\begin{fact}[\ref[Completions]{complete_measure}]

Every measure $\mu$ admits a unique extension to a measure $\bar{\mu}$ on $\Meas_\mu$, defined by $\bar{\mu}(B\cup Z)\coloneqq\mu(B)$, and this measure satisfies $\Meas\_{\bar{\mu}}=\Meas\_\mu$.

\end{fact}

The unique measure $\bar{\mu}$ is called the _completion_ of $\mu$, and a measure $\mu$ is _complete_ if $\bar{\mu}=\mu$. For convenience, we will always tacitly complete $\mu$ to $\bar{\mu}$; so, really, $\lambda$ and $\mu_p$ are extended to their completions.

# Properties of Measures

Throughout, let $(X,\mc{B},\mu)$ be a measure space.

## Computational properties

We state the most basic properties of measures.

\begin{lemma}[Monotonicity]\label{monotonicity}

For any $A,B\in\mc{B}$ with $A\subeq B$, we have $\mu(A)\leq\mu(B)$.

\end{lemma}

\begin{proof}

Observe that $\mu(B)=\mu(A\sqcup(B\comp A))=\mu(A)+\mu(B\comp A)\geq\mu(A)$.<span style="float:right;">$\square$</span>

\end{proof}

\begin{fact}[Continuity]\label{continuity}

Let $(A_n)\_{n<\omega}$ be a sequence in $\mc{B}$.
1. If $(A_n)\_{n<\omega}$ is increasing, then $\mu(\bigcup_nA_n)=\lim_{n\to\infty}\mu(A_n)$.
2. If $(A_n)\_{n<\omega}$ is decreasing and $\mu(A_0)<\infty$, then $\mu(\bigcap_nA_n)=\lim_{n\to\infty}\mu(A_n)$.

\end{fact}

\begin{proof}

For (1), disjointify $(A_n)$ to $(A_k')$ given by $A_0'\coloneqq A_0$ and $A_k'\coloneqq A_k\comp A_{k-1}$, so that
\begin{equation*}
    \mu\l(\bigsqcup\nolimits_kA_k\r)=\mu\l(\bigsqcup\nolimits_kA_k'\r)=\sum\nolimits_k\mu(A_k')=\lim_{n\to\infty}\sum\nolimits_{k=1}^n\mu(A_k')=\lim_{n\to\infty}\mu(A_n).
\end{equation*}

For (2), set $B\_n\coloneqq A\_0\comp A\_n$ so that $\bigcup\_nB\_n=A\_0\comp A\_\infty$ where $A\_\infty\coloneqq\bigcap\_nA\_n$. Then $(B\_n)\_{n<\omega}$ is increasing, so by (1), we have
\begin{equation*}
    \mu\l(\bigcup\nolimits\_nB\_n\r)=\lim\_{n\to\infty}\mu(B\_n)=\mu(A\_0)-\lim\_{n\to\infty}\mu(A\_n)
\end{equation*}
But we also have $\mu(\bigcup_nB_n)=\mu(A_0\comp A_\infty)=\mu(A_0)-\mu(A_\infty)$, so since $\mu(A_0)<\infty$, we can cancel to obtain the desired result.<span style="float:right;">$\square$</span>

\end{proof}

\begin{fact}[\ref[Borel-Cantelli]{borel_cantelli_lemmas}]

Let $(A_n)_{n<\omega}$ be a sequence of $\mu$-measurable sets.
1. If $\sum_n\mu(A_n)<\infty$, then $\mu$-almost every $x\in X$ lives in at-most finitely-many $A_n$'s.
2. If $\mu(X)<\infty$ and there exists $\epsilon>0$ such that $\mu(A_n)\geq\epsilon$ for all $n<\omega$, then at least an $\epsilon$-measure set of $x\in X$ lives in infinitely-many $A_n$'s.

\end{fact}

## \ref[Atomless]{atom_measure_theory} measures

A $\mu$-measurable set $A\subeq X$ is an _atom_ if there is no $B\subeq A$ such that $0<\mu(B)<\mu(A)$. A measure $\mu$ is said to be _atomless_ if there are no atoms.

\begin{example}

For any $x\in X$, the _Dirac measure concentrated at $x$_ is the atomic measure $\delta_x:\pow(X)\to\l\\{0,1\r\\}$ defined by $\delta_x(A)\coloneqq1$ iff $x\in A$, and $\delta_x(A)\coloneqq0$ otherwise.

\end{example}

It turns out that Dirac measures are 'the only' obstructions preventing $\mu$ to be atomless.

\begin{fact}[\ref{atom_measure_theory}]

If $\mu$ is $\sigma$-finite and $\mc{B}$ is countably \ref[generated]{sigma_algebra#generation} and separates points, then
1. $\mu=\mu'+\sum\_{n<\omega}a\_n\delta\_{x\_n}$ for some atomless measure $\mu'$, some $a_n\geq0$, and some $x_n\in X$.
2. Every atom $A\in\mc{B}$ is a singleton.

\end{fact}

\begin{fact}[\ref[Sierpinski's Theorem]{sierpinski}]

If $\mu$ is atomless, then $\mu$ attains every value in the interval $[0,\mu(X)]$, i.e., for each $m\in[0,\mu(X)]$, there exists $A\in\mc{B}$ such that $\mu(A)=m$.

\end{fact}

## Regularity and tightness

\TODO
