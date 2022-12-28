---
mathLink: auto
---

<div class="topSpace"></div>

Date Created: 08/05/2022 21:12:31
Tags: #Proposition #Later/Linear_Algebra

Proved by: _Not Applicable_
References: _Not Applicable_
Justifications: _Not Applicable_

Specializations: _Not Applicable_
Generalizations: _Not Applicable_

``` ad-Proposition
title: Proposition.

_Let_ $\l\{U_i\r\}_{i\in I}$ _be an indexed family of distinct linear subspaces of a vector space $V$ over some field $K$ such that _$V=\sum_{i\in I}U_i$_. Then the following statements are equivalent:_
1. _$V$ is an internal direct sum of_ $\l\{U_i\r\}_{i\in I}$_:_
$$\begin{equation}
    V=\bigoplus_{i\in I}U_i.
\end{equation}$$
2. _The zero vector admits only the trivial decomposition as a sum of vectors in_ $\l\{U_i\r\}_{i\in I}$:
$$\begin{equation}
    \fa i\in I,\fa u_i\in U_i:\sum\limits_{i\in I}u_i=0\ \ \ \ \Rightarrow\ \ \ \ \fa i\in I:u_i=0.
\end{equation}$$
3. _Every $v\in V$ admits a unique representation as a sum of vectors in_ $\l\{U_i\r\}_{i\in I}$:
$$\begin{equation}
    \fa v\in V,\fa i\in I,\ex!u_i\in U_i:v=\sum\limits_{i\in I}u_i.
\end{equation}$$

_All sums_ $\sum_{i\in I}u_i$ _are assumed to have $u_i=0$ for all but finitely-many $i\in I$._

```

_Proof_. We shall prove $1\Rightarrow2\Rightarrow3\Rightarrow1$.
* ($1\Rightarrow2$): Suppose, for sake of contradiction, that some $u_i\neq0$ despite $0=\sum_{j\in I}u_j$. It follows then that
$$\begin{equation}
    -u_i=\sum_{j\neq i}u_j\in\sum_{j\neq i}U_j,
\end{equation}$$
but since $-u_i\in U_i$, we see that their intersection is non-trivial, a contradiction.

* ($2\Rightarrow3$): Take $v\in V$ and suppose that there exist $a_i,b_i\in U_i$ for all $i\in I$ (with $a_i=0$ and $b_{i'}=0$ for all but finite-many $i,i'\in I$) such that
$$\begin{equation}
    v=\sum_{i\in I}a_i\ \ \ \ \textrm{and}\ \ \ \ v=\sum_{i\in I}b_i;
\end{equation}$$
we wish to show that $a_i=b_i$ for all $i\in I$. To this end, subtract the two equations to obtain
$$\begin{equation}
    0=\sum_{i\in I}a_i-b_i.
\end{equation}$$
Since each $U_i$ is closed under linear combinations, we see that $a_i-b_i\in U_i$ for all $i\in I$ and thus, by hypothesis, we have $a_i=b_i$ for all $i\in I$. The result follows.
* ($3\Rightarrow1$): Fix $i\in I$ and suppose, for sake of contradiction, that there exists a non-zero $v\in V$ such that
$$\begin{equation}
    v\in U_i\cap\sum_{j\neq i}U_j,
\end{equation}$$
so there exist $u_i\in U_i$ and $u'_j\in U_j$ for all $j\neq i$, such that
$$\begin{equation}
    v=u_i\ \ \ \ \ \ \ \ \textrm{and}\ \ \ \ \ \ \ \ v=\sum_{j\neq i}u'_j
\end{equation}$$
with $u'_j=0$ for all but finitely-many $j\neq i$. Letting $u_j=0$ for all $j\neq i$ and $u'_i=0$, we see that $v$ admits two representations
$$\begin{equation}
    v=\sum_{i\in I}u_i\ \ \ \ \textrm{and}\ \ \ \ v=\sum_{i\in I}u'_i.
\end{equation}$$
In particular, we have that $u_i\neq0=u'_i$, so the two representations are distinct, a contradiction.<span style="float:right;">$\blacksquare$</span>
