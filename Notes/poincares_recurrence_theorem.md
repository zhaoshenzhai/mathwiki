---
title: Poincaré's Recurrence Theorem
date: 2025-05-13
tags: [In_Progress]
---

# Statement and Proof

Let $(X,\mu,T)$ be a \ref[measure-preserving dynamical system]{measure-preserving_dynamical_system}. A set $A\subeq X$ is _$T$-forward recurrent_ if for each $x\in A$, there exists $n\geq1$ such that $T^n(x)\in A$.

\begin{theorem}[Poincaré]\label{poincare_recurrence}

Every measurable set $A\subeq X$ is $T$-forward recurrent on a conull set $A_0\subeq_\mu A$.

\end{theorem}

&emsp;&emsp;We prove this following \cite{Tse22}. A set $W\subeq X$ is _wandering_ if the family $\l\\{T^{-n}(W)\r\\}_{n<\omega}$ is pairwise-disjoint.

\begin{lemma}\label{wandering_null}

Every wandering measurable set $W\subeq X$ is $\mu$-null.

\end{lemma}

\begin{proof}

$\sum_n\mu(W)=\sum_n\mu(T^{-n}(W))=\mu\l(\bigsqcup_nT^{-n}(W)\r)\leq\mu(X)<\infty$, so $\mu(W)=0$.<span style="float:right;">$\blacksquare$</span>

\end{proof}

<div class="space"></div>

\begin{proof}[of Theorem \iref{poincare_recurrence}]

Let $W\coloneqq\bigcap_{n\geq1}\l\\{x\in A\st T^n(x)\not\in A\r\\}$, which is clearly measurable. Then $W\cap T^{-n}W=\e$ for each $n\geq1$, so $W$ is wandering, and hence $Z\coloneqq\bigcup_{n<\omega}T^{-n}W$ is null by Lemma \iref{wandering_null}. Set $A_0\coloneqq A\comp Z$, so that $A_0\subeq_\mu A$, and $A_0$ is clearly forward recurrent.<span style="float:right;">$\blacksquare$</span>

\end{proof}

\begin{corollary}\label{measurable_saturation}

For every measurable set $A\subeq X$, there exists $A\_0\subeq_\mu A$ such that $[A\_0]\_{\E\_T}=\bigcup\_{n<\omega}T^{-n}(A\_0)$.

\end{corollary}

\begin{proof}

Let $A_0\subeq_\mu A$ be as forward recurrent as above. If $x\in X$ is such that $T^n(x)=T^m(y)$ for some $y\in A_0$, then iteratively applying forward recurrence to $y$ furnishes some $k<\omega$ such that $T^{n+k}(x)=T^{m+k}(y)\in A_0$.<span style="float:right;">$\blacksquare$</span>

\end{proof}

\begin{corollary}

For any positive measure set $A\subeq X$, there exists $n\geq1$ such that $\mu(A\cap T^{-n}A)>0$.

\end{corollary}
