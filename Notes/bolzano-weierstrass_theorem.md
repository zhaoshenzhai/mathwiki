---
title: Bolzano-Weierstrass Theorem
date: 2025-06-20
tags: [In_Progress]
---

# Statement and Proofs

\begin{theorem}[Bolzano-Weierstrass]\label{thm}

Every bounded sequence in $\R^d$ admits a convergent subsequence.

\end{theorem}

\begin{proof}

Let $(x_n)$ be a bounded sequence in $\R^d$. Projecting $(x_n)$ to each of its $d$ coordinates, we can assume without loss of generality that $d=1$. By shifting and scaling $(x_n)$, we can assume that $x_n\in[0,1]$ for each $n\in\N$.

<br>

&emsp;&emsp;We construct a convergent subsequence of $(x_n)$ as follows. Split $I_0\coloneqq[0,1]$ into two congruent subintervals, so by the pigeonhole-principle, at least one of which contains infinitely-many $x_n$'s. Let $I_1$ be one such interval, which we split again into two congruent subintervals. Repeating this process gives us a decreasing sequence $(I_i)$ of nested intervals such that $\ell(I_i)=2^{-i}$, each containing infinitely-many $x_n$'s. Thus there is an increasing sequence $n_i$ such that $x_{n_i}\in I_i$ and $d(x_{n_i},x_{n_j})\leq2^{-i}$ whenever $i<j$, so the subsequence $(x_{n_i})$ of $(x_n)$ is Cauchy. Since $\R$ is complete, $(x_{n_i})$ is converges, as desired.<span style="float:right;">$\blacksquare$</span>

\end{proof}

\begin{remark}

We can also deduce Theorem \iref{thm} by a \ref[compactness]{compact_space} argument. Indeed, $(x_n)\subeq[-L,L]^d$ for some $L\in\N$ and $[-L,L]^d$ is compact by the \ref[Heine-Borel Theorem]{heine_borel_theorem}, so $[-L,L]^d$ is \ref[sequentially-compact]{characterization_of_compactness_in_metric_spaces}.

\end{remark}
