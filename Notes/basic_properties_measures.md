---
title: Basic properties of Measures
date: 2025-05-08
tags: [In_Progress]
---

We gather here some basic properties of measures that will be used elsewhere.

<br>

&emsp;&emsp;Throughout, let $(X,\mc{B},\mu)$ be a \ref[measure]{measure} space.

# Computational Properties

\begin{proposition}[Monotonicity]\label{monotonicity_of_measures}

For any $A,B\in\mc{B}$ with $A\subeq B$, we have $\mu(A)\leq\mu(B)$.

\end{proposition}

\begin{proof}

Observe that $\mu(B)=\mu(A\sqcup(B\comp A))=\mu(A)+\mu(B\comp A)\geq\mu(A)$.<span style="float:right;">$\blacksquare$</span>

\end{proof}

\begin{proposition}[Continuity $\incto$]\label{continuity_of_measures_increasing}

For any increasing sequence $(A_n)\_{n<\omega}$ in $\mc{B}$, we have $\mu(\bigcup_nA_n)=\lim_{n\to\infty}\mu(A_n)$.

\end{proposition}

\begin{proof}

Disjointify $(A_n)$ to $(A_k')$ given by $A_0'\coloneqq A_0$ and $A_k'\coloneqq A_k\comp A_{k-1}$, so that
\begin{equation*}
    \mu\l(\bigsqcup\nolimits_kA_k\r)=\mu\l(\bigsqcup\nolimits_kA_k'\r)=\sum\nolimits_k\mu(A_k')=\lim_{n\to\infty}\sum\nolimits_{k=1}^n\mu(A_k')=\lim_{n\to\infty}\mu(A_n).\qedin
\end{equation*}

\end{proof}

\begin{proposition}[Continuity $\decto$]\label{continuity_of_measures_decreasing}

For any decreasing sequence $(A_n)\_{n<\omega}$ in $\mc{B}$ such that $\mu(A_0)<\infty$, we have $\mu(\bigcap_nA_n)=\lim_{n\to\infty}\mu(A_n)$.

\end{proposition}

\begin{proof}

Set $B\_n\coloneqq A\_0\comp A\_n$ so that $\bigcup\_nB\_n=A\_0\comp A\_\infty$ where $A\_\infty\coloneqq\bigcap\_nA\_n$. Then $(B\_n)\_{n<\omega}$ is increasing, so by (1), we have
\begin{equation*}
    \mu\l(\bigcup\nolimits\_nB\_n\r)=\lim\_{n\to\infty}\mu(B\_n)=\mu(A\_0)-\lim\_{n\to\infty}\mu(A\_n)
\end{equation*}
But we also have $\mu(\bigcup_nB_n)=\mu(A_0\comp A_\infty)=\mu(A_0)-\mu(A_\infty)$, so since $\mu(A_0)<\infty$, we can cancel to obtain the desired result.<span style="float:right;">$\blacksquare$</span>

\end{proof}

# Outer measures
