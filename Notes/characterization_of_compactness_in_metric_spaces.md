---
title: Characterization of Compactness in Metric Spaces
date: 2025-06-19
tags: [In_Progress]
---

# Statement and Proofs

\begin{theorem}

The following are equivalent for a metric space $X$.
1. $X$ is compact: every open cover of $X$ admits a finite subcover.
2. $X$ is sequentially-compact: every sequence in $X$ admits a convergent subsequence.
3. (Heine-Borel). $X$ is complete and totally-bounded.

\end{theorem}

We prove this by showing that (1) $\Rightarrow$ (2) $\Rightarrow$ (3) $\Rightarrow$ (1). Henceforth, let $X$ be a metric space.

\begin{lemma}

If $X$ is compact, then every sequence in $X$ admits a convergent subsequence.

\end{lemma}

\begin{proof}

If $(x_n)$ is a sequence in $X$ with no convergent subsequence, then for each $x\in X$, there is a ball $B_x$ centered at $x$ containing only finitely-many $x_n$. Clearly $\l\\{B_x\r\\}_{x\in X}$ is an open cover of $X$, which admits no finite subcover.<span style="float:right;">$\blacksquare$</span>

\end{proof}

\begin{fact}[\ref{}]\label{cauchy}

If $(x_n)$ is a Cauchy sequence in $X$ with a convergent subsequence, then $(x_n)$ converges.

\end{fact}

\begin{lemma}

If $X$ is not complete, then it is not sequentially-compact.

\end{lemma}

\begin{proof}

Take a Cauchy sequence $(x_n)$ in $X$ with no limit, which admits no convergent subsequence by Fact \iref{cauchy}.<span style="float:right;">$\blacksquare$</span>

\end{proof}

\begin{lemma}

If $X$ is not totally-bounded, then it is not sequentially-compact.

\end{lemma}

\begin{proof}

Fix $x_0\in X$ and let $\epsilon>0$ be such that $X$ cannot be covered by finitely-many $\epsilon$-balls, so we can recursively pick $x_{n+1}\coloneqq X\comp\bigcup_{i\leq n}B_\epsilon(x_i)$. Then $d(x_n,x_m)\geq\epsilon$ for all $n,m\in\N$, so $(x_n)$ admits not convergent subsequence.<span style="float:right;">$\blacksquare$</span>

\end{proof}

\begin{lemma}

If $X$ is complete and totally-bounded, then $X$ is compact.

\end{lemma}

\begin{proof}

Suppose towards a contradiction that there is an open cover $\l\\{U_\alpha\r\\}$ of $X$ with no finite subcover. Cover $X$ by finitely-many balls of radius $2^{-0}$, at least one of which cannot be covered by finitely-many $U_\alpha$'s; choose one such ball $B_1(x_0)$. Again, we cover $B_1(x_0)$ by finitely-many balls of radius $2^{-1}$ whose centers are less than $2^{-0}+2^{-1}$ away from $x_0$, and choose one such ball $B_{2^{-1}}(x_1)$ not covered by finitely-many $U_\alpha$'s.

<br>

&emsp;&emsp;Continuing this way furnishes a sequence $(x_n)$ in $X$ such that each ball $B_{2^{-n}}(x_n)$ cannot be covered by finitely-many $U_\alpha$'s and $d(x_n,x_{n+1})<2^{-n}+2^{-(n+1)}$. Thus $(x_n)$ is Cauchy, so it converges to some $x\in X$. Choose $\epsilon>0$ such that $B_\epsilon(x)\subeq U_\alpha$ for some $\alpha$ and note that $B_{2^{-n}}(x_n)\subeq B_\epsilon(x)$ for sufficiently large $n\in\N$, a contradiction.<span style="float:right;">$\blacksquare$</span>

\end{proof}
