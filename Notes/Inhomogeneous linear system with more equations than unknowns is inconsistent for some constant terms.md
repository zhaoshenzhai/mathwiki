---
custom_alias: Inhomogeneous $m\times n$ linear system $A\v{x}=\v{b}$ with $m>n$ is inconsistent for some $\v{b}\in K^m$
---

<br />
<br />

Date Created: 14/05/2022 16:10:29
Tags: #Proposition #Closed

Proved by: [[Linear map to a larger dimensional space is not surjective]]
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $K$ be a field and take a matrix $A\in\mat{m\times n}{K}$ with $m>n$. Then there exists $\v{b}\in K^m$ such that the inhomogeneous linear system $A\v{x}=\v{b}$ is inconsistent._

```

_Proof_. Consider the linear map $T:K^n\to K^m$ defined by
$$\begin{equation}
    T\l(\v{x}\r)\coloneqq\l\langle\sum_{j=1}^na_{1j}x_j,\dots,\sum_{j=1}^na_{mj}x_j\r\rangle
\end{equation}$$
for all $\v{x}\in K^n$, so $T\l(\v{x}\r)=\v{b}$ is equivalent to the linear system $A\v{x}=\v{b}$ for all $\v{b}\in K^m$. Since $n<m$, we see that $T$ is not surjective, so there exists $\v{b}\in K^m$ such that no $\v{x}\in K^n$ is such that $T\l(\v{x}\r)=\v{b}$.<span style="float:right;">$\blacksquare$</span>
