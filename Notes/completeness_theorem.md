---
title: Gödel's Completeness Theorem
date: 2025-06-27
tags: [In_Progress]
---

# Statement and Corollaries

Let $L$ be a \ref[first-order language]{first-order_language}.

\begin{theorem}[Gödel]

Every consistent $L$-theory is satisfiable.

\end{theorem}

\begin{corollary}[Syntax $=$ Semantics]\label{syntax_semantics}

For any $L$-theory $T$ and $L$-sentence $\sigma$, we have $T\proves\sigma$ iff $T\models\sigma$.

\end{corollary}

\begin{proof}[of Corollary \iref{syntax_semantics}]

The forward direction is soundness of our proof system. Conversely, if $T\not\proves\sigma$, then $T$ is consistent by Fact \TODO.

\end{proof}
