---
title: Pointwise Ergodic Theorem
date: 2025-05-13
tags: [In_Progress]
---

Let $(X,\mu,T)$ be a \ref[measure-preserving dynamical system]{measure-preserving_dynamical_system}. Birkhoff's _Ergodic Hypothesis_ states that the time and space averages for certain functions $f\in L^1(X,\mu)$ coincide. It turns out that this hypothesis holds iff $T$ is \ref[ergodic]{ergodic}, which we prove below following \cite{Tse22}.

# Statement and Proof

\begin{theorem}[Birkhoff's Pointwise Ergodic Theorem]\label{pointwise}

Let $(X,\mu)$ be a standard probability space and let $T:X\to X$ be pmp. If $T$ is ergodic, then for every $f\in L^1(X,\mu)$, we have $\lim_nA_n^Tf=_\mu\int f\\,\d\mu$.

\end{theorem}

\begin{corollary}[\ref{characterizations_of_ergodicity#pointwise-ergodic-theorem}]

For any pmp transformation $T:X\to X$, the following are equivalent.
1. $T$ is ergodic.
2. For all $f\in L^1(X,\mu)$, we have $\lim_nA_n^Tf=_\mu\int f\\,\d\mu$.
3. For all $f\in L^\infty(X,\mu)$, we have $\lim_nA_n^Tf=_\mu\int f\\,\d\mu$.
4. For all measurable sets $B\subeq X$, we have $|\\{i<n\st T^ix\in B\\}|/n\to\mu(B)$ for $\mu$-a.e. $x\in X$.

\end{corollary}

\begin{proof}[of Theorem \iref{pointwise}]

\TODO

\end{proof}

# Generalizations

\TODO
