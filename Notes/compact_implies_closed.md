---
title: Compact subsets of Hausdorff spaces are closed
date: 2025-06-20
tags: [In_Progress]
---

# Statement and Proofs

\begin{theorem}\label{thm}

Let $X$ be a \ref[Hausdorff]{hausdorff_space} space. If $K\subeq X$ is \ref[compact]{compact_space}, then $K$ is closed.

\end{theorem}

\begin{example}

If $X$ is not Hausdorff, then Theorem \iref{thm} need not hold. Indeed, \TODO

\end{example}

## Proofs

Let us give a direct proof of this theorem.

<div class="space"></div>

\begin{proof}[of Theorem \iref{thm}]

Fix $p\in K^c$. For each $q\in K$, there exist disjoint neighborhoods $U_q\ni p$ and $V_q\ni q$. Then $\l\\{V_q\r\\}_{q\in K}$ is an open cover of $K$, which cuts down to a finite subcover $\l\\{V\_{q\_i}\r\\}\_{i\leq n}$. Then $U\coloneqq\bigcap\_{i\leq n}U\_{q\_i}$ is an open neighborhood of $p$ disjoint from $K\subeq\bigcap\_{i\leq n}V\_{q\_i}$, so $K^c$ is open.<span style="float:right;">$\blacksquare$</span>

\end{proof}

<div class="space"></div>

&emsp;&emsp;Observe that the above proof essentially uses that compact spaces are regular. In fact,

\begin{fact}[\ref{}]\label{compact_normal}

Every compact Hausdorff space is normal.

\end{fact}

<div class="space"></div>

\begin{proof}[of Theorem \iref{thm}]

Again, fix $p\in K^c$. By Fact \iref{compact_normal}, there exist disjoint open neighborhoods $U\ni p$ and $V\supseteq K$, so $p\in U\subeq K^c$ as desired.<span style="float:right;">$\blacksquare$</span>

\end{proof}
