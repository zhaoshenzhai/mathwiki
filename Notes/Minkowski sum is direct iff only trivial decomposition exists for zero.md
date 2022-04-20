---
alias: auto_aliasing
---

<br />
<br />

Date Created: 20/04/2022 18:00:59
Tags: #Proposition #In_Progress

Proved by: [Linear subspace $\Leftrightarrow$ closed under linear combination](Linear%20subspace%20iff%20closed%20under%20linear%20combination.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $U_1,\dots,U_n$ be linear subspaces of a vector space $V$ over $K$. Then their Minkowski sum_ $U\coloneqq\sum_{i=1}^nU_i$ _is a direct sum iff the only way to write $0$ as a sum $u_1+\cdots+u_n$, where each $u_i\in U_i$, is to take $u_i=0$ for all $i\in\l\{1,\dots,n\r\}$. More formally,_
$$\begin{equation}
    \sum_{i=1}^nU_i=\bigoplus_{i=1}^nU_i\ \ \ \ \ \ \ \ \Leftrightarrow\ \ \ \ \ \ \ \ \fa i\in\l\{1,\dots,n\r\},\fa u_i\in U_i:\sum_{i=1}^nu_i=0\ \ \ \ \Rightarrow\ \ \ \ u_1=\cdots=u_n=0.
\end{equation}$$

```

_Proof_. The forward direction is easy; if the sum is direct, then since
$$\begin{equation}
    0=\underbrace{0+\cdots+0}_{n\textrm{-many}}
\end{equation}$$
where $0\in U_i$ for all $i\in\l\{1,\dots,n\r\}$ is one way of $\textrm{`}$decomposing$\textrm{'}$ $0$, it is the only way.

For the backwards direction, take $u\in U$ and suppose, for sake of contradiction, that there exists $a_1\in U_1,\dots,a_n\in U_n$ and $b_1\in U_1,\dots,b_n\in U_n$ such that
$$\begin{equation}
    u=\sum_{i=1}^na_i\ \ \ \ \textrm{and}\ \ \ \ u=\sum_{i=1}^nb_i;
\end{equation}$$
we wish to show that $a_i=b_i$ for all $i\in\l\{1,\dots,n\r\}$. To this end, subtract the two equations to obtain
$$\begin{equation}
    0=\sum_{i=1}^na_i-b_i.
\end{equation}$$
Since each $U_i$ is closed under linear combinations, we see that $a_i-b_i\in U_i$ for all $i\in\l\{1,\dots,n\r\}$ and thus, by hypothesis, we have $a_i-b_i=0$ for all $i\in\l\{1,\dots,n\r\}$. The result follows.<span style="float:right;">$\blacksquare$</span>
