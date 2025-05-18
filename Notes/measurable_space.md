---
title: Measurable Space
date: 2025-05-07
tags: [In_Progress]
---

# Motivation and Definition

A _$\sigma$-algebra_ $\mc{A}$ on a set $X$ is a \ref[$\sigma$-complete]{complete_boolean_algebra} \ref[Boolean algebra]{boolean_algebra} on $\pow(X)$. The $\sigma$-completeness condition ensures that countable unions of elements of $\mc{A}$ remain in $\mc{A}$, and so $\sigma$-algebras are more amenable to techniques in analysis, and in particular, in \ref[measure theory]{measure}.

\begin{definition}[\cite{Tse23}, \cite{Fol99}]

A _$\sigma$-algebra_ on a set $X$ is a family $\mc{A}\subeq\pow(X)$ of subsets of $X$ containing $\e$ that is closed under complements and countable unions, whose elements are said to be _measurable_.

<br>

&emsp;&emsp;The pair $(X,\mc{A})$ is said to be a _measurable space_.

\end{definition}

## Generation

The $\sigma$-algebra _generated_ by a family $\mc{C}\subeq\pow(X)$ is $\l\langle\mc{C}\r\rangle_\sigma\coloneqq\bigcap\l\\{\mc{A}\st\mc{A}\supseteq\mc{C}\textrm{ is a $\sigma$-algebra on $X$}\r\\}$.

\begin{remark}

For a bottom-up definition, we can set $\l\langle\mc{C}\r\rangle_\sigma\coloneqq\bigcup\_{\alpha<\omega\_1}\mc{C}\_\alpha$, where the $\mc{C}\_\alpha$'s are defined inductively by letting $\mc{C}\_0\coloneqq\mc{C}\cup\l\\{\e\r\\}$ and letting $\mc{C}\_\alpha$ be the collection of all complements and countable unions of sets in $\bigcup\_{\beta<\alpha}\mc{C}_\beta$.

\end{remark}

&emsp;&emsp;A $\sigma$-algebra $\mc{B}$ is said to be _$\kappa$-generated_ if $\mc{B}=\l\langle\mc{A}\r\rangle_\sigma$ for some $\mc{A}\subeq\pow(X)$ of cardinality $\kappa$.

## Measurable functions

Let $(X,\mc{B})$ and $(Y,\mc{C})$ be measurable spaces. A function $f:X\to Y$ is said to be _$(\mc{B},\mc{C})$-measurable_ if $f^{-1}(C)\in\mc{B}$ for each $C\in\mc{C}$.

<br>

&emsp;&emsp;Measurable spaces and functions form the \ref[category]{category} of measurable spaces, denoted $\cat{Meas}$.

# Borel $\sigma$-algebra

If $(X,\mc{T})$ is a \ref[topological space]{topological_space}, the natural $\sigma$-algebra to consider is the _Borel $\sigma$-algebra_ $\mc{B}(X)\coloneqq\l\langle\mc{T}\r\rangle_\sigma$, whose elements are called _Borel sets_.
* A function $f:X\to Y$ between topological spaces is _Borel measurable_ if it is $(\mc{B}(X),\mc{B}(Y))$-measurable.
* A measurable space $(X,\mc{B})$ is _standard Borel_ if $\mc{B}$ is the Borel $\sigma$-algebra of some \ref[Polish]{polish_space} topology on $X$.

\begin{fact}[\ref[Borel Isomorphism Theorem]{borel_isomorphism_theorem}]

Any two uncountable standard Borel spaces are Borel isomorphic. In particular, they all have cardinality continuum and are Borel isomorphic to $(2^\omega,\mc{B}(2^\omega))$ and $(\R,\mc{B}(\R))$.

\end{fact}
