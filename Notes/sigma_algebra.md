---
title: sigma_algebra
renderedTitle: $\sigma$-algebra
date: 2025-05-07
tags: [In_Progress]
---

# Motivation and Definition

A _$\sigma$-algebra_ $\mc{A}$ on a set $X$ is a \ref[$\sigma$-complete]{complete_boolean_algebra} \ref[Boolean algebra]{boolean_algebra} on $\pow(X)$. The $\sigma$-completeness condition ensures that countable unions of elements of $\mc{A}$ remain in $\mc{A}$, and so $\sigma$-algebras are more amenable to techniques in analysis, and in particular, \ref[measure theory]{measure}.

\begin{definition}[\cite{Tse23}, \cite{Fol99}]

A _$\sigma$-algebra_ on a set $X$ is a family $\mc{A}\subeq\pow(X)$ of subsets of $X$ containing $\e$ that is closed under complements and countable unions.

\end{definition}

## Generation

The $\sigma$-algebra _generated_ by a family $\mc{C}\subeq\pow(X)$ is $\l\langle\mc{C}\r\rangle_\sigma\coloneqq\bigcap\l\\{\mc{A}\st\mc{A}\supseteq\mc{C}\textrm{ is a $\sigma$-algebra on $X$}\r\\}$.

\begin{remark}

For a bottom-up definition, we can set $\l\langle\mc{C}\r\rangle_\sigma\coloneqq\bigcup\_{\alpha<\omega\_1}\mc{C}\_\alpha$, where the $\mc{C}\_\alpha$'s are defined inductively by letting $\mc{C}\_0\coloneqq\mc{C}\cup\l\\{\e\r\\}$ and letting $\mc{C}\_\alpha$ be the collection of all complements and countable unions of sets in $\bigcup\_{\beta<\alpha}\mc{C}_\beta$.

\end{remark}

&emsp;&emsp;A $\sigma$-algebra $\mc{B}$ is said to be _$\kappa$-generated_ if $\mc{B}=\l\langle\mc{A}\r\rangle_\sigma$ for some $\mc{A}\subeq\pow(X)$ of cardinality $\kappa$.


## Borel $\sigma$-algebra

If $X$ is a equipped with a topology $\mc{T}$, there is a natural way to obtain a $\sigma$-algebra on $X$. Namely, the _Borel $\sigma$-algebra_ on $X$ is the $\sigma$-algebra $\mc{B}(X)\coloneqq\l\langle\mc{T}\r\rangle_\sigma$, whose elements are called the _Borel sets_ of $X$.
