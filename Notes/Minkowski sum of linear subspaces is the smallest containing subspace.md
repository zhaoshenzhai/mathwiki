<br />
<br />

Date Created: 20/04/2022 17:08:44
Tags: #Proposition #Closed

Proved by: [Linear subspace $\Leftrightarrow$ closed under linear combination](Linear%20subspace%20iff%20closed%20under%20linear%20combination.md)
Justifications: _Not Applicable_

Generalizations: _Not Applicable_
Counterexamples: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let $U_1,\dots,U_n$ be linear subspaces of a vector space $V$ over a field $K$. Then their Minkowski sum_
$$\begin{equation}
    U\coloneqq\sum_{i=1}^nU_i
\end{equation}$$
_is the smallest subspace of $V$ containing each $U_1,\dots,U_n$, in the sense that if $W$ is a subspace containing $U_1,\dots,U_n$, then $U\subseteq W$._

```

_Proof_. We first verify that $U$ is a subspace of $V$.
* Since $0\in U_i$ for all $i\in\l\{1,\dots,n\r\}$ and $0=\underbrace{0+\cdots+0}_{n\textrm{ times}}$, we see that $0\in U$ too. Take $u_1,u_2\in U$ and $\alpha\in K$, so there exists $u_{11},u_{21}\in U_1$ and $u_{12},u_{22}\in U_2$ such that
$$\begin{equation}
    \begin{aligned}
        \alpha u_1+u_2&=\alpha\l(u_{11}+u_{12}\r)+u_{21}+u_{22} && \textrm{Definition of $U$} \\
        &=\l(\alpha u_{11}+u_{21}\r)+\l(\alpha u_{12}+u_{22}\r). && \textrm{Arithmetic} \\
    \end{aligned}
\end{equation}$$
Since $U_1$ and $U_2$ are both subspaces of $V$, we see that they are closed under linear combinations. Thus $\alpha u_{11}+u_{21}\in U_1$ and likewise $\alpha u_{12}+u_{22}\in U_2$, so $\alpha u_1+u_2\in U$ too. Thus $U$ is closed under linear combinations, and so $U$ is a subspace of $V$.

We now nee to prove that $U_i\subseteq U$ for all $i\in\l\{1,\dots,n\r\}$, so $U$ contains each $U_1,\dots,U_n$.
* Fix $i\in\l\{1,\dots,n\r\}$ and take any $u_i\in U_i$. Indeed, since
$$\begin{equation}
    u_i=\underbrace{0+\cdots+0}_{\l(i-1\r)\textrm{-many}}+u_i+\underbrace{0+\cdots+0}_{\l(n-i\r)\textrm{-many}}
\end{equation}$$
and $0\in U_j$ for all $j\in\l\{1,\dots,n\r\}$ (emphasis on all $j\neq i$), we see that $u_i\in U$ and thus $U_i\subseteq U$. This holds for all $i\in\l\{1,\dots,n\r\}$.

Finally, consider any other subspace $W$ of $V$ such that $U_i\subseteq W$ for all $i\in\l\{1,\dots,n\r\}$. Take $u\in U$, so there exists $u_i\in U_i$ for all $i\in\l\{1,\dots,n\r\}$, such that $u=\sum_{i=1}^nu_i$. Since each $u_i\in W$ and $W$ is closed under linear combinations (emphasis on sums), we see that $u\in W$ and thus $U\subseteq W$.<span style="float:right;">$\blacksquare$</span>
