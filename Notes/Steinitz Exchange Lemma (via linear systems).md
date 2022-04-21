---
alias: auto_aliasing
---

<br />
<br />

Date Created: 06/04/2022 21:12:19
Tags: #Proposition #Closed

Proved by: [Homogeneous $m\times n$ linear system with $m<n$ $\Rightarrow$ non-trivial solutions](Homogeneous%20m%20by%20n%20linear%20system%20with%20m<n%20has%20a%20non-trivial%20solution.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and consider a vector space $V$ over $K$. If $V$ is spanned by a finite set of vectors $w_1,\dots,w_m$, then any linearly independent subset $U\subseteq V$ is finite and contains no more than $m$ vectors._

_In other words, letting $W\coloneqq\l\{w_1,\dots,w_n\r\}$, we have that $\l|U\r|\leq\l|W\r|$._

```

_Proof_. It suffices to prove the contrapositive statement, which states that every subset $U\subseteq V$ containing more than $m$ vectors is linearly dependent. Let $U\coloneqq\l\{u_1,\dots,u_n\r\}$ be such a set, so $n>m$ (assume all $u_j\textrm{'}$s are distinct). Since $\span W=V$, there exist scalars $\alpha_{ij}\in K$ such that
$$\begin{equation}
    u_j=\sum_{i=1}^m\alpha_{ij}w_i
\end{equation}$$
for all $j\in\l\{1,\dots,n\r\}$. To show that $U$ is linearly dependent, take any scalars $x_i,\dots,x_n$ and consider the linear combination
$$\begin{equation}
    \begin{aligned}
        \sum_{j=1}^nx_ju_j&=\sum_{j=1}^nx_j\l(\sum_{i=1}^m\alpha_{ij}w_i\r) &&\textrm{Substitution} \\
        &=\sum_{j=1}^n\sum_{i=1}^m\alpha_{ij}x_jw_i && \textrm{Left-distribution in $K$} \\
        &=\sum_{i=1}^m\sum_{j=1}^n\alpha_{ij}x_jw_i && \textrm{Discrete Fubini's Theorem} \\
        &=\sum_{i=1}^m\l(\sum_{j=1}^n\alpha_{ij}x_j\r)w_i. && \textrm{Right-distribution in $K$}
    \end{aligned}
\end{equation}$$
It suffices to show that the linear combination vanishes despite the fact that it is not the trivial one. Observe that to do so, it further suffices to show that the inner sum vanishes, so consider the $m\times n$ homogeneous linear system $A\v{x}=\v{0}$. The fact that this system has a non-trivial solution follows from the fact that $m<n$. It follows then that
$$\begin{equation}
    \sum_{j=1}^nx_ju_i=0_V\ \ \ \ \ \ \ \ \land\ \ \ \ \ \ \ \ \ex j\in\l\{1,\dots,n\r\}:x_j\neq0,
\end{equation}$$
so $U$ is linearly dependent.<span style="float:right;">$\blacksquare$</span>
