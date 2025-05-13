---
title: Continuity of Measures
date: 2025-05-13
tags: [In_Progress]
---

We prove here a basic, but very useful, computational property of \ref[measures]{measure}.

<br>

&emsp;&emsp;Let $(X,\mc{B},\mu)$ be a measure space and let $(A_n)\_{n<\omega}$ be a sequence in $\mc{B}$.

\begin{theorem}[Continuity $\incto$]\label{continuity_increasing}

If $(A_n)\_{n<\omega}$ is increasing, then $\mu(\bigcup_nA_n)=\lim_{n\to\infty}\mu(A_n)$.

\end{theorem}

\begin{proof}

Disjointify $(A_n)$ to $(A_k')$ given by $A_0'\coloneqq A_0$ and $A_k'\coloneqq A_k\comp A_{k-1}$, so that
\begin{equation*}
    \mu\l(\bigcup\nolimits_kA_k\r)=\mu\l(\bigsqcup\nolimits_kA_k'\r)=\sum\nolimits_k\mu(A_k')=\lim_{n\to\infty}\sum\nolimits_{k=1}^n\mu(A_k')=\lim_{n\to\infty}\mu(A_n).\qedin
\end{equation*}

\end{proof}

\begin{theorem}[Continuity $\decto$]\label{continuity_decreasing}

If $(A_n)\_{n<\omega}$ is decreasing and $\mu(A_0)<\infty$, then $\mu(\bigcap_nA_n)=\lim_{n\to\infty}\mu(A_n)$.

\end{theorem}

\begin{proof}

Set $B\_n\coloneqq A\_0\comp A\_n$ so that $\bigcup\_nB\_n=A\_0\comp A\_\infty$ where $A\_\infty\coloneqq\bigcap\_nA\_n$, so that $(B\_n)$ is increasing. By Theorem \iref{continuity_increasing}, we have
\begin{equation*}
    \mu\l(\bigcup\nolimits\_nB\_n\r)=\lim\_{n\to\infty}\mu(B\_n)=\mu(A\_0)-\lim\_{n\to\infty}\mu(A\_n)
\end{equation*}
But $\mu(\bigcup_nB_n)=\mu(A_0\comp A_\infty)=\mu(A_0)-\mu(A_\infty)$, so since $\mu(A_0)<\infty$, we can cancel to obtain the desired.<span style="float:right;">$\blacksquare$</span>

\end{proof}

\begin{remark}

\TODO[failure when $\mu(A_0)=\infty$]

\end{remark}
