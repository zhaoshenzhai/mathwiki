---
title: Measure
date: 2025-05-02
tags: [In_Progress]
---

# Motivation and Definition

\TODO[motivate]

A _measurable space_ is a set $X$ equipped with a \ref[$\sigma$-algebra]{sigma_algebra} $\mc{B}\subeq\pow(X)$.

\begin{definition}

A _measure_ on a measure space $(X,\mc{B})$ is a map $\mu:\mc{B}\to[0,\infty]$ such that $\mu(\em)=0$ and $\mu(\bigsqcup_nA_n)=\sum_n\mu(A_n)$ for any pairwise-disjoint family $(A_n)_{n<\omega}$.

\end{definition}

In the above notation, the triple $(X,\mc{B},\mu)$ is called a _measure space_.

\begin{definition}

A measure $\mu$ is said to be a _probability measure_ if $\mu(X)=1$, _finite_ if $\mu(X)<\infty$, and _$\sigma$-finite_ if there is a partition $X=\bigsqcup_nX_n$ where each $\mu(X_n)<\infty$.

\end{definition}

Note that every finite measure can be normalized to a probability measure, and since $\sigma$-finite measures are built out of finite ones, proving results about $\sigma$-finite measures reduce, in general, to the case of probability measures.

## Measurability

Throughout, let $(X,\mc{B},\mu)$ be a measure space.

\begin{definition}

A subset $Z\subeq X$ is said to be _$\mu$-null_ if $Z\subeq Z'$ for some $Z'\in\mc{B}$ such that $\mu(Z')=0$. We write $\Null_\mu$ for the collection of all $\mu$-null sets in $X$.

\end{definition}

\begin{definition}

A subset $A\subeq X$ is said to be _$\mu$-measurable_ if $A=B\cup Z$ for some $B\in\mc{B}$ and some $Z\in\Null_\mu$. We write $\Meas_\mu$ for the collection of all $\mu$-measurable sets.

\end{definition}

We summarize the properties of $\Meas_\mu$ as follows.

\begin{fact}

$\Meas\_\mu=\l\langle\mc{B}\cup\Null\_\mu\r\rangle\_\sigma$. Moreover, $\mu$ admits a unique extension to a measure $\bar{\mu}$ on $\Meas_\mu$, defined by $\bar{\mu}(B\cup Z)\coloneqq\mu(B)$, and this measure satisfies $\Meas\_{\bar{\mu}}=\Meas\_\mu$.

\end{fact}

# Properties of Measures

Throughout, let $(X,\mc{B},\mu)$ be a measure space.

\begin{lemma}[Monotonicity]\label{monotonicity_of_measures}

For any $A,B\in\mc{B}$ with $A\subeq B$, we have $\mu(A)\leq\mu(B)$.

\end{lemma}

\begin{proof}

Observe that $\mu(B)=\mu(A\sqcup(B\comp A))=\mu(A)+\mu(B\comp A)\geq\mu(A)$.<span style="float:right;">$\square$</span>

\end{proof}

\begin{lemma}[Continuity]\label{continuity_of_measures}

Let $(A_n)\_{n<\omega}$ be a sequence in $\mc{B}$.
1. If $(A_n)\_{n<\omega}$ is increasing, then $\mu(\bigcup_nA_n)=\lim_{n\to\infty}\mu(A_n)$.
2. If $(A_n)\_{n<\omega}$ is decreasing and $\mu(A_0)<\infty$, then $\mu(\bigcap_nA_n)=\lim_{n\to\infty}\mu(A_n)$.

\end{lemma}

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
2. (Measure compactness). If $\mu(X)<\infty$ and there exists $\epsilon>0$ such that $\mu(A_n)\geq\epsilon$ for all $n<\omega$, then at least an $\epsilon$-measure set of $x\in X$ lives in infinitely-many $A_n$'s.

\end{fact}

\begin{fact}[\ref[Carathéodory's Extension Theorem]{caratheodory_extension_theorem}]

Every $\sigma$-finite premeasure $\mu_0:\mc{A}\to X$ on an algebra $\mc{A}$ extends uniquely to a measure $\mu:\l\langle\mc{A}\r\rangle_\sigma\to X$, which is also $\sigma$-finite.

\end{fact}
