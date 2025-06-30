---
title: Consistent Theory
date: 2025-06-27
tags: [In_Progress]
---

Let $L$ be a \ref[first-order language]{first-order_language}.

\begin{definition}

An \ref[$L$-theory]{theory} $T$ is said to be _consistent_ if there is no $L$-sentence $\sigma$ such that $T\proves\sigma\land\lnot\sigma$.

\end{definition}

\begin{fact}[\ref[Gödel's Completeness Theorem]{completeness_theorem}]

Every consistent $L$-theory $T$ is satisfiable.

\end{fact}

\begin{fact}[\ref[Characterizations of consistency]{characterization_consistency}]

The following are equivalent for an $L$-theory $T$.
1. $T$ is consistent.
2. $T\not\proves\bot$, where $\bot\coloneqq\ex x\lnot(x=x)$.
3. $T\not\proves\sigma$ for some $L$-sentence $\sigma$.

\end{fact}

\begin{fact}[\ref[Extending consistent theories]{extending_consistent_theories}]

Let $T$ be an $L$-theory.
1. For any $L$-sentence $\sigma$, the theory $T\cup\l\\{\sigma\r\\}$ is inconsistent iff $T\proves\lnot\sigma$.
2. If $T$ is consistent, then for any $L$-sentence $\sigma$, one of $T\cup\l\\{\sigma\r\\}$ and $T\cup\l\\{\lnot\sigma\r\\}$ is consistent.
3. Every consistent $L$-theory $T$ admits a consistent completion $\bar{T}\supseteq T$.

\end{fact}
