---
title: Borel-Cantelli Lemmas
date: 2025-05-08
tags: [In_Progress]
---

# Motivation and Statements

## Setup

Let $(X,\mc{B},\mu)$ be a \ref[measure space]{measure} and let $\phi(x)$ be a property of points $x\in X$. We say that $\phi$ holds _$\mu$-almost everywhere_ if $\l\\{x\in X\st\phi(x)\r\\}$ is $\mu$-conull. For a sequence $(A_n)_{n<\omega}$ of subsets of $X$, define
\begin{equation*}
    \ex^\infty n<\omega(x\in A\_n)\ \ \ \ \\,\colon\\!\Leftrightarrow\ \ \ \ x\in\bigcap\_{m<\omega}\bigcup\_{n\geq m}A\_n\eqqcolon\limsup\_{n\to\infty}A\_n
\end{equation*}
for each $x\in X$, in which case we say that $x\in A_n$ for _infinitely-many_ $n<\omega$.

## Statements and proofs

Let $(A\_n)\_{n<\omega}$ be a sequence of $\mu$-measurable sets and set $B\coloneqq\limsup\_{n\to\infty}A\_n$.

\begin{theorem}[Borel-Cantelli]

If $\sum_n\mu(A_n)<\infty$, then $\mu(B)=0$, i.e., for $\mu$-almost every $x\in X$, there is only finitely-many $n<\omega$ such that $x\in A_n$.

\end{theorem}

\begin{proof}

Let $B_m\coloneqq\bigcup_{n\geq m}A_n$, so that $B=\bigcap_mB_m$. Hence $\mu(B)\leq\mu(B_m)$ for each $m<\omega$, but since
\begin{equation*}
    \lim\_{m\to\infty}\mu(B\_m)=\lim\_{m\to\infty}\mu\l(\bigcup\nolimits\_{n\geq m}A\_n\r)\leq\lim\_{m\to\infty}\sum\_{n\geq m}\mu(A\_n)=0
\end{equation*}
by assumption, we have $\mu(B)=0$ as desired.<span style="float:right;">$\blacksquare$</span>

\end{proof}

\begin{theorem}[Measure Compactness]

If $\mu$ is \ref[finite]{measure#finiteness-conditions} and there exists some $\epsilon>0$ such that $\mu(A_n)\geq\epsilon$ for all $n<\omega$, then $\mu(B)\geq\epsilon$, i.e., at-least an $\epsilon$-measure set of $x\in X$ lives in infinitely-many $A_n$'s.

\end{theorem}

\begin{proof}

With the above notation, we have $\mu(B)=\lim_{m\to\infty}\mu(B_m)$ by \ref[continuity]{continuity_of_measures}. Now,
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
