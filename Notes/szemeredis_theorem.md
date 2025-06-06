---
title: Szemerédi's Theorem
date: 2025-06-06
tags: [In_Progress]
---

The _upper (Banach) density_ of a subset $A\subeq\N$ is $\bar{d}(A)\coloneqq\limsup_n\frac{1}{n}|A\cap\l\\{0,\dots,n-1\r\\}|$.

\begin{theorem}[Szemerédi; 1975]\label{szemeredi}

Any subset $A\subeq\N$ with strictly positive upper density contains arbitrarily long arithmetic progressions, i.e., for any $k\geq1$, there exists $n\in\N$ and $r\geq1$ such that $\l\\{n+ir\st i<k\r\\}\subeq A$.

<br>

&emsp;&emsp;In fact, for any $k\geq1$, there exists $n\in\N$ such that $\bar{d}(\bigcap_{i<k}(A-in))>0$.

\end{theorem}

In 1977, Furstenberg \cite{Fur97} gave an ergodic theoretic proof of Szemerédi's Theorem using the following facts.

\begin{fact}[\ref[Furstenberg's Multiple Recurrence]{furstenbergs_multiple_recurrence}]

Let $(X,\mu,T)$ be a \ref[measure-preserving dynamical system]{measure-preserving_dynamical_system}. For any positive-measure $A\subeq X$ and any $k\geq1$, there exists $n\geq1$ such that $\mu(\bigcap_{i<k}T^{-in}A)>0$.

\end{fact}

\begin{fact}[\ref[Furstenberg's Correspondence Principle]{furstenbergs_correspondence_principle}]

For any $A\subeq\N$, there is a measure-preserving dynamical system $(X,\mu,T)$ and a measurable set $B\subeq X$ such that for any $k\geq1$ and $n_1,\dots,n_{k-1}\in\N$, we have
\begin{equation*}
    \bar{d}(A\cap(A-n\_1)\cap(A-n\_2)\cap\cdots\cap(A-n\_{k-1}))\geq\mu(B\cap T^{-n\_1}B\cap T^{-n\_2}B\cap\cdots\cap T^{-n\_{k-1}}B).
\end{equation*}

\end{fact}

With these two facts, Theorem \iref{szemeredi} follows by taking $n_i\coloneqq in$.
