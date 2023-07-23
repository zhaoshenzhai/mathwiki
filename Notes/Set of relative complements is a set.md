<div class="topSpace"></div>

Date Created: 18/01/2022 16:08:40
Tags: #Type/Proposition #Topic/Set_Theory/Later

Proved by: [[Axiom Schema of Specification]], [[Axiom of Extensionality]]
References: <i>Not Applicable</i>
Justifications: <i>Not Applicable</i>

Specializations: <i>Not Applicable</i>
Generalizations: <i>Not Applicable</i>

``` ad-Proposition
title: Proposition.

Let $v$ and $U$ be sets. Then there exists a unique set $z$ whose elements are exactly the sets $v\comp u$ for all sets $u\in U$. Formally,
$$\begin{equation}
    \fa v\fa U\ex!z\fa x\l[x\in z\Leftrightarrow\l(\ex u\in U\r)x=v\comp u\r].
\end{equation}$$

```

<i>Proof.</i> Let $\phi\l(x\r)$ denote the formula $\l(\ex u\in U\r)x=v\comp u$; we claim that
$$\begin{equation}
    \phi\l(x\r)\Rightarrow x\in\pow v.
\end{equation}$$
To this end, take a set $x$ with $x=v\comp u$ for some $u\in U$. Since $v\comp u\subseteq v$, we have, by definition of the power set, $v\comp u\in\pow v$. Thus $x\in\pow v$.<span style="float:right;">$\blacksquare$</span>
