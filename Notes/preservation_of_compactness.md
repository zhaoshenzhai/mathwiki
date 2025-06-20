---
title: Preservation of Compactness
date: 2025-06-20
tags: [In_Progress]
---

We give several instances where \ref[compactness]{compact_space} is preserved under set-theoretical operations.

# Statements and Proofs

## Images

The most basic and fundamental theorem is that compactness is preserved under images.

\begin{theorem}

If $f:X\to Y$ is a continuous map and $X$ is compact, then $f(X)$ is compact too.

\end{theorem}

\begin{proof}

Let $\mc{V}$ be an open cover of $f(X)$, so $\mc{U}\coloneqq\\{f^{-1}(V)\st V\in\mc{V}\\}$ is an open cover of $X$. Since $X$ is compact, there is a finite subcover $\l\\{U\_i\r\\}\_{i\leq n}$ of $X$, so that $\l\\{V\_i\r\\}\_{i\leq n}\subeq\mc{V}$ is a finite cover of $X$.<span style="float:right;">$\blacksquare$</span>

\end{proof}

\begin{corollary}\label{homeo}

If $X$ is compact and $Y$ is homeomorphic to $X$, then $Y$ is compact too.

\end{corollary}

## Subspaces

Compactness is preserved under closed subspaces.

\begin{theorem}

If $K\subeq X$ is a closed subspace of a compact space $X$, then $K$ is compact.

\end{theorem}

\begin{proof}

Let $\mc{U}$ be an open cover of $K$, so $\mc{U}\cup\l\\{X\comp K\r\\}$ is an open cover of $X$. Since $X$ is compact, there is a finite subcover $\l\\{U\_i\r\\}\_{i\leq n}\cup\l\\{X\comp K\r\\}$ of $X$, and hence $K$ is covered by $\l\\{U\_i\r\\}\_{i\leq n}$.<span style="float:right;">$\blacksquare$</span>

\end{proof}

## Products

Compactness is also preserved under products.

\begin{theorem}[Tychonoff]\label{tychonoff}

For any family $\l\\{X_\alpha\r\\}$ of compact spaces, their product $\prod_\alpha X_\alpha$ is compact.

\end{theorem}

&emsp;&emsp;Let us first prove Theorem \iref{tychonoff} for binary products, which is much easier. One proof relies on the following fact.

\begin{fact}[\ref[Tube Lemma]{tube_lemma}]\label{tube}

Let $X$ and $Y$ be topological spaces. If $Y$ is compact, then for any $x\in X$ and any open set $U\subeq X\times Y$ containing the fiber $\l\\{x\r\\}\times Y$, there is a neighborhood $V\ni x$ such that $V\times Y\subeq U$.

\end{fact}

\begin{proof}[of Theorem \iref{tychonoff} for binary products]

Let $\mc{U}$ be an open cover of $X\times Y$. For each $x\in X$, the set $\l\\{x\r\\}\times Y$ is compact by Corollary \iref{homeo}, and hence can be covered by finitely-many sets $\l\\{U\_i\r\\}\_{i\leq n}\subeq\mc{U}$. Thus $U\coloneqq\bigcup\_{i\leq n}U\_i$ contains $\l\\{x\r\\}\times Y$, so by Fact \iref{tube}, there is a neighborhood $V_x\in x$ such that $V_x\times Y\subeq U$.

<br>

&emsp;&emsp;Now, $\l\\{V_x\r\\}_{x\in X}$ is an open cover of $X$, which cuts down to a finite subcover. Since finitely many sets from $\mc{U}$ covers each $V_x\times Y$ and finitely many $V_x$'s cover $X$, we are done.<span style="float:right;">$\blacksquare$</span>

\end{proof}

<div class="space"></div>

&emsp;&emsp;The general proof of Theorem \iref{tychonoff} is much harder to execute 'by hand'. However, there is an easy proof using the following characterization of compactness.

\begin{fact}[\ref{}]

A topological space $X$ is compact iff every filter converges to at-most one point.

\end{fact}

<div class="space"></div>

\begin{proof}[of Theorem \iref{tychonoff}]

\TODO

\end{proof}
