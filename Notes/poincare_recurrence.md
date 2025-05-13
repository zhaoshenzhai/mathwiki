---
title: Poincaré Recurrence
date: 2025-05-13
tags: [In_Progress]
---

# Motivation and Statement

The _Poincaré Recurrence Theorem_ asserts that certain dynamical systems will always return to the initial state of the system. Here, we state and prove the measure-theoretic version.

## Statement and proof

Let $(X,\mc{B},\mu)$ be a probability \ref[measure space]{measure} and let $T:X\to X$ be pmp.

\begin{definition}

A set $A\subeq X$ is _forward recurrent_ if for each $x\in A$, there exists $n\geq1$ such that $T^n(x)\in A$.

\end{definition}

\begin{theorem}[Poincaré Recurrence]\label{poincare_recurrence}

Every measurable set $A\subeq X$ is a.e.-forward recurrent.

\end{theorem}

A set $W\subeq X$ is said to be _wandering_ if the family $\l\\{T^{-n}(W)\r\\}_{n<\omega}$ is pairwise-disjoint

\begin{lemma}\label{wandering_null}

Every wandering measurable set $W\subeq X$ is $\mu$-null.

\end{lemma}

\begin{proof}

Since $T$ is pmp, we see that $\mu(T^{-n}(W))=\mu(W)$ for each $n<\omega$. Since $W$ is wandering, we have
\begin{equation*}
    \sum\nolimits_{n<\omega}\mu(W)=\sum\nolimits_{n<\omega}\mu(T^{-n}(W))=\mu\l(\bigsqcup\nolimits_{n<\omega}T^{-n}(W)\r)\leq\mu(X)<\infty,
\end{equation*}
and hence $\mu(W)=0$.<span style="float:right;">$\square$</span>

\end{proof}

<div class="space"></div>

\begin{proof}[of Theorem \iref{poincare_recurrence}]

Let $W\coloneqq\bigcap_{n\geq1}\l\\{x\in A\st T^n(x)\not\in A\r\\}$, which is clearly measurable. Then $W\cap T^{-n}W=\e$ for each $n\geq1$, since if $x\in W$, then $x=T^n(T^{-n}(x))\in A$, and hence $T^{-n}(x)\not\in W$. Thus $W$ is wandering, and so $Z\coloneqq\bigcup_{n<\omega}T^{-n}W$ is null by Lemma \iref{wandering_null}. Set $A_0\coloneqq A\comp Z=_\mu A$, which is clearly forward recurrent.<span style="float:right;">$\blacksquare$</span>

\end{proof}

\begin{corollary}

For every measurable set $A\subeq X$, there exists $A\_0=_\mu A$ such that $[A\_0]\_{\E\_T}=\bigcup\_{n<\omega}T^{-n}(A\_0)$.

\end{corollary}

\begin{proof}

Let $A_0=_\mu A$ be as forward recurrent as above. If $x\in X$ is such that $T^n(x)=T^m(y)$ for some $y\in A_0$, then iteratively applying forward recurrence to $y$ furnishes some $k<\omega$ such that $T^{n+k}(x)=T^{m+k}(y)\in A_0$.<span style="float:right;">$\blacksquare$</span>

\end{proof}
