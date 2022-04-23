---
custom_alias: $\l|\textrm{Linearly independent set}\r|\leq\l|\textrm{Spanning set}\r|$ (finite dim.)
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

_Let $U,W\subseteq V$ be finite subsets of a finite-dimensional vector space $V$ over a field $K$. If $U$ is a linearly independent set and $\span W=V$, then $\l|U\r|\leq\l|W\r|$._

```

_Proof_. Let $U\coloneqq\l\{u_1,\dots,u_n\r\}$ and $W\coloneqq\l\{w_1,\dots,w_m\r\}$; it suffices to prove the contrapositive statement, which states that if $n>m$, then either $U$ is linearly dependent or $\span W\neq V$. Assume that $\span W=V$, so there exist scalars $\alpha_{ij}\in K$ such that
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
