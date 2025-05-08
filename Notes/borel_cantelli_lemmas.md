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

\TODO

\end{proof}

\begin{theorem}[Measure Compactness]

If $\mu$ is a \ref[finite]{measure#finiteness-conditions} measure and there is some $\epsilon>0$ such that $\mu(A_n)\geq\epsilon$ for all $n<\omega$, then at-least an $\epsilon$-measure set of $x\in X$ lives in infinitely-many $A_n$'s, i.e., $\mu(\limsup_{n\to\infty}A_n)\geq\epsilon$.

\end{theorem}

\begin{proof}

\TODO

\end{proof}

## Generalization

\TODO

# Application: Measure Exhaustion
