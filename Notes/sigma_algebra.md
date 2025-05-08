---
title: sigma_algebra
renderedTitle: $\sigma$-algebra
date: 2025-05-07
tags: [In_Progress]
---

# Definition and Properties

Let $X$ be a set.

\begin{definition}

A _$\sigma$-algebra_ on $X$ is a family $\mc{A}\subeq\pow(X)$ of subsets of $X$ containing $\em$ that is closed under complements and countable unions. More precisely:
1. $\em\in\mc{A}$.
2. For any $A\in\mc{A}$, we have $X\comp A\in\mc{A}$.
3. For any countable family $\l\\{A_n\r\\}_{n<\omega}$ in $\mc{A}$, we have $\bigcup\_{n<\omega}A_n\in\mc{A}$.

\end{definition}

## Generation

A useful way to construct a $\sigma$-algebra on $X$ is to start with an arbitrary family $\mc{C}\subeq\pow(X)$ and 'close' it under the three conditions above. Since the intersection of $\sigma$-algebras is again a $\sigma$-algebra, we can describe this closure process succinctly as follows.

\begin{definition}

The $\sigma$-algebra _generated_ by a family $\mc{C}\subeq\pow(X)$ is
\begin{equation*}
    \l\langle\mc{C}\r\rangle_\sigma\coloneqq\bigcap\l\\{\mc{A}\st\mc{A}\supseteq\mc{C}\textrm{ is a $\sigma$-algebra on $X$}\r\\}.
\end{equation*}

\end{definition}

A $\sigma$-algebra $\mc{B}$ is said to be _$\kappa$-generated_ if $\mc{B}=\l\langle\mc{A}\r\rangle_\sigma$ for some $\mc{A}\subeq\pow(X)$ of cardinality $\kappa$.

\begin{remark}

The closure process can be formalized by defining $\l\langle\mc{C}\r\rangle\_\sigma\coloneqq\bigcup\_{\alpha<\omega\_1}\mc{C}\_\alpha$, where the $\mc{C}\_\alpha$'s are defined inductively by letting $\mc{C}\_0\coloneqq\mc{C}\cup\l\\{\em\r\\}$ and letting $\mc{C}\_\alpha$ be the collection of all complements and countable unions of sets in $\bigcup\_{\beta<\alpha}\mc{C}_\beta$.

\end{remark}

## Borel $\sigma$-algebra

If $X$ is a topologized, there is a natural way to obtain a $\sigma$-algebra.

\begin{definition}

Let $X$ be a topological space with topology $\mc{T}$. The _Borel $\sigma$-algebra_ is $\mc{B}(X)\coloneqq\l\langle\mc{T}\r\rangle_\sigma$, whose elements are called the _Borel sets_ of $X$.

\end{definition}
