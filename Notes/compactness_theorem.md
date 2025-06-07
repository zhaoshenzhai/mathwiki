---
title: Compactness Theorem
date: 2025-06-07
tags: [In_Progress]
---

# Statement and Proofs

We present the most fundamental result in model theory. Let $L$ be a \ref[first-order language]{first-order_language}. An \ref[$L$-theory]{theory} $T$ is said to be _satisfiable_ if there is an \ref[$L$-structure]{model} $M$ such that $M\models T$.

\begin{theorem}[Compactness Theorem; Gödel 1930]\label{compactness}

An $L$-theory $T$ is satisfiable iff every finite subtheory of $T$ is satisfiable. In this case, $T$ has a model of cardinality at-most $|L|+\aleph_0$.

\end{theorem}

## Proof via completeness

Gödel's original proof uses the following corollary of his Completeness Theorem:

\begin{fact}[\ref[Completeness Theorem]{completeness_theorem}]\label{satisfiable_iff_consistent}

An $L$-theory $T$ is satisfiable iff it is (syntactically-)consistent.

\end{fact}

\begin{proof}

\iref{satisfiable_iff_consistent} hi \iref{satisfiable_iff_consistent}

\end{proof}

## Proof via ultraproducts

\begin{proof}

\TODO[ultraproduct]

\end{proof}
