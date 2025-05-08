---
title: Borel-Cantelli Lemmas
date: 2025-05-08
tags: [In_Progress]
---

# Motivation and Statements

## Setup

Let $(X,\mc{B},\mu)$ be a \ref[measure space]{measure} and let $\phi(x)$ be a property of points $x\in X$. We say that $\phi$ holds _$\mu$-almost everywhere_ if $\l\\{x\in X\st\phi(x)\r\\}$ is $\mu$-conull.

<br>

&emsp;&emsp;For a sequence $(A_n)_{n<\omega}$ of subsets of $X$, define
\begin{equation*}
    \ex^\infty n<\omega(x\in A\_n)\ \ \ \ \\,\colon\\!\Leftrightarrow\ \ \ \ x\in\bigcap\_{m<\omega}\bigcup\_{n\geq m}A\_n\eqqcolon\limsup\_{n\to\infty}A\_n
\end{equation*}
for each $x\in X$, in which case we say that $x\in A_n$ for _infinitely-many_ $n<\omega$.

## Statements and proofs

Let $(A_n)_{n<\omega}$ be a sequence of $\mu$-measurable sets.

\begin{theorem}[Borel-Cantelli]

If $\sum_n\mu(A_n)<\infty$, then $\mu$-almost every $x\in X$ lives in finitely-many $A_n$'s, i.e., $\mu(\limsup\_{n\to\infty}A\_n)=0$.

\end{theorem}

\begin{proof}

Let $B\coloneqq\limsup_{n\to\infty}A_n$, which is clearly $\mu$-measurable, and let $B_m\coloneqq\bigcup_{n\geq m}A_n$, so that $B=\bigcap_mB_m$, and hence $\mu(B)\leq\mu(B_m)$ for each $m<\omega$ by \ref[monotonicity]{basic_properties_measures#monotonicity_of_measures}. Note that
\begin{equation*}
    \lim\_{m\to\infty}\mu(B\_m)=\lim\_{m\to\infty}\mu\l(\bigcup\nolimits\_{n\geq m}A\_n\r)\leq\lim\_{m\to\infty}\sum\_{n\geq m}\mu(A\_n)=0
\end{equation*}
by assumption, so $\mu(B)=0$ as desired.<span style="float:right;">$\blacksquare$</span>

\end{proof}

\begin{theorem}[Measure Compactness]

If $\mu$ is a \ref[finite]{measure#finiteness-conditions} measure and there is some $\epsilon>0$ such that $\mu(A_n)\geq\epsilon$ for all $n<\omega$, then at-least an $\epsilon$-measure set of $x\in X$ lives in infinitely-many $A_n$'s, i.e., $\mu(\limsup_{n\to\infty}A_n)\geq\epsilon$.

\end{theorem}

\begin{proof}

With the same notation above, we have $\mu(B)=\lim_{m\to\infty}\mu(B_m)$ by \ref[continuity]{basic_properties_measures#continuity_of_measures_decreasing}. Now,
\begin{equation*}
    \mu(B_m)=\mu\l(\bigcup\nolimits_{n\geq m}A_n\r)\geq\mu(A_m)\geq\epsilon
\end{equation*}
for each $m<\omega$, so $\mu(B)\geq\epsilon$ too as desired.<span style="float:right;">$\blacksquare$</span>

\end{proof}

## Generalization

\TODO

# Applications

## Vanishing sequences

\TODO

## Measure exhaustion

\TODO
