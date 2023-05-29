---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 07/02/2022 15:43:53
Tags: #Type/Proposition #Later/Topology

Proved by: [[Discrete topology (basis)]], [[Criteria for collection to be a basis for an existing topology]], [[Successor of natural number is a natural number]]
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

Let $\N$ be the set of natural numbers. Then the standard topology $\mc{T}\coloneqq\mc{T}\l(<\r)\coloneqq\mc{T}\l(\mc{B}_\textrm{or}\r)$ on $\N$ is the discrete topology on $\N$.

```

<i>Proof.</i> Consider the collection $\mc{B}\coloneqq\l\{\l\{n\r\}\in\pow\l(\N\r)\mid n\in\N\r\}$; it suffices to prove that $\mc{B}$ is a basis that generates $\mc{T}$.
* ($\mc{B}\subseteq\mc{T}$): Take $\l\{n\r\}\in\mc{B}$ where $n\in\N$ and observe that
$$\begin{equation}
    \l\{n\r\}=
    \begin{dcases}
        \l(n-1,n+1\r) & \textrm{if }n\neq0\\
        \l[0,1\r) & \textrm{else.}
    \end{dcases}
\end{equation}$$
In both cases, we have $\l\{n\r\}\in\mc{T}$.

* ($\fa U\in\mc{T},\fa x\in U,\ex B\in\mc{B}:x\in B\subseteq U$): Take $U\in\mc{T}=\mc{T}\l(\mc{B}_\textrm{or}\r)$ and $x\in U$, so there exists $\mc{A}\subseteq\mc{B}_\textrm{or}$ such that $U=\bigcup\mc{A}$ and there exists $A\in\mc{A}$ such that $x\in A$. Recall that $\mc{B}_\textrm{or}\subseteq\pow\l(\N\r)$, so $\mc{A}\subseteq\pow\l(\N\r)$ and thus $A\subseteq\N$ for all $A\in\mc{A}$. It follows that $x\in\N$ and hence $\l\{x\r\}\in\mc{B}$. Since $x\in U$, we see that $\l\{x\r\}\subseteq U$.<span style="float:right;">$\blacksquare$</span>
